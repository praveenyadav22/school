import type { Metadata } from "next";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";

export const metadata: Metadata = {
  title: "Secondary School — Birla Vidya Niketan",
};

const sidebarData: SidebarLinksProps = {
  heading: "Academic Zone",
  links: [
    { label: "Affiliation", href: "/academic-zone/affiliation" },
    {
      label: "Curriculum/Syllabus",
      subLinks: [
        { label: "Primary School",          href: "/academic-zone/primary-school" },
        { label: "Middle School",           href: "/academic-zone/middle-school" },
        { label: "Secondary School",        href: "/academic-zone/secondary-school" },
        { label: "Senior Secondary School", href: "/academic-zone/senior-secondary-school" },
      ],
    },
    { label: "Streams Offered",   href: "/academic-zone/streams-offered" },
    { label: "Book List 2024-25", href: "/academic-zone/book-list" },
  ],
};

export default function SecondarySchoolPage() {
  return (
    <>
      <div className="body-conent ptb-50">
        <div className="container">
          <div className="row">

            {/* ── Main content — 8 columns ── */}
            <div className="col-12 col-lg-8">
              <div className="inner-content">
                <div className="contentArea">

                  <p>For classes IX and X the CBSE curriculum and pattern of examination is followed. The school also has various life skills and performing art classes for the holistic development of the students. In addition to scholastic assessment, areas like Health and Physical Education (HPE), Art Education and Discipline are evaluated and graded.</p>

                  <h4 className="mb-3">The subjects in the main curriculum are:-</h4>

                  <ul className="checklist">
                    <li>English</li>
                    <li>Mathematics</li>
                    <li>Science</li>
                    <li>Social Science</li>
                  </ul>

                  <p><strong>The optional subjects: French/Hindi/Sanskrit</strong></p>

                </div>
              </div>
            </div>

            {/* ── Sidebar — 4 columns ── */}
            <div className="col-12 col-lg-4">
              <SidebarLinks {...sidebarData} />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
