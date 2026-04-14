"use client";

import Link from "next/link";

// ── Video data — replace with API fetch by ID when backend ready ──
const VIDEO_DATA: Record<string, {
  title:       string;
  description: string;
  postedBy:    string;
  date:        string;
  embedUrl:    string;
}> = {
  "4eb4e5f5-5c8a-4057-8600-63ef0d6d0698": {
    title:       "Glimpses Of BVN",
    description: "A glimpse into the vibrant life at Birla Vidya Niketan — showcasing the school's academic excellence, cultural events, and student activities.",
    postedBy:    "Quick Campus",
    date:        "29-05-2024",
    embedUrl:    "https://www.youtube.com/embed/qecvWapRgBo?si=Wg2lrX9KF4F5s7nV",
  },
  "placeholder-02": {
    title:       "Annual Day 2023",
    description: "Highlights from the Annual Day celebrations at Birla Vidya Niketan 2023.",
    postedBy:    "BVN Admin",
    date:        "15-12-2023",
    embedUrl:    "https://www.youtube.com/embed/qecvWapRgBo",
  },
  "placeholder-03": {
    title:       "Sports Day Highlights",
    description: "Exciting moments from the Sports Day event at Birla Vidya Niketan.",
    postedBy:    "BVN Admin",
    date:        "10-11-2023",
    embedUrl:    "https://www.youtube.com/embed/qecvWapRgBo",
  },
  "placeholder-04": {
    title:       "Science Exhibition 2023",
    description: "Students showcased their innovative projects at the Science Exhibition 2023.",
    postedBy:    "BVN Admin",
    date:        "05-10-2023",
    embedUrl:    "https://www.youtube.com/embed/qecvWapRgBo",
  },
  "placeholder-05": {
    title:       "Cultural Programme",
    description: "A vibrant cultural programme featuring performances by students across all grades.",
    postedBy:    "BVN Admin",
    date:        "20-09-2023",
    embedUrl:    "https://www.youtube.com/embed/qecvWapRgBo",
  },
  "placeholder-06": {
    title:       "Foundation Day Celebration",
    description: "BVN celebrates its Foundation Day with great enthusiasm and pride.",
    postedBy:    "BVN Admin",
    date:        "20-09-2022",
    embedUrl:    "https://www.youtube.com/embed/qecvWapRgBo",
  },
  "placeholder-07": {
    title:       "Independence Day 2023",
    description: "Independence Day celebrations at Birla Vidya Niketan 2023.",
    postedBy:    "BVN Admin",
    date:        "15-08-2023",
    embedUrl:    "https://www.youtube.com/embed/qecvWapRgBo",
  },
  "placeholder-08": {
    title:       "Club Fiesta Junior BVN",
    description: "Junior BVN celebrated Club Fiesta where students from various clubs showcased their talent under the guidance of their respective teachers.",
    postedBy:    "BVN Admin",
    date:        "09-02-2023",
    embedUrl:    "https://www.youtube.com/embed/qecvWapRgBo",
  },
  "placeholder-09": {
    title:       "PTM Highlights",
    description: "Highlights from the Parent-Teacher Meeting held at Birla Vidya Niketan.",
    postedBy:    "BVN Admin",
    date:        "01-08-2023",
    embedUrl:    "https://www.youtube.com/embed/qecvWapRgBo",
  },
};

// ── Fallback for IDs not yet in VIDEO_DATA ────────────────────
const FALLBACK = {
  title:       "Video Detail",
  description: "Video description coming soon.",
  postedBy:    "BVN Admin",
  date:        "01-01-2026",
  embedUrl:    "https://www.youtube.com/embed/qecvWapRgBo",
};

export default function VideoDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const video = VIDEO_DATA[params.id] ?? FALLBACK;

  return (
    <div className="body-conent ptb-50">
      <div className="container">
        <div className="row">

          {/* ── Back button ── */}
          <div className="col-12">
            <Link
              href="/video-gallery"
              className="default-btn btn mb-4"
              title="Back"
            >
              <i className="ri-arrow-left-line" /> Back
            </Link>
          </div>

          {/* ── Video title ── */}
          <div className="col-12">
            <div className="inner-content">
              <div className="inner-content__head">
                <span>{video.title}</span>
              </div>
            </div>
          </div>

          {/* ── Description ── */}
          <div className="col-12">
            <p className="gallery-desc">{video.description}</p>
          </div>

          {/* ── Full-width video embed ── */}
          <div className="col-12">
            <div className="gallery__detail mt-3">
              <div className="video-detail__embed">
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* ── Posted by / date footer ── */}
          <div className="col-12">
            <div className="detail-section">
              <div className="detail-section--left">
                <div className="item post">
                  Posted By : <span>{video.postedBy}</span>
                </div>
                <div className="item date">
                  Date : <span>{video.date}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
