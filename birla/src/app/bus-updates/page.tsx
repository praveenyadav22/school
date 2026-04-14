"use client";

import { useState } from "react";
import Pagination from "@/utils/Pagination";

// ── Types ─────────────────────────────────────────────────────
interface BusItem {
  date:  string;
  title: string;
}

// ── Data — replace with API fetch when backend ready ──────────
const ITEMS: BusItem[] = [
  { date: "18-02-2025", title: "S-10 will be late due to breakdown." },
  { date: "18-02-2025", title: "S-02 and S-21 will be late due to traffic jam" },
  { date: "06-02-2025", title: "S-10 bus will be late due to traffic jam.," },
  { date: "27-01-2025", title: "S-13 bus will be late due to breakdown . Repalcement will be arrannged soon." },
  { date: "23-01-2025", title: "S-2 and S-22 bus will be late due to traffic jam" },
  { date: "18-12-2024", title: "S- 35 will be late due to breakdown" },
  { date: "02-12-2024", title: "S-36 bus will be late due to breakdown" },
  { date: "29-08-2024", title: "S-20 has reached school." },
  { date: "09-07-2024", title: "Due to heavy rain all Buses will be late due to traffic jam" },
  { date: "01-06-2024", title: "S-15 bus will be late due to breakdown" },
  { date: "15-04-2024", title: "S-22 bus will be late due to traffic jam" },
  { date: "01-03-2024", title: "S-10 bus will be delayed due to maintenance" },
];

const ITEMS_PER_PAGE = 8;

export default function BusUpdatesPage() {
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

                {/* Browser: <h3>Bus Updates</h3> */}
                <div className="content-heading">
                  <h3>Bus Updates</h3>
                </div>

                {/* Browser: <div class="news-cardlist" id="news_row"> */}
                <div className="news-cardlist" id="news_row">
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
                        <p>..</p>
                        <p></p>
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
