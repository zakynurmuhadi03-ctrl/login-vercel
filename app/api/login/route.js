import { sql } from '@vercel/postgres'
import bcrypt from 'bcryptjs'
import { SignJWT } from 'jose'
import { cookies } from 'next/headers'

export async function POST(req){
  const { username, password } = await req.json()

  // Buat tabel + user admin otomatis kalau belum ada
  await sql`CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, username VARCHAR(50) UNIQUE NOT NULL, password VARCHAR(255) NOT NULL, role VARCHAR(20) DEFAULT 'user')`
  const cek = await sql`SELECT * FROM users WHERE username = ${username}`
  if(cek.rows.length === 0 && username === 'admin'){
    const hash = await bcrypt.hash('admin123', 10)
    await sql`INSERT INTO users (username, password, role) VALUES ('admin', ${hash}, 'admin')`
  }

  const result = await sql`SELECT * FROM users WHERE username = ${username}`
  const user = result.rows[0]
  if(!user) return Response.json({message:'Username tidak ditemukan'}, {status:401})

  const cocok = await bcrypt.compare(password, user.password)
  if(!cocok) return Response.json({message:'Password salah'}, {status:401})

  const token = await new SignJWT({ id: user.id, username: user.username, role: user.role })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('1d')
    .sign(new TextEncoder().encode(process.env.JWT_SECRET || 'rahasia-zaky'))

  cookies().set('token', token, { httpOnly: true, path: '/', maxAge: 86400 })
  return Response.json({ user: { username: user.username, role: user.role } })
}
