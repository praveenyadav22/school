"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const ITEMS = [
  { date: "14-04-2022", href: "/bulletin-board/1", text: "BIRTH ANNIVERSARY – DR. BABASAHEB AMBEDKAR" },
  { date: "01-04-2022", href: "/bulletin-board/2", text: "STORY DRAMATIZATION – PRE SCHOOL – I" },
  { date: "01-04-2022", href: "/bulletin-board/3", text: "SATRARAMBH" },
  { date: "31-03-2022", href: "/bulletin-board/4", text: "EXUBERANCE WEEK" },
  { date: "30-03-2022", href: "/bulletin-board/5", text: "EXUBERANCE WEEK – DAY 3" },
  { date: "29-03-2022", href: "/bulletin-board/6", text: "GOOD LUCK CEREMONY" },
  { date: "29-03-2022", href: "/bulletin-board/7", text: "EXUBERANCE WEEK – DAY 2" },
  { date: "28-03-2022", href: "/bulletin-board/8", text: "FIRST DAY – PRE SCHOOL" },
];

export default function BulletinBoard() {
  return (
    <div className="bulletinboardwrap hidden-xs hidden-sm">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="head">School Bulletin Board</div>
            <div className="contentwrap">
              <BulletinTicker items={ITEMS} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BulletinTicker({ items }: { items: typeof ITEMS }) {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className="bulletin-ticker"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <ul className={`bulletin-ticker__list${paused ? " paused" : ""}`}>
        {[...items, ...items].map((item, i) => (
          <li className="list-inline-item" key={i}>
            <span>{item.date}</span>{" "}
            <Link href={item.href}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
