"use client";

import React from "react";
import Link from "next/link";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      marquee: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          behavior?: string;
          direction?: string;
          scrolldelay?: number;
          scrollamount?: number;
          height?: string;
        },
        HTMLElement
      >;
    }
  }
}

const BULLETIN_ITEMS = [
  { date: "14-04-2025", href: "/bulletin-board/1", text: "Birth Anniversary – Dr. Babasaheb Ambedkar" },
  { date: "01-04-2025", href: "/bulletin-board/2", text: "Story Dramatization – Pre School – I" },
  { date: "01-04-2025", href: "/bulletin-board/3", text: "Satrarambh – An Auspicious Beginning" },
  { date: "31-03-2025", href: "/bulletin-board/4", text: "Exuberance Week" },
  { date: "30-03-2025", href: "/bulletin-board/5", text: "Exuberance Week – Day 3" },
  { date: "29-03-2025", href: "/bulletin-board/6", text: "Good Luck Ceremony" },
  { date: "28-03-2025", href: "/bulletin-board/7", text: "First Day – Pre School" },
];

const BUS_ITEMS = [
  { date: "18-02-2025", href: "/school-info/school-timings", text: "Bus Route S-02 will be late due to traffic" },
  { date: "18-02-2025", href: "/school-info/school-timings", text: "Bus Route S-10 will be late due to breakdown" },
  { date: "06-02-2025", href: "/school-info/school-timings", text: "S-10 bus will be late due to traffic jam" },
  { date: "27-01-2025", href: "/school-info/school-timings", text: "S-13 bus will be late – replacement will be arranged" },
];

interface NewsItem { date: string; href: string; text: string; }

const MarqueeRow = ({ items }: { items: NewsItem[] }) =>
  React.createElement(
    "div",
    { className: "c-latestnewwrap__content--text" },
    React.createElement(
      "marquee" as any,
      {
        behavior: "scroll",
        direction: "left",
        scrolldelay: 100,
        onMouseOver: (e: React.MouseEvent<HTMLElement>) => { (e.currentTarget as any).stop?.(); },
        onMouseOut:  (e: React.MouseEvent<HTMLElement>) => { (e.currentTarget as any).start?.(); },
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

const LatestNews = () => (
  <>
    <div className="c-latestnewwrap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="c-latestnewwrap__content">
              <h5 className="c-latestnewwrap__content--title">Bulletin Board</h5>
              <MarqueeRow items={BULLETIN_ITEMS} />
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
              <MarqueeRow items={BUS_ITEMS} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default LatestNews;
