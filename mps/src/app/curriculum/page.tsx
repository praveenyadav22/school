import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import SidebarLinks from "@/utils/SidebarLinks";
import { ACADEMICS_SIDEBAR } from "@/utils/sidebarData";

export const metadata: Metadata = { title: "Curriculum" };

export default function CurriculumPage() {
  return (
    <InnerPage
      title="Curriculum"
      sidebar={<SidebarLinks heading="Academics" links={ACADEMICS_SIDEBAR} />}
    >
      <div className="normalContent">
        <h2>Our Curriculum</h2>
        <p>Modern Public School follows the CBSE curriculum, offering a comprehensive and balanced education from Nursery to Class XII. Our curriculum is designed not just to impart knowledge but to develop critical thinkers, creative problem-solvers, and responsible citizens.</p>
        <p>We align with the National Education Policy (NEP 2020) to ensure that our approach to learning is holistic, experiential, and future-ready.</p>
        <h2>Key Curriculum Features</h2>
        <p>Concept-based and activity-driven teaching that makes learning meaningful and engaging. Integration of STEM and STEAM approaches across subjects. Regular formative assessments alongside summative evaluations to track and support continuous learning. Strong focus on language development — reading, writing, and communication skills. Environmental awareness, sustainability education, and community engagement.</p>
        <h2>Enrichment Programs</h2>
        <p>Beyond the CBSE framework, we offer enrichment programs including workshops, seminars, inter-school competitions, olympiads, and exposure to national and international academic events — ensuring a well-rounded educational experience for every student.</p>
      </div>
    </InnerPage>
  );
}
