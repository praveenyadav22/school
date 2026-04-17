import type { Metadata } from "next";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";

export const metadata: Metadata = {
  title: "Class X — Birla Vidya Niketan",
};

const sidebarData: SidebarLinksProps = {
  heading: "CBSE Results",
  links: [
    { label: "Class XII",         href: "/cbse-results/class-xii" },
    { label: "Class X",           href: "/cbse-results/class-x" },
    { label: "Batch After School", href: "/cbse-results/batch-after-school" },
  ],
};

export default function ClassXPage() {
  return (
    <>
      <div className="body-conent ptb-50">
        <div className="container">
          <div className="row">

            {/* ── Main content — 8 columns ── */}
            <div className="col-12 col-lg-8">
              <div className="inner-content">
                <div className="contentArea">

                  <h4 className="inner-content__head theme-red-color pb-2 mb-2 border-bottom">
                    CLASS X : 2025-2026
                  </h4>

                  <div className="mt-4">
                    <img
                      src="/images/generic/result-class-x.jpg"
                      alt="Class X Results 2025-2026 — Birla Vidya Niketan"
                      className="img-fluid"
                    />
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
