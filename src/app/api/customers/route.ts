import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../lib/supabase';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to fetch customers", error);
    return NextResponse.json({ error: 'Failed to fetch customers' }, { status: 500 });
  }
}
