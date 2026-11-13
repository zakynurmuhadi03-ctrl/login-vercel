"use client";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  return (
    <div style={{ minHeight: "100vh", background: "#eef4ff", fontFamily: "Arial, sans-serif", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flex: 1 }}>

        {/* SIDEBAR */}
        <div style={{ width: "240px", flexShrink: 0, padding: "14px", display: "flex", flexDirection: "column", gap: "10px" }}>
          
          {/* LOGO - PAKE GAMBAR BARU, JANGAN PAKE header-uia.png LAGI */}
          <div style={{ height: "145px", borderRadius: "16px", overflow: "hidden", background: "#2563eb" }}>
            <img src="/logo-sidebar.png" alt="UIA" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>

          <button style={{ display: "flex", alignItems: "center", gap: "12px", background: "#dbeafe", color: "#2563eb", border: "none", padding: "13px 16px", borderRadius: "12px", textAlign: "left", cursor: "pointer", fontSize: "14px", fontWeight: "700" }}>
            ⌂ Home
          </button>

          <button onClick={() => router.push("/dashboard/invoices")} style={{ display: "flex", alignItems: "center", gap: "12px", background: "white", border: "none", padding: "13px 16px", borderRadius: "12px", textAlign: "left", cursor: "pointer", fontSize: "14px" }}>
            ❐ Invoices
          </button>

          <button onClick={() => router.push("/dashboard/customers")} style={{ display: "flex", alignItems: "center", gap: "12px", background: "white", border: "none", padding: "13px 16px", borderRadius: "12px", textAlign: "left", cursor: "pointer", fontSize: "14px" }}>
            ◉ Customers
          </button>

          <div style={{ marginTop: "auto" }}>
            <button onClick={() => router.push("/login")} style={{ display: "flex", alignItems: "center", gap: "12px", background: "white", border: "none", padding: "13px 16px", borderRadius: "12px", width: "100%", textAlign: "left", cursor: "pointer", fontSize: "14px", fontWeight: "600" }}>
              ⏻ Keluar
            </button>
          </div>
        </div>

        {/* KONTEN - DASHBOARD PAGE DITENGAH */}
        <div style={{ flex: 1, padding: "14px 14px 14px 0" }}>
          <div style={{ background: "white", borderRadius: "14px", padding: "30px", minHeight: "520px" }}>
            <h1 style={{ fontSize: "22px", fontWeight: "700", color: "#111827", margin: 0, fontFamily: "Georgia, serif", textAlign: "center" }}>Dashboard Page</h1>
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
