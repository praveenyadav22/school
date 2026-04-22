"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

const NEWS_ITEMS = [
  { href: "/news-updates/1", text: "Participation in Online Contests/Activities on MyGov Portal as part of Republic Day Celebrations 2026" },
  { href: "/news-updates/2", text: "Bhatnagar International School-Upgraded Mobile App 2025" },
  { href: "/news-updates/3", text: "Voters Day Pledge #NVD2025" },
  { href: "/news-updates/4", text: "Times School Survey 2023" },
  { href: "/news-updates/5", text: "Bhatnagar International School, Vasant Kunj hosts felicitation ceremony of project titled Passport to Earning" },
  { href: "/news-updates/6", text: "Bhatnagar International School, Vasant Kunj is one of the leading CBSE schools to be certified in the Pilot phase of Passport to Earning (P2E)" },
  { href: "/news-updates/7", text: "Alumni Alert" },
];

function ScrollingNews({ items }: { items: typeof NEWS_ITEMS }) {
  const listRef = useRef<HTMLUListElement>(null);
  const frameRef = useRef<number>(0);
  const posRef = useRef<number>(0);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    const step = () => {
      posRef.current += 0.5;
      if (posRef.current >= el.scrollHeight / 2) {
        posRef.current = 0;
      }
      el.style.transform = `translateY(-${posRef.current}px)`;
      frameRef.current = requestAnimationFrame(step);
    };

    frameRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  const doubled = [...items, ...items];

  return (
    <div className="themeMarquee smartmarquee" style={{ overflow: "hidden", height: "191px" }}>
      <ul className="maruqeeContent" ref={listRef} style={{ margin: 0, padding: 0, listStyle: "none" }}>
        {doubled.map((item, i) => (
          <li key={i}>
            <Link href={item.href}>{item.text}</Link>
          </li>
        ))}
      </ul>
      <Link href="/news-updates" className="themeButton fillButton transition4s">Read All</Link>
    </div>
  );
}

export default function SchoolInfo() {
  return (
    <div className="schoolblock__wrapper">
      <div className="container">
        <div className="row">
          {/* Principal's Desk */}
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="schoolblock__wrapper-content">
              <section className="section-head">
                <h4>From Principal&apos;s Desk</h4>
              </section>
              <div className="main-content">
                <Link href="/from-principal-desk">
                  <figure>
                    <Image src="/images/generic/home-principal.jpg" width={400} height={300} className="img-responsive" alt="Principal's Desk" />
                  </figure>
                  <div className="main-content-overlay">
                    <h5><span className="fa fa-calendar"></span> From Principal&apos;s Desk</h5>
                    <p>&quot;Imbibe today, Lead tomorrow&quot; encapsulates the essence of pedagogy at Bhatnagar International School, Vasant Kunj. Providing students...</p>
                    <span>Continue</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Campus Tour */}
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="schoolblock__wrapper-content">
              <section className="section-head">
                <h4>BIS Campus Tour</h4>
              </section>
              <div className="main-content">
                <a href="https://quickcampus-webcms-dev.s3.ap-south-1.amazonaws.com/V-tour/BIS-Vtour/tour.html" target="_blank" rel="noopener noreferrer">
                  <figure>
                    <Image src="/images/generic/home-campus-tour.jpg" width={400} height={300} className="img-responsive" alt="BIS Campus Tour" />
                  </figure>
                </a>
              </div>
            </div>
          </div>

          {/* Latest News */}
          <div className="col-md-4 col-sm-12 col-xs-12">
            <div className="schoolblock__wrapper-content">
              <section className="section-head">
                <h4>Latest News &amp; Updates</h4>
              </section>
              <ScrollingNews items={NEWS_ITEMS} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
