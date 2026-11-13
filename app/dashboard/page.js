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
  let title = "Dashboard Page";
  if (active === "invoices") title = "Invoices Page";
  if (active === "customers") title = "Customers Page";
  return (
    <>
    <style>{`
      .layout { display: flex; min-height: 100vh; background: #eaf2ff; font-family: sans-serif; }
      .sidebar { width: 280px; background: #fff; padding: 16px 12px; display: flex; flex-direction: column; gap: 12px; box-sizing: border-box; flex-shrink: 0; }
      .logo-box { width: 100%; border-radius: 16px; overflow: hidden; background: linear-gradient(90deg, #1e40af, #3b82f6); display: flex; align-items: center; gap: 10px; padding: 12px; box-sizing: border-box; }
      .icon-box { width: 68px; height: 68px; overflow: hidden; flex-shrink: 0; border-radius: 10px; background: #fff; display: flex; align-items: center; justify-content: center; }
      .icon-box img { width: 340%; height: 100%; object-fit: cover; object-position: left center; display: block; }
      .logo-text { color: #fff; line-height: 1.2; }
      .logo-text b { font-size: 17px; letter-spacing: 0.5px; }
      .logo-text span { font-size: 10px; opacity: 0.9; }
      .menu-list { display: flex; flex-direction: column; gap: 12px; flex: 1; }
      .menu-btn { display: flex; align-items: center; justify-content: center; gap: 10px; width: 100%; padding: 14px; border-radius: 14px; border: none; cursor: pointer; font-size: 16px; background: #fff; color: #333; box-shadow: 0 2px 10px rgba(0,0,0,0.08); }
      .menu-btn.active { background: #dbeafe; color: #1d4ed8; }
      .menu-icon { font-size: 22px; line-height: 1; }
      .logout-btn { margin-top: auto; }
      @media (max-width: 768px) {
        .layout { flex-direction: column; }
        .sidebar { width: 100% !important; padding: 12px !important; }
        .icon-box { width: 58px !important; height: 58px !important; }
        .menu-list { flex-direction: row !important; flex: none !important; }
        .menu-btn { padding: 12px 0 !important; flex: 1 !important; }
        .menu-label { display: none !important; }
        .menu-icon { font-size: 26px !important; }
        .logout-btn { margin-top: 0 !important; }
      }
    `}</style>
    <div className="layout">
      <div className="sidebar">
        <div className="logo-box">
          <div className="icon-box">
            <img src="/header-uia.png" alt="UIA" />
          </div>
          <div className="logo-text">
            <b>UNIVERSITAS</b><br /><span>ISLAM AS-SYAFI'IYAH</span>
          </div>
        </div>
        <div className="menu-list">
          {menus.map((m) => (
            <button key={m.id} onClick={() => setActive(m.id)} className={active === m.id ? "menu-btn active" : "menu-btn"}>
              <span className="menu-icon">{m.icon}</span><span className="menu-label">{m.label}</span>
            </button>
          ))}
          <button onClick={() => router.push("/login")} className="menu-btn logout-btn">
            <span className="menu-icon">🚪</span><span className="menu-label">Keluar</span>
          </button>
        </div>
      </div>
      <div style={{ flex: 1, padding: "24px", display: "flex", flexDirection: "column" }}>
        <div style={{ background: "#fff", borderRadius: "18px", padding: "24px" }}>
          <h2 style={{ margin: 0 }}>{title}</h2>
        </div>
        <div style={{ marginTop: "auto", textAlign: "center", padding: "20px 10px 10px", fontSize: "13px", color: "#555", lineHeight: "1.6" }}>
          Web ini dikerjakan oleh <b>Zaky Nurmuhadi</b><br />3420230010 | Teknik Informatika - TFI UIA
        </div>
      </div>
    </div>
    </>
  );
}
