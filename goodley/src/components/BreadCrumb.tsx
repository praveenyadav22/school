"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

// Map path segments to readable labels
const LABEL_MAP: Record<string, string> = {
  "about-us": "About Us",
  "about-school": "About School",
  "nursery-gps": "Nursery @ GPS",
  "managing-directors-profile": "Managing Director's Profile",
  "executive-administrator": "Message From Executive Administrator",
  "principals-message": "Principal's Message",
  "vice-principals-message": "Vice Principal's Message",
  "mandatory-public-disclosure": "Mandatory Public Disclosure",
  "faculty": "Faculty",
  "school-committees": "School Committees",
  "safety-security": "Safety & Security",
  "contact-us": "Contact Us",
  "academics": "Academics",
  "examination": "Examination",
  "promotion-policy": "Promotion Policy",
  "assessment-policy": "Assessment Policy",
  "curriculum": "Curriculum",
  "fee-schedule": "Fee Schedule",
  "vacancy": "Vacancy",
  "extended-classrooms": "Extended Class Rooms",
  "houses": "Houses",
  "sports-and-games": "Sports and Games",
  "indian-western-music": "Indian & Western Music",
  "classical-western-dance": "Indian Classical and Western Dance",
  "clubs": "Clubs",
  "educational-excursions-trips": "Educational Excursions & Trips",
  "achievements": "Achievements & Accolades",
  "cbse-results": "CBSE Results",
  "awards-achievements": "Other Achievements",
  "amenities": "Amenities",
  "laboratories": "Laboratories",
  "library": "Library",
  "music-studio": "Music Studio",
  "art-studio": "Art Studio",
  "medical-room": "Medical Room",
  "auditorium": "Auditorium",
  "conference-room": "Conference Room",
  "smart-class": "Smart Class",
  "photo-gallery": "Photo Gallery",
  "video-gallery": "Video Gallery",
  "news": "Latest News",
  "bulletin-board": "Bulletin Board",
  "circulars": "Circulars",
  "nursery-registration": "Nursery Registration",
};

function toLabel(segment: string): string {
  return LABEL_MAP[segment] || segment
    .split("-")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <ul className="breadcrumb themeBreadcrumb">
      <li>
        <Link href="/"><i className="fa fa-home" /></Link>
      </li>
      {segments.map((seg, index) => {
        const href = "/" + segments.slice(0, index + 1).join("/");
        const isLast = index === segments.length - 1;
        const label = toLabel(seg);
        return (
          <li key={index} className={isLast ? "active" : ""}>
            {isLast ? label : <Link href={href}>{label}</Link>}
          </li>
        );
      })}
    </ul>
  );
}
