import type { Metadata } from "next";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";

export const metadata: Metadata = {
  title: "Sarala Birla Krida Kendra — Birla Vidya Niketan",
};

const sidebarData: SidebarLinksProps = {
  heading: "Facilities",
  links: [
    {
      label: "Sarala Birla Krida Kendra",
      href: "/facilities/birla-krida-kendra",
    },
    {
      label: "Transport",
      href: "/facilities/transport",
    },
    {
      label: "Excursion/Educational Tours",
      href: "/facilities/educational-tours",
    },
    {
      label: "BVN-IAPT Anveshika",
      href: "/facilities/bvn-anveshika",
    },

    // ⚠️ Placeholder (no link in HTML)
    {
      label: "BVN-MUN",
      href: "#",
    },

    // ✅ Clubs (Nested)
    {
      label: "Clubs",
      subLinks: [
        {
          label: "Senior Section",
          href: "/facilities/senior-section-club",
        },
        {
          label: "Junior Section",
          href: "/facilities/junior-section-club",
        },
      ],
    },

    {
      label: "Canteen",
      href: "/facilities/canteen",
    },
    {
      label: "Career Counselling Cell",
      href: "/facilities/career-counselling-cell",
    },
    {
      label: "Mind Spark",
      href: "/facilities/mind-spark",
    },
    {
      label: "Atal Tinkering Lab",
      href: "/facilities/atal-tinkering-lab",
    },
  ],
};

export default function BirlaKridaKendraPage() {
  return (
    <>
      <div className="body-conent ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
             <div className="inner-content">
        <div className="contentArea">
         <p >Sarala Birla Krida Kendra is located inside the school campus. Its world class badminton courts and dedicated coach have produced many badminton champions at state, national and international levels. BVN is one of the few schools which has a beautiful and very clean swimming pool, and many great swimmers have been trained here. The Gymnasium under its expert coach has also produced gymnasts at national level. The wooden floored Skating rink is another facet of awe at the sports center. Besides these indoor games, many other sports are also encouraged/played at BVN. To name a few are...Basket ball, Volley Ball, Football, Cricket, Athletics, Chess, Kabaddi, Marshall Arts etc.</p>
        </div> 
       </div>
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
