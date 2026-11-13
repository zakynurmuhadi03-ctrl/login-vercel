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
      {/* HEADER - GAMBAR PERSIS */}
      <div style={{ margin: "15px", borderRadius: "18px", overflow: "hidden" }}>
        <img
          src="/header-uia.png"
          alt="Universitas Islam As-Syafi'iyah"
          style={{ width: "100%", display: "block" }}
        />
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
