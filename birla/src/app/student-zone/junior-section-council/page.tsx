import type { Metadata } from "next";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";

export const metadata: Metadata = {
  title: "Junior Section Council — Birla Vidya Niketan",
};

const sidebarData: SidebarLinksProps = {
  heading: "Student Zone",
  links: [
    { label: "Rules & Regulations",   href: "/student-zone/rules-regulations" },
    { label: "Awards & Scholarships", href: "/student-zone/awards-scholarships" },
    {
      label: "Student's Council",
      subLinks: [
        { label: "Senior Section", href: "/student-zone/senior-section-council" },
        { label: "Junior Section", href: "/student-zone/junior-section-council" },
      ],
    },
    {
      label: "Examination Schedule",
      subLinks: [
        { label: "Schedule", href: "https://erp.quickcampus.online/auth" },
        { label: "Syllabus", href: "https://erp.quickcampus.online/auth" },
      ],
    },
    { label: "Admission", href: "/admission" },
  ],
};

export default function JuniorSectionCouncilPage() {
  return (
    <>
      <div className="body-conent ptb-50">
        <div className="container">
          <div className="row">

            {/* ── Main content — 8 columns ── */}
            <div className="col-12 col-lg-8">
              <div className="inner-content">
                <div className="contentArea">

                  <p className="mb-4">
                    The Student&apos;s Council has the responsibility of maintaining school discipline. The Council consists of the Head Boy, Head Girl, Vice Head Boy, Vice Head Girl, Sports Captains, House Captains, Vice House Captains, Prefects, Cultural Secretaries and members of the Editorial Board.
                  </p>
                  <p>
                    <strong>An office bearer needs academic brilliance, sense of discipline, exemplary code of conduct and high moral character.</strong>
                  </p>

                  <div className="contentsection with_table">
                    <div className="table-responsive">
                      <table className="table headerBg">
                        <thead>
                          <tr>
                            <th colSpan={4}>Student Council : 2023-2024 (Junior School)</th>
                          </tr>
                        </thead>
                        <tbody>

                          {/* ── General council ── */}
                          <tr>
                            <td><strong>POSTS</strong></td>
                            <td><strong>NO.</strong></td>
                            <td><strong>NAME OF THE STUDENTS</strong></td>
                          </tr>
                          <tr>
                            <td>HEAD BOY</td><td>1</td><td>AVYAN KUNWAR</td>
                          </tr>
                          <tr>
                            <td>DEPUTY HEAD BOY</td><td>1</td><td>YUVRAJ AGARWAL</td>
                          </tr>
                          <tr>
                            <td>HEAD GIRL</td><td>1</td><td>MISHIKA SEHGAL</td>
                          </tr>
                          <tr>
                            <td>DEPUTY HEAD GIRL</td><td>1</td><td>SAMAIRA GUPTA</td>
                          </tr>
                          <tr>
                            <td>SPORTS CAPTAIN GIRL</td><td>1</td><td>SHRIJA VERMA</td>
                          </tr>
                          <tr>
                            <td>SPORTS CAPTAIN BOY</td><td>1</td><td>ASTITVA SHARMA</td>
                          </tr>
                          <tr>
                            <td>EDITORIAL BOARD</td>
                            <td>5</td>
                            <td>
                              1. ANAYA GOTHWAL<br />
                              2. ARSHIYA RAWAL<br />
                              3. RISHAAN GINOTRA<br />
                              4. ANSH ARYA<br />
                              5. AARNA WARPA
                            </td>
                          </tr>
                          <tr>
                            <td>CULTURAL SECRETARY</td>
                            <td>2</td>
                            <td>
                              1. AT TIWARI<br />
                              2. VRINDA SHANKER
                            </td>
                          </tr>

                          {/* ── ANNAPURNA HOUSE — #e20000 bg, white text ── */}
                          <tr className="house-row house-row--annapurna text-center">
                            <td colSpan={3}>ANNAPURNA HOUSE</td>
                          </tr>
                          <tr>
                            <td><strong>POSTS</strong></td><td><strong>NO.</strong></td><td><strong>NAME OF THE STUDENTS</strong></td>
                          </tr>
                          <tr><td>HOUSE CAPTAIN</td><td>1</td><td>MEHREEN NAFIS</td></tr>
                          <tr><td>DEPUTY HOUSE CAPTAIN</td><td>1</td><td>JOSYA DEB</td></tr>
                          <tr>
                            <td>PREFECT</td><td>2</td>
                            <td>1. DAKSH CHAUHAN<br />2. INAAYA RAWAT</td>
                          </tr>
                          <tr><td>SPORTS CAPTAIN</td><td>1</td><td>AADYA MADAN</td></tr>
                          <tr>
                            <td>DISCIPLINE INCHARGE</td><td>2</td>
                            <td>1. KUSHAGRA KRISHNA<br />2. ARYAHI KAWATRA</td>
                          </tr>

                          {/* ── ARAVALI HOUSE — #00b050 bg, white text ── */}
                          <tr className="house-row house-row--aravali text-center">
                            <td colSpan={3}>ARAVALI HOUSE</td>
                          </tr>
                          <tr>
                            <td><strong>POSTS</strong></td><td><strong>NO.</strong></td><td><strong>NAME OF THE STUDENTS</strong></td>
                          </tr>
                          <tr><td>HOUSE CAPTAIN</td><td>1</td><td>AAMYA MARWAHA</td></tr>
                          <tr><td>DEPUTY HOUSE CAPTAIN</td><td>1</td><td>MYRA GUPTA</td></tr>
                          <tr><td>SPORTS CAPTAIN</td><td>1</td><td>MEHUL SONDHI</td></tr>
                          <tr>
                            <td>DISCIPLINE INCHARGE</td><td>2</td>
                            <td>1. ABHYUDAY SINGH<br />2. SAANVI GUPTA</td>
                          </tr>
                          <tr>
                            <td>PREFECT</td><td>2</td>
                            <td>1. ARYAN AGRAWAL<br />2. DEVYANSH GANDHI</td>
                          </tr>

                          {/* ── DHAULAGIRI HOUSE — #548dd4 bg, white text ── */}
                          <tr className="house-row house-row--dhaulagiri text-center">
                            <td colSpan={3}>DHAULAGIRI HOUSE</td>
                          </tr>
                          <tr>
                            <td><strong>POSTS</strong></td><td><strong>NO.</strong></td><td><strong>NAME OF THE STUDENTS</strong></td>
                          </tr>
                          <tr><td>HOUSE CAPTAIN</td><td>1</td><td>MYRA SINGLA</td></tr>
                          <tr><td>DEPUTY HOUSE CAPTAIN</td><td>1</td><td>DIYA VILASH</td></tr>
                          <tr><td>SPORTS CAPTAIN</td><td>1</td><td>AAHANA ROY CHOUDHARY</td></tr>
                          <tr>
                            <td>DISCIPLINE INCHARGE</td><td>2</td>
                            <td>1. AYAAN<br />2. KAVYA BHANDARI</td>
                          </tr>
                          <tr>
                            <td>PREFECT</td><td>2</td>
                            <td>1. TVARITA DASHORA<br />2. SAMRATH SINGH KOHLI</td>
                          </tr>

                          {/* ── KAILASH HOUSE — #ffff00 bg, black text ── */}
                          <tr className="house-row house-row--kailash text-center">
                            <td colSpan={3}>KAILASH HOUSE</td>
                          </tr>
                          <tr>
                            <td><strong>POSTS</strong></td><td><strong>NO.</strong></td><td><strong>NAME OF THE STUDENTS</strong></td>
                          </tr>
                          <tr><td>HOUSE CAPTAIN</td><td>1</td><td>SUMEDHA MAJUMDAR</td></tr>
                          <tr><td>DEPUTY HOUSE CAPTAIN</td><td>1</td><td>VIHAAN RANA</td></tr>
                          <tr><td>SPORTS CAPTAIN</td><td>1</td><td>VIREN S. THAKUR</td></tr>
                          <tr>
                            <td>DISCIPLINE INCHARGE</td><td>2</td>
                            <td>1. ARCHIT GAUTAM<br />2. MISHIKA KAPOOR</td>
                          </tr>
                          <tr>
                            <td>PREFECT</td><td>2</td>
                            <td>1. NIVEDITA NAGAR<br />2. PANKHURI KASHYAP</td>
                          </tr>

                          {/* ── NILGIRI HOUSE — #8037b7 bg, white text ── */}
                          <tr className="house-row house-row--nilgiri text-center">
                            <td colSpan={3}>NILGIRI HOUSE</td>
                          </tr>
                          <tr>
                            <td><strong>POSTS</strong></td><td><strong>NO.</strong></td><td><strong>NAME OF THE STUDENTS</strong></td>
                          </tr>
                          <tr><td>HOUSE CAPTAIN</td><td>1</td><td>VIHAAN ARORA</td></tr>
                          <tr><td>DEPUTY HOUSE CAPTAIN</td><td>1</td><td>SARA ALI AZAD</td></tr>
                          <tr><td>SPORTS CAPTAIN</td><td>1</td><td>VIVAN SINGH RAWAT</td></tr>
                          <tr>
                            <td>DISCIPLINE INCHARGE</td><td>2</td>
                            <td>1. SUMEDHA ROY<br />2. SUHANI PRAKASH</td>
                          </tr>
                          <tr>
                            <td>PREFECT</td><td>2</td>
                            <td>1. TRISHA SRIVASTAVA<br />2. KEYAN BHOWMIK</td>
                          </tr>

                          {/* ── VINDHYA HOUSE — #f57b17 bg, white text ── */}
                          <tr className="house-row house-row--vindhya-jr text-center">
                            <td colSpan={3}>VINDHYA HOUSE</td>
                          </tr>
                          <tr>
                            <td><strong>POSTS</strong></td><td><strong>NO.</strong></td><td><strong>NAME OF THE STUDENTS</strong></td>
                          </tr>
                          <tr><td>HOUSE CAPTAIN</td><td>1</td><td>MUGDHA ARAVIND</td></tr>
                          <tr><td>DEPUTY HOUSE CAPTAIN</td><td>1</td><td>NAISHA SINGHAL</td></tr>
                          <tr><td>SPORTS CAPTAIN</td><td>1</td><td>ARADHYA MADAN</td></tr>
                          <tr>
                            <td>DISCIPLINE INCHARGE</td><td>2</td>
                            <td>1. MANITH BANSAL<br />2. YUVAAN KUMAR</td>
                          </tr>
                          <tr>
                            <td>PREFECT</td><td>2</td>
                            <td>1. KINSHUK BANERJEE<br />2. AADVIK AGARWAL</td>
                          </tr>

                        </tbody>
                      </table>
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
