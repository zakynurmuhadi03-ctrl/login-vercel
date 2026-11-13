"use client";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const handleKeluar = () => {
    router.push("/login");
  };

  return (
    <div style={{ minHeight: "100vh", background: "#eef4ff", fontFamily: "Arial, sans-serif", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flex: 1 }}>
        
        {/* SIDEBAR KIRI */}
        <div style={{ width: "240px", background: "#eef4ff", padding: "16px", display: "flex", flexDirection: "column", gap: "8px", minHeight: "80vh" }}>
          {/* LOGO KECIL */}
          <div style={{ borderRadius: "16px", overflow: "hidden", marginBottom: "12px" }}>
            <img src="/header-uia.png" alt="UIA" style={{ width: "100%", display: "block" }} />
          </div>

          <button onClick={() => router.push("/dashboard")} style={{ display: "flex", alignItems: "center", gap: "10px", background: "white", border: "none", padding: "12px 14px", borderRadius: "10px", textAlign: "left", cursor: "pointer", fontSize: "14px", fontWeight: "600" }}>
            🏠 Home
          </button>
          <button onClick={() => router.push("/dashboard/invoices")} style={{ display: "flex", alignItems: "center", gap: "10px", background: "white", border: "none", padding: "12px 14px", borderRadius: "10px", textAlign: "left", cursor: "pointer", fontSize: "14px" }}>
            📄 Invoices
          </button>
          <button onClick={() => router.push("/dashboard/customers")} style={{ display: "flex", alignItems: "center", gap: "10px", background: "white", border: "none", padding: "12px 14px", borderRadius: "10px", textAlign: "left", cursor: "pointer", fontSize: "14px" }}>
            👥 Customers
          </button>

          <div style={{ marginTop: "auto" }}>
            <button onClick={handleKeluar} style={{ display: "flex", alignItems: "center", gap: "10px", background: "white", border: "none", padding: "12px 14px", borderRadius: "10px", width: "100%", textAlign: "left", cursor: "pointer", fontSize: "14px", fontWeight: "600" }}>
              ⏻ Keluar
            </button>
          </div>
        </div>

        {/* KONTEN TENGAH */}
        <div style={{ flex: 1, padding: "20px" }}>
          <div style={{ background: "white", borderRadius: "14px", padding: "24px", minHeight: "300px" }}>
            <h1 style={{ fontSize: "20px", fontWeight: "700", margin: 0, fontFamily: "Georgia, serif" }}>Dashboard Page</h1>
            <p style={{ color: "#6b7280", fontSize: "14px", marginTop: "10px" }}>Selamat datang, Zaky Nurmuhadi!</p>
          </div>
        </div>
      </div>

      {/* FOOTER - UDAH ZAKY */}
      <div style={{ textAlign: "center", padding: "18px", color: "#374151", fontSize: "13px", lineHeight: "1.6" }}>
        Web ini dikerjakan oleh <b>Zaky Nurmuhadi</b> | 3420230010 | Teknik Informatika - TFUIA<br />
        <span style={{ fontSize: "12px", color: "#6b7280" }}>© 2026 All Rights Reserved.</span>
      </div>
    </div>
  );
}
