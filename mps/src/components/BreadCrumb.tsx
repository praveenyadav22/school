"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

// Map URL slugs → readable labels
const LABEL_MAP: Record<string, string> = {
  "about-us":              "About Us",
  "vision-mission":        "Vision & Mission",
  "principal-message":     "Principal's Message",
  "managing-director":     "Managing Director's Message",
  "affirmations":          "Affirmations",
  "good-modernite":        "Aspire to be a Good Modernite",
  "building-trust":        "Building A Culture of Trust",
  "infrastructure":        "Infrastructure",
  "school-details":        "School Details",
  "streams":               "Streams",
  "admission":             "Admission",
  "curriculum":            "Curriculum",
  "assessment-rules":      "Examination & Assessment Rules",
  "school-information":    "School Information",
  "innovation":            "Best Practices",
  "life-skills":           "Life Skills",
  "workshops":             "Workshops",
  "clubs":                 "Clubs",
  "sports":                "Sports",
  "phad-se-padh":          "Phad se Padh Initiative",
  "health-wellness":       "Health and Wellness",
  "kindergarten-events":   "School Events",
  "house-system":          "House System",
  "international-ventures":"International Ventures",
  "mandatory-committees":  "Mandatory Committees",
  "contact-us":            "Contact Us",
  "circulars":             "Circulars",
  "photo-gallery":         "Photo Gallery",
  "video-gallery":         "Video Gallery",
  "transfer-certificate":  "Transfer Certificate",
  "terms-conditions":      "Terms & Conditions",
};

// Map slug → parent breadcrumb group label
const PARENT_MAP: Record<string, string> = {
  "about-us":              "School",
  "vision-mission":        "School",
  "principal-message":     "School",
  "managing-director":     "School",
  "affirmations":          "School",
  "good-modernite":        "School",
  "building-trust":        "School",
  "infrastructure":        "School",
  "school-details":        "School",
  "streams":               "Academics",
  "admission":             "Academics",
  "curriculum":            "Academics",
  "assessment-rules":      "Academics",
  "school-information":    "Academics",
  "life-skills":           "Beyond Classroom",
  "workshops":             "Beyond Classroom",
  "clubs":                 "Beyond Classroom",
  "sports":                "Beyond Classroom",
  "phad-se-padh":          "Beyond Classroom",
  "health-wellness":       "Beyond Classroom",
  "kindergarten-events":   "Campus Life",
  "house-system":          "Campus Life",
  "international-ventures":"Campus Life",
  "mandatory-committees":  "Campus Life",
};

interface BreadCrumbProps {
  /** Override title shown in innerBanner */
  title?: string;
  /** Override background image */
  bgImage?: string;
}

export default function BreadCrumb({ title, bgImage }: BreadCrumbProps) {
  const pathname = usePathname();
  const slug = pathname.split("/").filter(Boolean).pop() ?? "";

  const pageTitle  = title  ?? LABEL_MAP[slug]  ?? slug.replace(/-/g, " ");
  const parentLabel = PARENT_MAP[slug];
  const bg = bgImage ?? "/images/banner/breadcrumbs-bg.jpg";

  return (
    <div className="innerBanner" style={{ background: `url(${bg})` }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="pageHeadWrap">
              <h1>{pageTitle}</h1>
              <ul className="breadcrumb themeBreadcrumb">
                <li>
                  <Link href="/"><i className="fa fa-home" /></Link>
                </li>
                {parentLabel && (
                  <li><a href="#">{parentLabel}</a></li>
                )}
                <li className="active">{pageTitle}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
