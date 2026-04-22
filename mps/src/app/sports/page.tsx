import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import SidebarLinks from "@/utils/SidebarLinks";
import { BEYOND_SIDEBAR } from "@/utils/sidebarData";

export const metadata: Metadata = { title: "Sports" };

export default function SportsPage() {
  return (
    <InnerPage
      title="Sports"
      sidebar={<SidebarLinks heading="Beyond Classroom" links={BEYOND_SIDEBAR} />}
    >
      <div className="normalContent">
        <h2>Sports at MPS</h2>
        <p>Sports are an integral part of the Modern Public School experience. We believe in the transformative power of sport — building character, resilience, discipline, teamwork, and a healthy competitive spirit.</p>
        <h2>Facilities</h2>
        <p>Multi-purpose sports ground (Cricket, Football, Athletics). Basketball and Badminton courts. Indoor sports hall (Table Tennis, Gymnastics, Chess). Yoga and Aerobics room.</p>
        <h2>Programs and Training</h2>
        <p>Compulsory Physical Education (PE) classes for all students across all grades. Talent identification and school sports team selection. Professional coaching in cricket, football, basketball, and badminton. Participation in inter-school, district, state, and national-level competitions.</p>
        <h2>Achievements</h2>
        <p>MPS students have consistently excelled in various sporting events at the district, state, and national levels. Our coaches provide professional, structured training to nurture every student&apos;s sporting potential — whether they aspire to be competitive athletes or simply enjoy the lifelong benefits of physical activity.</p>
        <h2>Sports Day</h2>
        <p>Our Annual Sports Day is one of the most anticipated events in the school calendar — a celebration of athleticism, teamwork, and school spirit.</p>
      </div>
    </InnerPage>
  );
}
