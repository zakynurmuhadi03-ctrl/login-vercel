export async function POST(req) {
  try {
    const body = await req.json().catch(() => ({}));
    const username = body.username || body.user || '';
    const password = body.password || body.pass || '';

    if (username === 'admin' && password === 'admin123') {
      const res = Response.json({ success: true, message: 'Login berhasil' });
      res.cookies.set('token', 'demo-token-admin', { httpOnly: true, path: '/', maxAge: 60 * 60 * 24 });
      return res;
    }

    return Response.json({ success: false, message: 'Username atau password salah' }, { status: 401 });
  } catch (e) {
    return Response.json({ success: false, message: 'Gagal login' }, { status: 500 });
  }
}
