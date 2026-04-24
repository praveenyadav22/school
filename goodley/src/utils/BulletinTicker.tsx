"use client";

const BULLETIN_ITEMS = [
  { date: "23-01-2026", text: "OPEN SEATS AS PER CRITERIA FOR THE SESSION 2026-27" },
  { date: "23-01-2026", text: "LIST OF APPLICANTS IN WAITING LIST -1 A OF CLASS PRE-PRIMARY AFTER THE DRAW UNDER OPEN SEATS HELD ON 20TH JANUARY 2026" },
  { date: "31-03-2026", text: "Fee Structure for session 2025-2026 (unchanged) shall be charged w.e.f 01.04.2026 till further orders." },
  { date: "02-12-2025", text: "Nursery Registration Open for Session 2026-27" },
  { date: "21-04-2026", text: "Proud moment, brilliant results - Class X shines again" },
  { date: "09-01-2026", text: "PRE-SCHOOL / NURSERY (BAL VATIKA-I) LIST OF ALL REGISTERED APPLICATION FOR THE SESSION 2026-27" },
];

export default function BulletinTicker() {
  const items = BULLETIN_ITEMS.map(
    (item) =>
      `<span class="ticker-item"><span class="ticker-date">${item.date}</span><a href="/bulletin-board">${item.text}</a></span>`
  ).join("");

  return (
    <div className="bulletinTicker">
      <div className="container-fluid">
        <div className="ticker-wrap">
          <div
            dangerouslySetInnerHTML={{
              __html: `<marquee behavior="scroll" direction="left" scrolldelay="80" onmouseover="this.stop();" onmouseout="this.start();">${items}</marquee>`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
