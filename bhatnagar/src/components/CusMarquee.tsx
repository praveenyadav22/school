"use client";

import React from "react";

const BULLETIN_ITEMS = [
  { href: "/bulletin-board/1", text: "We congratulate Ms. Shilpa Bhatnagar, our honourable Principal, on being awarded the prestigious Nari Shakti Puraskar 2026 in recognition of her outstanding contributions as an innovative women educator." },
  { href: "/bulletin-board/2", text: "Bhatnagar International School proudly congratulates Ms. Shilpa Bhatnagar on being honoured as Outstanding Principal in School Education at the Bharat Gaurav Education Excellence Summit & Awards 2026." },
  { href: "/bulletin-board/3", text: "Heartiest Congratulations Ms. Shilpa Bhatnagar! Honouring Educational Leadership - PIONEER IN EDUCATION conferred upon the Principal, Bhatnagar International School, Vasant Kunj, New Delhi." },
  { href: "/bulletin-board/4", text: "A Moment of Pride! Ms. Shilpa Bhatnagar, Principal, has been conferred the Performance Excellence Award 2025 by RIFACIMENTO INTERNATIONAL." },
  { href: "/bulletin-board/5", text: "Online Registration Open for Class - I" },
  { href: "/bulletin-board/6", text: "Congratulations to Ms. Shilpa Bhatnagar, Principal, on being awarded Best Educator at Education Excellence Awards Ceremony, 2025, by the Ministry of Education." },
  { href: "/bulletin-board/7", text: "Bhatnagar International School, Vasant Kunj wins Prestigious Award in Education in Circular Economy for the Remarkable Environment Initiatives!" },
  { href: "/bulletin-board/8", text: "Under the illustrious leadership & able guidance of Principal Ms. Shilpa Bhatnagar, Bhatnagar International School, Vasant Kunj gets featured in FORBES INDIA." },
];

export default function CusMarquee() {
  return (
    <div className="topNewsticker__wrapper">
      {React.createElement(
        "marquee" as any,
        {
          behavior: "scroll",
          direction: "left",
          onMouseOver: (e: React.MouseEvent<HTMLElement>) => {
            const el = e.currentTarget as any;
            if (el.stop) el.stop();
          },
          onMouseOut: (e: React.MouseEvent<HTMLElement>) => {
            const el = e.currentTarget as any;
            if (el.start) el.start();
          },
          scrolldelay: 100,
          id: "bulletin_row",
        },
        BULLETIN_ITEMS.map((item, i) => (
          <span key={i}>
            <a href={item.href}>{item.text}</a>
          </span>
        ))
      )}
    </div>
  );
}
