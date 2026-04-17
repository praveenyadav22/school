import type { Metadata } from "next";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";

export const metadata: Metadata = {
  title: "Founders — Birla Vidya Niketan",
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

export default function FoundersPage() {
  return (
    <>
      <div className="body-conent ptb-50">
        <div className="container">
          <div className="row">

            {/* ── Main content — 8 columns ── */}
            <div className="col-12 col-lg-8">
              <div className="inner-content">
                <div className="contentArea">

                  {/* align-items-start prevents columns stretching and overlapping */}
                  <div className="row align-items-start">

                    {/* Founder photo — col-md-3 on tablet+, full width on mobile */}
                    <div className="col-12 col-md-3 mb-3 mb-md-0">
                      <figure className="founder-figure">
                        <img
                          src="/images/generic/patron.jpg"
                          alt="Late Shri Basant Kumar Birla and Late Dr. Sarala Birla — Founders of Birla Vidya Niketan"
                          className="u-image img-fluid border p-1"
                        />
                      </figure>
                    </div>

                    {/* Content — col-md-9 on tablet+, full width on mobile */}
                    <div className="col-12 col-md-9">
                      <p>
                        An eminent educationist, Dr. Sarala Birla has made immense contribution in the field of education by opening schools across India, which are among the best. She has given the institutions a distinct philosophy with her firm belief in &lsquo;guru shishya parampara&rsquo;, abiding human values and a progressive vision.
                      </p>
                      <p>
                        <strong>According to her</strong>, &ldquo;<em>True education is not just accumulating intellectual wealth but increasing its value manifold by sharing it and enriching the world. It must ignite young minds to explore the vast horizons and seek truth, mould the character of students and impart a strong sense of values; teach them to be astute and respect reason but listen to the silent voice within. They must be taught not only to dream and delight in watching life reborn each day with new questions, new ideas, new dreams and new bonds but also through education to become a good human being a good member of a family a good member of a community a good citizen of a country and finally a good citizen of the world</em>.&rdquo;
                      </p>
                      <p>
                        <strong>
                          <span className="theme-red-color">Late Shri Basant Kumar Birla</span>
                          <br />
                          <span className="theme-red-color">Late Dr. Sarala Birla</span>
                        </strong>
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
