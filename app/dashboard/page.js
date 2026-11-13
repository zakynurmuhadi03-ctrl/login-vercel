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

  const btn = (isActive) => ({
    display: "flex", alignItems: "center", gap: "10px", width: "100%",
    padding: "12px 14px", borderRadius: "12px", border: "none", cursor: "pointer",
    textAlign: "left", fontSize: "14px", fontWeight: isActive ? "700" : "500",
    background: isActive ? "#dbeafe" : "transparent",
    color: isActive ? "#1d4ed8" : "#333",
  });

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#eaf2ff", fontFamily: "sans-serif" }}>

      {/* SIDEBAR KIRI */}
      <div style={{ width: "250px", flexShrink: 0, background: "#fff", padding: "16px", display: "flex", flexDirection: "column", gap: "8px", boxShadow: "2px 0 10px rgba(0,0,0,0.05)" }}>
        <img src="/header-uia.png" alt="UIA" style={{ width: "100%", height: "auto", borderRadius: "14px", marginBottom: "12px" }} />

        {menus.map((m) => (
          <button key={m.id} onClick={() => setActive(m.id)} style={btn(active === m.id)}>
            <span>{m.icon}</span> {m.label}
          </button>
        ))}

        <div style={{ marginTop: "auto" }}>
          <button onClick={() => { if (confirm("Yakin mau keluar?")) router.push("/login"); }} style={btn(false)}>
            <span>⏻</span> Keluar
          </button>
        </div>
      </div>

      {/* ISI KANAN */}
      <div style={{ flex: 1, padding: "24px", display: "flex", flexDirection: "column" }}>
        <div style={{ background: "#fff", borderRadius: "18px", padding: "24px", flex: 1, boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
          {active === "home" && <h2 style={{ margin: 0 }}>Dashboard Page</h2>}
          {active === "invoices" && <h2 style={{ margin: 0 }}>Invoices Page</h2>}
          {active === "customers" && <h2 style={{ margin: 0 }}>Customers Page</h2>}
          <p style={{ color: "#666", fontSize: "14px" }}>Selamat datang, Zaky Nurmuhadi</p>
        </div>

        <div style={{ textAlign: "center", padding: "16px", fontSize: "13px", color: "#555" }}>
          Web ini dikerjakan oleh <b>Zaky Nurmuhadi</b><br />
          3420230010 | Teknik Informatika - TFI UIA
        </div>
      </div>

    </div>
  );
}
