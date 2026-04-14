"use client";

import { useState } from "react";
import Pagination from "@/utils/Pagination";

interface ReportItem { date: string; title: string; pdfUrl: string; }

const REPORTS: ReportItem[] = [
  { date: "13-04-2026", title: "Monthly Report Junior March-2026", pdfUrl: "/web-content/circular/documents/UploadFile2026-04-13T10_55_10_722335128.pdf" },
  { date: "11-04-2026", title: "Monthly Report Senior March-2026", pdfUrl: "/web-content/circular/documents/UploadFile2026-04-11T04_08_55_288369161.pdf" },
  { date: "18-03-2026", title: "Monthly Report Senior Feb-2026",   pdfUrl: "/web-content/circular/documents/UploadFile2026-03-18T04_50_50_854712699.pdf" },
  { date: "13-03-2026", title: "Monthly Report Junior Feb'2026",   pdfUrl: "/web-content/circular/documents/UploadFile2026-03-13T09_37_17_514547330.pdf" },
  { date: "23-02-2026", title: "Monthly Report Junior Jan-2026",   pdfUrl: "/web-content/circular/documents/UploadFile2026-02-23T04_01_50_440785178.pdf" },
  { date: "06-02-2026", title: "Senior Monthly Report Jan-2026",   pdfUrl: "/web-content/circular/documents/UploadFile2026-02-06T04_26_25_595045033.pdf" },
  { date: "31-12-2025", title: "Monthly Report Senior Dec25",      pdfUrl: "/web-content/circular/documents/UploadFile2026-01-14T10_11_29_221620373.pdf" },
  { date: "31-12-2025", title: "Monthly Report Junior Dec25",      pdfUrl: "/web-content/circular/documents/UploadFile2026-01-17T06_33_38_634075107.pdf" },
  { date: "30-11-2025", title: "Monthly Report Senior Nov-2025",   pdfUrl: "/web-content/circular/documents/placeholder.pdf" },
  { date: "30-11-2025", title: "Monthly Report Junior Nov-2025",   pdfUrl: "/web-content/circular/documents/placeholder.pdf" },
  { date: "31-10-2025", title: "Monthly Report Senior Oct-2025",   pdfUrl: "/web-content/circular/documents/placeholder.pdf" },
  { date: "31-10-2025", title: "Monthly Report Junior Oct-2025",   pdfUrl: "/web-content/circular/documents/placeholder.pdf" },
  { date: "30-09-2025", title: "Monthly Report Senior Sep-2025",   pdfUrl: "/web-content/circular/documents/placeholder.pdf" },
  { date: "30-09-2025", title: "Monthly Report Junior Sep-2025",   pdfUrl: "/web-content/circular/documents/placeholder.pdf" },
  { date: "31-08-2025", title: "Monthly Report Senior Aug-2025",   pdfUrl: "/web-content/circular/documents/placeholder.pdf" },
  { date: "31-08-2025", title: "Monthly Report Junior Aug-2025",   pdfUrl: "/web-content/circular/documents/placeholder.pdf" },
  { date: "31-07-2025", title: "Monthly Report Senior Jul-2025",   pdfUrl: "/web-content/circular/documents/placeholder.pdf" },
  { date: "31-07-2025", title: "Monthly Report Junior Jul-2025",   pdfUrl: "/web-content/circular/documents/placeholder.pdf" },
  { date: "30-06-2025", title: "Monthly Report Senior Jun-2025",   pdfUrl: "/web-content/circular/documents/placeholder.pdf" },
];

const ITEMS_PER_PAGE = 8;

export default function MonthlyReportPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(REPORTS.length / ITEMS_PER_PAGE);
  const startIdx   = (currentPage - 1) * ITEMS_PER_PAGE;
  const pageItems  = REPORTS.slice(startIdx, startIdx + ITEMS_PER_PAGE);
  const goToPrev = () => { if (currentPage > 1) setCurrentPage((p) => p - 1); };
  const goToNext = () => { if (currentPage < totalPages) setCurrentPage((p) => p + 1); };

  return (
    <>
      <div className="body-conent ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="inner-content">
                <div className="content-heading"><h3>Monthly Report</h3></div>
                <div className="news-cardlist">
                  {pageItems.map((item, i) => (
                    <div className="news-cardlist__list latest justify-content-center" key={startIdx + i}>
                      <div className="news-cardlist__list--date">
                        <span className="date">{item.date}</span>
                        <div className="news-cardlist__list__img">
                          <img src="/images/logo/bvn-logo.png" alt={item.title} />
                        </div>
                      </div>
                      <div className="news-cardlist__list--content">
                        <h2 className="title">{item.title}</h2>
                        <div className="col-12">
                          <div className="detail-section contentsection noborder">
                            <div className="detail-section--left" />
                            <div className="detail-section--right">
                              <a href={item.pdfUrl} target="_blank" rel="noopener noreferrer" className="default-btn btn">
                                Download <i className="ri-file-pdf-2-line" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Pagination currentPage={currentPage} totalPages={totalPages} onPrev={goToPrev} onNext={goToNext} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
