"use client";

import { useState } from "react";
import Link from "next/link";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";
import Pagination from "@/utils/Pagination";

// ── Sidebar ───────────────────────────────────────────────────
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

// ── Types ─────────────────────────────────────────────────────
// paragraphs: each string = one <p> tag — exact match to browser
interface EventItem {
  id:         string;
  title:      string;
  date:       string;
  paragraphs: string[];
}

// ── Data — replace with API fetch when backend ready ──────────
const ITEMS: EventItem[] = [
  {
    id:    "b621d742-4183-4a57-9f0c-53fc3b0e313e",
    title: "Cake Sale",
    date:  "24-12-2019",
    paragraphs: [
      "Date - 24.12.2019",
      "Time - 8 AM to 12.30 PM",
      "Event - Cake Sale",
      "Venue - School Ground",
      "Description - The interactors organised cake sale for charity purposes on the Annual Sports Day of the school where parents bought the items generously.",
      "Participants - Interactors",
    ],
  },
  {
    id:    "9f215a3e-06c4-4a66-b23f-7c5485a2fa82",
    title: "Event Fundraiser",
    date:  "12-10-2019",
    paragraphs: [
      "Date 12.10.19",
      "Organized by Inayat",
      "On 12 October interactors raised funds to host the diwali Carnival for children from underprivileged families. They sold candles and chocolates made by themselves.",
    ],
  },
  {
    id:    "d522fe59-e396-41a8-86da-dfd29ac3cabe",
    title: "Diwali Carnival For Under Privileged Children",
    date:  "10-10-2019",
    paragraphs: [
      "Date 10.10.19",
      "Event Diwali Carnival for Under privileged children",
      "Organized by Inayat Interact Club",
      "Approximately 300 students and teachers came from various NGOs on 19th Oct. We had arranged various competitions and games which were judged and they were handsomely awarded. ...",
    ],
  },
  {
    id:    "a3e86c3c-6cdd-4b5a-b7cd-41b8be6c81d2",
    title: "Cleanliness Drive",
    date:  "25-09-2019",
    paragraphs: [
      "Cleanliness Drive",
      "Date 25.9.19",
      "The ever conscientious BVNiites took up the challenge to spread awareness about maintaining cleanliness and avoiding pollution. Students carried posters, chanted slogans, swept the roads and cleared the garbage from the roads. They even impressed up...",
    ],
  },
  {
    id:    "1a607872-a143-4947-8826-ddd2d3a7c102",
    title: "Health Awareness Camp For Class IV Employees",
    date:  "17-08-2019",
    paragraphs: [
      "Date - 17.8.2019",
      "Event - Health Awareness Camp for Class IV employees",
      "Time - 10 AM - 2.30 PM",
      "Venue - Skating rink",
      "Description - BVN organised a health awareness camp for the class IV employees wherein their health check-up was done and various health issues were addres...",
    ],
  },
  {
    id:    "e038070b-1a15-409b-82bf-2acbbfb2079a",
    title: "Health Awareness Workshop For Class IV Employees Of BVN",
    date:  "17-08-2019",
    paragraphs: [
      "Date - 17.8.2019",
      "Time - 8 AM to 9:30 AM",
      "Event - Health Awareness Workshop for Class IV Employees of BVN",
      "Venue - Skating rink",
      "Description - Parent-volunteer Dr Aparna Gupta (Neurologist) conducted a Health Awareness workshop for our class IV employees in which they were...",
    ],
  },
  {
    id:    "placeholder-07",
    title: "Tree Plantation Drive",
    date:  "05-06-2019",
    paragraphs: [
      "Date - 05.06.2019",
      "Event - Tree Plantation Drive",
      "Annual tree plantation drive organised by the Interact Club of BVN.",
    ],
  },
  {
    id:    "placeholder-08",
    title: "Blood Donation Camp",
    date:  "14-11-2018",
    paragraphs: [
      "Date - 14.11.2018",
      "Event - Blood Donation Camp",
      "Blood donation camp organised in collaboration with Red Cross Society.",
    ],
  },
  {
    id:    "placeholder-09",
    title: "Old Age Home Visit",
    date:  "01-10-2018",
    paragraphs: [
      "Date - 01.10.2018",
      "Event - Old Age Home Visit",
      "Students visited Apna Ghar old age home and spent time with senior citizens.",
    ],
  },
  {
    id:    "placeholder-10",
    title: "Swachh Bharat Campaign",
    date:  "02-10-2018",
    paragraphs: [
      "Date - 02.10.2018",
      "Event - Swachh Bharat Campaign",
      "Students participated in the Swachh Bharat Abhiyan cleanliness drive.",
    ],
  },
  {
    id:    "placeholder-11",
    title: "Orphanage Visit",
    date:  "15-08-2018",
    paragraphs: [
      "Date - 15.08.2018",
      "Event - Orphanage Visit",
      "Students visited a local orphanage and distributed stationery and books.",
    ],
  },
  {
    id:    "placeholder-12",
    title: "Awareness Rally on Pollution",
    date:  "05-06-2018",
    paragraphs: [
      "Date - 05.06.2018",
      "Event - Awareness Rally on Pollution",
      "Students conducted an awareness rally against air and water pollution.",
    ],
  },
];

const ITEMS_PER_PAGE = 8;

export default function SocialResponsibilityPage() {
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

            {/* ── Main content — 8 columns ── */}
            <div className="col-12 col-lg-8">
              <div className="inner-content">
                <div className="content-heading">
                  <h2>Social Responsibility</h2>
                </div>

                <div className="contentsection py-3 noborder" id="events_row">
                  {pageItems.map((item) => (
                    <div className="card mb-3 shadow-sm" key={item.id}>

                      {/* Browser: <div class="card-header fw-bold"> */}
                      <div className="card-header fw-bold">
                        {item.title}
                      </div>

                      {/* Browser: <div class="card-body"> */}
                      <div className="card-body">

                        {/* Browser: <p class="card-text"></p> — empty first p preserved */}
                        <p className="card-text"></p>

                        {/* Browser: each field = separate <p> tag */}
                        {item.paragraphs.map((text, i) => (
                          <p key={i}>{text}</p>
                        ))}

                        {/* Browser: <div align="right"> — inline moved to .sr-card__footer */}
                        <div className="sr-card__footer">
                          <i className="ri-image-line text-success" />
                          <span>
                            {" "}<Link href={`/social-responsibility/${item.id}`}>View Gallery</Link>
                          </span>
                          {" | "}
                          <i className="ri-calendar-line text-warning" />
                          {" : "}{item.date}
                        </div>

                      </div>
                    </div>
                  ))}

                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPrev={goToPrev}
                    onNext={goToNext}
                  />
                </div>

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
