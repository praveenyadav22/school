import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import SidebarLinks from "@/utils/SidebarLinks";
import { BEYOND_SIDEBAR } from "@/utils/sidebarData";

export const metadata: Metadata = { title: "Clubs" };

export default function ClubsPage() {
  return (
    <InnerPage
      title="Clubs"
      sidebar={<SidebarLinks heading="Beyond Classroom" links={BEYOND_SIDEBAR} />}
    >
      <div className="normalContent">
        <h2>Club Culture at MPS</h2>
        <p>Modern Public School has a vibrant club culture that provides students with meaningful opportunities to explore their interests, develop talents, and build lasting friendships. Clubs meet regularly and participate in inter-school competitions, exhibitions, community events, and showcases.</p>
        <h2>Academic Clubs</h2>
        <p>Science Club, Mathematics Club, Debate and MUN Club, Quiz Club, Literary and Creative Writing Club.</p>
        <h2>Creative Clubs</h2>
        <p>Art and Craft Club, Photography Club, Music and Band Club, Dance Club (Classical and Contemporary), Drama and Theatre Club.</p>
        <h2>Sports Clubs</h2>
        <p>Cricket, Football, Basketball, Badminton, Chess, Table Tennis, Swimming, and Athletics.</p>
        <h2>Community and Service Clubs</h2>
        <p>Eco Club — environmental awareness, plantation drives, and sustainability projects. Health and Wellness Club — promoting physical and mental wellbeing. Social Service Club — community outreach, awareness campaigns, and volunteering. Digital Literacy Club — technology education for students and the community.</p>
      </div>
    </InnerPage>
  );
}
