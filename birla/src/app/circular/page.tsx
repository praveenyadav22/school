"use client";

import { useState } from "react";
import Pagination from "@/utils/Pagination";

// ── Types ─────────────────────────────────────────────────────
interface CircularItem {
  date:     string;
  title:    string;
  preview:  string[];   // each string = one <p> tag, matches browser
  pdfUrl:   string;
}

// ── Data — replace with API fetch when backend ready ──────────
const ITEMS: CircularItem[] = [
  {
    date:    "11-04-2026",
    title:   "Badminton and Swimming Coaching at Birla Vidya Niketan",
    preview: ["."],
    pdfUrl:  "/web-content/circular/documents/UploadFile2026-04-11T03_59_17_543498424.pdf",
  },
  {
    date:    "11-04-2026",
    title:   "Circular Morning Coaching Football and Basketball",
    preview: ["."],
    pdfUrl:  "/web-content/circular/documents/UploadFile2026-04-11T09_38_05_375969816.pdf",
  },
  {
    date:    "11-04-2026",
    title:   "HPAIR LEADERSHIP PROGRAM",
    preview: [
      "Classes 7th-12th.",
      "Dear parents,\u00a0",
      "Meeting a Harvard student, gaining insights into the Ivy League journey, and earning a certificate is something every child aspires to.",
      "Let\u2019s make the most of this opportunity\u2014apply today!",
      "Only 2 seats remaining.",
    ],
    pdfUrl:  "/web-content/circular/documents/UploadFile2026-04-11T04_06_24_648488151.pdf",
  },
  {
    date:    "11-04-2026",
    title:   "Summer school programmes 2026-27",
    preview: [
      "Dear Parents,\nSummer break is a great time for students to explore new interests, build skills, and learn beyond the classroom. We encourage students to participate in the summer programmes, workshops, and internships shared with you. Please note that some programmes may be paid, and participation is completely optional. There is no compulsion\u2014this is only to encourage students to use their vacation in a productive and meaningful way.",
    ],
    pdfUrl:  "/web-content/circular/documents/UploadFile2026-04-11T07_16_34_707658296.pdf",
  },
  {
    date:    "11-04-2026",
    title:   "Orientation Class IX 2026-27",
    preview: ["."],
    pdfUrl:  "/web-content/circular/documents/UploadFile2026-04-11T09_39_45_491898249.pdf",
  },
  {
    date:    "09-04-2026",
    title:   "Class IX Textbook Availability Status as on 09.04.2026",
    preview: ["Class IX Textbook Availability Status as on 09.04.2026"],
    pdfUrl:  "/web-content/circular/documents/UploadFile2026-04-09T08_27_03_137969160.pdf",
  },
  {
    date:    "08-04-2026",
    title:   "Textbooks availability status VI,VII,VIII and IX",
    // inline style stripped — plain text preserved
    preview: ["VI-IX. Kindly note the textbooks availability status. Will update you as and when these are published. School will ensure effective teaching-learning even in absence of books."],
    pdfUrl:  "/web-content/circular/documents/UploadFile2026-04-08T06_10_24_527922021.pdf",
  },
  {
    date:    "02-04-2026",
    title:   "Textbooks availability status IX and XI 2026-27",
    preview: ["IX, XI. Kindly note the textbooks availability status. Will update you as and when these are published. School will ensure effective teaching-learning even in absence of books."],
    pdfUrl:  "/web-content/circular/documents/UploadFile2026-04-02T10_39_39_754417072.pdf",
  },
  {
    date:    "24-03-2026",
    title:   "Subject Allocation for Class XI (Session 2026-27)",
    preview: ["."],
    pdfUrl:  "/web-content/circular/documents/placeholder.pdf",
  },
  {
    date:    "23-03-2026",
    title:   "For Classes VIII and IX: HPV Vaccination",
    preview: ["."],
    pdfUrl:  "/web-content/circular/documents/placeholder.pdf",
  },
  {
    date:    "18-03-2026",
    title:   "For Class X Second Board Examination 2025-26",
    preview: ["."],
    pdfUrl:  "/web-content/circular/documents/placeholder.pdf",
  },
  {
    date:    "10-03-2026",
    title:   "The Mindful Parent: A 2-Day Immersive Workshop",
    preview: ["."],
    pdfUrl:  "/web-content/circular/documents/placeholder.pdf",
  },
];

const ITEMS_PER_PAGE = 8;

export default function CircularPage() {
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

                {/* Browser: <h3>All Circular</h3> */}
                <div className="content-heading">
                  <h3>All Circular</h3>
                </div>

                {/* Browser: <div class="news-cardlist" id="circular_row"> */}
                <div className="news-cardlist" id="circular_row">
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

                        {/* Each preview line = one <p> — matches browser pattern */}
                        {item.preview.map((line, j) => (
                          <p key={j}>{line}</p>
                        ))}
                        <p></p>

                        {/* Browser: detail-section with Download button — same as monthly-report */}
                        <div className="col-12">
                          <div className="detail-section contentsection noborder">
                            <div className="detail-section--left" />
                            <div className="detail-section--right">
                              <a
                                href={item.pdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="default-btn btn"
                              >
                                Download <i className="ri-file-pdf-2-line" />
                              </a>
                            </div>
                          </div>
                        </div>
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
