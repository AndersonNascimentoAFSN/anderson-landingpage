'use server'

import { sql } from '@vercel/postgres'

export interface ISaveLeadActionProps {
  name: string,
  email: string,
  phoneNumber: string
}

export async function SaveLeadAction({ name, email, phoneNumber }: ISaveLeadActionProps) {
  try {
    const { rows } = await sql`
      INSERT INTO leads (name, email, phone_number)
      VALUES (${name}, ${email}, ${phoneNumber})
      RETURNING *
    `
    return rows[0]
  } catch (error) {
    console.log(error)
  }
}