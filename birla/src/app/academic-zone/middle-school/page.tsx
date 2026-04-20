import type { Metadata } from "next";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";

export const metadata: Metadata = {
  title: "Middle School — Birla Vidya Niketan",
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

export default function MiddleSchoolPage() {
  return (
    <>
      <div className="body-conent ptb-50">
        <div className="container">
          <div className="row">

            {/* ── Main content — 8 columns ── */}
            <div className="col-12 col-lg-8">
              <div className="inner-content">
                <div className="contentArea">

                  <p>For classes VI to VIII the assessment pattern is followed as per CBSE guide lines. The scheme has been designed on Term Assessment basis with gradual increase in the learning as the students move forward. In addition to the periodic test, midterm and the year end examination the assessment is also done on the basis of multiple assessment strategies, portfolio of the student and subject enrichment task done through the academic year. The school also has various life skills and performing art classes for the holistic development of the students. In addition to scholastic assessment, areas like physical education, work education, art education and discipline are evaluated and graded.</p>

                  {/* Browser: <h4 class="mb-3"> */}
                  <h4 className="mb-3">The subjects in the main curriculum are:-</h4>

                  <ul className="checklist">
                    <li>English</li>
                    <li>Hindi</li>
                    <li>Mathematics</li>
                    <li>Science</li>
                    <li>Social Science</li>
                  </ul>

                  <p><strong>The optional subjects: French/Sanskrit/Spanish/German</strong></p>

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
