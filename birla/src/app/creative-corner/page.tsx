"use client";

import { useState } from "react";
import Link from "next/link";
import Pagination from "@/utils/Pagination";

// ── Types ─────────────────────────────────────────────────────
interface GalleryItem {
  id:       string;
  title:    string;
  date:     string;
  imageUrl: string;
}

// ── Data — replace imageUrl with real paths when backend ready ─
const ITEMS: GalleryItem[] = [
  { id: "baa6045f-33c1-4b74-a7c3-1e6d97e2b707", title: "Drawings : Junior BVN",         date: "10-01-2020", imageUrl: "/images/icons/birla-icon.png" },
  { id: "0611facc-a22e-4885-b71e-b2f3ef18ccad", title: "YOUNG ENTREPRENEURS OF 2018",   date: "03-07-2018", imageUrl: "/images/icons/birla-icon.png" },
  { id: "b27990cf-900e-4df6-97ae-3c1a9516843e", title: "Tejash B. Patra - 4A",          date: "11-05-2017", imageUrl: "/images/icons/birla-icon.png" },
];

const ITEMS_PER_PAGE = 8;

export default function CreativeCornerPage() {
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

              <div className="galleryWrap">
                <div className="row" id="gallery_row">
                  {pageItems.map((item) => (
                    <div className="col-12 col-md-4 col-xl-3" key={item.id}>
                      <section className="categoriesBox">

                        <h2 className="text-center">
                          <span>{item.title}</span>
                        </h2>

                        <figure>
                          <Link href={`/creative-corner/${item.id}`}>
                            <img src={item.imageUrl} alt={item.title} />
                          </Link>
                        </figure>

                        <div className="galleryPostWrap">
                          <i className="ri-calendar-line" />
                          <span className="marqq">Posted Date :</span> {item.date}
                        </div>

                        <div className="galleryPostWrap view">
                          <Link
                            href={`/creative-corner/${item.id}`}
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
