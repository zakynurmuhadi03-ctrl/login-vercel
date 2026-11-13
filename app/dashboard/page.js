"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const [active, setActive] = useState("home");
  const router = useRouter();
  const menus = [
    { id: "home", label: "Home" },
    { id: "invoices", label: "Invoices" },
    { id: "customers", label: "Customers" },
  ];
  let title = "Dashboard Page";
  if (active === "invoices") title = "Invoices Page";
  if (active === "customers") title = "Customers Page";
  return (
    <>
    <style>{`
      .layout { display: flex; min-height: 100vh; background: #eaf2ff; font-family: sans-serif; }
      .sidebar { width: 280px; background: #fff; padding: 16px 12px; display: flex; flex-direction: column; gap: 12px; box-sizing: border-box; flex-shrink: 0; }
      .logo-box { width: 100%; height: 150px; border-radius: 16px; overflow: hidden; background: #2563eb; display: flex; align-items: center; justify-content: flex-start; }
      .logo-box img { width: 100%; height: 100%; display: block; object-fit: cover; object-position: left center; transform: scale(2.1); transform-origin: left center; }
      .menu-list { display: flex; flex-direction: column; gap: 12px; flex: 1; }
      .menu-btn { display: flex; align-items: center; justify-content: center; gap: 10px; width: 100%; padding: 14px; border-radius: 14px; border: none; cursor: pointer; font-size: 16px; background: #fff; color: #333; box-shadow: 0 2px 10px rgba(0,0,0,0.08); }
      .menu-btn.active { background: #dbeafe; color: #1d4ed8; }
      .logout-btn { margin-top: auto; }
      @media (max-width: 768px) {
        .layout { flex-direction: column; }
        .sidebar { width: 100% !important; padding: 12px !important; }
        .logo-box { height: 110px !important; }
        .logo-box img { transform: scale(2.1) !important; }
        .menu-list { flex-direction: row !important; flex: none !important; }
        .menu-btn { padding: 10px 0 !important; font-size: 13px !important; flex: 1 !important; }
        .logout-btn { margin-top: 0 !important; }
      }
    `}</style>
    <div className="layout">
      <div className="sidebar">
        <div className="logo-box">
          <img src="/header-uia.png" alt="UIA" />
        </div>
        <div className="menu-list">
          {menus.map((m) => (
            <button key={m.id} onClick={() => setActive(m.id)} className={active === m.id ? "menu-btn active" : "menu-btn"}>{m.label}</button>
          ))}
          <button onClick={() => router.push("/login")} className="menu-btn logout-btn">Keluar</button>
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
