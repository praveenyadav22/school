import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import SidebarLinks from "@/utils/SidebarLinks";
import { BEYOND_SIDEBAR } from "@/utils/sidebarData";

export const metadata: Metadata = { title: "Workshops" };

export default function WorkshopsPage() {
  return (
    <InnerPage
      title="Workshops"
      sidebar={<SidebarLinks heading="Beyond Classroom" links={BEYOND_SIDEBAR} />}
    >
      <div className="normalContent">
        <h2>Workshops at MPS</h2>
        <p>Modern Public School regularly organises workshops that enrich students&apos; skills, expand their horizons, and connect learning to real-world experiences. Our workshop calendar covers a diverse range of academic, creative, and developmental areas.</p>
        <h2>Student Workshops</h2>
        <p>Creative Writing and Journalism — develop narrative skills and a passion for storytelling. Photography and Videography — explore visual communication through hands-on practice. Coding, Robotics, and AI — future-ready skills for the technology-driven world. Theatre and Performing Arts — build confidence, creativity, and stage presence. Personality Development — communication, grooming, and professional skills. First Aid and Safety — essential life-saving skills for every student.</p>
        <h2>Parent Workshops</h2>
        <p>Parenting in the Digital Age — navigating screen time, online safety, and digital wellbeing. Understanding Child Psychology — insights into developmental stages and emotional needs. Career Guidance and Counselling — helping parents support their children&apos;s career exploration.</p>
        <h2>Teacher Professional Development</h2>
        <p>Regular in-service training programs. Workshops on modern pedagogy, EdTech tools, and inclusive education. Leadership and classroom management training.</p>
      </div>
    </InnerPage>
  );
}
