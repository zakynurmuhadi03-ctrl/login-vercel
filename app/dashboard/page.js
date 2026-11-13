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
      .sidebar { width: 280px; background: #fff; padding: 16px 12px; display: flex; flex-direction: column; gap: 12px; height: 100vh; box-sizing: border-box; position: sticky; top: 0; flex-shrink: 0; }
      .menu-btn { display: flex; align-items: center; gap: 10px; width: 100%; padding: 14px 14px; border-radius: 14px; border: none; cursor: pointer; font-size: 16px; background: #fff; color: #333; box-shadow: 0 2px 10px rgba(0,0,0,0.08); }
      .menu-btn.active { background: #dbeafe; color: #1d4ed8; }
      .content { flex: 1; padding: 24px; display: flex; flex-direction: column; min-width: 0; }
      @media (max-width: 768px) {
        .sidebar { width: 90px !important; }
        .menu-btn { justify-content: center !important; padding: 14px 0 !important; }
        .menu-label { display: none !important; }
      }
    `}</style>

    <div style={{ display: "flex", minHeight: "100vh", background: "#eaf2ff", fontFamily: "sans-serif" }}>
      <div className="sidebar">
  <div style={{ width: "100%", height: "200px", borderRadius: "20px", overflow: "hidden" }}>
            <img src="/header-uia.png" alt="UIA" style={{ width: "225%", height: "200px", objectFit: "fill", objectPosition: "left center", display: "block" }} />
        </div>

        {menus.map((m) => (
          <button key={m.id} onClick={() => setActive(m.id)} className={active === m.id ? "menu-btn active" : "menu-btn"}>
            <span style={{ fontSize: "18px" }}>{m.icon}</span> <span className="menu-label">{m.label}</span>
          </button>
        ))}

        <div style={{ flex: 1 }}></div>

        <div className="logout-wrap">
          <button onClick={() => router.push("/login")} className="menu-btn">
            <span style={{ fontSize: "18px" }}>⏻</span> <span className="menu-label">Keluar</span>
          </button>
        </div>
      </div>

      <div className="content">
        <div style={{ background: "#fff", borderRadius: "18px", padding: "24px" }}>
          {active === "home" && <h2 style={{ margin: 0 }}>Dashboard Page</h2>}
          {active === "invoices" && <h2 style={{ margin: 0 }}>Invoices Page</h2>}
          {active === "customers" && <h2 style={{ margin: 0 }}>Customers Page</h2>}
          <p style={{ color: "#666", fontSize: "14px", marginBottom: 0 }}></p>
        </div>
        <div style={{ marginTop: "auto", textAlign: "center", padding: "20px 10px 10px", fontSize: "13px", color: "#555", lineHeight: "1.6" }}>
          Web ini dikerjakan oleh <b>Zaky Nurmuhadi</b><br />
          3420230010 | Teknik Informatika - TFI UIA
        </div>
      </div>
    </div>
    </>
  );
}
