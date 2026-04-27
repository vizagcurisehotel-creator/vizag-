import { NextResponse } from 'next/server';
import { supabase, supabaseAdmin } from '../../../lib/supabase';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('site_settings')
      .select('*')
      .eq('key', 'restaurant_photo')
      .single();

    if (error && error.code !== 'PGRST116') throw error;
    return NextResponse.json(data || { value: '/luxury-restaurant.png' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { url } = await request.json();
    const { data, error } = await supabaseAdmin
      .from('site_settings')
      .upsert({ key: 'restaurant_photo', value: url }, { onConflict: 'key' })
      .select();

    if (error) throw error;
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update settings' }, { status: 500 });
  }
}
