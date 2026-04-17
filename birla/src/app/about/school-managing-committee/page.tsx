import type { Metadata } from "next";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";

export const metadata: Metadata = {
  title: "School Managing Committee — Birla Vidya Niketan",
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

// ── Committee data ────────────────────────────────────────────
const MEMBERS = [
  { sno: "1.",  name: "Smt. Jayashree Mohta",      designation: "Chairperson" },
  { sno: "2.",  name: "Shri. Sakate Khaitan",       designation: "Member" },
  { sno: "3.",  name: "Shri. R.K. Ganeriwala",      designation: "Manager & Director" },
  { sno: "4.",  name: "Smt. Minakshi Kushwaha",     designation: "Principal & Member Secretary" },
  { sno: "5.",  name: "Dr. Ashok Kumar Pandey",     designation: "Member" },
  {
    sno: "6.",
    name: "Smt. Kiran Bala",
    subName: "HOS, GGSSS, M.B.Road, Sect-I, Pushp Vihar New Delhi",
    designation: "DE Nominee",
  },
  {
    sno: "7.",
    name: "Shri. Pawan Kumar",
    subName: "HOS, GBSSS, Pushp Vihar, Sector-1, M.B.Road, New Delhi",
    designation: "DE Nominee",
  },
  {
    sno: "8.",
    name: "Smt. Pushpanjali Bhagat",
    subName: "HOS, SKV, Pushp Vihar, Sector-1, M. B. Road, New Delhi-110017",
    designation: "Advisory Board Nominees",
  },
  {
    sno: "9.",
    name: "Shri. Manoj Kumar",
    subName: "HOS, VCSG, SBV, J-Block, Saket, New Delhi-110017",
    designation: "Advisory Board Nominees",
  },
  { sno: "10.", name: "Smt. Jasmeet Saha",          designation: "Parent Representative" },
  { sno: "11.", name: "Maj Gen. S.S. Nair (Retd.)", designation: "Member" },
  { sno: "12.", name: "Shri. Anil Sharma",           designation: "Member" },
  { sno: "13.", name: "Shri. Suraj Agarwal",         designation: "Member" },
  { sno: "14.", name: "Smt. Deepali Khulbe",         designation: "Teacher Representative" },
  { sno: "15.", name: "Shri. C.S. Chhajer",          designation: "Member" },
  { sno: "16",  name: "Smt. Gayatri Kapur",          designation: "Member" },
  { sno: "17",  name: "Dr. Amrita Singh",            designation: "Special Invitee" },
];

export default function SchoolManagingCommitteePage() {
  return (
    <>
      <div className="body-conent ptb-50">
        <div className="container">
          <div className="row">

            {/* ── Main content — 8 columns ── */}
            <div className="col-12 col-lg-8">
              <div className="inner-content">
                <div className="contentArea">
                  <div className="contentsection with_table">
                    <div className="table-responsive">
                      <table className="table headerBg">
                        <thead>
                          <tr>
                            <th>S.No.</th>
                            <th>Name</th>
                            <th>Designation</th>
                          </tr>
                        </thead>
                        <tbody>
                          {MEMBERS.map((m) => (
                            <tr key={m.sno}>
                              <td>{m.sno}</td>
                              <td>
                                {m.name}
                                {/* Browser: <br> for sub-address lines */}
                                {"subName" in m && m.subName && (
                                  <>
                                    <br />
                                    {m.subName}
                                  </>
                                )}
                              </td>
                              <td>{m.designation}</td>
                            </tr>
                          ))}
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
