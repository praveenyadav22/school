import type { Metadata } from "next";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";

export const metadata: Metadata = {
  title: "Career Counselling Cell — Birla Vidya Niketan",
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

export default function CareerCounsellingCellPage() {
  return (
    <>
      <div className="body-conent ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
            <div className="inner-content">
        <div className="contentArea">
         <p>In today’s fast paced and competitive world, it is essential to choose the right career path to ensure a successful and fulfilling life. In order to make informed decisions about their future, students need access to information and resources. Keeping this in mind, the Career Counselling Cell at Birla Vidya Niketan was launched in the year 2022 in association with Jitin Chawla’s Centre for Career Development. Facilities provided include career fairs, workshops, profile building, university application assistance, internships, leadership camps, and many more.</p>
         <p>Individual counselling sessions with expert career counsellors are organized every Thursday from 9 AM to 1 PM. They will meet parents and students in person &amp; handle all Career related queries.</p>
         <p><b>Register for sessions with the following link</b> : <a href="https://forms.gle/cinEt8EDjiPjRK3c6" target="_blank">https://forms.gle/cinEt8EDjiPjRK3c6</a></p>
         <h4 className="mb-3">Why should you visit us?</h4>
         <ul className="checklist">
          <li>Stream Selection</li>
          <li>Career Choice</li>
          <li>College Selection</li>
          <li>How to build profile for top universities</li>
          <li>Prepare for entrance exams</li>
          <li>International University admissions and much more!</li>
         </ul>
         <p><span className="theme-red-color">FEBHA MARIAM PANICKER - Academic Counsellor</span></p>
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
