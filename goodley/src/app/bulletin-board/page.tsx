import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
export const metadata: Metadata = { title: "Bulletin Board" };
const ITEMS = [
  { date: "21-04-2026", title: "Proud moment, brilliant results - Class X shines again" },
  { date: "21-04-2026", title: "Water Conservation Tips" },
  { date: "31-03-2026", title: "Fee Structure for session 2025-2026 (unchanged) shall be charged w.e.f 01.04.2026 till further orders." },
  { date: "23-01-2026", title: "LIST OF APPLICANTS IN WAITING LIST -II B OF CLASS PRE-SCHOOL" },
  { date: "09-01-2026", title: "PRE-SCHOOL / NURSERY (BAL VATIKA-I) LIST OF ALL REGISTERED APPLICATION FOR THE SESSION 2026-27" },
  { date: "03-12-2025", title: "Our newly Renovated Nursery Building is ready to welcome our Little Learners" },
  { date: "02-12-2025", title: "Nursery Registration Open for Session 2026-27" },
];
export default function BulletinBoardPage() {
  return (
    <InnerPage title="Bulletin Board">
      {ITEMS.map((item, i) => (
        <div key={i} style={{ borderBottom: "1px solid #e9e9e9", paddingBottom: 16, marginBottom: 16, display: "flex", gap: 20 }}>
          <span style={{ color: "#ad870d", fontWeight: 600, minWidth: 100, fontSize: 13 }}>{item.date}</span>
          <p style={{ margin: 0 }}>{item.title}</p>
        </div>
      ))}
    </InnerPage>
  );
}
