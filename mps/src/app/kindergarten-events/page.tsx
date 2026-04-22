import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import SidebarLinks from "@/utils/SidebarLinks";
import { CAMPUS_SIDEBAR } from "@/utils/sidebarData";

export const metadata: Metadata = { title: "School Events" };

export default function KindergartenEventsPage() {
  return (
    <InnerPage
      title="School Events"
      sidebar={<SidebarLinks heading="Campus Life" links={CAMPUS_SIDEBAR} />}
    >
      <div className="normalContent">
        <h2>School Events at MPS</h2>
        <p>Life at Modern Public School is enriched by a vibrant calendar of events and celebrations that make every academic year memorable. Our events are thoughtfully designed to promote learning, cultural awareness, creativity, teamwork, and community spirit.</p>
        <h2>Annual Events</h2>
        <p>Annual Day / Graduation Ceremony: A grand celebration of student talent, achievement, and school spirit. Sports Day: A showcase of athletic ability, teamwork, and healthy competition. Science and Innovation Exhibition: Students present their research, experiments, and inventions. Art and Craft Exhibition: A celebration of creativity and artistic expression. Cultural Programs and Festivals.</p>
        <h2>National Celebrations</h2>
        <p>Independence Day (August 15). Republic Day (January 26). Gandhi Jayanti (October 2). Teachers&apos; Day (September 5). Children&apos;s Day (November 14).</p>
        <h2>Academic Events</h2>
        <p>Inter-school competitions in Debate, Quizzes, and Sports. Model United Nations (MUN). Science and Mathematics Olympiads. Literary and creative writing contests. Spell Bee and GK competitions.</p>
      </div>
    </InnerPage>
  );
}
