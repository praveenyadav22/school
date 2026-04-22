import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import SidebarLinks from "@/utils/SidebarLinks";
import { SCHOOL_SIDEBAR } from "@/utils/sidebarData";

export const metadata: Metadata = { title: "Vision & Mission" };

export default function VisionMissionPage() {
  return (
    <InnerPage
      title="Vision & Mission"
      sidebar={<SidebarLinks heading="School" links={SCHOOL_SIDEBAR} />}
    >
      <div className="normalContent">
        <h2>Our Vision</h2>
        <p>To be a centre of excellence that inspires and empowers every child to become a lifelong learner, a responsible citizen, and a compassionate human being — ready to contribute meaningfully to society and the world.</p>
        <h2>Our Mission</h2>
        <p>To provide a safe, inclusive, and stimulating learning environment where every student is encouraged to explore, discover, and realise their fullest potential through academic rigour, character development, and creative expression.</p>
        <p>We are committed to fostering a culture of respect, integrity, and innovation — guiding students to become confident, empathetic, and principled individuals who make a positive difference in their communities.</p>
        <h2>Our Core Values</h2>
        <p>Excellence: Striving for the highest standards in every endeavour.</p>
        <p>Integrity: Upholding honesty and ethical conduct in all situations.</p>
        <p>Respect: Valuing every individual with dignity and empathy.</p>
        <p>Innovation: Embracing creative thinking and a growth mindset.</p>
        <p>Responsibility: Taking ownership of our actions and their impact on others.</p>
      </div>
    </InnerPage>
  );
}
