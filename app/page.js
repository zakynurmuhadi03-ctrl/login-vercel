"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(to bottom, #dbeafe, #eff6ff)", fontFamily: "Georgia, serif", display: "flex", flexDirection: "column" }}>
      
      {/* HEADER - GAMBAR PERSIS */}
      <div style={{ margin: "15px", borderRadius: "18px", overflow: "hidden", boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}>
        <img src="/header-uia.png" alt="Universitas Islam As-Syafi'iyah" style={{ width: "100%", display: "block" }} />
      </div>

      {/* KARTU SELAMAT DATANG */}
      <div style={{ background: "white", margin: "10px 15px", borderRadius: "22px", padding: "30px 24px", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
        <h1 style={{ fontSize: "27px", fontWeight: "800", color: "#1f2937", lineHeight: "1.35", margin: 0 }}>
          Selamat Datang!<br />
          <span style={{ fontWeight: "400" }}>Ini adalah situs web pembelajaran</span><br />
          <span style={{ fontWeight: "400", color: "#2563eb" }}>Mata Kuliah Web teknologi,</span>
          <span style={{ fontWeight: "400" }}> Dosen Pengampu </span>
          <span style={{ fontWeight: "700" }}>Adhitya Ahmad Pradypta, S.Kom., M.T.I.</span>
        </h1>

        <button onClick={() => router.push("/login")} style={{ marginTop: "24px", background: "#2563eb", color: "white", border: "none", padding: "13px 26px", borderRadius: "999px", fontSize: "17px", display: "flex", alignItems: "center", gap: "14px", cursor: "pointer", fontFamily: "Arial, sans-serif" }}>
          Log in <span style={{ fontSize: "20px" }}>→</span>
        </button>
      </div>

      {/* FOOTER - NAMA UDAH ZAKY */}
      <div style={{ marginTop: "auto", textAlign: "center", padding: "20px", color: "#475569", fontSize: "15px", fontFamily: "Arial, sans-serif", lineHeight: "1.5" }}>
        Web ini dikerjakan oleh <b style={{ color: "#1f2937" }}>Zaky Nurmuhadi</b> |<br />
        3420230004 | Teknik Informatika - TFUIA
      </div>
    </div>
  );
}
