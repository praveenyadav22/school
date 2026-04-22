import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import SidebarLinks from "@/utils/SidebarLinks";
import { SCHOOL_SIDEBAR } from "@/utils/sidebarData";

export const metadata: Metadata = { title: "Managing Director's Message" };

export default function ManagingDirectorPage() {
  return (
    <InnerPage
      title="Managing Director's Message"
      sidebar={<SidebarLinks heading="School" links={SCHOOL_SIDEBAR} />}
    >
      <div className="normalContent">
        <p>Dear MPS Family,</p>
        <p>Since its inception over five decades ago, Modern Public School has stood as a beacon of quality education in Delhi. Our journey reflects an unwavering commitment to academic excellence, holistic development, and the continuous pursuit of innovation in education.</p>
        <p>We have continuously evolved our curriculum, infrastructure, and pedagogy to remain at the forefront of modern education. The integration of technology, life skills, and global perspectives in our teaching approach ensures that our students are not just well-prepared for today&apos;s challenges but for tomorrow&apos;s opportunities.</p>
        <p>Our Legacy of 50 Years is a testament to the trust that thousands of families have placed in us — and a responsibility we carry with great pride. Every Modernite who walks out of our school gates carries with them the values of integrity, curiosity, and compassion that we instil.</p>
        <p>I am deeply proud of every student, teacher, parent, and member of our community who has made MPS the institution it is today. Together, we will continue to write chapters of success, excellence, and positive impact.</p>
        <p>With best wishes,</p>
        <p>Managing Director, Modern Public School</p>
      </div>
    </InnerPage>
  );
}
