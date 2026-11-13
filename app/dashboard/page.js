"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";


const Icon = ({ d, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
);

export default function DashboardPage() {
  const [active, setActive] = useState("home");
  const router = useRouter();
  const menus = [
    { id: "home", label: "Home", d: "M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z" },
    { id: "invoices", label: "Invoices", d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M9 13h6 M9 17h6" },
    { id: "customers", label: "Customers", d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M22 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75" },
  ];
  let title = "Dashboard Page";
  if (active === "invoices") title = "Invoices Page";
  if (active === "customers") title = "Customers Page";
  return (
    <>
    <style>{`
      .layout { display: flex; min-height: 100vh; background: #eaf2ff; font-family: sans-serif; }
      .sidebar { width: 280px; background: #fff; padding: 16px 12px; display: flex; flex-direction: column; gap: 12px; box-sizing: border-box; flex-shrink: 0; }
      .logo-box { width: 100%; border-radius: 16px; background: linear-gradient(90deg, #1e40af, #3b82f6); display: flex; align-items: center; gap: 12px; padding: 14px 14px; box-sizing: border-box; }
      .uia { font-size: 46px; font-weight: 900; letter-spacing: -1px; color: #22c55e; line-height: 1; text-shadow: 2px 2px 0 #fff; flex-shrink: 0; }
      .logo-text { color: #fff; line-height: 1.15; }
      .logo-text b { font-size: 19px; letter-spacing: 0.5px; }
      .logo-text span { font-size: 10.5px; opacity: 0.9; }
      .menu-list { display: flex; flex-direction: column; gap: 12px; flex: 1; }
      .menu-btn { display: flex; align-items: center; gap: 12px; width: 100%; padding: 14px 16px; border-radius: 14px; border: none; cursor: pointer; font-size: 16px; background: #fff; color: #333; box-shadow: 0 2px 10px rgba(0,0,0,0.08); }
      .menu-btn.active { background: #dbeafe; color: #1d4ed8; }
      .logout-btn { margin-top: auto; }
      @media (max-width: 768px) {
        .layout { flex-direction: column; }
        .sidebar { width: 100% !important; padding: 12px !important; }
        .uia { font-size: 38px !important; }
        .menu-list { flex-direction: row !important; flex: none !important; }
        .menu-btn { padding: 12px 0 !important; justify-content: center !important; flex: 1 !important; }
        .menu-label { display: none !important; }
        .logout-btn { margin-top: 0 !important; }
      }
    `}</style>
    <div className="layout">
      <div className="sidebar">
        <div className="logo-box">
          <div className="uia">UIA</div>
          <div className="logo-text"><b>UNIVERSITAS</b><br /><span>ISLAM AS-SYAFI'IYAH</span></div>
        </div>
        <div className="menu-list">
          {menus.map((m) => (
            <button key={m.id} onClick={() => setActive(m.id)} className={active === m.id ? "menu-btn active" : "menu-btn"}>
              <Icon d={m.d} /><span className="menu-label">{m.label}</span>
            </button>
          ))}
          <button onClick={() => router.push("/login")} className="menu-btn logout-btn">
            <Icon d="M12 2v10 M18.36 6.64a9 9 0 1 1-12.73 0" /><span className="menu-label">Keluar</span>
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
