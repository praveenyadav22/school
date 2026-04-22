import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import SidebarLinks from "@/utils/SidebarLinks";
import { CAMPUS_SIDEBAR } from "@/utils/sidebarData";

export const metadata: Metadata = { title: "House System" };

export default function HouseSystemPage() {
  return (
    <InnerPage
      title="House System"
      sidebar={<SidebarLinks heading="Campus Life" links={CAMPUS_SIDEBAR} />}
    >
      <div className="normalContent">
        <h2>Our House System</h2>
        <p>The House System at Modern Public School is a cornerstone of our school culture, designed to foster healthy competition, teamwork, leadership, a sense of belonging, and inter-year camaraderie among students.</p>
        <p>Every student at MPS belongs to one of four houses. Each house comprises students from all classes — from Nursery to Class XII — led by a House Captain and Vice-Captain elected from the senior classes.</p>
        <h2>House Activities</h2>
        <p>Inter-house sports competitions — cricket, football, athletics, basketball, badminton, and more. Academic and cultural competitions — debates, quizzes, art, science exhibitions, and performing arts. Community service projects representing their house. House assemblies and house-specific celebrations.</p>
        <h2>House Points</h2>
        <p>Students earn house points for academic performance, sports achievements, co-curricular participation, acts of leadership, and service. The house with the most points at the end of the year is awarded the prestigious House Shield.</p>
        <h2>Benefits of the House System</h2>
        <p>Develops team spirit, collaboration, and a sense of healthy competition. Builds leadership skills through elected positions and student-led initiatives. Creates bonds between students of different age groups and backgrounds. Encourages every student to contribute to something larger than themselves.</p>
      </div>
    </InnerPage>
  );
}
