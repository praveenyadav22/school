import type { Metadata } from "next";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";

export const metadata: Metadata = {
  title: "Primary School — Birla Vidya Niketan",
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

export default function PrimarySchoolPage() {
  return (
    <>
      <div className="body-conent ptb-50">
        <div className="container">
          <div className="row">

            {/* ── Main content — 8 columns ── */}
            <div className="col-12 col-lg-8">
              <div className="inner-content">
                <div className="contentArea">

                  <p>The school follows the curriculum and guidelines based on NCF and a child centered pedagogy. The syllabus aims at arousing curiosity and interest in children to share their ideas and experiences. It is meaning fully woven around situations which permit learning to proceed from concrete to abstract, consolidating and expanding the experiences of children and engaging the learner to deal with problems.</p>

                  <p>In addition to scholastic and co-curricular activities, the students also participate in different clubs of their choice to bring forth their latent talent and do life skill activities to develop a greater sense of self-awareness and appreciation for others.</p>

                  <p><strong>Nursery to Class II</strong> : All assessments are continuous and comprehensive in nature enabling us to get the true picture of a child&apos;s capabilities.</p>

                  <p><strong>Classes III, IV &amp; V</strong> : Children enjoy learning in a logical sequence which ensures stronger retention. The syllabi centers on activities and projects and emphasizes on a learner friendly approach.</p>

                  <p><strong>Subjects</strong> : English, Hindi, Mathematics, Social Studies, Science</p>

                  <h3>Activities:</h3>

                  {/* Browser: <ul class="checklist"> — styled by _basic.scss */}
                  <ul className="checklist">
                    <li>Creative Activities : Art, Craft, Music and Dance</li>
                    <li>
                      Sports Activities : PEC (Physical Education Cards) is used to make sports activities useful.<br />
                      PEC focuses on providing activities which can be easily organized with a large number of children. These activities help the children to develop agility, balance and coordination according to their age groups. It aims at building confidence, developing creativity and self-expression.
                    </li>
                    <li>Other Activities : Yoga, Computer Education</li>
                  </ul>

                  {/* Browser: <div style="height:20px">&nbsp;</div> — replaced with mt-4 spacer */}
                  <div className="mt-4" />

                  <p><strong>The session is divided into two terms</strong>.</p>

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
