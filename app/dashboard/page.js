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
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", background: "#eaf2ff", padding: "16px", boxSizing: "border-box", fontFamily: "sans-serif" }}>
      
      {/* HEADER - LOGO */}
      <img src="/header-uia.png" alt="UIA" style={{ width: "100%", height: "auto", borderRadius: "18px", display: "block" }} />

      {/* MENU */}
      <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
        {menus.map((m) => (
          <button
            key={m.id}
            onClick={() => setActive(m.id)}
            style={{
              flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "3px",
              padding: "12px 0", borderRadius: "14px", border: "none", cursor: "pointer",
              background: active === m.id ? "#2f6bff" : "#fff",
              color: active === m.id ? "#fff" : "#333",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <span style={{ fontSize: "20px" }}>{m.icon}</span>
            <span style={{ fontSize: "12px", fontWeight: "600" }}>{m.label}</span>
          </button>
        ))}
        <button
          onClick={() => router.push("/login")}
          style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "3px", padding: "12px 0", borderRadius: "14px", border: "none", cursor: "pointer", background: "#fff", color: "#333", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
        >
          <span style={{ fontSize: "20px" }}>⏻</span>
          <span style={{ fontSize: "12px", fontWeight: "600" }}>Keluar</span>
        </button>
      </div>

      {/* ISI */}
      <div style={{ flex: 1, background: "#fff", borderRadius: "18px", padding: "20px", marginTop: "16px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
        {active === "home" && <h2 style={{ margin: 0 }}>Dashboard Page</h2>}
        {active === "invoices" && <h2 style={{ margin: 0 }}>Invoices Page</h2>}
        {active === "customers" && <h2 style={{ margin: 0 }}>Customers Page</h2>}
        <p style={{ color: "#666", fontSize: "14px" }}>Selamat datang, Zaky Nurmuhadi</p>
      </div>

      {/* FOOTER - GAK KEPOTONG LAGI */}
      <div style={{ textAlign: "center", padding: "20px 10px 10px", fontSize: "13px", color: "#555", lineHeight: "1.6" }}>
        Web ini dikerjakan oleh <b>Zaky Nurmuhadi</b><br />
        3420230010 | Teknik Informatika - TFI UIA
      </div>

    </div>
  );
}
