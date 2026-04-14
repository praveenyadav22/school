"use client";

import { useState } from "react";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";
import Pagination from "@/utils/Pagination";

const sidebarData: SidebarLinksProps = {
  heading: "Quick Links",
  links: [
    { label: "Newsletter",            href: "/newsletter" },
    { label: "Monthly Report",        href: "/monthly-report" },
    { label: "Wall Journals",         href: "/wall-journals" },
    { label: "Social Responsibility", href: "/social-responsibility" },
    { label: "Infrastructure",        href: "/infrastructure" },
    { label: "Creative Corners",      href: "/creative-corner" },
    { label: "CLRA",                  href: "/clra" },
  ],
};

interface NewsletterItem { title: string; date: string; pdfUrl: string; }

const NEWSLETTERS: NewsletterItem[] = [
  { title: "Newsletter Volume VI Issue IV",  date: "21-04-2020", pdfUrl: "/web-content/circular/documents/UploadFile2025-03-05T09_46_50_499961996.pdf" },
  { title: "Newsletter (July-Sept.'2019)",   date: "30-09-2019", pdfUrl: "/web-content/circular/documents/UploadFile2025-03-05T09_45_12_277534473.pdf" },
  { title: "Newsletter (April-June 2019)",   date: "16-07-2019", pdfUrl: "/web-content/circular/documents/UploadFile2025-03-05T09_43_41_358311531.pdf" },
  { title: "Newsletter (Oct-Dec. 2018)",     date: "11-01-2019", pdfUrl: "/web-content/circular/documents/UploadFile2025-03-05T09_42_24_407984876.pdf" },
  { title: "Newsletter (Jul-Sep 2018)",      date: "15-10-2018", pdfUrl: "/web-content/circular/documents/UploadFile2025-03-05T09_41_00_405501632.pdf" },
  { title: "Newsletter April to June 2018",  date: "30-04-2018", pdfUrl: "/web-content/circular/documents/UploadFile2025-03-05T09_39_30_656811988.pdf" },
  { title: "Newsletter (Jan-Mar 2018)",      date: "01-04-2018", pdfUrl: "/web-content/circular/documents/placeholder.pdf" },
  { title: "Newsletter (Oct-Dec 2017)",      date: "10-01-2018", pdfUrl: "/web-content/circular/documents/placeholder.pdf" },
  { title: "Newsletter (Jul-Sep 2017)",      date: "15-10-2017", pdfUrl: "/web-content/circular/documents/placeholder.pdf" },
  { title: "Newsletter (Apr-Jun 2017)",      date: "30-06-2017", pdfUrl: "/web-content/circular/documents/placeholder.pdf" },
  { title: "Newsletter (Jan-Mar 2017)",      date: "01-04-2017", pdfUrl: "/web-content/circular/documents/placeholder.pdf" },
  { title: "Newsletter (Oct-Dec 2016)",      date: "10-01-2017", pdfUrl: "/web-content/circular/documents/placeholder.pdf" },
];

const ITEMS_PER_PAGE = 8;

export default function NewsletterPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(NEWSLETTERS.length / ITEMS_PER_PAGE);
  const startIdx   = (currentPage - 1) * ITEMS_PER_PAGE;
  const pageItems  = NEWSLETTERS.slice(startIdx, startIdx + ITEMS_PER_PAGE);
  const goToPrev = () => { if (currentPage > 1) setCurrentPage((p) => p - 1); };
  const goToNext = () => { if (currentPage < totalPages) setCurrentPage((p) => p + 1); };

  return (
    <>
      <div className="body-conent ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="inner-content">
                <div className="content-heading"><h2>Newsletter</h2></div>
                <div className="contentsection py-5 noborder">
                  <div className="row">
                    {pageItems.map((item, i) => (
                      <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={startIdx + i}>
                        <div className="newsLetter__list">
                          <div className="newsLetter__list__title">{item.title}</div>
                          <div className="newsLetter__list__img">
                            <img src="/images/logo/bvn-logo.png" alt={item.title} />
                          </div>
                          <div className="newsLetter__list__date">
                            <span className="icon"><i className="ri-calendar-line" /></span>
                            <span className="text"> Posted Date : </span>
                            <span className="date">{item.date}</span>
                          </div>
                          <div className="downloadbtn">
                            <a href={item.pdfUrl} target="_blank" rel="noopener noreferrer" className="sbtn">
                              Download <i className="ri-arrow-right-line" />
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Pagination currentPage={currentPage} totalPages={totalPages} onPrev={goToPrev} onNext={goToNext} />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <SidebarLinks {...sidebarData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
