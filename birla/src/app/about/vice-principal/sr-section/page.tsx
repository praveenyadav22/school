import type { Metadata } from "next";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";

export const metadata: Metadata = {
  title: "Sr. Section — Birla Vidya Niketan",
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

export default function SrSectionPage() {
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

                      {/* Same circle style as Principal — all CSS in _profileimage.scss */}
                      <figure className="founder-figure">
                        <img
                          src="/images/generic/vice-sr-section.jpg"
                          alt="Gayatri Kapur — Vice Principal Sr. Section, Birla Vidya Niketan"
                          className="profileImage profileImage--circle"
                        />
                      </figure>

                      <p>Welcome to an extraordinary edition that embodies the spirit of our esteemed institution. Within these pages, we unveil a commitment to excellence in education, fostering holistic development, and nurturing a collaborative learning environment. At our core lies a dedication to academic rigor, complemented by a profound emphasis on cultivating well-rounded personalities. We aspire to instill in our students not only knowledge but also integrity, empathy, and a profound sense of responsibility to society. Central to our ethos is the belief that students are the heartbeat of our institution. Embracing a student-centred learning approach, we cater to diverse learning styles, nurturing vital skills such as creativity, critical thinking, and collaboration. As you delve into the contents of this magazine, you&apos;ll witness a tapestry of our collective achievements and aspirations. From academic triumphs to artistic endeavours, from sporting feats to community service initiatives, each section echoes the dedication of both students and staff. Within each student lies boundless potential, and their journey is filled with endless possibilities. Let us pledge to support, encourage, and empower them as they soar towards their dreams. Welcome to a celebration of excellence and aspiration.</p>

                      <p>
                        <span className="theme-red-color"><strong>Gayatri Kapur</strong></span>
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
