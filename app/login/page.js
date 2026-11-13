"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "zakynurmuhadi03@gmail.com" && password === "zaky123") {
      router.push("/dashboard");
    } else {
      alert("Email atau kata sandi salah!");
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#eef4ff", fontFamily: "Georgia, serif", display: "flex", flexDirection: "column" }}>
      
      {/* HEADER */}
      <div style={{ margin: "12px 12px 0 12px", borderRadius: "12px", overflow: "hidden" }}>
        <img src="/header-uia.png" alt="Universitas Islam As-Syafi'iyah" style={{ width: "100%", display: "block" }} />
      </div>

      {/* FORM LOGIN */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "70px", padding: "0 20px" }}>
        <form onSubmit={handleLogin} style={{ width: "100%", maxWidth: "420px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#111827", marginBottom: "22px" }}>
            Silakan Masuk dengan akun Anda.
          </h2>

          <label style={{ fontSize: "12px", fontWeight: "700", color: "#111827", letterSpacing: "1px", fontFamily: "Arial, sans-serif" }}>EMAIL</label>
          <div style={{ display: "flex", alignItems: "center", background: "white", border: "1px solid #e5e7eb", borderRadius: "10px", padding: "12px 14px", margin: "8px 0 20px" }}>
            <span style={{ marginRight: "10px" }}>📧</span>
            <input type="email" required placeholder="Ketikkan alamat email"
              value={email} onChange={(e) => setEmail(e.target.value)}
              style={{ border: "none", outline: "none", width: "100%", fontSize: "14px", fontFamily: "Arial, sans-serif" }} />
          </div>

          <label style={{ fontSize: "12px", fontWeight: "700", color: "#111827", letterSpacing: "1px", fontFamily: "Arial, sans-serif" }}>KATA SANDI</label>
          <div style={{ display: "flex", alignItems: "center", background: "white", border: "1px solid #e5e7eb", borderRadius: "10px", padding: "12px 14px", margin: "8px 0 24px" }}>
            <span style={{ marginRight: "10px" }}>🔑</span>
            <input type="password" required placeholder="Ketikkan Kata Sandi"
              value={password} onChange={(e) => setPassword(e.target.value)}
              style={{ border: "none", outline: "none", width: "100%", fontSize: "14px", fontFamily: "Arial, sans-serif" }} />
          </div>

          <button type="submit" style={{
            width: "100%", background: "#2563eb", color: "white", border: "none",
            padding: "13px 16px", borderRadius: "10px", fontWeight: "600", fontSize: "14px",
            display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", fontFamily: "Arial, sans-serif"
          }}>
            <span>Masuk</span><span>→</span>
          </button>
        </form>
      </div>

      {/* FOOTER - INI YANG TADI KETINGGALAN */}
      <div style={{ marginTop: "auto", textAlign: "center", padding: "40px 20px 18px", color: "#374151", fontSize: "13px", fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
        Web ini dikerjakan oleh <b>Zaky Nurmuhadi</b> | 3420230010 | Teknik Informatika - TFUIA<br />
        <span style={{ fontSize: "12px", color: "#6b7280" }}>© 2026 All Rights Reserved.</span>
      </div>
    </div>
  );
}
