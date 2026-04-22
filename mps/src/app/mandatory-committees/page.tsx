import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import SidebarLinks from "@/utils/SidebarLinks";
import { CAMPUS_SIDEBAR } from "@/utils/sidebarData";

export const metadata: Metadata = { title: "Mandatory Committees" };

export default function MandatoryCommitteesPage() {
  return (
    <InnerPage
      title="Mandatory Committees"
      sidebar={<SidebarLinks heading="Campus Life" links={CAMPUS_SIDEBAR} />}
    >
      <div className="normalContent">
        <h2>Mandatory Committees</h2>
        <p>As per CBSE guidelines and statutory requirements, Modern Public School has constituted the following mandatory committees. These committees ensure a safe, fair, supportive, and well-governed school environment for all students, staff, and stakeholders.</p>
        <h2>School Management Committee (SMC)</h2>
        <p>The SMC oversees school governance, development, and accountability. It comprises elected parent representatives, teacher representatives, and school management. The committee meets regularly to review school policies, academic programs, infrastructure, and financial management.</p>
        <h2>Prevention of Sexual Harassment (PoSH) Committee</h2>
        <p>Constituted under the Sexual Harassment of Women at Workplace Act, 2013, this committee ensures a safe and respectful environment for all staff and students. It receives and addresses complaints through a fair, confidential process.</p>
        <h2>Anti-Bullying Committee</h2>
        <p>This committee monitors and addresses any instances of bullying or harassment to maintain a safe, inclusive school environment. Awareness programs, peer-support initiatives, and a clear reporting mechanism are maintained under this committee.</p>
        <h2>Grievance Redressal Committee</h2>
        <p>Provides a fair and transparent mechanism for addressing complaints and concerns from students, parents, and staff. All grievances are treated with confidentiality and resolved promptly.</p>
        <h2>Disaster Management Committee</h2>
        <p>Responsible for preparing and training students and staff for emergency situations. Regular fire drills, earthquake preparedness exercises, and first-aid training are conducted under this committee.</p>
      </div>
    </InnerPage>
  );
}
