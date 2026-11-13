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
        .sidebar { width: 280px; flex-shrink: 0; background: #fff; padding: 16px; display: flex; flex-direction: column; gap: 12px; }
        .menu-row { display: flex; flex-direction: column; gap: 10px; width: 100%; }
        .menu-btn { display: flex; align-items: center; gap: 10px; width: 100%; padding: 14px; border-radius: 14px; border: none; cursor: pointer; text-align: left; font-size: 14px; background: #fff; color: #333; box-shadow: 0 2px 10px rgba(0,0,0,0.08); }
        .menu-btn.active { background: #dbeafe; color: #1d4ed8; font-weight: 700; }
        .content { flex: 1; padding: 24px; display: flex; flex-direction: column; min-width: 0; }
        @media (max-width: 768px) {
          .layout { flex-direction: column; }
          .sidebar { width: 100%; box-sizing: border-box; padding: 12px; }
          .menu-row { flex-direction: row; gap: 8px; }
          .menu-btn { flex: 1; flex-direction: column; justify-content: center; gap: 3px; padding: 10px 0; font-size: 11px; text-align: center; }
          .menu-btn.active { background: #2f6bff; color: #fff; }
          .content { padding: 12px; }
          .logout-wrap { margin-top: 0; flex: 1; display: flex; }
          .logout-wrap .menu-btn { flex: 1; }
        }
      `}</style>

      <div className="layout">
        <div className="sidebar">
          {/* BIRU GEDE + LOGO GEDE - 165% */}
          <div style={{ width: "100%", height: "200px", borderRadius: "20px", overflow: "hidden" }}>
            <img src="/header-uia.png" alt="UIA" style={{ width: "225%", height: "200px", objectFit: "fill", objectPosition: "left center", display: "block" }} />
          </div>

          <div className="menu-row">
            {menus.map((m) => (
              <button key={m.id} onClick={() => setActive(m.id)} className={`menu-btn ${active === m.id ? "active" : ""}`}>
                <span style={{ fontSize: "18px" }}>{m.icon}</span> {m.label}
              </button>
            ))}
            <div className="logout-wrap">
              <button onClick={() => router.push("/login")} className="menu-btn">
                <span style={{ fontSize: "18px" }}>⏻</span> Keluar
              </button>
            </div>
          </div>
        </div>

        <div className="content">
          {/* KOTAK PUTIH TETEP KECIL */}
          <div style={{ background: "#fff", borderRadius: "18px", padding: "24px" }}>
            {active === "home" && <h2 style={{ margin: 0 }}>Dashboard Page</h2>}
            {active === "invoices" && <h2 style={{ margin: 0 }}>Invoices Page</h2>}
            {active === "customers" && <h2 style={{ margin: 0 }}>Customers Page</h2>}
            <p style={{ color: "#666", fontSize: "14px", marginBottom: 0 }}></p>
          </div>

          {/* FOOTER NEMPEL DI BAWAH */}
          <div style={{ marginTop: "auto", textAlign: "center", padding: "20px 10px 10px", fontSize: "13px", color: "#555", lineHeight: "1.6" }}>
            Web ini dikerjakan oleh <b>Zaky Nurmuhadi</b><br />
            3420230010 | Teknik Informatika - TFI UIA
          </div>
        </div>
      </div>
    </>
  );
}
