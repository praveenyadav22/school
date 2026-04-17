import type { Metadata } from "next";
import Link from "next/link";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";

export const metadata: Metadata = {
  title: "School Profile — Birla Vidya Niketan",
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

export default function SchoolProfilePage() {
  return (
    <>
      <div className="body-conent ptb-50">
        <div className="container">
          <div className="row">

            {/* ── Main content — 8 columns ── */}
            <div className="col-12 col-lg-8">
              <div className="inner-content">
                <div className="contentsection with_table">

                  {/* ── School info table ── */}
                  <div className="table-responsive">
                    <table className="table headerBg">
                      <tbody>
                        <tr>
                          <td>Name of the School</td>
                          <td>: <strong>BIRLA VIDYA NIKETAN</strong></td>
                        </tr>
                        <tr>
                          <td>Address</td>
                          <td>: PUSHP VIHAR SECTOR–IV, NEW DELHI-110017</td>
                        </tr>
                        <tr>
                          <td>Contact No.</td>
                          <td>: 011-29578960 &amp; 961</td>
                        </tr>
                        <tr>
                          <td>Recognised by</td>
                          <td>: Directorate of Education, Govt of NCT of Delhi</td>
                        </tr>
                        <tr>
                          <td>School ID</td>
                          <td>: 1923250</td>
                        </tr>
                        <tr>
                          <td>Affiliated under board</td>
                          <td>: CENTRAL BOARD OF SECONDARY EDUCATION (CBSE)</td>
                        </tr>
                        <tr>
                          <td>Affiliated with International College Board</td>
                          <td>: CEEB Code – 671124</td>
                        </tr>
                        <tr>
                          <td>Website</td>
                          <td>
                            :{" "}
                            <a href="http://www.birla.ac.in" target="_blank" rel="noopener noreferrer">
                              www.birla.ac.in
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>BVN FB Page</td>
                          <td>
                            :{" "}
                            <a href="https://www.facebook.com/Join2BVN/" target="_blank" rel="noopener noreferrer">
                              www.facebook.com/join2BVN/
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* ── Vision & Mission ── */}
                  {/* Browser: align="justify" moved to .inner-content p { text-align: justify } in SCSS */}
                  <p>
                    <strong className="theme-red-color">VISION</strong> : We nurture the leaders of tomorrow and create the possibility for students to achieve dreams through self-belief and perseverance. We are committed that our children respect human values, develop skills and intellectual abilities, be of strong mind and body, and contribute towards nation building.
                  </p>
                  <p>
                    <strong className="theme-red-color">MISSION</strong> : - Explore, Engage, Empower.
                  </p>

                  {/* ── Background ── */}
                  <h4>BACKGROUND AND COMMUNITY</h4>
                  <p>
                    Shri B.K. Birla &amp; Dr. Sarala Birla laid the foundation for Birla Vidya Niketan, a premier South Delhi and with their blessings the school started on 20<sup>th</sup> September 1983.
                  </p>
                  <p>
                    An eminent educationist, Dr. Sarala Birla made immense contribution in the field of education by opening schools across India, which are amongst the best. She has combined the institutions with a distinct philosophy with her firm belief in &lsquo;Guru Shishya Parampara&rsquo;, abiding human values and a progressive vision. After Saralaji, her daughter, Mrs. Jayashree Mohta has pursued the mission of the founders. She is an exemplary role model for us and for all who aspire to achieve the impossible and strive to transform their dreams into reality.
                  </p>
                  <p>
                    <strong>Birla Vidya Niketan (BVN)</strong> spread over an area of 6.45 acres is the flagship school of the Sarala Birla Group of Schools. A dynamic, progressive co-educational English medium senior secondary offers subjects from the Commerce, Science, humanities &amp; art to children at the senior secondary level. A vibrant student community of 3700 comprises its growing strength. A lively, modern &amp; green campus comprises of - a junior block, a senior block and a Sarala Birla Krida Kendra (Indoor Sports Centre).
                  </p>
                  <p>
                    The School believes in providing global exposure to its students through enhanced, encouraged international participation in activities like students exchange programmes summer courses in leading universities of USA, UK, Germany and Geneva, IIMUN conferences, science and Environment related program in Japan, Geneva, Germany, USA, Singapore, Nepal etc. Foreign languages French, Japanese and German are taught along with the Indian languages Hindi and Sanskrit.
                  </p>

                  {/* ── Awards ── */}
                  <h4 className="theme-red-color">AWARDS AND RECOGNITION</h4>

                  <p><strong>NATIONAL AWARDS</strong></p>
                  <ul className="checklist">
                    <li>CBSE Honour for Excellence in Teaching and School Leadership 2021-22 – <strong>Ms. Minakshi Kushwha, Principal</strong></li>
                    <li><strong>National Teacher&apos;s Award 2018</strong> - Ms. Pragya Nopany, PGT (Physics)</li>
                  </ul>

                  <p><strong>STATE AWARDS</strong></p>
                  <ul className="checklist">
                    <li><strong>State Teachers&apos; Award 2018</strong> - Ms Aloka Bose, PGT (Biology)</li>
                    <li><strong>State Teachers&apos; Award 2017</strong> – Ms Sumana Ganguly, TGT (English)</li>
                    <li><strong>State Teachers&apos; Award 2016</strong> - Ms Minakshi Kushwaha, Principal</li>
                    <li><strong>State Teachers&apos; Award 2016</strong> - Ms. Pragya Nopany, PGT (Physics)</li>
                    <li>Delhi Green School Award 2022-23 by Directorate of Education, Govt of NCT of Delhi.</li>
                    <li>Ms Minakshi Kushwaha, Principal has been awarded The &lsquo;<strong>Excellence in Education</strong>&rsquo; award by The Directorate of Education, Delhi for 100% result 2017 for being amongst the top 5 schools of Delhi.</li>
                    <li><strong>Swachh Vidyalaya Puraskaar 2017</strong> (District Level Award- Sub Category) by Directorate of Education, Delhi while achieving an overall score of 92.86% with Green rating.</li>
                    <li><strong>Best Practice &amp; Innovation in Early Childhood Education</strong> (Delhi) Award 2016 in the Category of Innovative Use of Nature in Education at the 2<sup>nd</sup> International Early Childhood conference by Early Childhood Association.</li>
                  </ul>

                  <p><strong className="theme-red-color">AWARD BY PRIVATE ORGANIZATIONS</strong></p>
                  <ul className="checklist">
                    <li>Education World conferred the &lsquo;Outstanding Achievement in Education Leadership Award&rsquo; to our Chairperson <strong>Mrs. Jayashree Mohta</strong> in 2017</li>
                    <li>Amongst the top schools of India as awarded by the Education World, Economic Times, Times of India, Digital Learning, Brainfeed Magazines etc.</li>
                    <li>Awarded the Clean School of the Year Award by NICER (National Institute of Cleanliness Education &amp; Research) 2016.</li>
                    <li>Green school award under Green Category based on All India Rating of Green Schools by Centre for Science &amp; Environment.</li>
                  </ul>

                  <p><strong className="theme-red-color">CERTIFICATES</strong></p>
                  <ul className="checklist">
                    <li>The school has been given certificate of Peace by <strong>The World Peace Flame</strong>, The Netherlands.</li>
                    <li>Fit India School Certificate in the year 2022.</li>
                    <li>Certificate of Appreciation for outstanding support and excellent education for Girls Safety Campaign by <strong>Delhi Police</strong> in the year 2022.</li>
                    <li>Schools: Partners for the Future&rdquo; (PASCH) (SCHULEN:PARTNER) by Germany&apos;s Federal Foreign.</li>
                  </ul>

                  {/* ── Other facilities ── */}
                  <p><strong>OTHER FACILITIES PROVIDED BY THE SCHOOL</strong></p>

                  <p><strong>SARALA BIRLA KRIDA KENDRA</strong> : Indoor sports facilities swimming, badminton, gymnastics, skating, TT, chess &amp; carom board are provided by the Krida Kendra. Cricket. Football, basket ball, volley ball, hand ball are played in the ground.</p>

                  <p><strong>ATAL TINKERING LAB (ATL)</strong> : ATL is a workspace where young minds can give shape to their ideas through hands on do-it-yourself mode and learn innovation skills. We have a fully functional lab at the students&apos; disposal to ideate and innovate in this enriching space. The lab is an active hub of students not only from our school but from the neighbouring schools as well- building their ideas into a reality.</p>

                  <p><strong>SCHOOL CLINIC</strong> : The school has well-equipped infirmaries to take care of the immediate medical needs of the students during the school hours. Parents can see their wards&apos; school related medical report online through the school website.</p>

                  <p><strong>COUNSELLING AND SPECIAL EDUCATION</strong> : The school counselling centre aims to facilitate the overall development of children. The school has full time Counsellors and Special Educators to help develop the students&apos; self-esteem, manage stress and to enhance their mental health and well-being. Regular assistance is given to the students of senior classes to help them choose a suitable career.</p>

                  <p><strong>SAFETY MEASURES</strong> : Safety and health of students is of prime concern to the school. R.O. plant is in operation to provide clean and safe potable water. The school building has been equipped with the latest fire safety system. Appropriate fire safety precautions, training to operate necessary equipment and fire evacuation procedures are imparted through regular training sessions. Regular mock drills are organized to ensure effective evacuation in case of hazard. Road-Safety workshops and Self-Defence workshops are conducted from time to time. CCTV cameras are installed at all strategic points and all classrooms. Guards are deputed at necessary points to ensure the safety and security of the children.</p>

                  <p><strong>CLUBS</strong> : To provide holistic education to its pupils, BVN offers a wide choice of various clubs to help students discover a new side of their personality and sharpen their unique talent. The students can choose any one club of their interest and talent.</p>

                  <p><strong>COMMITTEES</strong> : The students of class XI and XII are offered an array of committees to choose from. The aim is to create budding scientists, inventors, debaters and socially aware citizens who are sensitive and proactive decision makers.</p>

                  <p><strong>SOCIAL OUTREACH PROGRAMME</strong> : BVN aims to give a holistic education which not only is empowering but also helps students to become empathetic and sensitive to the needs of the underprivileged section of the society. Therefore, participation in social welfare activity is of prime importance. Students can fulfill this goal by enrolling in Interact Club Activities throughout the year.</p>

                  <p><strong>STUDENTS COUNCIL &amp; HOUSE SYSTEM</strong> : The Students Council has the responsibility of maintaining school discipline and help in organising events. An office bearer needs to show academic brilliance, sense of responsibility, leadership qualities, initiative, personal sense of discipline, exemplary code of conduct and high moral character.<br /> Students are divided into six Houses viz. Annapurna, Aravali, Dhaulagiri, Kailash, Nilgiri and Vindhya. Inter-House competitions and are held throughout the year which help students achieve high standards of excellence.</p>

                  <p><strong>STAFF ENRICHMENT</strong> : Regular workshops and exposures are organized for staff to keep them abreast with the latest teaching pedagogies and guidelines.</p>

                  <p><strong>WORKSHOPS &amp; PROJECTS</strong> : Workshops &amp; projects are integral part of school system. Children are encouraged to participate in inter-school events, research work, school exchange programs at the State, National &amp; International levels.</p>

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
