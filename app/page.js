"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@iconplus.id" && password === "admin123") {
      router.push("/dashboard");
    } else {
      alert("Email atau kata sandi salah!");
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f2f6fb", fontFamily: "Arial, sans-serif" }}>
      {/* HEADER PERSIS KAYAK FOTO UIA */}
      <div style={{
        background: "linear-gradient(90deg, #1d4ed8, #2563eb)",
        margin: "15px", borderRadius: "18px", padding: "18px 30px",
        display: "flex", alignItems: "center", gap: "0px", color: "white"
      }}>
        {/* LOGO UIA - TANPA KOTAK PUTIH */}
        <div style={{ display: "flex", alignItems: "center", gap: "15px", paddingRight: "20px", borderRight: "2px solid rgba(255,255,255,0.6)" }}>
          <div style={{ position: "relative", lineHeight: "1", textAlign: "center" }}>
            <div style={{ fontSize: "10px", color: "#fff", marginBottom: "2px" }}>ﷺ</div>
            <div style={{ fontSize: "52px", fontWeight: "900", letterSpacing: "-3px", color: "#0a3d2c", textShadow: "1px 1px 0 rgba(0,0,0,0.2)" }}>
              UI<span style={{ color: "#16a34a" }}>▲</span>
            </div>
            <div style={{ fontSize: "9px", letterSpacing: "1px", color: "#0a3d2c", fontWeight: "700" }}>AS-SYAFI'IYAH</div>
          </div>
        </div>

        {/* TEKS KANAN */}
        <div style={{ paddingLeft: "20px" }}>
          <div style={{ fontWeight: "900", fontSize: "32px", lineHeight: "1", letterSpacing: "1px", color: "#0f172a" }}>UNIVERSITAS</div>
          <div style={{ fontSize: "16px", letterSpacing: "0.5px", fontWeight: "700", color: "#15803d", marginTop: "4px" }}>ISLAM AS-SYAFI'IYAH</div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "60px", padding: "0 20px" }}>
        <form onSubmit={handleLogin} style={{ width: "100%", maxWidth: "420px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#1f2937", marginBottom: "25px" }}>
            Silakan Masuk dengan akun Anda.
          </h2>

          <label style={{ fontSize: "12px", fontWeight: "700", color: "#374151", letterSpacing: "1px" }}>EMAIL</label>
          <div style={{ display: "flex", alignItems: "center", background: "white", border: "1px solid #e5e7eb", borderRadius: "10px", padding: "12px", margin: "8px 0 20px" }}>
            <span style={{ marginRight: "10px" }}>📧</span>
            <input type="email" required placeholder="Ketikkan alamat email"
              value={email} onChange={(e) => setEmail(e.target.value)}
              style={{ border: "none", outline: "none", width: "100%", fontSize: "14px" }} />
          </div>

          <label style={{ fontSize: "12px", fontWeight: "700", color: "#374151", letterSpacing: "1px" }}>KATA SANDI</label>
          <div style={{ display: "flex", alignItems: "center", background: "white", border: "1px solid #e5e7eb", borderRadius: "10px", padding: "12px", margin: "8px 0 20px" }}>
            <span style={{ marginRight: "10px" }}>🔑</span>
            <input type="password" required placeholder="Ketikkan Kata Sandi"
              value={password} onChange={(e) => setPassword(e.target.value)}
              style={{ border: "none", outline: "none", width: "100%", fontSize: "14px" }} />
          </div>

          <button type="submit" style={{
            width: "100%", background: "#2563eb", color: "white", border: "none",
            padding: "14px", borderRadius: "10px", fontWeight: "700", fontSize: "15px",
            display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer"
          }}>
            <span>Masuk</span><span>→</span>
          </button>
        </form>
      </div>
    </div>
  );
}
