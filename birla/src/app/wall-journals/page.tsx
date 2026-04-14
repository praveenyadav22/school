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
  { id: "2a8cc94c-0975-4b74-a7e3-b6d7dc4cb168", title: "Wall Journals-Junior BVN",              date: "10-01-2020", imageUrl: "/images/icons/birla-icon.png" },
  { id: "398b410f-a5ef-4588-8f08-325371efcf6f", title: "Wall Journals -KG",                     date: "24-05-2019", imageUrl: "/images/icons/birla-icon.png" },
  { id: "169f8d67-e7d9-4446-909f-9ad01cdfa0db", title: "Wall Journals -Nursery & KG",           date: "24-05-2019", imageUrl: "/images/icons/birla-icon.png" },
  { id: "c4c1c2ca-c1d7-46f1-92c9-c8a5de930bd1", title: "Learn And Have Fun.",                   date: "18-05-2017", imageUrl: "/images/icons/birla-icon.png" },
  { id: "5cfc6f0e-8545-4679-860f-6abef8ccb12e", title: "A New Beginning -Paint Our Own Future", date: "18-05-2017", imageUrl: "/images/icons/birla-icon.png" },
  { id: "3c7a86e8-d773-441f-a406-4f857ed1024e", title: "Sense Organs-Skin",                     date: "18-05-2017", imageUrl: "/images/icons/birla-icon.png" },
  { id: "a4eb9b1a-ac6d-4eac-8b5e-7fc831ce6a70", title: "Learn And Have Fun",                    date: "18-05-2017", imageUrl: "/images/icons/birla-icon.png" },
  { id: "86ff299f-969b-44d1-837a-e40d97ed10bb", title: "Sense Organs-Nose To Smell",            date: "18-05-2017", imageUrl: "/images/icons/birla-icon.png" },
  { id: "placeholder-09",                        title: "Wall Journals Item 9",                  date: "01-04-2017", imageUrl: "/images/icons/birla-icon.png" },
  { id: "placeholder-10",                        title: "Wall Journals Item 10",                 date: "01-03-2017", imageUrl: "/images/icons/birla-icon.png" },
  { id: "placeholder-11",                        title: "Wall Journals Item 11",                 date: "01-02-2017", imageUrl: "/images/icons/birla-icon.png" },
  { id: "placeholder-12",                        title: "Wall Journals Item 12",                 date: "01-01-2017", imageUrl: "/images/icons/birla-icon.png" },
];

const ITEMS_PER_PAGE = 8;

export default function WallJournalsPage() {
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
                          <Link href={`/wall-journals/${item.id}`}>
                            <img src={item.imageUrl} alt={item.title} />
                          </Link>
                        </figure>

                        <div className="galleryPostWrap">
                          <i className="ri-calendar-line" />
                          <span className="marqq">Posted Date :</span> {item.date}
                        </div>

                        <div className="galleryPostWrap view">
                          <Link
                            href={`/wall-journals/${item.id}`}
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
