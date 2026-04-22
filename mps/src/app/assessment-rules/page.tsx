import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import SidebarLinks from "@/utils/SidebarLinks";
import { ACADEMICS_SIDEBAR } from "@/utils/sidebarData";

export const metadata: Metadata = { title: "Examination & Assessment Rules" };

export default function AssessmentRulesPage() {
  return (
    <InnerPage
      title="Examination & Assessment Rules"
      sidebar={<SidebarLinks heading="Academics" links={ACADEMICS_SIDEBAR} />}
    >
      <div className="normalContent">
        <h2>Assessment Framework</h2>
        <p>Modern Public School follows the CBSE assessment framework for all classes. Our examination and assessment policies are designed to be fair, transparent, and student-centred — focused on holistic development rather than rote memorisation.</p>
        <h2>Classes I–V</h2>
        <p>Continuous and Comprehensive Evaluation (CCE) with regular formative assessments. Focus on conceptual understanding, creative thinking, and skill development. No annual board examinations.</p>
        <h2>Classes VI–VIII</h2>
        <p>Periodic tests (three per year), half-yearly and annual examinations. Subject enrichment activities, portfolio assessments, and project work. Minimum 75% attendance required to be eligible for exams.</p>
        <h2>Classes IX–X</h2>
        <p>Two periodic tests per term, pre-board examinations, and CBSE Board Examinations for Class X. Practical and internal assessments as per CBSE guidelines.</p>
        <h2>Classes XI–XII</h2>
        <p>Unit tests, half-yearly examinations, pre-board examinations, and CBSE Board Examinations. Practicals and project-based assessments as per CBSE subject requirements.</p>
        <h2>General Rules</h2>
        <p>Students must carry their admit card / identity card during examinations. Use of unfair means will result in immediate disqualification and disciplinary action. Results and report cards are issued as per the school calendar.</p>
      </div>
    </InnerPage>
  );
}
