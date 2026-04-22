import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import SidebarLinks from "@/utils/SidebarLinks";
import { SCHOOL_SIDEBAR } from "@/utils/sidebarData";

export const metadata: Metadata = { title: "Infrastructure" };

export default function InfrastructurePage() {
  return (
    <InnerPage
      title="Infrastructure"
      sidebar={<SidebarLinks heading="School" links={SCHOOL_SIDEBAR} />}
    >
      <div className="normalContent">
        <h2>World-Class Facilities</h2>
        <p>Modern Public School boasts a world-class infrastructure designed to support holistic learning and the all-round development of our students. Every facility is thoughtfully designed to inspire, enable, and empower.</p>
        <h2>Academic Facilities</h2>
        <p>Classrooms: Spacious, well-ventilated classrooms equipped with smart boards and audio-visual learning tools to facilitate interactive and technology-enhanced teaching.</p>
        <p>Laboratories: Fully equipped Science laboratories — Physics, Chemistry, and Biology — along with a state-of-the-art Computer Science lab to support hands-on learning and practical experimentation.</p>
        <p>Library: A well-stocked library housing thousands of books, journals, periodicals, and digital resources, fostering a love for reading and independent research.</p>
        <h2>Sports Facilities</h2>
        <p>Multi-purpose sports ground for cricket, football, and athletics. Basketball and badminton courts. Indoor sports hall for table tennis, gymnastics, and chess. Swimming pool access for select programs.</p>
        <h2>Other Facilities</h2>
        <p>Performing arts studio for music, dance, and drama. Art and craft rooms for creative expression. Counselling room for student support. Medical room staffed by a qualified nurse. Safe, hygienic canteen with a balanced, nutritious menu.</p>
      </div>
    </InnerPage>
  );
}
