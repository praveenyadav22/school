import type { Metadata } from "next";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";

export const metadata: Metadata = {
  title: "Primary School — Birla Vidya Niketan",
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

export default function PrimarySchoolPage() {
  return (
    <>
      <div className="body-conent ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              Primary School
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
