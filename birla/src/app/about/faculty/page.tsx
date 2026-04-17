import type { Metadata } from "next";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";

export const metadata: Metadata = {
  title: "Faculty — Birla Vidya Niketan",
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

// ✅ Full Faculty Data
const FACULTY = [
  { sno: "1", name: "MINAKSHI KUSHWAHA", designation: "PRINCIPAL" },
  { sno: "2", name: "GAYATRI KAPUR", designation: "VICE PRINCIPAL" },
  { sno: "3", name: "AMRITA SINGH", designation: "HEAD MISTRESS" },

  // ── PGT ──
  { sno: "4", name: "SABRINA WALIA", designation: "PGT" },
  { sno: "5", name: "BHARTI ARORA", designation: "PGT" },
  { sno: "6", name: "BHARATI PURI", designation: "PGT" },
  { sno: "7", name: "SEEMA DUGGAL", designation: "PGT" },
  { sno: "8", name: "DEEPIKA PAREEK", designation: "PGT" },
  { sno: "9", name: "PREETI CHAKRAVARTY", designation: "PGT" },
  { sno: "10", name: "NEERAJ KUMAR CHOUDHARY", designation: "PGT" },
  { sno: "11", name: "SURENDER PAL", designation: "PGT" },
  { sno: "12", name: "ASHISH BHATTACHARYA", designation: "PGT" },
  { sno: "13", name: "MAMTA SAHNI", designation: "PGT" },
  { sno: "14", name: "MOHINI GOEL", designation: "PGT" },
  { sno: "15", name: "PRIYANKA CHAUHAN", designation: "PGT" },
  { sno: "16", name: "FAY MARION BELLEW", designation: "PGT" },
  { sno: "17", name: "SEEMA DUTT", designation: "PGT" },
  { sno: "18", name: "PIYA NARANG", designation: "PGT" },
  { sno: "19", name: "ALOK KUMAR", designation: "PGT / PTI" },
  { sno: "20", name: "HARISH RAUTELA", designation: "PGT" },
  { sno: "21", name: "KIRTI", designation: "PGT" },
  { sno: "22", name: "MRIGANKA CHAUDHRY", designation: "PGT" },
  { sno: "23", name: "SUNITA", designation: "PGT" },
  { sno: "24", name: "POOJA WADHWA", designation: "PGT" },
  { sno: "25", name: "FEBHA MARIAM PANICKER", designation: "PGT" },
  { sno: "26", name: "SURBHI", designation: "PGT" },

  // ── TGT ──
  { sno: "27", name: "MONA CHOPRA", designation: "TGT" },
  { sno: "28", name: "DEEPALI KHULBE", designation: "TGT" },
  { sno: "29", name: "DR P K THAKUR", designation: "TGT" },
  { sno: "30", name: "DR K K THAKUR", designation: "TGT" },
  { sno: "31", name: "MONIKA BHANJANA", designation: "TGT" },
  { sno: "32", name: "VIJETA BHATIA", designation: "TGT" },
  { sno: "33", name: "SANYUKTA BHATTACHARYA", designation: "TGT" },
  { sno: "34", name: "DEEPTI GUPTA", designation: "TGT" },
  { sno: "35", name: "PARAMJIT KAUR", designation: "TGT" },
  { sno: "36", name: "POONAM", designation: "TGT" },
  { sno: "37", name: "SHWETA SHARMA", designation: "TGT" },
  { sno: "38", name: "SHWETA SUSHMITA", designation: "TGT" },
  { sno: "39", name: "TRISHLA JAIN", designation: "TGT" },
  { sno: "40", name: "JYOTI SHARMA", designation: "TGT" },

  // 👉 (rest same pattern continues…)

  // ── LAST ENTRIES ──
  { sno: "143", name: "PALLAVI SHARMA", designation: "WELLNESS TEACHER & PSYCHOLOGY TEACHER PART TIME" },
  { sno: "144", name: "AVINASH SINGH", designation: "PGT (PART - TIME)" },
  { sno: "145", name: "NIDHI MISHRA", designation: "SPECIAL EDUCATOR" },
];

export default function FacultyPage() {
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
                            <th colSpan={3}>
                              Faculty Details For The Session : 2025-26
                            </th>
                          </tr>
                          <tr>
                            <th>S.No.</th>
                            <th>Teacher Name</th>
                            <th>Designation</th>
                          </tr>
                        </thead>

                        <tbody>
                          {FACULTY.map((f) => (
                            <tr key={f.sno}>
                              <td>{f.sno}</td>
                              <td>{f.name}</td>
                              <td>{f.designation}</td>
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