import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import SidebarLinks from "@/utils/SidebarLinks";
import { ACADEMICS_SIDEBAR } from "@/utils/sidebarData";

export const metadata: Metadata = { title: "Streams" };

export default function StreamsPage() {
  return (
    <InnerPage
      title="Streams"
      sidebar={<SidebarLinks heading="Academics" links={ACADEMICS_SIDEBAR} />}
    >
      <div className="normalContent">
        <h2>Senior Secondary Streams (Classes XI–XII)</h2>
        <p>Modern Public School offers well-structured streams at the Senior Secondary level, providing students with the foundation they need for their chosen career paths. Our experienced faculty, excellent infrastructure, and mentorship programs ensure that every student excels in their chosen stream.</p>
        <h2>Science Stream</h2>
        <p>Subjects: Physics, Chemistry, Mathematics / Biology (as per CBSE guidelines). Ideal for students aspiring for careers in Engineering, Medicine, Research, Technology, Architecture, and allied sciences. Our science labs provide hands-on learning experiences that go beyond textbooks.</p>
        <h2>Commerce Stream</h2>
        <p>Subjects: Accountancy, Business Studies, Economics, and Mathematics / Informatics Practices. Suitable for students aiming for careers in Finance, Banking, Business Administration, Chartered Accountancy, Company Secretaryship, and Management.</p>
        <h2>Humanities Stream</h2>
        <p>Subjects: History, Political Science, Geography, Economics, Psychology, Sociology, and Fine Arts. Perfect for students interested in Law, Journalism, Civil Services, Teaching, Social Work, Arts, and Humanities.</p>
      </div>
    </InnerPage>
  );
}
