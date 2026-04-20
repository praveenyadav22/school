import type { Metadata } from "next";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";

export const metadata: Metadata = {
  title: "Excursion / Educational Tours — Birla Vidya Niketan",
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

export default function EducationalToursPage() {
  return (
    <>
      <div className="body-conent ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="inner-content">
        <div className="contentArea">
         <p >For the holistic growth of its pupil the school believes in a strong mental and physical development. Therefore, the students are exposed to a plethora of activities, workshops etc. Trips and excursions are important aspects wherein students are offered various types of activities outside school.</p>
         <ul className="checklist">
          <li>Social service related trips to various schools, colonies etc.</li>
          <li>One day fun picnics.</li>
          <li>One day heritage walks.</li>
          <li>One day Science education related trips.</li>
          <li>Outstation Adventure Camps within India.</li>
          <li>Outstation Educational trips within India.</li>
          <li>International Educational trips.</li>
          <li>International Students Exchange Programmes.</li>
          <li>Visit to art gallery.</li>
         </ul>
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
