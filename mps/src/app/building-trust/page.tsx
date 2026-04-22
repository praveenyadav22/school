import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import SidebarLinks from "@/utils/SidebarLinks";
import { SCHOOL_SIDEBAR } from "@/utils/sidebarData";

export const metadata: Metadata = { title: "Building A Culture of Trust" };

export default function BuildingTrustPage() {
  return (
    <InnerPage
      title="Building A Culture of Trust"
      sidebar={<SidebarLinks heading="School" links={SCHOOL_SIDEBAR} />}
    >
      <div className="normalContent">
        <h2>Trust as Our Foundation</h2>
        <p>Trust is the foundation of every great institution. At Modern Public School, we are deeply committed to building and sustaining a culture of trust — among students, teachers, parents, and the broader community.</p>
        <p>We believe that trust is not given freely but earned consistently — through transparent communication, fair decision-making, respectful relationships, and a steadfast commitment to our values.</p>
        <h2>How We Build Trust</h2>
        <p>Open Communication: We maintain open channels of communication between school and home. Parents are kept informed about their children&apos;s progress, school policies, and upcoming events through regular meetings, newsletters, and our digital communication platforms.</p>
        <p>Fairness and Consistency: Our policies and procedures are applied consistently and fairly. Students know what is expected of them, and they trust that they will be treated equitably.</p>
        <p>Safety and Wellbeing: We prioritise the physical and emotional safety of every student. Our anti-bullying policies, mandatory committees, and counselling services ensure that every child feels safe and supported.</p>
        <p>Accountability: Teachers, administrators, and students are all held accountable. We acknowledge mistakes, learn from them, and continuously improve.</p>
        <p>Student Voice: We believe students&apos; opinions and concerns matter. Our student council and feedback mechanisms ensure that young voices are heard and respected.</p>
      </div>
    </InnerPage>
  );
}
