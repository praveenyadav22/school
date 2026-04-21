"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const NEWS = [
  { id: "92ecade7", title: "LIST OF SELECTED STUDENTS FOR NURSERY ADMISSION 2026-27- II DRAW HELD ON 9.02.2026",                              date: "09-02-2026", by: "VIJAY LAXMI"   },
  { id: "71439040", title: "II WAITING LIST FOR NURSERY ADMISSION-II DRAW HELD ON 09.02.2026",                                               date: "09-02-2026", by: "VIJAY LAXMI"   },
  { id: "d0240d8d", title: "NOTICE FOR NURSERY ADMISSION - II nd DRAW (General Category) 2026-27",                                           date: "05-02-2026", by: "VIJAY LAXMI"   },
  { id: "b83a4bcc", title: "I WAITING LIST FOR NURSERY ADMISSION - 2026-27",                                                                 date: "23-01-2026", by: "NGF Alaknanda" },
  { id: "e83c9d7a", title: "LIST OF SELECTED STUDENTS FOR NURSERY ADMISSION 2026-27",                                                        date: "23-01-2026", by: "VIJAY LAXMI"   },
  { id: "7a4b6625", title: "School Level Fee Regulation Committee (SLFRC)",                                                                  date: "20-01-2026", by: "NGF Alaknanda" },
  { id: "4dcb75f2", title: "List of Applicants Registered for Admission to Pre School General Category 2026-27 (with Points)",               date: "16-01-2026", by: "VIJAY LAXMI"   },
  { id: "f4b7dcd0", title: "NOTICE FOR NURSERY ADMISSION - 1 st DRAW (General Category) 2026-27",                                           date: "16-01-2026", by: "VIJAY LAXMI"   },
  { id: "876d1cf8", title: "Notice for SLFRC",                                                                                               date: "09-01-2026", by: "VIJAY LAXMI"   },
  { id: "f377b456", title: "List of Applicants Registered for Admission to Pre School General Category 2026-27",                             date: "09-01-2026", by: "NGF Alaknanda" },
  { id: "0c663cab", title: "Upcoming Inter house Activities",                                                                                 date: "30-07-2025", by: "NGF Alaknanda" },
  { id: "e608077c", title: "Zenith Result 2025",                                                                                             date: "03-05-2025", by: "NGF Alaknanda" },
];

// ─── Bouncing ticker — replicates <marquee behavior="alternate" direction="up">
// Scrolls UP until top edge is reached, then reverses DOWN, repeat.
function NewsTicker() {
  const trackRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const outer = outerRef.current;
    if (!track || !outer) return;

    let pos       = 0;          // current translateY offset (px, positive = scrolled up)
    let direction = 1;          // 1 = scroll up (pos increases), -1 = scroll down
    let raf: number;
    let paused = false;
    const speed = 0.6;          // px per frame

    const tick = () => {
      if (!paused) {
        pos += speed * direction;

        // Max scroll = total content height minus the visible window height
        const maxPos = track.scrollHeight - outer.clientHeight;

        if (pos >= maxPos) {
          pos = maxPos;
          direction = -1;       // hit top → reverse downward
        } else if (pos <= 0) {
          pos = 0;
          direction = 1;        // hit bottom → reverse upward
        }

        track.style.transform = `translateY(-${pos}px)`;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    const pause  = () => { paused = true; };
    const resume = () => { paused = false; };

    outer.addEventListener("mouseenter", pause);
    outer.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(raf);
      outer.removeEventListener("mouseenter", pause);
      outer.removeEventListener("mouseleave", resume);
    };
  }, []);

  return (
    <div className="news-ticker-outer" ref={outerRef}>
      <div className="news-ticker-track" ref={trackRef}>
        {NEWS.map((n) => (
          <div key={n.id} className="event-item">
            <div className="event-details">
              <h3 className="mar-bottom-10">
                <Link href="/bulletin-board">{n.title}</Link>
              </h3>
              <ul className="event-time">
                <li>Posted On <i className="fa fa-clock-o" /> : {n.date}</li>
                <li>Posted By <i className="fa fa-user" /> : {n.by}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── UpcomingEvents ───────────────────────────────────────────
export default function UpcomingEvents() {
  return (
    <section className="edu-events">
      <div className="container">

        {/* Section heading — same as browser markup: above the row */}
        <div className="inner-heading">
          <h3>Upcoming News &amp; Updates</h3>
          <h2>New Green Field School - Alaknanda</h2>
        </div>

        <div className="row">

          {/* Left col — photo + floating white card */}
          <div className="col-md-6 col-sm-12">
            <div className="event-left">
              <Image
                src="/images/generic/01.jpg"
                alt="Welcome to NGFS"
                width={600}
                height={420}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              <div className="event-donation">
                <h2>Welcome to NGFS</h2>
                <p>
                  NEW GREEN FIELD SCHOOL is run and managed by a registered body - THE NEW GREEN
                  FIELD EDUCATIONAL SOCIETY. The society includes eminent educationists who provide
                  advice and guidance for achieving a high standard in academic growth. The school
                  is recognized as Senior Secondary School...
                </p>
                <Link href="/about-school" className="mt_btn_yellow">Read More</Link>
              </div>
            </div>
          </div>

          {/* Right col — bouncing news ticker + view all link */}
          <div className="col-md-6 col-sm-12">
            <div className="event-main">
              <NewsTicker />
              <Link href="/bulletin-board">
                View All News &amp; Updates <i className="fa fa-long-arrow-right" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
