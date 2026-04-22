import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import SidebarLinks from "@/utils/SidebarLinks";
import { BEYOND_SIDEBAR } from "@/utils/sidebarData";

export const metadata: Metadata = { title: "Health and Wellness" };

export default function HealthWellnessPage() {
  return (
    <InnerPage
      title="Health and Wellness"
      sidebar={<SidebarLinks heading="Beyond Classroom" links={BEYOND_SIDEBAR} />}
    >
      <div className="normalContent">
        <h2>Health and Wellness at MPS</h2>
        <p>At Modern Public School, the health and wellness of every student is our highest priority. We have established a comprehensive, integrated Health and Wellness Program that addresses physical, mental, and emotional wellbeing — because we know that a healthy student is a happy and effective learner.</p>
        <h2>Physical Health</h2>
        <p>Medical room staffed by a qualified, experienced nurse. Annual health check-ups for all students. Regular health and hygiene awareness programs. Nutritious and hygienic canteen with a balanced, calorie-appropriate menu. Physical Education and sports programs across all grades.</p>
        <h2>Mental and Emotional Wellbeing</h2>
        <p>In-house school counsellor available for individual and group sessions for students and parents. Mindfulness, meditation, and yoga sessions integrated into the school routine. Workshops on stress management, emotional regulation, and resilience. A safe, supportive, and anti-bullying school environment.</p>
        <h2>Wellness Programs</h2>
        <p>International Yoga Day celebrations. Mental Health Awareness Week with workshops and activities. First Aid and CPR training for senior students. Menstrual hygiene and reproductive health workshops for appropriate age groups. Awareness sessions on substance abuse, safe internet use, and personal safety.</p>
      </div>
    </InnerPage>
  );
}
