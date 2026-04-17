import type { Metadata } from "next";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";

export const metadata: Metadata = {
  title: "Chairperson — Birla Vidya Niketan",
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

export default function ChairpersonPage() {
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

                      {/* Image — inline style moved to .chairperson-img in SCSS */}
                      <figure className="founder-figure">
                        <img
                          src="/images/generic/chairperson.png"
                          alt="Jayashree Mohta — Chairperson, Birla Vidya Niketan"
                          className="profileImage img-fluid mb-4"
                        />
                      </figure>

                      <p>There once was a farmer who grew the most excellent wheat.</p>
                      <p>Every season he won the award for the best wheat in his county.</p>
                      <p>He told her that the key was sharing his best seed with his neighbours so they could plant the seed as well.</p>
                      <p>The wise woman asked, &ldquo;How can you share your best wheat seed with your neighbours when they compete with you every year?&rdquo;</p>
                      <p>&ldquo;That&apos;s simple,&rdquo; the farmer replied.</p>
                      <p>&ldquo;The wind spreads the pollen from everyone&apos;s wheat and carries it from field to field.&rdquo;</p>
                      <p>&ldquo;If my neighbours grew inferior wheat, cross-pollination would degrade everyone&apos;s wheat, including mine.&rdquo;</p>
                      <p>&ldquo;If I&apos;m to grow the best wheat, I must help my neighbours grow the best wheat as well.&rdquo;</p>
                      <p>This is not only excellent advice for growing the best crops, but also great advice for how to live your life.</p>
                      <p>If you want to live a meaningful and happy life, help others find happiness.</p>
                      <p>Remember: The value of your life is measured by the lives you touch with love, kindness, respect, and hope.</p>

                      <p>
                        <span className="theme-red-color"><strong>Jayashree Mohta</strong></span>
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
