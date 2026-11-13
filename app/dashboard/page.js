"use client";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  return (
    <div style={{ minHeight: "100vh", background: "#eef4ff", fontFamily: "Arial, sans-serif", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flex: 1 }}>

        {/* SIDEBAR KIRI - PERSIS KAYAK FOTO */}
        <div style={{ width: "220px", flexShrink: 0, padding: "14px", display: "flex", flexDirection: "column", gap: "8px" }}>
          {/* LOGO BIRU */}
          <div style={{ borderRadius: "14px", overflow: "hidden", marginBottom: "6px" }}>
            <img src="/header-uia.png" alt="UIA" style={{ width: "100%", display: "block" }} />
          </div>

          {/* HOME - LAGI AKTIF, BIRU MUDA */}
          <button style={{ display: "flex", alignItems: "center", gap: "10px", background: "#dbeafe", color: "#2563eb", border: "none", padding: "11px 14px", borderRadius: "10px", textAlign: "left", cursor: "pointer", fontSize: "13px", fontWeight: "700" }}>
            ⌂ Home
          </button>

          <button onClick={() => router.push("/dashboard/invoices")} style={{ display: "flex", alignItems: "center", gap: "10px", background: "white", border: "none", padding: "11px 14px", borderRadius: "10px", textAlign: "left", cursor: "pointer", fontSize: "13px" }}>
            ⎋ Invoices
          </button>

          <button onClick={() => router.push("/dashboard/customers")} style={{ display: "flex", alignItems: "center", gap: "10px", background: "white", border: "none", padding: "11px 14px", borderRadius: "10px", textAlign: "left", cursor: "pointer", fontSize: "13px" }}>
            ◉ Customers
          </button>

          {/* KELUAR - PALING BAWAH KIRI */}
          <div style={{ marginTop: "auto" }}>
            <button onClick={() => router.push("/login")} style={{ display: "flex", alignItems: "center", gap: "10px", background: "white", border: "none", padding: "11px 14px", borderRadius: "10px", width: "100%", textAlign: "left", cursor: "pointer", fontSize: "13px", fontWeight: "600" }}>
              ⏻ Keluar
            </button>
          </div>
        </div>

        {/* KONTEN TENGAH */}
        <div style={{ flex: 1, padding: "16px 16px 16px 0" }}>
          <div style={{ background: "white", borderRadius: "12px", padding: "30px", minHeight: "500px" }}>
            <h1 style={{ fontSize: "20px", fontWeight: "700", color: "#111827", margin: 0, fontFamily: "Georgia, serif" }}>Dashboard Page</h1>
          </div>
        </div>
      </div>

      {/* FOOTER - UDAH ZAKY */}
      <div style={{ textAlign: "center", padding: "10px 20px 16px", color: "#374151", fontSize: "12.5px", fontFamily: "Arial, sans-serif", lineHeight: "1.5" }}>
        Web ini dikerjakan oleh <b>Zaky Nurmuhadi</b> | 3420230010 | Teknik Informatika - TFUIA<br />
        <span style={{ fontSize: "11px", color: "#6b7280" }}>© 2026 All Rights Reserved.</span>
      </div>
    </div>
  );
}
