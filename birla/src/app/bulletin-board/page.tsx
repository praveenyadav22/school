"use client";

import { useState } from "react";
import Link from "next/link";
import Pagination from "@/utils/Pagination";

// ── Types ─────────────────────────────────────────────────────
interface BulletinItem {
  id:      string;
  date:    string;
  title:   string;
  preview: string;   // short text shown below title
}

// ── Data — replace with API fetch when backend ready ──────────
const ITEMS: BulletinItem[] = [
  {
    id:      "f9cb703a-505c-42d1-938f-403ba1d162fb",
    date:    "13-04-2026",
    title:   "Nur.-XII: Tuesday, 14/4/26 will be a holiday on account of Dr Ambedkar Jayanti.",
    preview: ".",
  },
  {
    id:      "14f6ba1f-a7fe-49ac-873f-51b23511b7db",
    date:    "26-03-2026",
    title:   "Next session's classes vii to ix.",
    preview: "Next session's classes vii to ix. Dear parents, We look forward to meeting you on Sat. 28/3/26 as per the PTM and orientation time sent earlier. Kindly procure the stationary, uniform etc for your ward. The new session will commence from Wednesday, 1/4/26 at regular timin...",
  },
  {
    id:      "6f3fd8c1-fca5-4f30-bac9-f5678881b53f",
    date:    "19-03-2026",
    title:   "Dear Students. As you step into a new academic year, we invite you to take on greater responsibility and leadership within the school. Students of Class VII (moving to Class VIII) and Class X (moving to Class XI) are encouraged to apply for the Student Council positions through the Self-Nomination Form.",
    preview: "Dear Students. As you step into a new academic year, we invite you to take on greater responsibility and leadership within the school. Students of Class VII (moving to Class VIII) and Class X (moving to Class XI) are encouraged to apply for the Student Council positions through th...",
  },
  {
    id:      "8689160d-2bb0-48cd-b9a5-6d3ca200ba1c",
    date:    "18-03-2026",
    title:   "We confirm that AC buses would be plying on all routes with effect from 1/4/26 (Session 2026-27)",
    preview: ".",
  },
  {
    id:      "82658297-2a78-48a3-a61c-e4756ab1da46",
    date:    "02-03-2026",
    title:   "For Classes VI, VII, VIII",
    preview: "Classes VI, VII, VIII. To enable children enjoy Holi the school has given off a day prior and a day after the festival. Playing with colours might be harmful leading to allergies or colour going in eyes, mouth etc. On Monday morning the Principal requested children not to play Holi in s...",
  },
  {
    id:      "9e1b617f-f90b-4e88-b53a-b2722fa30a90",
    date:    "01-03-2026",
    title:   "Classes VI-IX, XI. The school will get over at 11:30 am after the exams. Buses and OT children will leave at 11:40 am. Kindly make arrangements to pick up your wards accordingly. We regret informing late and the inconveniene caused.",
    preview: ".",
  },
  {
    id:      "00cec347-ecbe-412b-9781-55a32be12fc6",
    date:    "28-02-2026",
    title:   "Class KG-XI. It has been noticed that most of the vans privately hired by parents for their children are not authorised for this task and do not have adequate licenses etc. Kindly ensure that our children travel safe. School buses must be used as far as possible.",
    preview: ".",
  },
  {
    id:      "8ab26c65-0a1c-4be0-b8ce-4e4ff4f06c7e",
    date:    "05-02-2026",
    title:   "Important Information Pariksha Pe Charcha 2026",
    preview: "For All Nursery-XII. Important Information Pariksha Pe Charcha 2026 will be telecast on 6th February 2026 at 10:00 AM. Students, parents, and teachers are encouraged to view the programme live on YouTube, Facebook Live, Doordarshan, Swayam Prabha TV Channel, Radio channels, a...",
  },
  {
    id:      "placeholder-09",
    date:    "01-02-2026",
    title:   "Bulletin Board Item 9",
    preview: ".",
  },
  {
    id:      "placeholder-10",
    date:    "15-01-2026",
    title:   "Bulletin Board Item 10",
    preview: ".",
  },
  {
    id:      "placeholder-11",
    date:    "01-01-2026",
    title:   "Bulletin Board Item 11",
    preview: ".",
  },
  {
    id:      "placeholder-12",
    date:    "15-12-2025",
    title:   "Bulletin Board Item 12",
    preview: ".",
  },
];

const ITEMS_PER_PAGE = 8;

export default function BulletinBoardPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(ITEMS.length / ITEMS_PER_PAGE);
  const startIdx   = (currentPage - 1) * ITEMS_PER_PAGE;
  const pageItems  = ITEMS.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  const goToPrev = () => { if (currentPage > 1) setCurrentPage((p) => p - 1); };
  const goToNext = () => { if (currentPage < totalPages) setCurrentPage((p) => p + 1); };

  return (
    <>
      <div className="body-conent ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="inner-content">

                {/* Browser: <h3>Bulletin Board</h3> */}
                <div className="content-heading">
                  <h3>Bulletin Board</h3>
                </div>

                {/* Browser: <div class="news-cardlist" id="bulletin_row"> */}
                <div className="news-cardlist" id="bulletin_row">
                  {pageItems.map((item, i) => (
                    <div
                      className="news-cardlist__list latest justify-content-center"
                      key={startIdx + i}
                    >

                      {/* Browser: <div class="news-cardlist__list--date"> */}
                      <div className="news-cardlist__list--date">
                        <span className="date">{item.date}</span>
                        <div className="news-cardlist__list__img">
                          <img src="/images/icons/birla-icon.png" alt={item.title} />
                        </div>
                      </div>

                      {/* Browser: <div class="news-cardlist__list--content"> */}
                      <div className="news-cardlist__list--content">
                        <h2 className="title">{item.title}</h2>
                        <p className="text"></p>
                        <p>
                          {item.preview}{" "}
                          {/* Browser: <a class="default-btn btn theme-color" href="...">Explore More</a> */}
                          <span>
                            <Link
                              href={`/bulletin-board/${item.id}`}
                              className="default-btn btn theme-color"
                            >
                              Explore More
                            </Link>
                          </span>
                        </p>
                        <p></p>
                      </div>

                    </div>
                  ))}
                </div>

                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPrev={goToPrev}
                  onNext={goToNext}
                />

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
