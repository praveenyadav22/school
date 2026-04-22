import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import SidebarLinks from "@/utils/SidebarLinks";
import { BEYOND_SIDEBAR } from "@/utils/sidebarData";

export const metadata: Metadata = { title: "Life Skills" };

export default function LifeSkillsPage() {
  return (
    <InnerPage
      title="Life Skills"
      sidebar={<SidebarLinks heading="Beyond Classroom" links={BEYOND_SIDEBAR} />}
    >
      <div className="normalContent">
        <h2>Life Skills Program</h2>
        <p>At Modern Public School, we firmly believe that academic excellence must be complemented by strong life skills. Our comprehensive Life Skills Program is an integral part of the school curriculum, embedded across all grades and activities.</p>
        <h2>Core Areas</h2>
        <p>Communication Skills: Students develop public speaking, debate, group discussion, and presentation skills through regular classroom activities, competitions, and performances.</p>
        <p>Critical Thinking and Problem-Solving: Analytical thinking is cultivated through case studies, puzzles, project-based learning, and STEM challenges.</p>
        <p>Emotional Intelligence: Programs focused on self-awareness, self-regulation, empathy, and building healthy relationships. Regular counselling sessions and peer-support initiatives.</p>
        <p>Financial Literacy: Age-appropriate financial literacy programs introduce students to budgeting, saving, and entrepreneurship — preparing them for real-world responsibilities.</p>
        <p>Digital Citizenship: Students learn responsible technology use, online safety, digital etiquette, and the ethical use of information.</p>
        <p>Leadership and Teamwork: Multiple opportunities to lead clubs, events, houses, and initiatives — developing collaborative skills and a sense of service.</p>
      </div>
    </InnerPage>
  );
}
