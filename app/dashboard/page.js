"use client";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  return (
    <div style={{ minHeight: "100vh", background: "#eef4ff", fontFamily: "Arial, sans-serif", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flex: 1 }}>

        {/* SIDEBAR - UDAH DIGEDEIN */}
        <div style={{ width: "280px", flexShrink: 0, padding: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
          
          {/* LOGO - GEDE, TINGGI 200px */}
<div style={{ height: "175px", borderRadius: "18px", overflow: "hidden", background: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
  <img src="/header-uia.png" alt="UIA" style={{ width: "100%", height: "100", objectFit: "cover", translateX(35px) scale(2.2)", display: "block" }} />
</div>

      

          <button style={{ display: "flex", alignItems: "center", gap: "12px", background: "#dbeafe", color: "#2563eb", border: "none", padding: "14px 16px", borderRadius: "12px", textAlign: "left", cursor: "pointer", fontSize: "15px", fontWeight: "700" }}>
            ⌂ Home
          </button>

          <button onClick={() => router.push("/dashboard/invoices")} style={{ display: "flex", alignItems: "center", gap: "12px", background: "white", border: "none", padding: "14px 16px", borderRadius: "12px", textAlign: "left", cursor: "pointer", fontSize: "15px" }}>
            ❐ Invoices
          </button>

          <button onClick={() => router.push("/dashboard/customers")} style={{ display: "flex", alignItems: "center", gap: "12px", background: "white", border: "none", padding: "14px 16px", borderRadius: "12px", textAlign: "left", cursor: "pointer", fontSize: "15px" }}>
            ◉ Customers
          </button>

          <div style={{ marginTop: "auto" }}>
            <button onClick={() => router.push("/login")} style={{ display: "flex", alignItems: "center", gap: "12px", background: "white", border: "none", padding: "14px 16px", borderRadius: "12px", width: "100%", textAlign: "left", cursor: "pointer", fontSize: "15px", fontWeight: "600" }}>
              ⏻ Keluar
            </button>
          </div>
        </div>

        {/* KONTEN */}
        <div style={{ flex: 1, padding: "16px 16px 16px 0" }}>
          <div style={{ background: "white", borderRadius: "14px", padding: "30px", minHeight: "520px" }}>
            <h1 style={{ fontSize: "22px", fontWeight: "700", color: "#111827", margin: 0, fontFamily: "Georgia, serif" }}>Dashboard Page</h1>
            <p style={{ color: "#6b7280", fontSize: "14px", marginTop: "10px" }}>Selamat datang, Zaky Nurmuhadi!</p>
          </div>
        </div>
      </div>

      <div style={{ textAlign: "center", padding: "10px 20px 16px", color: "#374151", fontSize: "12.5px", lineHeight: "1.5" }}>
        Web ini dikerjakan oleh <b>Zaky Nurmuhadi</b> | 3420230010 | Teknik Informatika - TFUIA<br />
        <span style={{ fontSize: "11px", color: "#6b7280" }}>© 2026 All Rights Reserved.</span>
      </div>
    </div>
  );
}
