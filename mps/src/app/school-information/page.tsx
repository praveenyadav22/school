import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import SidebarLinks from "@/utils/SidebarLinks";
import { ACADEMICS_SIDEBAR } from "@/utils/sidebarData";

export const metadata: Metadata = { title: "School Information" };

export default function SchoolInformationPage() {
  return (
    <InnerPage
      title="School Information"
      sidebar={<SidebarLinks heading="Academics" links={ACADEMICS_SIDEBAR} />}
    >
      <div className="normalContent">
        <h2>General School Information</h2>
        <p>Modern Public School, Shalimar Bagh provides the following general information for students, parents, and visitors:</p>
        <h2>School Timings</h2>
        <p>Summer Schedule (April–October): 7:30 AM – 1:30 PM. Winter Schedule (November–March): 8:00 AM – 2:00 PM. Working Days: Monday to Saturday (Saturday is a half-day for students).</p>
        <h2>Transport Facility</h2>
        <p>The school operates an extensive bus service covering major routes in Delhi NCR. AC buses are available from the academic session 2026-27. Parents may contact the school office for route details, fare information, and bus registration. Private transport is the responsibility of parents.</p>
        <h2>School Uniform</h2>
        <p>Students are expected to wear the prescribed school uniform on all working days. Complete uniform — including shoes, belt, and school ID card — is mandatory. The school uniform can be purchased from authorised vendors. Details available at the school office.</p>
        <h2>Canteen</h2>
        <p>The school canteen serves nutritious, hygienic, and freshly prepared food. The menu is curated to ensure balanced nutrition for students of all age groups. Outside food is discouraged in the interest of health and hygiene.</p>
        <h2>Discipline</h2>
        <p>Students are expected to maintain decorum, respect, and proper conduct at all times — within the school premises and when representing the school at external events. Any disciplinary issues are handled through the school&apos;s established fair and transparent process.</p>
      </div>
    </InnerPage>
  );
}
