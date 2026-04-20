import type { Metadata } from "next";
import Link from "next/link";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";

export const metadata: Metadata = {
  title: "Admission — Birla Vidya Niketan",
};

const sidebarData: SidebarLinksProps = {
  heading: "Student Zone",
  links: [
    { label: "Rules & Regulations",   href: "/student-zone/rules-regulations" },
    { label: "Awards & Scholarships", href: "/student-zone/awards-scholarships" },
    {
      label: "Student's Council",
      subLinks: [
        { label: "Senior Section", href: "/student-zone/senior-section-council" },
        { label: "Junior Section", href: "/student-zone/junior-section-council" },
      ],
    },
    {
      label: "Examination Schedule",
      subLinks: [
        { label: "Schedule", href: "https://erp.quickcampus.online/auth" },
        { label: "Syllabus", href: "https://erp.quickcampus.online/auth" },
      ],
    },
    { label: "Admission", href: "/student-zone/admission" },
  ],
};

export default function AdmissionPage() {
  return (
    <>
      <div className="body-conent ptb-50">
        <div className="container">
          <div className="row">

            {/* ── Main content — 8 columns ── */}
            <div className="col-12 col-lg-8">
              <div className="inner-content">
                <div className="contentArea">
                  <div className="row">

                    {/* ── Nursery Admission 2026-27 — highlighted card ── */}
                    {/* Browser: border border-warning p-3 rounded-3 shadow (stronger shadow) */}
                    <div className="col-md-4 mb-3">
                      <div className="border border-warning p-3 rounded-3 shadow text-center">
                        <p><strong>Nursery Admission 2026-27</strong></p>
                        <ul className="list-inline text-start mb-2">
                          <li className="list-inline-item">
                            <Link href="/admission-information" className="btn btn-secondary btn-sm">
                              Information
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="https://erp.quickcampus.online/registration/7542d565-32d3-4170-9e99-26eac66c7da8"
                              className="btn btn-warning btn-sm"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Register Now for Nursery Admission 2026-27 (opens in new tab)"
                            >
                              Register Now
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* ── Admission 2026-27 Class IX ── */}
                    {/* Browser: border p-3 rounded-3 shadow-sm (lighter shadow, no warning border) */}
                    <div className="col-md-4 mb-3">
                      <div className="border p-3 rounded-3 shadow-sm text-center">
                        <p><strong>Admission 2026-27 - IX</strong></p>
                        <ul className="list-inline text-start mb-2">
                          <li className="list-inline-item">
                            <a href="#" className="btn btn-secondary btn-sm">Information</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="btn btn-warning btn-sm">Register Now</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* ── Admission 2026-27 Class XI ── */}
                    <div className="col-md-4 mb-3">
                      <div className="border p-3 rounded-3 shadow-sm text-center">
                        <p><strong>Admission 2026-27 - XI</strong></p>
                        <ul className="list-inline text-start mb-2">
                          <li className="list-inline-item">
                            <a href="#" className="btn btn-secondary btn-sm">Information</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="btn btn-warning btn-sm">Register Now</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                  </div>
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
