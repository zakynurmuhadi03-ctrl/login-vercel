import { SignJWT } from 'jose';

export async function POST(req) {
  try {
    const { username, password } = await req.json();

    // LOGIN DEMO - tanpa database, biar langsung bisa masuk di Vercel
    if (username === 'admin' && password === 'admin123') {
      const secret = new TextEncoder().encode(
        process.env.JWT_SECRET || 'rahasia-demo-perpustakaan-123'
      );
      const token = await new SignJWT({ username: 'admin', role: 'admin' })
        .setProtectedHeader({ alg: 'HS256' })
        .setExpirationTime('24h')
        .sign(secret);

      const res = Response.json({ success: true, message: 'Login berhasil' });
      res.cookies.set('token', token, { httpOnly: true, path: '/', maxAge: 60 * 60 * 24 });
      return res;
    }

    return Response.json({ success: false, message: 'Username atau password salah' }, { status: 401 });
  } catch (e) {
    return Response.json({ success: false, message: 'Gagal login' }, { status: 500 });
  }
}
