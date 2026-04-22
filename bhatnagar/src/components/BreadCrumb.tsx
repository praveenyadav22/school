"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Label map: converts URL slug → human-readable display label
const LABEL_MAP: Record<string, string> = {
  "about-the-school":          "About The School",
  "history-of-the-school":     "History Of the School",
  "our-inspiration":           "Our Inspiration",
  "core-values":               "Core Values",
  "our-vision-mission":        "Our Vision & Mission",
  "chairman-message":          "Founder Chairman Message",
  "director-message":          "Director Message",
  "admissions-schedule":       "Admission Schedule",
  "admission-procedure":       "Admission Procedure",
  "admissions-under-ews":      "Admissions Under EWS",
  "fee-structure":             "Fee Structure",
  "online-registration":       "Online Registration",
  "entry-level-admission":     "Entry Level Admission Details",
  "registered-students":       "List of Registered Students",
  "point-wise-registered":     "Point Wise List For Registered Candidates",
  "list-of-selected-students": "List Of Selected Students",
  "interactive-library":       "Interactive Library",
  "computer-lab":              "Computer Lab",
  "smart-class-rooms":         "Smart Class Rooms",
  "fashion-studies":           "Fashion Studies",
  "physics-laboratory":        "Physics Laboratory",
  "chemistry-laboratory":      "Chemistry Laboratory",
  "biotechnology-laboratory":  "Biotechnology Laboratory",
  "maths-laboratory":          "Maths Laboratory",
  "physical-playground":       "Physical Education & Playground",
  "curriculum-evaluation":     "Curriculum & Evaluation",
  "seminars-workshops":        "Seminars & Workshops",
  "department-faculty":        "Departments & Faculty",
  "student-strength":          "Student Strength",
  "safety-and-transport":      "Safety and Transport",
  "circular":                  "Circulars",
  "bulletin-board":            "Bulletin Board",
  "thought-of-the-day":        "Thought Of the Day",
  "cbse-results":              "CBSE Results",
  "book-list":                 "Book List 2026-27",
  "pedagogical-plan":          "Annual Pedagogical Plan",
  "mandatory-public-disclosure":"Mandatory Public Disclosure",
  "slfrc-committee":           "SLFRC Committee",
  "job-vacancy":               "Job Vacancy",
  "clubs":                     "Clubs",
  "parent-corner":             "Parent's Corner",
  "teacher-corner":            "Teacher's Corner",
  "alumni":                    "Alumni",
  "contact-us":                "Contact Us",
  "school-activities":         "School Activities",
  "glimpses":                  "Glimpses",
  "media-print-coverage":      "Media Print Coverage",
  "school-calendar":           "School Calendar",
  "school-events":             "School Events",
  "photo-gallery":             "Photo Gallery",
  "video-gallery":             "Video Gallery",
  "transfer-certificate":      "Transfer Certificate",
  "terms-conditions":          "Terms & Conditions",
  "award-achievements":        "Awards & Achievements",
  "mobile-application":        "BIS Mobile App",
  "fit-india-movement":        "Fit India Movement",
  "teachers-development-index":"Teachers Development Index",
  "from-principal-desk":       "From Principal's Desk",
  "news-updates":              "News & Updates",
};

// Parent group map: slug → { label, href }
const PARENT_MAP: Record<string, { label: string; href: string }> = {
  "about-the-school":          { label: "About Us",    href: "/about-the-school" },
  "history-of-the-school":     { label: "About Us",    href: "/about-the-school" },
  "our-inspiration":           { label: "About Us",    href: "/about-the-school" },
  "core-values":               { label: "About Us",    href: "/about-the-school" },
  "our-vision-mission":        { label: "About Us",    href: "/about-the-school" },
  "chairman-message":          { label: "About Us",    href: "/about-the-school" },
  "director-message":          { label: "About Us",    href: "/about-the-school" },
  "admissions-schedule":       { label: "Admission",   href: "/admission-procedure" },
  "admission-procedure":       { label: "Admission",   href: "/admission-procedure" },
  "admissions-under-ews":      { label: "Admission",   href: "/admission-procedure" },
  "fee-structure":             { label: "Admission",   href: "/admission-procedure" },
  "online-registration":       { label: "Admission",   href: "/admission-procedure" },
  "entry-level-admission":     { label: "Admission",   href: "/admission-procedure" },
  "registered-students":       { label: "Admission",   href: "/admission-procedure" },
  "point-wise-registered":     { label: "Admission",   href: "/admission-procedure" },
  "list-of-selected-students": { label: "Admission",   href: "/admission-procedure" },
  "interactive-library":       { label: "Facilities",  href: "/interactive-library" },
  "computer-lab":              { label: "Facilities",  href: "/interactive-library" },
  "smart-class-rooms":         { label: "Facilities",  href: "/interactive-library" },
  "fashion-studies":           { label: "Facilities",  href: "/interactive-library" },
  "physics-laboratory":        { label: "Facilities",  href: "/interactive-library" },
  "chemistry-laboratory":      { label: "Facilities",  href: "/interactive-library" },
  "biotechnology-laboratory":  { label: "Facilities",  href: "/interactive-library" },
  "maths-laboratory":          { label: "Facilities",  href: "/interactive-library" },
  "physical-playground":       { label: "Facilities",  href: "/interactive-library" },
  "curriculum-evaluation":     { label: "Academic",    href: "/curriculum-evaluation" },
  "seminars-workshops":        { label: "Academic",    href: "/curriculum-evaluation" },
  "department-faculty":        { label: "Info. Desk",  href: "/department-faculty" },
  "student-strength":          { label: "Info. Desk",  href: "/department-faculty" },
  "safety-and-transport":      { label: "Info. Desk",  href: "/department-faculty" },
  "circular":                  { label: "Info. Desk",  href: "/department-faculty" },
  "bulletin-board":            { label: "Info. Desk",  href: "/department-faculty" },
  "thought-of-the-day":        { label: "Info. Desk",  href: "/department-faculty" },
  "cbse-results":              { label: "Info. Desk",  href: "/department-faculty" },
  "book-list":                 { label: "Info. Desk",  href: "/department-faculty" },
  "pedagogical-plan":          { label: "Info. Desk",  href: "/department-faculty" },
  "mandatory-public-disclosure":{ label: "Info. Desk", href: "/department-faculty" },
  "slfrc-committee":           { label: "Info. Desk",  href: "/department-faculty" },
};

export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) return null; // homepage — no breadcrumb

  const slug    = segments[segments.length - 1];
  const label   = LABEL_MAP[slug] ?? slug.replace(/-/g, " ");
  const parent  = PARENT_MAP[slug];

  return (
    <div className="bread-crumb">
      {/* "You are here ::" label like the live site */}
      <span className="bread-crumb__prefix">You are here ::</span>

      {/* Home */}
      <Link href="/" className="transition4s">Home</Link>

      {/* Parent group (e.g. "About Us", "Facilities") */}
      {parent && (
        <>
          <span className="fa fa-angle-right" aria-hidden="true" />
          <Link href={parent.href} className="transition4s">{parent.label}</Link>
        </>
      )}

      {/* Current page — highlighted in light blue, no link */}
      <span className="fa fa-angle-right" aria-hidden="true" />
      <a href="#" className="transition4s active" aria-current="page"
         onClick={(e) => e.preventDefault()}>
        {label}
      </a>
    </div>
  );
}
