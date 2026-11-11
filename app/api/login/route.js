export async function POST(req) {
  try {
    const body = await req.json().catch(() => ({}));
    const username = (body.username || '').trim();
    const password = (body.password || '').trim();

    if (username === 'admin' && password === 'admin123') {
      return Response.json({
        success: true,
        message: 'Login berhasil!',
        user: { username: 'admin', role: 'admin' }
      });
    }

    return Response.json(
      { success: false, message: 'Username atau password salah' },
      { status: 401 }
    );
  } catch (e) {
    return Response.json(
      { success: false, message: 'Gagal login' },
      { status: 500 }
    );
  }
}
