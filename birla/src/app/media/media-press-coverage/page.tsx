"use client";

import { useState } from "react";
import Link from "next/link";
import Pagination from "@/utils/Pagination";

interface MediaItem {
  id:       string;
  title:    string;
  date:     string;
  imageUrl: string;
}

const ITEMS: MediaItem[] = [
  {
    id:       "c3c57f3d-3a94-46d5-b491-34ff0683689a",
    title:    "Innovation On Display",
    date:     "21-01-2026",
    imageUrl: "/web-content/media_press/images/UploadFile2026-01-21T05_24_00_457326867.jpeg",
  },
  {
    id:       "4a9a5ff5-b079-42ea-9929-1f53e4d4b5cf",
    title:    "Interaction Session & Back to Field Game",
    date:     "21-01-2026",
    imageUrl: "/web-content/media_press/images/UploadFile2026-01-21T05_26_11_855252404.jpeg",
  },
  {
    id:       "1ba5d001-29a0-43ad-a9be-ce0cab641a3c",
    title:    "Techuday 3.0 Showcases Innovation",
    date:     "04-12-2025",
    imageUrl: "/web-content/media_press/images/UploadFile2025-12-04T07_59_08_743935042.jpeg",
  },
  {
    id:       "203512f8-3cb5-41b8-8ee1-e10cada8f15b",
    title:    "Aarohan : Annual Cultural Fiesta 2025",
    date:     "24-10-2025",
    imageUrl: "/web-content/media_press/images/UploadFile2025-10-29T09_07_55_304643708.jpeg",
  },
  {
    id:       "d1b33dc0-740b-4ddf-ae92-e7571de35303",
    title:    "Anveshika Embraces The Joy of Physics",
    date:     "21-08-2025",
    imageUrl: "/web-content/media_press/images/UploadFile2025-08-21T05_46_12_088422944.jpeg",
  },
  {
    id:       "f1630458-62ab-461f-897b-d4039e9af5c2",
    title:    "Annual Award Ceremony1",
    date:     "30-07-2025",
    imageUrl: "/web-content/media_press/images/UploadFile2025-07-30T03_34_24_364408213.jpeg",
  },
  {
    id:       "aabca395-3cc0-4669-bb82-a6b95fd67cf7",
    title:    "Celebrating Excellence in Annual Awards",
    date:     "24-07-2025",
    imageUrl: "/web-content/media_press/images/UploadFile2025-07-25T09_35_08_078719900.jpeg",
  },
  {
    id:       "e87b1fb6-b25e-40ec-a1a9-7a79d3d32a25",
    title:    "CBSE Result",
    date:     "23-05-2025",
    imageUrl: "/web-content/media_press/images/UploadFile2025-05-23T03_40_28_546207230.jpeg",
  },
   {
    id:       "e87b1fb6-b25e-40ec-a1a9-7a79d3d32a25",
    title:    "CBSE Result",
    date:     "23-05-2025",
    imageUrl: "/web-content/media_press/images/UploadFile2025-05-23T03_40_28_546207230.jpeg",
  },
   {
    id:       "e87b1fb6-b25e-40ec-a1a9-7a79d3d32a25",
    title:    "CBSE Result",
    date:     "23-05-2025",
    imageUrl: "/web-content/media_press/images/UploadFile2025-05-23T03_40_28_546207230.jpeg",
  },
  
];

const ITEMS_PER_PAGE = 8;

export default function MediaPressCoveragePage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(ITEMS.length / ITEMS_PER_PAGE);
  const startIdx   = (currentPage - 1) * ITEMS_PER_PAGE;
  const pageItems  = ITEMS.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  const goToPrev = () => { if (currentPage > 1) setCurrentPage((p) => p - 1); };
  const goToNext = () => { if (currentPage < totalPages) setCurrentPage((p) => p + 1); };

  return (
    <div className="body-conent ptb-50">
      <div className="container">
        <div className="row">
          <div className="col-12">

            <div className="galleryWrap">
              <div className="row" id="media_row">
                {pageItems.map((item) => (
                  <div className="col-12 col-md-4 col-xl-3" key={item.id}>
                    <section className="categoriesBox">

                      <h2 className="text-center">
                        <span>{item.title}</span>
                      </h2>

                      {/* Image links to detail page */}
                      <figure>
                        <Link href={`/media/media-press-coverage/${item.id}`}>
                          <img src={item.imageUrl} alt={item.title} />
                        </Link>
                      </figure>

                      <div className="galleryPostWrap">
                        <i className="ri-calendar-line" aria-hidden="true" />
                        <span className="marqq"> Posted Date :</span> {item.date}
                      </div>

                      <div className="galleryPostWrap view">
                        <Link
                          href={`/media/media-press-coverage/${item.id}`}
                          className="default-btn btn"
                          title="View More"
                        >
                          <i className="ri-arrow-right-line" aria-hidden="true" />
                        </Link>
                      </div>

                    </section>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination — same pattern as photo-gallery, video-gallery etc. */}
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
  );
}
