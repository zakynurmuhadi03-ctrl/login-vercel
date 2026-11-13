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
        .page { min-height: 100vh; background: #eaf2ff; font-family: sans-serif; padding: 16px; box-sizing: border-box; display: flex; flex-direction: column; }
        .top-header { width: 100%; height: 210px; border-radius: 20px; overflow: hidden; flex-shrink: 0; }
        .top-header img { width: 100%; height: 100%; object-fit: fill; display: block; }
        .main { display: flex; gap: 16px; margin-top: 16px; flex: 1; align-items: flex-start; }
        .sidebar { width: 280px; flex-shrink: 0; background: #fff; padding: 16px; border-radius: 18px; display: flex; flex-direction: column; gap: 10px; }
        .menu-btn { display: flex; align-items: center; gap: 10px; width: 100%; padding: 14px; border-radius: 14px; border: none; cursor: pointer; text-align: left; font-size: 14px; background: #fff; color: #333; box-shadow: 0 2px 10px rgba(0,0,0,0.08); }
        .menu-btn.active { background: #dbeafe; color: #1d4ed8; font-weight: 700; }
        .content { flex: 1; display: flex; flex-direction: column; min-width: 0; }
        .white-box { background: #fff; border-radius: 10px; padding: 28px 28px 30px 28px; margin: 18px 0 18px 12px; max-width: 620px; width: 100%; box-sizing: border-box; box-shadow: 0 4px 20px rgba(0,0,0,0.06); }
        .footer { margin-top: auto; text-align: center; padding: 20px 10px 10px; font-size: 13px; color: #555; line-height: 1.6; }
        @media (max-width: 768px) {
          .page { padding: 12px; }
          .top-header { height: 150px; }
          .main { flex-direction: column; }
          .sidebar { width: 100%; box-sizing: border-box; flex-direction: row; padding: 12px; }
          /* DI HP - TULISAN DISEMBUNYIIN, TINGGAL ICON */
          .menu-label { display: none; }
          .menu-btn { flex: 1; justify-content: center; padding: 14px 0; font-size: 20px; }
          .menu-btn.active { background: #2f6bff; color: #fff; }
          .white-box { margin: 18px 4px; max-width: 100%; }
        }
      `}</style>

      <div className="page">
        <div className="top-header">
          <img src="/header-uia.png" alt="UIA" />
        </div>

        <div className="main">
          <div className="sidebar">
            {menus.map((m) => (
              <button key={m.id} onClick={() => setActive(m.id)} className={`menu-btn ${active === m.id ? "active" : ""}`}>
                <span style={{ fontSize: "20px" }}>{m.icon}</span>
                <span className="menu-label">{m.label}</span>
              </button>
            ))}
            <button onClick={() => router.push("/login")} className="menu-btn">
              <span style={{ fontSize: "20px" }}>⏻</span>
              <span className="menu-label">Keluar</span>
            </button>
          </div>

          <div className="content">
            <div className="white-box">
              {active === "home" && (
                <>
                  <h2 style={{ margin: 0, fontSize: "32px", fontWeight: "800", lineHeight: "1.2" }}>Selamat Datang!</h2>
                  <p style={{ fontSize: "22px", lineHeight: "1.5", color: "#111", margin: "10px 0 0", fontWeight: "600" }}>
                    Ini adalah situs web pembelajaran<br />
                    <span style={{ color: "#2f6bff" }}>Mata Kuliah Web teknologi</span>,<br />
                    Dosen Pengampu<br />
                    Adhitya Ahmad Pradypta, S.Kom., M.T.I.
                  </p>
                  <p style={{ color: "#666", fontSize: "14px", margin: "16px 0 0" }}>Selamat datang, Zaky Nurmuhadi</p>
                </>
              )}
              {active === "invoices" && <h2 style={{ margin: 0 }}>Invoices Page</h2>}
              {active === "customers" && <h2 style={{ margin: 0 }}>Customers Page</h2>}
            </div>

            <div className="footer">
              Web ini dikerjakan oleh <b>Zaky Nurmuhadi</b><br />
              3420230010 | Teknik Informatika - TFI UIA
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
