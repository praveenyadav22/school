import type { Metadata } from "next";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";

export const metadata: Metadata = {
  title: "Affiliation — Birla Vidya Niketan",
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

export default function AffiliationPage() {
  return (
    <>
      <div className="body-conent ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
             <div className="inner-content">
        <div className="contentArea">
         <h4>Affiliation</h4>
         <p>Birla Vidya Niketan, Sec 4, Pushp Vihar, New Delhi is affiliated with CBSE vide affiliation no. <strong>2730115.</strong></p>
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
