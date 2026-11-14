"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

function IconHome() {
  return (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10.5L12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /><path d="M9.5 21v-6h5v6" /></svg>);
}
function IconInvoice() {
  return (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M9 13h6" /><path d="M9 17h6" /></svg>);
}
function IconCustomers() {
  return (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3.2" /><path d="M2.5 20c0-3.3 2.9-5 6.5-5s6.5 1.7 6.5 5" /><circle cx="17" cy="9" r="2.5" /><path d="M16 14.6c2.8 0.4 5.5 2 5.5 5.4" /></svg>);
}
function IconPower() {
  return (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v10" /><path d="M18.3 6.3a9 9 0 1 1-12.6 0" /></svg>);
}

export default function DashboardPage() {
  const [active, setActive] = useState("home");
  const router = useRouter();
  const menus = [
    { id: "home", label: "Home", Icon: IconHome },
    { id: "invoices", label: "Invoices", Icon: IconInvoice },
    { id: "customers", label: "Customers", Icon: IconCustomers },
  ];
  let title = "Dashboard Page";
  if (active === "invoices") title = "Invoices Page";
  if (active === "customers") title = "Customers Page";
  return (
    <>
    <style>{`
      .layout { display: flex; min-height: 100vh; background: #eaf2ff; font-family: sans-serif; }
      .sidebar { width: 280px; background: #fff; padding: 16px 12px; display: flex; flex-direction: column; gap: 12px; box-sizing: border-box; flex-shrink: 0; }
      .logo-box { width: 100%; border-radius: 16px; overflow: hidden; background: #2563eb; display: block; }
      .logo-box img { width: 100%; height: auto; display: block; }
      .menu-list { display: flex; flex-direction: column; gap: 12px; flex: 1; }
      .menu-btn { display: flex; align-items: center; justify-content: center; gap: 10px; width: 100%; padding: 14px; border-radius: 14px; border: none; cursor: pointer; font-size: 16px; background: #fff; color: #333; box-shadow: 0 2px 10px rgba(0,0,0,0.08); }
      .menu-btn.active { background: #dbeafe; color: #1d4ed8; }
      .logout-btn { margin-top: auto; }
      @media (max-width: 768px) {
        .layout { flex-direction: column; }
        .sidebar { width: 100% !important; padding: 12px !important; }
        .menu-list { flex-direction: row !important; flex: none !important; }
        .menu-btn { padding: 14px 0 !important; flex: 1 !important; }
        .menu-label { display: none !important; }
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
            <button key={m.id} onClick={() => setActive(m.id)} className={active === m.id ? "menu-btn active" : "menu-btn"}>
              <m.Icon /><span className="menu-label">{m.label}</span>
            </button>
          ))}
          <button onClick={() => router.push("/login")} className="menu-btn logout-btn">
            <IconPower /><span className="menu-label">Keluar</span>
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
