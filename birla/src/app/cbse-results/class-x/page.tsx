import type { Metadata } from "next";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";

export const metadata: Metadata = {
  title: "Class X — Birla Vidya Niketan",
};

const sidebarData: SidebarLinksProps = {
  heading: "CBSE Results",
  links: [
    { label: "Class XII", href: "/cbse-results/class-xii" },
    { label: "Class X", href: "/cbse-results/class-x" },
    { label: "Batch After School", href: "/cbse-results/batch-after-school" },
  ],
};

export default function ClassXPage() {
  return (
    <>
      <div className="body-conent ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              Class X
            </div>
            <div className="col-12 col-lg-4">
              <SidebarLinks {...sidebarData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
