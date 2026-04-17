"use client";

import { useState } from "react";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";
import Pagination from "@/utils/Pagination";

const sidebarData: SidebarLinksProps = {
  heading: "About Us",
  links: [
    { label: "School Profile",              href: "/about/school-profile" },
    { label: "Vision And Mission",          href: "/about/vision-mission" },
    { label: "Founders",                    href: "/about/founders" },
    { label: "Chairperson",                 href: "/about/chairperson" },
    { label: "Director & Manager",          href: "/about/director-manager" },
    { label: "Principal",                   href: "/about/principal" },
    {
      label: "Vice Principal",
      subLinks: [
        { label: "Sr. Section", href: "/about/vice-principal/sr-section" },
      ],
    },
    { label: "Head Mistress",               href: "/about/head-mistress" },
    { label: "School Managing Committee",   href: "/about/school-managing-committee" },
    { label: "Faculty",                     href: "/about/faculty" },
    { label: "PTA",                         href: "/about/pta" },
    { label: "Internal Committee",          href: "/about/internal-committee" },
    { label: "Mandatory Public Disclosure", href: "/about/mandatory-public-disclosure" },
  ],
};

// ── Data ──────────────────────────────────────────────────────
const ITEMS = [
  {
    date:    "09-05-2025",
    title:   "Internal Committee 2025-26",
    text:    "",
    pdfUrl:  "/web-content/circular/documents/UploadFile2025-07-10T08_43_21_050202055.pdf",
  },
  {
    date:    "02-04-2024",
    title:   "Internal Committee 2024-25",
    text:    "Internal Committee",
    pdfUrl:  "/web-content/circular/documents/UploadFile2025-03-07T04_35_06_632083968.pdf",
  },
  {
    date:    "05-05-2023",
    title:   "Internal Committee - May - 2022",
    text:    "Internal Committee",
    pdfUrl:  "/web-content/circular/documents/UploadFile2025-03-07T04_33_49_194398553.pdf",
  },
  {
    date:    "22-08-2022",
    title:   "Internal Committee - Aug - 2022",
    text:    "Internal Committee - Aug - 2022",
    pdfUrl:  "/web-content/circular/documents/UploadFile2025-03-07T04_32_10_269302544.pdf",
  },
  {
    date:    "02-05-2022",
    title:   "Internal Committees",
    text:    "Internal Committees",
    pdfUrl:  "/web-content/circular/documents/UploadFile2025-03-07T04_28_57_155913273.pdf",
  },
  {
    date:    "11-03-2022",
    title:   "Internal Committees 2022",
    text:    "Internal Committees 2022",
    pdfUrl:  "/web-content/circular/documents/UploadFile2025-03-07T04_27_24_696113195.pdf",
  },
  {
    date:    "04-10-2021",
    title:   "Internal Committee.",
    text:    "Internal Committee",
    pdfUrl:  "/web-content/circular/documents/UploadFile2025-03-07T04_25_45_741407877.pdf",
  },
  {
    date:    "03-06-2020",
    title:   "Internal Committee",
    text:    "Sexual Harassment Committee | Committee under POCSO ACT, 2012 | Redressal of Grievances Committee | Tobacco Control Committee | Internal complaint Committee | Anti Bullying Committee | Parents, Teachers & Students Committee to ensure minimum standards of school safety",
    pdfUrl:  "/web-content/circular/documents/UploadFile2025-03-07T04_22_11_324440517.pdf",
  },
];

const ITEMS_PER_PAGE = 5;

export default function InternalCommitteePage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(ITEMS.length / ITEMS_PER_PAGE);
  const startIdx   = (currentPage - 1) * ITEMS_PER_PAGE;
  const pageItems  = ITEMS.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  return (
    <>
      <div className="body-conent ptb-50">
        <div className="container">
          <div className="row">

            {/* ── Main content — 8 columns ── */}
            <div className="col-12 col-lg-8">
              <div className="inner-content">

                <h3>Internal Committee</h3>

                {/* Browser: <div class="news-cardlist" id="circular_row"> */}
                <div className="news-cardlist" id="circular_row">
                  {pageItems.map((item, i) => (
                    <div className="news-cardlist__list latest justify-content-center" key={i}>

                      {/* Date + icon */}
                      <div className="news-cardlist__list--date">
                        <span className="date">{item.date}</span>
                        <div className="news-cardlist__list__img">
                          <img src="/images/icons/birla-icon.png" alt="" aria-hidden="true" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="news-cardlist__list--content">
                        <h2 className="title">{item.title}</h2>
                        {item.text && <p className="text">{item.text}</p>}

                        {/* Download button */}
                        <div className="col-12">
                          <div className="detail-section contentsection noborder">
                            <div className="detail-section--left" />
                            <div className="detail-section--right">
                              <a
                                href={item.pdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="default-btn btn"
                                aria-label={`Download ${item.title} PDF`}
                              >
                                Download <i className="ri-file-pdf-2-line" aria-hidden="true" />
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
                  onPrev={() => setCurrentPage((p) => p - 1)}
                  onNext={() => setCurrentPage((p) => p + 1)}
                />

              </div>
            </div>

            {/* ── Sidebar — 4 columns ── */}
            <div className="col-12 col-lg-4">
              <SidebarLinks {...sidebarData} />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
