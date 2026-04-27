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

    const { data: booking, error: bookingError } = await supabase
      .from('bookings')
      .insert([{
        room_id: room.id,
        room_name: room.name,
        guest_name: body.guestName,
        guest_email: body.guestEmail,
        check_in: body.checkIn,
        check_out: body.checkOut,
        status: 'Confirmed',
        total_price: totalPrice
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

