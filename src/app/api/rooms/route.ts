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
    
    // Ensure we use the correct column names for Supabase
    const roomData = {
      name: body.name,
      size: body.size,
      sqft: body.sqft,
      adults: Number(body.adults),
      children: Number(body.children),
      bed: body.bed,
      images: body.images || [],
      price: Number(body.price),
      original_price: Number(body.originalPrice || body.original_price || 0),
      count: Number(body.count) || 1,
      amenities: body.amenities || []
    };

    const { data, error } = await supabase
      .from('rooms')
      .insert([roomData])
      .select()
      .single();

    if (error) throw error;
    return NextResponse.json(data, { status: 201 });
  } catch (error: any) {
    console.error('Supabase error:', error);
    return NextResponse.json({ error: 'Failed to create room', details: error.message }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id } = body;
    
    if (!id) return NextResponse.json({ error: 'Room ID is required' }, { status: 400 });

    // Explicitly mapping fields to ensure consistency
    const updates = {
      name: body.name,
      size: body.size,
      sqft: body.sqft,
      adults: Number(body.adults),
      children: Number(body.children),
      bed: body.bed,
      images: body.images,
      price: Number(body.price),
      original_price: Number(body.originalPrice || body.original_price || 0),
      count: Number(body.count),
      amenities: body.amenities
    };

    const { data, error } = await supabase
      .from('rooms')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Update Error:', error);
    return NextResponse.json({ error: 'Failed to update room', details: error.message }, { status: 500 });
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

