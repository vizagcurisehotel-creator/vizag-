import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    if (!supabase) {
      return NextResponse.json({ error: 'Supabase client not initialized' }, { status: 500 });
    }

    const { data, error } = await supabase
      .from('rooms')
      .select('*')
      .order('created_at', { ascending: true });

    if (error) {
      console.error('Supabase GET Rooms Error:', error);
      throw error;
    }
    return NextResponse.json(data);
  } catch (error: any) {
    console.error('API Error /api/rooms:', error);
    return NextResponse.json({ 
      error: 'Failed to fetch rooms', 
      details: error.message || error 
    }, { status: 500 });
  }
}



export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const { data, error } = await supabase
      .from('rooms')
      .insert([{
        name: body.name,
        size: body.size,
        sqft: body.sqft,
        adults: Number(body.adults),
        children: Number(body.children),
        bed: body.bed,
        images: body.images || ['https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80'],
        price: Number(body.price),
        original_price: body.originalPrice ? Number(body.originalPrice) : null,
        count: Number(body.count) || 1,
        amenities: body.amenities || []
      }])
      .select()
      .single();

    if (error) throw error;
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error('Supabase error:', error);
    return NextResponse.json({ error: 'Failed to create room' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, ...updates } = body;
    
    if (!id) return NextResponse.json({ error: 'Room ID is required' }, { status: 400 });

    const { data, error } = await supabase
      .from('rooms')
      .update({
        ...updates,
        price: body.price ? Number(body.price) : undefined,
        original_price: body.originalPrice ? Number(body.originalPrice) : undefined,
        adults: body.adults ? Number(body.adults) : undefined,
        children: body.children ? Number(body.children) : undefined,
        count: body.count ? Number(body.count) : undefined
      })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update room' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Room ID is required' }, { status: 400 });
    }

    const { error } = await supabase
      .from('rooms')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return NextResponse.json({ message: 'Room deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete room' }, { status: 500 });
  }
}

