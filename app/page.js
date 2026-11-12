'use client'
import { useState } from 'react'

export default function Home(){
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState('nul')
  const [password, setPassword] = useState('nul')
  const [msg, setMsg] = useState('')

  async function login(e){
    e.preventDefault()
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ username, password })
    })
    const data = await res.json()
    if(res.ok){ setUser(data.user); setMsg('Login berhasil!') }
    else setMsg(data.message)
  }

  async function logout(){
    await fetch('/api/logout', { method: 'POST' })
    setUser(null); setUsername(''); setPassword(''); setMsg('Berhasil logout')
  }

  if(user) return (
    <div style={{maxWidth:400, margin:'80px auto', textAlign:'center', fontFamily:'sans-serif'}}>
      <h2>Selamat Datang, Sobat 👋</h2>
      <p>Role: {user.role}</p>
      <p>Kamu sudah login & terhubung ke Database Vercel</p>
      <button onClick={logout} style={{padding:'10px 20px', background:'red', color:'white', border:0, borderRadius:8, cursor:'pointer'}}>Logout</button>
    </div>
  )

  return (
    <form onSubmit={login} style={{maxWidth:380, margin:'80px auto', padding:24, border:'1px solid #ddd', borderRadius:12, fontFamily:'sans-serif'}}>
   <img src="https://cdn.annibuku.com/uploads/logo-kampus/8710-universitas-islam-as-syafiiyah.jpg" alt="Logo UIA" style={{width:90, height:90, objectFit:'contain', display:'block', margin:'0 auto 10px'}} />
      <h2 style={{textAlign:'center'}}>Login - Perpustakaan Digital</h2>
      <label>Username</label><br/>
      <input value={username} onChange={e=>setUsername(e.target.value)} placeholder="admin" required style={{width:'100%', padding:10, margin:'6px 0 12px'}} /><br/>
      <label>Password</label><br/>
      <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="admin123" required style={{width:'100%', padding:10, margin:'6px 0 12px'}} /><br/>
      <button style={{width:'100%', padding:11, background:'#1e40af', color:'white', border:0, borderRadius:8, cursor:'pointer'}}>Login</button>
      <p style={{textAlign:'center', color:'red'}}>{msg}</p>
     
    </form>
  )
}
