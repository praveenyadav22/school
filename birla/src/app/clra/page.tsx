import type { Metadata } from "next";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";

export const metadata: Metadata = {
  title: "CLRA — Birla Vidya Niketan",
};

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

// ── CLRA contractor links ─────────────────────────────────────
const CONTRACTORS = [
  { name: "Enviro Care Nursery",                    url: "https://envirocarenursery.in/clra/" },
  { name: "VKS Services.",                          url: "http://www.vksservices.com/bvn-unit" },
  { name: "Westech Security Pvt. Ltd.",             url: "https://westechsecurities.com/compliance" },
  { name: "Ashirbad Housekeeping Services Pvt. Ltd.", url: "http://compliance.ashirbad.in/ShowComplianceDetails?Client_Code=CL007" },
  { name: "Shri Shyam Services.",                   url: "http://www.shrishayamservices.com/clra.html" },
];

export default function CLRAPage() {
  return (
    <>
      <div className="body-conent ptb-50">
        <div className="container">
          <div className="row">

            {/* ── Main content — 8 columns ── */}
            <div className="col-12 col-lg-8">
              <div className="inner-content">

                <div className="contentArea">

                  {/* Browser: <h4 class="mb-3"> */}
                  <h4 className="mb-3">
                    LINKS FOR CLRA RECORDS OF CONTRACTORS (BIRLA VIDYA NIKETAN)
                  </h4>

                  {/* Browser: <ul class="list-group"> */}
                  <ul className="list-group">
                    {CONTRACTORS.map((c, i) => (
                      <li className="list-group-item" key={i}>
                        {/* Browser: <span class="theme-red-color"> */}
                        <span className="theme-red-color">{c.name}</span>:{" "}
                        {/* Browser: <a class="seperateLink"> */}
                        <a
                          className="seperateLink"
                          href={c.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {c.url}
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
