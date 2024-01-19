import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    const result = await sql`
      CREATE TABLE leads (Name varchar(255), Email varchar(255), PhoneNumber varchar(255), Lead varchar(5))
    `
    return new Response(JSON.stringify(result), {
      headers: { 'content-type': 'application/json' },
    })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}