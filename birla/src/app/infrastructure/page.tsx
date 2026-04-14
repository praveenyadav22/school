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
  { id: "dd959391-b29c-4914-9aad-c177d2eee5a2", title: "Playground",          date: "15-11-2017", imageUrl: "/images/icons/birla-icon.png" },
  { id: "4e15759c-93a6-4679-9083-f22595723c6b", title: "Dance Room",           date: "15-11-2017", imageUrl: "/images/icons/birla-icon.png" },
  { id: "052086cd-c2f4-424f-aa89-512f447aba4a", title: "Home Science Lab",     date: "15-11-2017", imageUrl: "/images/icons/birla-icon.png" },
  { id: "1611f179-53fe-485a-a9f9-519b91325d07", title: "Resource Center",      date: "15-11-2017", imageUrl: "/images/icons/birla-icon.png" },
  { id: "ee3da5f6-f3cd-4a1c-9617-b2dd13a642bc", title: "Physics | Chem | Bio Lab", date: "13-11-2017", imageUrl: "/images/icons/birla-icon.png" },
  { id: "15a20a50-8ebb-41e1-b0a9-b438af029dcb", title: "Science Lab",          date: "13-11-2017", imageUrl: "/images/icons/birla-icon.png" },
  { id: "630c6939-98b9-41ec-a1a9-43a427c840fb", title: "Yoga Room",            date: "13-11-2017", imageUrl: "/images/icons/birla-icon.png" },
  { id: "0858fdf8-e861-41f5-b308-411131483f0e", title: "Geography Lab",        date: "13-11-2017", imageUrl: "/images/icons/birla-icon.png" },
  { id: "placeholder-09",                        title: "Computer Lab",         date: "12-11-2017", imageUrl: "/images/icons/birla-icon.png" },
  { id: "placeholder-10",                        title: "Music Room",           date: "12-11-2017", imageUrl: "/images/icons/birla-icon.png" },
  { id: "placeholder-11",                        title: "Art & Craft Room",     date: "11-11-2017", imageUrl: "/images/icons/birla-icon.png" },
  { id: "placeholder-12",                        title: "Library",              date: "11-11-2017", imageUrl: "/images/icons/birla-icon.png" },
];

const ITEMS_PER_PAGE = 8;

export default function InfrastructurePage() {
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
                          <Link href={`/infrastructure/${item.id}`}>
                            <img src={item.imageUrl} alt={item.title} />
                          </Link>
                        </figure>

                        <div className="galleryPostWrap">
                          <i className="ri-calendar-line" />
                          <span className="marqq">Posted Date :</span> {item.date}
                        </div>

                        <div className="galleryPostWrap view">
                          <Link
                            href={`/infrastructure/${item.id}`}
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
