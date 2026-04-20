import type { Metadata } from "next";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";

export const metadata: Metadata = {
  title: "Streams Offered — Birla Vidya Niketan",
};

const sidebarData: SidebarLinksProps = {
  heading: "Academic Zone",
  links: [
    {
      label: "Affiliation",
      href: "/academic-zone/affiliation",
    },

    // ✅ Curriculum (Nested like HTML)
    {
      label: "Curriculum/Syllabus",
      subLinks: [
        {
          label: "Primary School",
          href: "/academic-zone/primary-school",
        },
        {
          label: "Middle School",
          href: "/academic-zone/middle-school",
        },
        {
          label: "Secondary School",
          href: "/academic-zone/secondary-school",
        },
        {
          label: "Senior Secondary School",
          href: "/academic-zone/senior-secondary-school",
        },
      ],
    },

    {
      label: "Streams Offered",
      href: "/academic-zone/streams-offered",
    },
    {
      label: "Book List 2024-25",
      href: "/academic-zone/book-list",
    },
  ],
};
export default function StreamsOfferedPage() {
  return (
    <>
      <div className="body-conent ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="inner-content">
        <div className="contentArea">
         <p><b>Third Languages</b> : Besides English and Hindi as the languages taught, the following languages are offered at the middle and secondary level.</p>
         <p><b>VI to VIII</b> – Sanskrit, French, German, Japanese, Spanish (VIII)</p>
         <p><b>IX to X</b> – Sanskrit, French, German (IX)</p>
         <p><b>Streams offered</b> : At +2 levels, the school offers all the three streams...Science, Commerce and Humanities. With English as the compulsory language, following are the subjects available in different streams:</p>
         <ul className="checklist">
          <li>Science : Core Mathematics, Physics, Chemistry, Biology, Computer Science, Engineering graphics, Economics, Psychology and Physical Education.</li>
          <li>Commerce : Core Mathematics, Applied Mathematics, Legal Studies, Accountancy, Business Studies, Economics, Psychology, Informatics Practices and Physical Education.</li>
          <li>Humanities : Core Mathematics, Applied Mathematics, Economics, History, Geography, Political Science, Psychology, Informatics Practices, Home Science, Legal Studies and Physical Education.</li>
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
