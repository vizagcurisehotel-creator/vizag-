import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

let supabase;
try {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase credentials missing. Check your .env.local file.');
  } else {
    console.log('Attempting to connect to Supabase at:', supabaseUrl);
    supabase = createClient(supabaseUrl, supabaseAnonKey);
  }
} catch (e) {
  console.error('CRITICAL: Supabase Client failed to initialize:', e);
}

export { supabase };


