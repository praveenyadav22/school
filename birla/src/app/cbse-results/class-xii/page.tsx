import type { Metadata } from "next";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";

export const metadata: Metadata = {
  title: "Class XII — Birla Vidya Niketan",
};

const sidebarData: SidebarLinksProps = {
  heading: "CBSE Results",
  links: [
    { label: "Class XII",         href: "/cbse-results/class-xii" },
    { label: "Class X",           href: "/cbse-results/class-x" },
    { label: "Batch After School", href: "/cbse-results/batch-after-school" },
  ],
};

export default function ClassXIIPage() {
  return (
    <>
      <div className="body-conent ptb-50">
        <div className="container">
          <div className="row">

            {/* ── Main content — 8 columns ── */}
            <div className="col-12 col-lg-8">
              <div className="inner-content">
                <div className="contentArea">

                  {/* Browser: <h4 class="inner-content__head theme-red-color pb-2 mb-2 border-bottom"> */}
                  <h4 className="inner-content__head theme-red-color pb-2 mb-2 border-bottom">
                    CLASS XII : 2024-2025
                  </h4>

                  {/* Browser: <div class="mt-4"><img class="img-responsive"> */}
                  <div className="mt-4">
                    <img
                      src="/images/generic/result-class-xii.jpg"
                      alt="Class XII Results 2024-2025 — Birla Vidya Niketan"
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
