import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";
import type { Metadata } from "next";

// ── Quick Links sidebar data — specific to this page ──────────
const quickLinksData: SidebarLinksProps = {
  heading: "Quick Links",
  links: [
    { label: "Newsletter", href: "/newsletter" },
    { label: "Monthly Report", href: "/monthly-report" },
    { label: "Wall Journals", href: "/wall-journals" },
    { label: "Social Responsibility", href: "/social-responsibility" },
    { label: "Infrastructure", href: "/infrastructure" },
    { label: "Creative Corners", href: "/creative-corner" },
    { label: "CLRA", href: "/clra" },
  ],
};

export default function Page() {
  return (
    <>
      <div className="body-conent ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="contentArea">
                <div className="row">
                  {/* ── Nursery Admission — border-warning + shadow (stronger) ── */}
                  <div className="col-md-4">
                    <div className="admission-card admission-card--featured">
                      <p className="admission-card__title">
                        Nursery Admission 2026-27
                      </p>
                      <ul className="list-inline text-start mb-2">
                        <li className="list-inline-item">
                          <a
                            className="btn btn-secondary btn-sm"
                            href="/admission-information"
                          >
                            Information
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            className="btn btn-warning btn-sm"
                            href="https://erp.quickcampus.online/registration/7542d565-32d3-4170-9e99-26eac66c7da8"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Register Now
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* ── Admission IX — default border + shadow-sm ── */}
                  <div className="col-md-4">
                    <div className="admission-card">
                      <p className="admission-card__title">
                        Admission 2026-27 - IX
                      </p>
                      <ul className="list-inline text-start mb-2">
                        <li className="list-inline-item">
                          <a className="btn btn-secondary btn-sm" href="#">
                            Information
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a className="btn btn-warning btn-sm" href="#">
                            Register Now
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* ── Admission XI — default border + shadow-sm ── */}
                  <div className="col-md-4">
                    <div className="admission-card">
                      <p className="admission-card__title">
                        Admission 2026-27 - XI
                      </p>
                      <ul className="list-inline text-start mb-2">
                        <li className="list-inline-item">
                          <a className="btn btn-secondary btn-sm" href="#">
                            Information
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a className="btn btn-warning btn-sm" href="#">
                            Register Now
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <SidebarLinks {...quickLinksData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
