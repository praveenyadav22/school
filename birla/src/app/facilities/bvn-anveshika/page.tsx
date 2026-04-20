import type { Metadata } from "next";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";

export const metadata: Metadata = {
  title: "BVN-IAPT Anveshika — Birla Vidya Niketan",
};

const sidebarData: SidebarLinksProps = {
  heading: "Facilities",
  links: [
    { label: "Sarala Birla Krida Kendra",  href: "/facilities/birla-krida-kendra" },
    { label: "Transport",                   href: "/facilities/transport" },
    { label: "Excursion/Educational Tours", href: "/facilities/educational-tours" },
    { label: "BVN-IAPT Anveshika",         href: "/facilities/bvn-anveshika" },
    { label: "BVN-MUN",                    href: "#" },
    {
      label: "Clubs",
      subLinks: [
        { label: "Senior Section", href: "/facilities/senior-section-club" },
        { label: "Junior Section", href: "/facilities/junior-section-club" },
      ],
    },
    { label: "Canteen",                 href: "/facilities/canteen" },
    { label: "Career Counselling Cell", href: "/facilities/career-counselling-cell" },
    { label: "Mind Spark",              href: "/facilities/mind-spark" },
    { label: "Atal Tinkering Lab",      href: "/facilities/atal-tinkering-lab" },
  ],
};

export default function BvnAnveshikaPage() {
  return (
    <>
      <div className="body-conent ptb-50">
        <div className="container">
          <div className="row">

            {/* ── Main content — 8 columns ── */}
            <div className="col-12 col-lg-8">
              <div className="inner-content">
                <div className="contentArea">

                  <p>Making activity based teaching-learning of physics, a culture.</p>

                  <figure>
                    <img
                      src="/images/generic/anveshika-hindi-txt.png"
                      alt="BVN-IAPT Anveshika — Hindi poem excerpt on learning by doing"
                      className="img-fluid"
                    />
                  </figure>

                  <p>These excerpts from a poem embody the spirit of BVN-IAPT Anveshika - &lsquo;learning by doing&rsquo;.</p>

                  <p>It is a platform floated by Birla Vidya Niketan in association with Indian Association of Physics Teachers (IAPT) where motivated students/teachers of any school of Delhi/NCR can explore physics through experimentation. The resource persons at BVN-IAPT Anveshika are teachers from different schools of Delhi &amp; NCR who have been especially trained by Dr H.C.Verma at IIT, Kanpur who is also the national coordinator of &lsquo;National Anveshika Network of India&rsquo;.</p>

                  <p>Eye catching and entertaining low cost activities that bring alive the physics classroom are selected, developed and through them, concepts in physics are spread amongst students and teachers by this team of dedicated teachers.</p>

                  <p>BVN-IAPT Anveshika organises 4 types of programs:-</p>

                  {/* Browser: <ul class="list-unstyled mb-3"> — plain list, no bullets */}
                  <ul className="list-unstyled mb-3">
                    <li>a. Teachers training programs.</li>
                    <li>b. 2 hour demonstration sessions for students of different schools on Saturdays.</li>
                    <li>c. 4-5 hour long programs consisting of stage shows, lectures by eminent physicists and student-teacher interaction with them.</li>
                    <li>d. Interschool competitions on Innovative Thinking, exhibit making, experimental skills.</li>
                  </ul>

                  <p>Through these programs, in last 4 years we have reached out to more than 4000 students and 800 teachers from 150 schools. In this short span of 4 years, BVN-IAPT Anveshika has become recognized for the excellent quality of its teacher&apos;s training workshops, student&apos;s workshops as well as development of new exhibits. The team has been invited by Vigyan Prasar, NPSC, Kendriya Vidyalaya Sangathan, DPS Society, DAV Schools, Amity Group of Schools, Teacher&apos;s Training colleges like Miranda House and Jesus &amp; Mary College for training of teachers.</p>

                  <p>Born out of deep anguish for the present state of science education, Anveshika is a story that has caught the pulse of the students. How to kindle passionate interest of students and make it a thrilling journey of discovering scientific principles in everything around them and at the same time trigger competitive spirit to promote academic excellence - the dynamic Anveshika has evolved out of these challenges.</p>

                  <p>The joy and wonder in the eyes of children &amp; teachers inspires us to march on!</p>

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
