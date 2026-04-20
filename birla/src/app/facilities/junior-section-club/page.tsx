import type { Metadata } from "next";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";

export const metadata: Metadata = {
  title: "Junior Section Club — Birla Vidya Niketan",
};

const sidebarData: SidebarLinksProps = {
  heading: "Facilities",
  links: [
    { label: "Sarala Birla Krida Kendra", href: "/facilities/birla-krida-kendra" },
    { label: "Transport", href: "/facilities/transport" },
    { label: "Excursion/Educational Tours", href: "/facilities/educational-tours" },
    { label: "BVN-IAPT Anveshika", href: "/facilities/bvn-anveshika" },
    { label: "BVN-MUN", href: "#" },
    {
      label: "Clubs",
      subLinks: [
        { label: "Senior Section", href: "/facilities/senior-section-club" },
        { label: "Junior Section", href: "/facilities/junior-section-club" },
      ],
    },
    { label: "Canteen", href: "/facilities/canteen" },
    { label: "Career Counselling Cell", href: "/facilities/career-counselling-cell" },
    { label: "Mind Spark", href: "/facilities/mind-spark" },
    { label: "Atal Tinkering Lab", href: "/facilities/atal-tinkering-lab" },
  ],
};

export default function JuniorSectionClubPage() {
  return (
    <div className="body-conent ptb-50">
      <div className="container">
        <div className="row">

          {/* MAIN */}
          <div className="col-12 col-lg-8">
            <div className="inner-content">
              <div className="contentArea">

                <p>
                  <iframe
                    className="border p-1"
                    src="/documents/junior-section-club.pdf"
                    width="100%"
                    height="800"
                  />
                </p>

              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="col-12 col-lg-4">
            <SidebarLinks {...sidebarData} />
          </div>

        </div>
      </div>
    </div>
  );
}