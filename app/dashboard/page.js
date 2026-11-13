"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const [active, setActive] = useState("home");
  const router = useRouter();

  const menus = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "invoices", label: "Invoices", icon: "🧾" },
    { id: "customers", label: "Customers", icon: "👥" },
  ];

  return (
    <>
    <style>{`
      .menu-label { display: block; font-size: 13px; }
      @media (max-width: 768px) {
        .menu-label { display: none !important; }
      }
    `}</style>

    <div style={{ minHeight: "100vh", background: "#eaf2ff", fontFamily: "sans-serif", padding: "12px", boxSizing: "border-box" }}>
      
      {/* HEADER BIRU */}
      <div style={{ width: "100%", borderRadius: "16px", overflow: "hidden" }}>
        <img src="/header-uia.png" alt="UIA" style={{ width: "100%", display: "block", objectFit: "cover" }} />
      </div>

      {/* MENU KESAMPING - HOME / INVOICES / CUSTOMERS / KELUAR */}
      <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
        {menus.map((m) => (
          <button key={m.id} onClick={() => setActive(m.id)} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "2px", padding: "10px 0", borderRadius: "14px", border: "none", cursor: "pointer", background: active === m.id ? "#2f6bff" : "#fff", color: active === m.id ? "#fff" : "#333", boxShadow: "0 2px 10px rgba(0,0,0,0.08)" }}>
            <span style={{ fontSize: "20px" }}>{m.icon}</span>
            <span className="menu-label">{m.label}</span>
          </button>
        ))}
        <button onClick={() => router.push("/login")} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "2px", padding: "10px 0", borderRadius: "14px", border: "none", cursor: "pointer", background: "#fff", color: "#333", boxShadow: "0 2px 10px rgba(0,0,0,0.08)" }}>
          <span style={{ fontSize: "20px" }}>⏻</span>
          <span className="menu-label">Keluar</span>
        </button>
      </div>

      {/* KONTEN */}
      <div style={{ background: "#fff", borderRadius: "16px", padding: "24px", marginTop: "12px" }}>
        {active === "home" && <h2 style={{ margin: 0 }}>Dashboard Page</h2>}
        {active === "invoices" && <h2 style={{ margin: 0 }}>Invoices Page</h2>}
        {active === "customers" && <h2 style={{ margin: 0 }}>Customers Page</h2>}
      </div>

      <div style={{ textAlign: "center", padding: "24px 10px", fontSize: "13px", color: "#555", lineHeight: "1.6" }}>
        Web ini dikerjakan oleh <b>Zaky Nurmuhadi</b><br />
        3420230010 | Teknik Informatika - TFI UIA
      </div>
    </div>
    </>
  );
}
