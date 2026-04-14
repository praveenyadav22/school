"use client";

import { useState } from "react";
import Link from "next/link";
import Pagination from "@/utils/Pagination";

// ── Types ─────────────────────────────────────────────────────
interface VideoItem {
  id:       string;
  title:    string;
  date:     string;
  embedUrl: string;
}

// ── Data — replace with API fetch when backend ready ──────────
const ITEMS: VideoItem[] = [
  { id: "4eb4e5f5-5c8a-4057-8600-63ef0d6d0698", title: "Glimpses Of BVN",          date: "29-05-2024", embedUrl: "https://www.youtube.com/embed/qecvWapRgBo?si=Wg2lrX9KF4F5s7nV" },
  
];

const ITEMS_PER_PAGE = 8;

export default function VideoGalleryPage() {
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

              <div className="galleryWrap videogallery">
                <div className="row" id="video_row">
                  {pageItems.map((item) => (
                    <div className="col-12 col-md-6 col-xl-6" key={item.id}>
                      <section className="categoriesBox">

                        {/* Title */}
                        <h2 className="text-center">
                          <span>{item.title}</span>
                        </h2>

                        {/* Embedded YouTube video */}
                        <figure className="video-figure">
                          <iframe
                            width="100%"
                            height="300"
                            src={item.embedUrl}
                            title={item.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                          />
                        </figure>

                        {/* Date */}
                        <div className="galleryPostWrap">
                          <i className="ri-calendar-line" />
                          <span className="marqq"> Posted Date :</span> {item.date}
                        </div>

                        {/* View More — navigates to child detail page */}
                        <div className="galleryPostWrap view">
                          <Link
                            href={`/video-gallery/${item.id}`}
                            className="default-btn btn"
                            title="View More"
                          >
                            <i className="ri-arrow-right-line" />
                          </Link>
                        </div>

                      </section>
                    </div>
                  ))}
                </div>
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
    </>
  );
}
