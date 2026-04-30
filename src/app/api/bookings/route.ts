import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch bookings' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Find room to get price
    const { data: room, error: roomError } = await supabase
      .from('rooms')
      .select('id, name, price')
      .eq('id', body.roomId)
      .single();

    if (roomError || !room) {
      return NextResponse.json({ error: 'Room not found' }, { status: 404 });
    }

    // Calculate nights
    const checkInDate = new Date(body.checkIn);
    const checkOutDate = new Date(body.checkOut);
    const diffTime = Math.abs(checkOutDate.getTime() - checkInDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;
    
    const totalPrice = room.price * diffDays;
    
    const bookingId = `BOOK-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;

    const { data: booking, error: bookingError } = await supabase
      .from('bookings')
      .insert([{
        booking_id: bookingId,
        room_id: room.id,
        room_name: room.name,
        guest_name: body.guestName,
        guest_email: body.guestEmail,
        guest_phone: body.guestPhone,
        check_in: body.checkIn,
        check_out: body.checkOut,
        status: 'Pending',
        total_price: totalPrice,
        payment_screenshot: body.paymentScreenshot || null
      }])
      .select()
      .single();

    if (bookingError) throw bookingError;
    return NextResponse.json(booking, { status: 201 });
  } catch (error) {
    console.error('Supabase booking error:', error);
    return NextResponse.json({ error: 'Failed to create booking' }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json({ error: 'Missing id or status' }, { status: 400 });
    }

    const { data: booking, error } = await supabase
      .from('bookings')
      .update({ status })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return NextResponse.json(booking);
  } catch (error) {
    console.error('Failed to update booking:', error);
    return NextResponse.json({ error: 'Failed to update booking status' }, { status: 500 });
  }
}
