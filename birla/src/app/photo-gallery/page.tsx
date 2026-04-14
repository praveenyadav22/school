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
  { id: "6804967b-b1ce-4c90-9920-c27b165000e6", title: "Club Fiesta Junior BVN",                                          date: "28-02-2023", imageUrl: "/images/icons/birla-icon.png" },
  { id: "e7dc67f4-ecba-4401-b2d7-7626a8bdf696", title: "World Computer Literacy Day Celebrations - 2nd December,...",    date: "05-12-2022", imageUrl: "/images/icons/birla-icon.png" },
  { id: "de7c7d21-62e2-4e12-9195-80ac6f1bdfb3", title: "Junior BVN Trip To Vishalgarh Farms",                           date: "05-11-2022", imageUrl: "/images/icons/birla-icon.png" },
  { id: "d2b3c7f8-39fc-429d-85be-ed45db2cd91a", title: "Foundation Day Celebrations - Junior BVN",                       date: "26-09-2022", imageUrl: "/images/icons/birla-icon.png" },
  { id: "27218170-0314-4e77-854d-1502b72e0b1b", title: "Inter House Computer Quiz - Classes IV, V",                      date: "05-09-2022", imageUrl: "/images/icons/birla-icon.png" },
  { id: "dfdda798-2b93-4c7c-b00f-fb84539b2c7e", title: "National Sports Day Celebrations",                               date: "30-08-2022", imageUrl: "/images/icons/birla-icon.png" },
  { id: "8008868c-fedc-402a-9a65-bac984773581", title: "Workshop On Social Etiquette Skills For The Students Of ...",    date: "29-08-2022", imageUrl: "/images/icons/birla-icon.png" },
  { id: "121554a5-ffa8-4050-a1a5-3141e37677e3", title: "Independence Day Celebrations - Junior BVN",                     date: "22-08-2022", imageUrl: "/images/icons/birla-icon.png" },
  { id: "placeholder-09", title: "Annual Sports Day 2022",             date: "15-08-2022", imageUrl: "/images/icons/birla-icon.png" },
  { id: "placeholder-10", title: "Science Exhibition 2022",            date: "10-07-2022", imageUrl: "/images/icons/birla-icon.png" },
  { id: "placeholder-11", title: "Art Festival Junior BVN",            date: "01-06-2022", imageUrl: "/images/icons/birla-icon.png" },
  { id: "placeholder-12", title: "Cultural Programme Senior Section",  date: "15-05-2022", imageUrl: "/images/icons/birla-icon.png" },
];

const ITEMS_PER_PAGE = 8;

export default function PhotoGalleryPage() {
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
                          <Link href={`/photo-gallery/${item.id}`}>
                            <img src={item.imageUrl} alt={item.title} />
                          </Link>
                        </figure>

                        <div className="galleryPostWrap">
                          <i className="ri-calendar-line" />
                          <span className="marqq">Posted Date :</span> {item.date}
                        </div>

                        <div className="galleryPostWrap view">
                          <Link
                            href={`/photo-gallery/${item.id}`}
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
