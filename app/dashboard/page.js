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
        .layout { display: flex; min-height: 100vh; background: #eaf2ff; font-family: sans-serif; }
        .sidebar { width: 250px; flex-shrink: 0; background: #fff; padding: 16px; display: flex; flex-direction: column; gap: 8px; }
        .menu-btn { display: flex; align-items: center; gap: 10px; width: 100%; padding: 12px 14px; border-radius: 12px; border: none; cursor: pointer; text-align: left; font-size: 14px; background: transparent; color: #333; }
        .menu-btn.active { background: #dbeafe; color: #1d4ed8; font-weight: 700; }
        .content { flex: 1; padding: 24px; display: flex; flex-direction: column; min-width: 0; }
        @media (max-width: 768px) {
          .layout { flex-direction: column; }
          .sidebar { width: 100%; box-sizing: border-box; padding: 12px; }
          .menu-row { display: flex; gap: 8px; }
          .menu-btn { flex: 1; flex-direction: column; justify-content: center; gap: 3px; padding: 10px 0; font-size: 12px; text-align: center; background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
          .menu-btn.active { background: #2f6bff; color: #fff; }
          .content { padding: 12px; }
          .logout-wrap { margin-top: 8px; }
          .logout-wrap .menu-btn { flex-direction: row; }
        }
      `}</style>

      <div className="layout">
        {/* SIDEBAR / DI HP JADI MENU ATAS */}
        <div className="sidebar">
          <img src="/header-uia.png" alt="UIA" style={{ width: "100%", height: "auto", borderRadius: "14px", marginBottom: "8px" }} />
          <div className="menu-row" style={{ display: "flex", flexDirection: "column", gap: "8px", width: "100%" }}>
            {menus.map((m) => (
              <button key={m.id} onClick={() => setActive(m.id)} className={`menu-btn ${active === m.id ? "active" : ""}`}>
                <span>{m.icon}</span> {m.label}
              </button>
            ))}
          </div>
          <div className="logout-wrap" style={{ marginTop: "auto" }}>
            <button onClick={() => { if (confirm("Yakin mau keluar?")) router.push("/login"); }} className="menu-btn">
              <span>⏻</span> Keluar
            </button>
          </div>
        </div>

        {/* ISI */}
        <div className="content">
          <div style={{ background: "#fff", borderRadius: "18px", padding: "24px", flex: 1 }}>
            {active === "home" && <h2 style={{ margin: 0 }}>Dashboard Page</h2>}
            {active === "invoices" && <h2 style={{ margin: 0 }}>Invoices Page</h2>}
            {active === "customers" && <h2 style={{ margin: 0 }}>Customers Page</h2>}
            <p style={{ color: "#666", fontSize: "14px" }}>Selamat datang, Zaky Nurmuhadi</p>
          </div>
          <div style={{ textAlign: "center", padding: "20px 10px 10px", fontSize: "13px", color: "#555", lineHeight: "1.6" }}>
            Web ini dikerjakan oleh <b>Zaky Nurmuhadi</b><br />
            3420230010 | Teknik Informatika - TFI UIA
          </div>
        </div>
      </div>
    </>
  );
}
