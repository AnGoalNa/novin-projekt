import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export default async function Szamlak() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore);

  return 1
}