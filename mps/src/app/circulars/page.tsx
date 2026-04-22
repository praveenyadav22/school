import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Circulars" };

const CIRCULARS = [
  { date: "11-04-2026", title: "Badminton and Swimming Coaching at MPS" },
  { date: "11-04-2026", title: "Orientation Class IX 2026-27" },
  { date: "11-04-2026", title: "Circular Morning Coaching Football and Basketball" },
  { date: "11-04-2026", title: "Summer school programmes 2026-27" },
  { date: "09-04-2026", title: "Class IX Textbook Availability Status as on 09.04.2026" },
  { date: "08-04-2026", title: "Textbooks availability status VI, VII, VIII and IX" },
  { date: "02-04-2026", title: "Textbooks availability status IX and XI 2026-27" },
  { date: "24-03-2026", title: "Subject Allocation for Class XI (Session 2026–27)" },
  { date: "23-03-2026", title: "For Classes VIII and IX: HPV Vaccination" },
  { date: "18-03-2026", title: "For Class X Second Board Examination 2025-26" },
  { date: "10-03-2026", title: "The Mindful Parent: A 2-Day Immersive Workshop" },
  { date: "06-03-2026", title: "Young Global Leaders Program SUMMER Camp at Harvard University" },
  { date: "05-03-2026", title: "Canteen Menu March-2026" },
  { date: "02-03-2026", title: "For Class 11: Annual Athlete Meet 2025-26" },
  { date: "02-03-2026", title: "Regarding the option for AC buses" },
];

export default function CircularsPage() {
  return (
    <InnerPage title="Circulars">
      <div className="normalContent">
        <h2>Latest Circulars</h2>
        <p>Stay updated with important notices and announcements from Modern Public School.</p>
        <ul className="circulars-list" style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {CIRCULARS.map((c, i) => (
            <li key={i} className="circulars-list__item">
              <span className="date">
                <i className="fa fa-calendar" style={{ marginRight: "6px", color: "#4dc3cf" }} />
                {c.date}
              </span>
              <div className="text">
                <a href="#">{c.title}</a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </InnerPage>
  );
}
