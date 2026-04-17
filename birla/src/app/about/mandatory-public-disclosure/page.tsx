import type { Metadata } from "next";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";

export const metadata: Metadata = {
  title: "Mandatory Public Disclosure — Birla Vidya Niketan",
};

const sidebarData: SidebarLinksProps = {
  heading: "About Us",
  links: [
    { label: "School Profile",              href: "/about/school-profile" },
    { label: "Vision And Mission",          href: "/about/vision-mission" },
    { label: "Founders",                    href: "/about/founders" },
    { label: "Chairperson",                 href: "/about/chairperson" },
    { label: "Director & Manager",          href: "/about/director-manager" },
    { label: "Principal",                   href: "/about/principal" },
    {
      label: "Vice Principal",
      subLinks: [
        { label: "Sr. Section", href: "/about/vice-principal/sr-section" },
      ],
    },
    { label: "Head Mistress",               href: "/about/head-mistress" },
    { label: "School Managing Committee",   href: "/about/school-managing-committee" },
    { label: "Faculty",                     href: "/about/faculty" },
    { label: "PTA",                         href: "/about/pta" },
    { label: "Internal Committee",          href: "/about/internal-committee" },
    { label: "Mandatory Public Disclosure", href: "/about/mandatory-public-disclosure" },
  ],
};

// ── Documents data ────────────────────────────────────────────
const DOCUMENTS = [
  { label: "Affiliation",                    href: "/images/affiliation.pdf" },
  { label: "Academic Calendar",              href: "/images/academic-calendar.pdf" },
  { label: "Building Safety",               href: "/images/building-safety.pdf" },
  { label: "DOE Certificate School Affiliation", href: "/images/doe-certificate-school-affiliation.pdf" },
  { label: "Fee Structure",                 href: "/images/fee-structure.pdf" },
  { label: "Fire Safety",                   href: "/images/fire-safety.pdf" },
  { label: "Health & Water Certificate",    href: "/images/health-water-certificate.pdf" },
  { label: "Management Committee",          href: "/images/management-committee.pdf" },
  { label: "NOC",                           href: "/images/noc.pdf" },
  { label: "Recognition",                   href: "/images/recognition.pdf" },
  { label: "Result",                        href: "/images/result.pdf" },
  { label: "Trust Registration",            href: "/images/trust-registration.pdf" },
  { label: "PTA List",                      href: "/images/pta-list.pdf" },
  { label: "Faculty Details",               href: "/images/faculty-details.pdf" },
];

export default function MandatoryPublicDisclosurePage() {
  return (
    <>
      <div className="body-conent ptb-50">
        <div className="container">
          <div className="row">

            {/* ── Main content — 8 columns ── */}
            <div className="col-12 col-lg-8">
              <div className="inner-content">
                <div className="contentArea">

                  {/* Browser: <ul class="list-unstyled list-inline">
                      style="margin-bottom:10px" moved to .disclosure-btn in SCSS
                      fa fa-arrow-circle-right → ri-arrow-right-circle-line (remixicon) */}
                  <ul className="list-unstyled list-inline">
                    {DOCUMENTS.map((doc) => (
                      <li className="list-inline-item" key={doc.label}>
                        <a
                          href={doc.href}
                          className="btn btn-secondary btn-sm disclosure-btn"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Download ${doc.label} PDF (opens in new tab)`}
                        >
                          <i className="ri-arrow-right-circle-line" aria-hidden="true" />
                          {" "}{doc.label}
                        </a>
                      </li>
                    ))}
                  </ul>

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
