"use client";

import { useState } from "react";
import Link from "next/link";

const NEWS_ITEMS = [
  { href: "/news/1", text: "Delighted to announce that our students have successfully represented the school at the National Level Science Olympiad." },
  { href: "/news/2", text: "Congratulations to the Class X students on their outstanding CBSE Board results!" },
  { href: "/news/3", text: "We are delighted to share that an insightful and impactful workshop was held for senior students." },
  { href: "/news/4", text: "We are thrilled to announce that De Indian Public School won the Best School Award 2024-25." },
  { href: "/news/5", text: "We are honoured to share that an erudite and thought-provoking session was organized for our students." },
  { href: "/news/6", text: "The event commenced with a warm welcome to our Chairman, Sh. H.R. Gupta." },
  { href: "/news/7", text: "It gives us immense joy to share that our article was featured in a leading educational magazine." },
  { href: "/news/8", text: "We are delighted to announce that our Sub-Junior Boys Team won the Gold Medal at the State Level." },
  { href: "/news/9", text: "Registration Process for Pre School is now open for Session 2025-26." },
  { href: "/news/10", text: "We are thrilled to share the outstanding achievements of our students in the Annual Sports Meet." },
  { href: "/news/11", text: "We are proud to share that our Junior Boys Handball Team secured First Position in the Zonal Tournament." },
  { href: "/news/12", text: "Winter Carnival 2025-26 was celebrated with great enthusiasm and spirit." },
];

export default function LatestUpdates() {
  const [paused, setPaused] = useState(false);

  return (
    <section>
      <h3><i className="fa fa-calendar" /> LATEST <span>UPDATES</span></h3>
      <div
        className="latest-updates-ticker"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className={`latest-updates-inner${paused ? " paused" : ""}`}>
          {[...NEWS_ITEMS, ...NEWS_ITEMS].map((item, i) => (
            <article key={i}>
              <div className="event-block">
                <div className="event-meta">
                  <div className="event-content">
                    <h4 className="event-title">
                      <Link href={item.href}>{item.text}</Link>
                    </h4>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <Link href="/news" className="c-button c-button-radius c-button-themered has-margin-top-15 has-margin-bottom-15">
        Read All
      </Link>
    </section>
  );
}
