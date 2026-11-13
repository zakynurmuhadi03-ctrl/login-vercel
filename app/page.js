"use client";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <div style={{ minHeight: "100vh", background: "#eef4ff", fontFamily: "Georgia, serif", display: "flex", flexDirection: "column" }}>
      
      {/* HEADER - FULL LEBAR KAYAK DI LAPTOP */}
      <div style={{ margin: "12px 12px 0 12px", borderRadius: "12px", overflow: "hidden" }}>
        <img src="/header-uia.png" alt="Universitas Islam As-Syafi'iyah" style={{ width: "100%", display: "block" }} />
      </div>

      {/* KARTU DI KIRI - PERSIS KAYAK FOTO */}
      <div style={{ background: "white", margin: "18px 0 0 18px", borderRadius: "10px", padding: "28px 28px 30px 28px", maxWidth: "520px", width: "calc(100% - 36px)", boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}>
        <h1 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", lineHeight: "1.4", margin: 0 }}>
          Selamat Datang!<br />
          <span style={{ fontWeight: "300" }}>Ini adalah situs web pembelajaran</span><br />
          <span style={{ fontWeight: "300", color: "#2563eb" }}>Mata Kuliah Web teknologi,</span>
          <span style={{ fontWeight: "300" }}> Dosen Pengampu </span>
          <span style={{ fontWeight: "600" }}>Adhitya Ahmad Pradypta, S.Kom., M.T.I.</span>
        </h1>

        <button onClick={() => router.push("/login")} style={{ marginTop: "22px", background: "#2563eb", color: "white", border: "none", padding: "10px 22px", borderRadius: "10px", fontSize: "14px", fontWeight: "600", display: "flex", alignItems: "center", gap: "10px", cursor: "pointer", fontFamily: "Arial, sans-serif" }}>
          Log in <span>→</span>
        </button>
      </div>

      {/* FOOTER - KECIL DI BAWAH TENGAH */}
    <div style={{ marginTop: "auto", textAlign: "center", padding: "40px 20px 18px", color: "#374151", fontSize: "13px", fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
        Web ini dikerjakan oleh <b>Zaky Nurmuhadi</b> | 3420230010 | Teknik Informatika - TFUIA<br />
        <span style={{ fontSize: "12px", color: "#6b7280" }}>© 2026 All Rights Reserved.</span>
      </div> 
    </div>
  );
}
