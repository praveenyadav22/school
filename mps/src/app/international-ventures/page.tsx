import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import SidebarLinks from "@/utils/SidebarLinks";
import { CAMPUS_SIDEBAR } from "@/utils/sidebarData";

export const metadata: Metadata = { title: "International Ventures" };

export default function InternationalVenturesPage() {
  return (
    <InnerPage
      title="International Ventures"
      sidebar={<SidebarLinks heading="Campus Life" links={CAMPUS_SIDEBAR} />}
    >
      <div className="normalContent">
        <h2>Global Exposure at MPS</h2>
        <p>Modern Public School is committed to preparing students for global citizenship. Our International Ventures program provides students with exposure to diverse cultures, global perspectives, and international academic experiences that broaden their worldview and enhance their competitiveness.</p>
        <h2>Student Exchange Programs</h2>
        <p>Structured student exchange programs with partner schools in other countries. Virtual exchanges and collaborative projects with international schools. Exposure visits to international educational institutions and cultural centres.</p>
        <h2>International Academic Events</h2>
        <p>Participation in international olympiads, science fairs, and creative competitions. Model United Nations (MUN) conferences — developing research, debate, diplomacy, and global awareness skills. International art and cultural exchanges.</p>
        <h2>Language Learning</h2>
        <p>French and other foreign language options are available as additional subjects. International cultural celebration events expose students to global festivals, traditions, and cuisines.</p>
        <h2>Global Learning in the Classroom</h2>
        <p>Guest lectures from international educators and professionals. Case studies and projects with an international dimension. Digital collaboration tools enabling students to connect with peers worldwide.</p>
      </div>
    </InnerPage>
  );
}
