"use client";

import Link from "next/link";

const CIRCULAR_ITEMS = [
  { date: "11-04-2025", href: "/academics/circulars", text: "Pre-School Registration for Session 2025-26 is now open" },
  { date: "09-04-2025", href: "/academics/circulars", text: "Nursery Admissions open for the Session 2025-26" },
  { date: "08-04-2025", href: "/academics/circulars", text: "Winter Carnival 2024-25 – All students to participate" },
  { date: "02-04-2025", href: "/academics/circulars", text: "3-Day Teachers Orientation Program – March 27-29, 2025" },
  { date: "24-03-2025", href: "/academics/circulars", text: "Parent Orientation Programme – प्रारंभ – A Grand Beginning" },
  { date: "18-03-2025", href: "/academics/circulars", text: "30th International Yogasana Sports Championship 2025" },
  { date: "10-03-2025", href: "/academics/circulars", text: "Fitness Fun Fusion Week – Day 5" },
  { date: "05-03-2025", href: "/academics/circulars", text: "Senior Girls Basketball Team wins historic victory" },
  { date: "02-03-2025", href: "/academics/circulars", text: "Digital Detox Session for Classes VI-VIII" },
  { date: "25-02-2025", href: "/academics/circulars", text: "Zonal Hindi Vaad-Vivaad Pratiyogita at DIPS" },
];

const Circulars = () => (
  <div className="body-conent pt-4">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="c-homeCircularslist">
            <h2 className="c-homeCircularslist__title">Latest Circulars</h2>
            <div className="c-homeCircularslist__content">
              <div className="scrolling-container">
                <ul className="listitem">
                  {[...CIRCULAR_ITEMS, ...CIRCULAR_ITEMS].map((item, i) => (
                    <li className="item" key={i}>
                      <span><i className="fa fa-calendar" /> {item.date}</span>
                      <div className="text">
                        <Link href={item.href}>{item.text}</Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Link href="/academics/circulars" className="c-button c-button-radius c-button-themered has-margin-top-15">
              View All
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Circulars;
