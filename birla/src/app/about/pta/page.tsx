import type { Metadata } from "next";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";

export const metadata: Metadata = {
  title: "PTA — Birla Vidya Niketan",
};

const sidebarData: SidebarLinksProps = {
  heading: "About Us",
  links: [
    { label: "School Profile", href: "/about/school-profile" },
    { label: "Vision And Mission", href: "/about/vision-mission" },
    { label: "Founders", href: "/about/founders" },
    { label: "Chairperson", href: "/about/chairperson" },
    { label: "Director & Manager", href: "/about/director-manager" },
    { label: "Principal", href: "/about/principal" },
    {
      label: "Vice Principal",
      subLinks: [
        { label: "Sr. Section", href: "/about/vice-principal/sr-section" },
      ],
    },
    { label: "Head Mistress", href: "/about/head-mistress" },
    { label: "School Managing Committee", href: "/about/school-managing-committee" },
    { label: "Faculty", href: "/about/faculty" },
    { label: "PTA", href: "/about/pta" },
    { label: "Internal Committee", href: "/about/internal-committee" },
    { label: "Mandatory Public Disclosure", href: "/about/mandatory-public-disclosure" },
  ],
};

// ✅ PTA DATA
const PTA_MEMBERS = [
  {
    className: "Nursery",
    name: "Ms. Juhi SaxenaChandrakar",
    email: "juhi7485@gmail.com",
    teacher: "Ms. Monika Bajaj",
  },
  {
    className: "KG",
    name: "Ms. Prachi JainKhurana",
    email: "prachijain.pj03@gmail.com",
    teacher: "Ms. Divya Dhingra",
  },
  {
    className: "I",
    name: "Ms. Reshu Singh",
    email: "reshudua24.rd@gmail.com",
    teacher: "Ms. Pragya Sondhi",
  },
  {
    className: "II",
    name: "Ms. Sneha Bhati",
    email: "snehu09@gmail.com",
    teacher: "Ms. Saloni Sheikh",
  },
  {
    className: "III",
    name: "Ms. Vasundhara Chauhan",
    email: "vasundhara27chauhan@gmail.com",
    teacher: "Ms. Steffi A Samuel",
  },
  {
    className: "IV",
    name: "Ms. Neha Agarwal",
    email: "agl.neha@gmail.com",
    teacher: "Ms. Nautanpreet Bhogal",
  },
  {
    className: "V",
    name: "Ms. Gangotri Biswas",
    email: "Gangotribiswas@gmail.com",
    teacher: "Ms. Geetika Kukreja",
  },
  {
    className: "VI",
    name: "Ms. Priyanka Agarwal",
    email: "priyankaagarwal208@gmail.com",
    teacher: "Ms. Kritika Sood",
  },
  {
    className: "VII",
    name: "Ms. Nidhi Sharma",
    email: "rehasharma2510@gmail.com",
    teacher: "Ms. Jasmine Kaur",
  },
  {
    className: "VIII",
    name: "Ms. Juhi",
    email: "juhi217@yahoo.co.in",
    teacher: "Ms. Trishla Jain",
  },
  {
    className: "IX",
    name: "Mr. Punit Agarwal",
    email: "punitims@gmail.com",
    teacher: "Ms. Rupam Jha",
  },
  {
    className: "X",
    name: "Mr. Ankit Garg",
    email: "ankitgarg1978@gmail.com",
    teacher: "Ms. Swati Pathak",
  },
  {
    className: "XI",
    name: "Dr Lovy Arora Pillai",
    email: "drlovyarorapillai@gmail.com",
    teacher: "Ms. Mriganka Chaudhary",
  },
  {
    className: "XII",
    name: "Ms. Jasmeet Saha",
    email: "jasmeetsaha@gmail.com",
    teacher: "Ms. Febha Panicker Mariyam",
  },
];

export default function PTAPage() {
  return (
    <>
      <div className="body-conent ptb-50">
        <div className="container">
          <div className="row">

            {/* ── Main Content ── */}
            <div className="col-12 col-lg-8">
              <div className="inner-content">
                <div className="contentArea">
                  <div className="contentsection with_table">
                    <div className="table-responsive">

                      <table className="table headerBg">
                        <thead>
                          <tr>
                            <th colSpan={4}>
                              Parent Teacher Association
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td colSpan={4}>
                              <strong>
                                The newly constituted PTA body members list for the year 2025-26 is appended below:-
                              </strong>
                            </td>
                          </tr>

                          <tr>
                            <th>Class</th>
                            <th>Name of the Candidate</th>
                            <th>E. mail Address</th>
                            <th>Teacher Representative</th>
                          </tr>

                          {PTA_MEMBERS.map((m, index) => (
                            <tr key={index}>
                              <td>{m.className}</td>
                              <td>{m.name}</td>
                              <td>
                                <a href={`mailto:${m.email}`}>
                                  {m.email}
                                </a>
                              </td>
                              <td>{m.teacher}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Sidebar ── */}
            <div className="col-12 col-lg-4">
              <SidebarLinks {...sidebarData} />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}