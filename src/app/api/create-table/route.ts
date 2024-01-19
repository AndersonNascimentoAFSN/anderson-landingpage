import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  // return new Response(JSON.stringify({ status: 'ok' }), {
  //   headers: { 'content-type': 'application/json' },
  // })
  return NextResponse.json({ message: 'ok' }, { status: 500 })

  // try {
  //   const result = await sql`
  //     CREATE TABLE leads (name varchar(255), email varchar(255), phone_number varchar(255), lead varchar(5))
  //   `
  //   return new Response(JSON.stringify(result), {
  //     headers: { 'content-type': 'application/json' },
  //   })
  // } catch (error) {
  //   return NextResponse.json({ error }, { status: 500 })
  // }
}