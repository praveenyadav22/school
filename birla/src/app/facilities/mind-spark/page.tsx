import type { Metadata } from "next";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";

export const metadata: Metadata = {
  title: "Mind Spark — Birla Vidya Niketan",
};

const sidebarData: SidebarLinksProps = {
  heading: "Facilities",
  links: [
    { label: "Sarala Birla Krida Kendra", href: "/facilities/birla-krida-kendra" },
    { label: "Transport", href: "/facilities/transport" },
    { label: "Educational Tours", href: "/facilities/educational-tours" },
    { label: "BVN-IAPT Anveshika", href: "/facilities/bvn-anveshika" },
    { label: "Senior Section Club", href: "/facilities/senior-section-club" },
    { label: "Junior Section Club", href: "/facilities/junior-section-club" },
    { label: "Canteen", href: "/facilities/canteen" },
    { label: "Career Counselling Cell", href: "/facilities/career-counselling-cell" },
    { label: "Mind Spark", href: "/facilities/mind-spark" },
    { label: "Atal Tinkering Lab", href: "/facilities/atal-tinkering-lab" },
  ],
};

export default function MindSparkPage() {
  return (
    <>
      <div className="body-conent ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              Mind Spark
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
