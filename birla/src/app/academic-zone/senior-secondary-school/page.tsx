import type { Metadata } from "next";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";

export const metadata: Metadata = {
  title: "Senior Secondary School — Birla Vidya Niketan",
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

export default function SeniorSecondarySchoolPage() {
  return (
    <>
      <div className="body-conent ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
            <div className="inner-content">
        <div className="contentArea">
         <p>For classes XI and XII the CBSE curriculum and pattern of examination is followed.</p>
         <h4 className="mb-3">All India Senior Secondary School Offers a Choice Of Subjects in:-</h4>
         <ul className="checklist">
          <li>Science : English Core, Mathematics/Psychology/Informatics Practices, Physics. Chemistry, Biology/Engineering Drawing/Computer Science/Economics</li>
          <li>Commerce : English Core, Mathematics/Psychology/Informatics Practices, Business Studies, Accountancy, Economics</li>
          <li>Humanities : English Core, Political Science/Physical Education, History, Geography/Information Practices /Mathematics, Home Science, Economics, Psychology</li>
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
