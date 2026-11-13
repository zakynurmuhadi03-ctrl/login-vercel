"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      router.push("/dashboard");
    }, 1200);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#eef4ff", fontFamily: "Georgia, serif", display: "flex", flexDirection: "column" }}>
      {/* HEADER - FULL LEBAR */}
      <div style={{ margin: "12px 12px 0 12px", borderRadius: "12px", overflow: "hidden" }}>
        <img src="/header-uia.png" alt="Universitas Islam As-Syafi'iyah" style={{ width: "100%", display: "block" }} />
      </div>

      {/* PEMBUNGKUS BIAR FORM DI TENGAH */}
      <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", padding: "18px 12px" }}>
        {/* FORM LOGIN - UDAH DI TENGAH */}
        <div style={{ background: "white", padding: "28px", maxWidth: "620px", width: "100%", boxSizing: "border-box", borderRadius: "10px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
          <h1 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", lineHeight: "1.4", margin: 0 }}>
            Silakan Masuk dengan akun Anda.
          </h1>

          <form onSubmit={handleLogin} style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "16px" }}>
            <div>
              <label style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "1px" }}>EMAIL</label>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#f8f7ee", borderRadius: "10px", padding: "14px", marginTop: "8px" }}>
                <span>📧</span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ketikkan alamat email"
                  style={{ border: "none", outline: "none", background: "transparent", width: "100%", fontSize: "15px", fontFamily: "inherit" }}
                />
              </div>
            </div>

            <div>
              <label style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "1px" }}>KATA SANDI</label>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#f8f7ee", borderRadius: "10px", padding: "14px", marginTop: "8px" }}>
                <span>🔑</span>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Ketikkan Kata Sandi"
                  style={{ border: "none", outline: "none", background: "transparent", width: "100%", fontSize: "15px", fontFamily: "inherit" }}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                background: loading ? "#93b4ff" : "#2f6bff",
                color: "#fff",
                border: "none",
                borderRadius: "12px",
                padding: "14px 20px",
                fontSize: "15px",
                fontWeight: "700",
                cursor: loading ? "not-allowed" : "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>{loading ? "Memproses..." : "Masuk"}</span>
              <span>{loading ? "⏳" : "→"}</span>
            </button>
          </form>
        </div>
      </div>

      {/* FOOTER DIBAWAH */}
      <div style={{ textAlign: "center", padding: "20px 10px", fontSize: "12px", color: "#555", lineHeight: "1.6" }}>
        Web ini dikerjakan oleh <b>Zaky Nurmuhadi</b> | 3420230010 | Teknik Informatika - TFI UIA<br />
        © 2026 All Rights Reserved.
      </div>
    </div>
  );
}
