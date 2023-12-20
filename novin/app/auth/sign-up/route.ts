import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

import type { Database } from '@/lib/database.types'

export async function POST(request: Request) {
  const requestUrl = new URL(request.url)
  const formData = await request.json()
  const email = formData?.email
  const password = formData?.password
  const role = formData?.role
  const cookieStore = cookies()
  const supabase = createRouteHandlerClient<Database>({ cookies: () => cookieStore })

  if(role == null || role == "admin")
  return NextResponse.json({error: "Nincs megadva szerepkör"})

  let { data, error } =  await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${requestUrl.origin}/auth/callback`,
    },
  })

  if(error != null)
  return NextResponse.json(error)

  const { data: szerepdata, error: szereperror } = await supabase
  .from('szerep_user')
  .insert([{user_id: data.user?.id, szerep_id: role}])
  .select()

  return NextResponse.redirect(requestUrl.origin, {
    status: 301,
  })
}