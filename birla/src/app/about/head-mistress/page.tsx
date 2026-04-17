import type { Metadata } from "next";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";

export const metadata: Metadata = {
  title: "Head Mistress — Birla Vidya Niketan",
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

export default function HeadMistressPage() {
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

                      <figure className="founder-figure">
                        <img
                          src="/images/generic/head-mistress.jpg"
                          alt="Dr. Amrita Singh — Head Mistress, Birla Vidya Niketan"
                          className="profileImage profileImage--circle"
                        />
                      </figure>

                      <p><strong><em>Dear Students,</em></strong></p>
                      <p>As you walk through the lively corridors and classrooms, filled with the excitement of learning and discovery, I wish to pause for a moment and contemplate something truly valuable: memories. These glimpses of our past, filled with both joy and difficulty, mould our identities and guide us towards our future selves.</p>
                      <p>Cast your mind back to your earliest days at school. Recall the flutter of nerves on the first day, the thrill of mastering new skills, and the warmth of friendship shared on the playground. These vivid memories, though seemingly trivial, weave the tapestry of your unique voyage. They serve as reminders of your past selves and the remarkable progress you&apos;ve made. However, memories are not mere relics of the past. They are potent instruments for shaping a brighter tomorrow. Remember the instance, when you conquered a daunting challenge in class? That memory can fuel your determination when confronted with fresh hurdles. Reflect on the moment you connected with a classmate who seemed different? That memory can foster empathy and understanding in your future interactions.</p>
                      <p>Moreover, memories influence your passions and aspirations. Perhaps a captivating science experiment ignited your curiosity about the world, or a captivating play sparked your love for storytelling. These early impressions, imprinted in your memory, can steer you towards realizing your unique potential.</p>
                      <p>Therefore, dear students, treasure your memories. Do not allow them to gather dust in the recesses of your mind. Contemplate them, glean wisdom from them, and employ them as stepping stones on your journey. Share them with your loved ones, crafting new memories that will, in turn, shape your destiny. Remember, the richness of life is not solely measured by the moments experienced but by the narratives cherished within. Embrace the present, learn from the past, and forge memories that will forever illuminate your path.</p>

                      <p>
                        <span className="theme-red-color"><strong>Dr. Amrita Singh</strong></span><br />
                        Head Mistress
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
