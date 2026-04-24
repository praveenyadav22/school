import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
export const metadata: Metadata = { title: "Latest News & Updates" };
const NEWS = [
  { date: "21-04-2026", title: "Proud moment, brilliant results - Class X shines again", excerpt: "Proud moment, brilliant results - Class X shines again" },
  { date: "31-03-2026", title: "Fee Structure for session 2025-2026 (unchanged) shall be charged w.e.f 01.04.2026", excerpt: "Fee Structure" },
  { date: "02-12-2025", title: "Nursery Registration Open for Session 2026-27", excerpt: "Nursery Registration Open for Session 2026-27" },
  { date: "14-05-2024", title: "CLASS XII CBSE RESULT HIGHLIGHTS", excerpt: "CLASS XII CBSE RESULT HIGHLIGHTS" },
  { date: "14-05-2024", title: "CLASS X CBSE RESULT HIGHLIGHTS", excerpt: "CLASS X CBSE RESULT HIGHLIGHTS" },
];
export default function NewsPage() {
  return (
    <InnerPage title="Latest News & Updates">
      {NEWS.map((item, i) => (
        <div key={i} style={{ borderBottom: "1px solid #e9e9e9", paddingBottom: 20, marginBottom: 20 }}>
          <p style={{ color: "#ad870d", fontSize: 13, marginBottom: 6 }}>{item.date}</p>
          <h4 style={{ marginTop: 0 }}>{item.title}</h4>
          <p>{item.excerpt}</p>
        </div>
      ))}
    </InnerPage>
  );
}
