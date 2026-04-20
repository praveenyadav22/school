import type { Metadata } from "next";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";

export const metadata: Metadata = {
  title: "Canteen — Birla Vidya Niketan",
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

export default function CanteenPage() {
  return (
    <>
      <div className="body-conent ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
             <div className="inner-content">
        <div className="contentArea">
         <p>Food provided at school has a considerable influence on the development of the children’s long term eating habits, food preferences and attitude towards food.</p>
         <p>In order to develop healthy eating habits and to encourage social skills, ‘Sampurna’ provides nutritious food for the students. Tiffin is served to the children of classes Nursery to I in the classroom itself which includes a balanced meal consisting of a fruit followed by the main course &amp; the menu is changed everyday to avoid monotony.</p>
         <p>Canteen is supervised regularly to ensure hygiene while cooking and serving meals.</p>
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
