"use client";

// Static data — replace with API/fetch when connecting to backend
const CIRCULAR_ITEMS = [
  { date: "11-04-2026", href: "/circular", text: "Badminton and Swimming Coaching at Birla Vidya Niketan" },
  { date: "11-04-2026", href: "/circular", text: "Orientation Class IX 2026-27" },
  { date: "11-04-2026", href: "/circular", text: "Circular Morning Coaching Football and Basketball" },
  { date: "11-04-2026", href: "/circular", text: "Summer school programmes 2026-27" },
  { date: "11-04-2026", href: "/circular", text: "HPAIR LEADERSHIP PROGRAM" },
  { date: "09-04-2026", href: "/circular", text: "Class IX Textbook Availability Status as on 09.04.2026" },
  { date: "08-04-2026", href: "/circular", text: "Textbooks availability status VI,VII,VIII and IX" },
  { date: "02-04-2026", href: "/circular", text: "Textbooks availability status IX and XI 2026-27" },
  { date: "24-03-2026", href: "/circular", text: "Subject Allocation for Class XI (Session 2026–27)" },
  { date: "23-03-2026", href: "/circular", text: "For Classes VIII and IX: HPV Vaccination" },
  { date: "18-03-2026", href: "/circular", text: "For Class X Second Board Examination 2025-26" },
  { date: "10-03-2026", href: "/circular", text: "The Mindful Parent: A 2-Day Immersive Workshop" },
  { date: "06-03-2026", href: "/circular", text: "Young Global Leaders Program SUMMER Camp at Harvard University" },
  { date: "05-03-2026", href: "/circular", text: "Canteen Menu March-2026" },
  { date: "02-03-2026", href: "/circular", text: "For Class 11: Annual Athlete Meet 2025-26" },
  { date: "02-03-2026", href: "/circular", text: "For classes vii to xi: Birla Vidya Niketan - HCUS Camp Flyer" },
  { date: "02-03-2026", href: "/circular", text: "Regarding the option for AC buses" },
  { date: "27-02-2026", href: "/circular", text: "Menu - Nursery, KG, I & 2 (March 2026)" },
  { date: "25-02-2026", href: "/circular", text: "We're Hiring AI Robotics Engineer" },
  { date: "25-02-2026", href: "/circular", text: "Circular REGARDING AIR CONDITIONING IN BUSES FROM THE ACADEMIC SESSION 2026-27" },
];

import Link from "next/link";

const Circulars = () => {
  return (
    <div className="body-conent pt-4">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="c-homeCircularslist">

              <h2 className="c-homeCircularslist__title">Latest Circulars</h2>

              <div className="c-homeCircularslist__content">
                <div className="scrolling-container">
                  <ul className="listitem">
                    {CIRCULAR_ITEMS.map((item, i) => (
                      <li className="item" key={i}>
                        <span>
                          <i className="ri-calendar-event-line" /> {item.date}
                        </span>
                        <div className="text">
                          <Link href={item.href}>{item.text}</Link>
                        </div>
                      </li>
                    ))}
                    {CIRCULAR_ITEMS.map((item, i) => (
                      <li className="item" key={`dup-${i}`}>
                        <span>
                          <i className="ri-calendar-event-line" /> {item.date}
                        </span>
                        <div className="text">
                          <Link href={item.href}>{item.text}</Link>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link href="/circular" className="default-btn btn">
                Explore More <i className="ri-arrow-right-line" />
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Circulars;