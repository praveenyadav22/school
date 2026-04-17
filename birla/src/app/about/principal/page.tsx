import type { Metadata } from "next";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";

export const metadata: Metadata = {
  title: "Principal — Birla Vidya Niketan",
};

const sidebarData: SidebarLinksProps = {
  heading: "About Us",
  links: [
    { label: "School Profile",              href: "/about/school-profile" },
    { label: "Vision And Mission",          href: "/about/vision-mission" },
    { label: "Founders",                    href: "/about/founders" },
    { label: "Chairperson",                 href: "/about/chairperson" },
    { label: "Director & Manager",          href: "/about/director-manager" },
    { label: "Principal",                   href: "/about/principal" },
    {
      label: "Vice Principal",
      subLinks: [
        { label: "Sr. Section", href: "/about/vice-principal/sr-section" },
      ],
    },
    { label: "Head Mistress",               href: "/about/head-mistress" },
    { label: "School Managing Committee",   href: "/about/school-managing-committee" },
    { label: "Faculty",                     href: "/about/faculty" },
    { label: "PTA",                         href: "/about/pta" },
    { label: "Internal Committee",          href: "/about/internal-committee" },
    { label: "Mandatory Public Disclosure", href: "/about/mandatory-public-disclosure" },
  ],
};

export default function PrincipalPage() {
  return (
    <>
      <div className="body-conent ptb-50">
        <div className="container">
          <div className="row">

            {/* ── Main content — 8 columns ── */}
            <div className="col-12 col-lg-8">
              <div className="inner-content">
                <div className="contentArea">
                  <div className="row">
                    <div className="col-md-12 text-center">

                      {/* All image CSS moved to .profileImage--circle in _profileimage.scss */}
                      <figure className="founder-figure">
                        <img
                          src="/images/generic/principal.jpg"
                          alt="Minakshi Kushwaha — Principal, Birla Vidya Niketan"
                          className="profileImage v2 profileImage--circle"
                        />
                      </figure>

                      <p>&ldquo;Education is a meaningless ritual unless it can mould the character of students.&rdquo; - Sarala Birla</p>
                      <p>We at Birla Vidya Niketan, awaken our students to the awareness of the moment. They are prepared to tread the path of life and carve out their future with the understanding of their heritage, their roots, and their culture. At the same time, their cognitive, emotional, and spiritual growth depends on a healthy planet. We train our planetary stewards to recognize their moral responsibility of being the change agents. The multi disciplinary approach through chocolate questions, daily general awareness questions, speaking walls, research based activities, meditation, prayer, everyday science, technology, mending and cooking has empowered our scholars and given them a sense of accomplishment. Their engagement in sports helps them navigate the complexities of the modern world by building skills, self-confidence and leadership, thus contributing meaningfully to their holistic development. This issue of BVN unbound reflects these proud moments. As our students are first citizens of the new world, where technology is ever changing and evolving what they make of it or how they shape it, depends on the foundations they lay today so that together we can create a world that is just, compassionate and mindful.</p>
                      <p>We would like to also take the opportunity to thank all our eminent guests, alumni and parents for their invaluable support.</p>

                      <p>
                        <span className="theme-red-color"><strong>Minakshi Kushwaha</strong></span>
                      </p>

                    </div>
                  </div>
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
