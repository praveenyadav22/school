import type { Metadata } from "next";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";

export const metadata: Metadata = {
  title: "Director & Manager — Birla Vidya Niketan",
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

export default function DirectorManagerPage() {
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

                      {/* profileImage — shared class for all profile photos */}
                      <figure className="founder-figure">
                        <img
                          src="/images/generic/director-manager.png"
                          alt="R.K. Ganeriwala — Director & Manager, Birla Vidya Niketan"
                          className="profileImage img-fluid mb-4"
                        />
                      </figure>

                      <p>&ldquo;The currency of life is not wealth but moments. Spend them wisely.&rdquo; - Denish Obiero</p>
                      <p>In the humdrum of life, some moments become the true story-making events that lead to inspiring pathways and exalted experiences. We know them instantly, they either take our breath away or breathe purpose into our lives. These moments are rare and unique, for they are the most captivating moments of our lifetime.</p>
                      <p>Dear students, seize these moments. Let their glow and intensity transform you into the best version of yourselves. Till then, grow, explore and discover the countless opportunities hidden in the tiny, fleeting, often unobtrusive moments that we let go unnoticed, waiting for the big moment to arrive.</p>
                      <p>Don&apos;t just learn, experience. Don&apos;t just read, absorb. Never stop learning. Learn, unlearn and relearn. Engage in lively discussions, insightful debates, meaningful conversations and exchange of ideas. In retrospect, you will realise that the power of the moment is never in the big moment itself, but in our own selves. We all have the power to shape our own moments and give it a little more resonance than the mundane and the ordinary. So, challenge your young minds, step out of your comfort zones and embrace the process.</p>
                      <p>I congratulate the editorial team on being worthy chroniclers of these precious moments, both big and small, that will play an instrumental role in your spectacular life journey.</p>

                      <p>
                        <span className="theme-red-color"><strong>R.K. Ganeriwala</strong></span>
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
