"use client";
import Link from "next/link";

const NEWS_ITEMS = [
  { href: "/news", title: "Proud moment, brilliant results - Class X shines again" },
  { href: "/news", title: "Fee Structure for session 2025-2026 (unchanged) shall be charged w.e.f 01.04.2026 till further orders." },
  { href: "/news", title: "CLASS I- LIST OF ALL REGISTERED APPLICANTS FOR THE SESSION 2026-27" },
  { href: "/news", title: "PRE-SCHOOL/ NURSERY LIST OF ALL REGISTERED APPLICANTS FOR THE SESSION 2026-27" },
  { href: "/news", title: "PRE-PRIMARY (K.G.) LIST OF ALL REGISTERED APPLICANTS FOR THE SESSION 2026-27" },
  { href: "/news", title: "Nursery Registration Open for Session 2026-27" },
  { href: "/news", title: "CLASS XII CBSE RESULT HIGHLIGHTS" },
  { href: "/news", title: "CLASS X CBSE RESULT HIGHLIGHTS" },
];

export default function LatestNews() {
  return (
    <div id="news_row" style={{ height: 200, overflow: "hidden", position: "relative" }}>
      <NewsMarquee />
    </div>
  );
}

function NewsMarquee() {
  // Use dangerouslySetInnerHTML to avoid TypeScript marquee type conflicts
  const content = NEWS_ITEMS.map(item =>
    `<article><div class="event-block"><div class="event-meta"><div class="event-content"><h4 class="event-title"><a href="${item.href}">${item.title}</a></h4></div></div></div></article>`
  ).join('');

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<marquee scrollamount="3" direction="up" height="200" onmousemove="this.stop();" onmouseout="this.start();">${content}</marquee>`
      }}
    />
  );
}
