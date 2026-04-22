"use client";

import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      marquee: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          behavior?: string;
          direction?: string;
          scrolldelay?: number;
          onmouseover?: string;
          onmouseout?: string;
        },
        HTMLElement
      >;
    }
  }
}

// Static data — replace with API/fetch calls when connecting to backend
const BULLETIN_ITEMS = [
  { date: "26-03-2026", href: "/bulletin-board/14f6ba1f", text: "Next session's classes vii to ix." },
  { date: "19-03-2026", href: "/bulletin-board/6f3fd8c1", text: "Dear Students. As you step into a new academic year, we invite you to take on greater responsibility and leadership within the school." },
  { date: "18-03-2026", href: "/bulletin-board/8689160d", text: "We confirm that AC buses would be plying on all routes with effect from 1/4/26 (Session 2026-27)" },
  { date: "02-03-2026", href: "/bulletin-board/82658297", text: "For Classes VI, VII, VIII" },
  { date: "01-03-2026", href: "/bulletin-board/9e1b617f", text: "Classes VI-IX, XI. The school will get over at 11:30 am after the exams." },
  { date: "28-02-2026", href: "/bulletin-board/00cec347", text: "Class KG-XI. It has been noticed that most of the vans privately hired by parents are not authorised for this task." },
  { date: "05-02-2026", href: "/bulletin-board/8ab26c65", text: "Important Information Pariksha Pe Charcha 2026" },
  { date: "05-02-2026", href: "/bulletin-board/720a9038", text: "Dear Parents of classes VI-XII: National-level Aryabhatta Talent Search Test in Mathematics and Science 2026" },
  { date: "03-02-2026", href: "/bulletin-board/32bc8eb8", text: "Timeline related to term II Exams for classes VI-VIII" },
  { date: "03-02-2026", href: "/bulletin-board/e72546a7", text: "Timeline related to term II Exams for classes IX" },
];

const BUS_ITEMS = [
  { date: "18-02-2025", href: "/bus-updates", text: "S-02 and S-21 will be late due to traffic jam" },
  { date: "18-02-2025", href: "/bus-updates", text: "S-10 will be late due to breakdown." },
  { date: "06-02-2025", href: "/bus-updates", text: "S-10 bus will be late due to traffic jam." },
  { date: "27-01-2025", href: "/bus-updates", text: "S-13 bus will be late due to breakdown. Replacement will be arranged soon." },
  { date: "23-01-2025", href: "/bus-updates", text: "S-2 and S-22 bus will be late due to traffic jam" },
  { date: "18-12-2024", href: "/bus-updates", text: "S-35 will be late due to breakdown" },
  { date: "02-12-2024", href: "/bus-updates", text: "S-36 bus will be late due to breakdown" },
  { date: "09-07-2024", href: "/bus-updates", text: "Due to heavy rain all Buses will be late due to traffic jam" },
];

interface NewsItem {
  date: string;
  href: string;
  text: string;
}

interface MarqueeRowProps {
  items: NewsItem[];
  scrollDelay?: number;
}

// Inner marquee row
const MarqueeRow = ({ items, scrollDelay = 100 }: MarqueeRowProps) => {
  return React.createElement(
    "div",
    { className: "c-latestnewwrap__content--text" },
    React.createElement(
      "marquee" as any,
      {
        behavior: "scroll",
        direction: "left",
        onMouseOver: (e: React.MouseEvent<HTMLElement>) => {
          const marqueeEl = e.currentTarget as any;
          if (marqueeEl.stop) marqueeEl.stop();
        },
        onMouseOut: (e: React.MouseEvent<HTMLElement>) => {
          const marqueeEl = e.currentTarget as any;
          if (marqueeEl.start) marqueeEl.start();
        },
        scrolldelay: scrollDelay, // ✅ FIXED
      },
      React.createElement(
        "ul",
        { className: "list" },
        items.map((item, i) =>
          React.createElement(
            "li",
            { className: "item", key: i },
            React.createElement("span", null, item.date),
            " ",
            React.createElement("a", { href: item.href }, item.text)
          )
        )
      )
    )
  );
};

// ── Main component ───────────────────────────────
const LatestNews = () => {
  return (
    <>
      <div className="c-latestnewwrap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="c-latestnewwrap__content">
                <h5 className="c-latestnewwrap__content--title">Bulletin Board</h5>
                <MarqueeRow items={BULLETIN_ITEMS} scrollDelay={100} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="c-latestnewwrap v2 latestBusUpdate">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="c-latestnewwrap__content">
                <h5 className="c-latestnewwrap__content--title">Bus Updates</h5>
                <MarqueeRow items={BUS_ITEMS} scrollDelay={150} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNews;