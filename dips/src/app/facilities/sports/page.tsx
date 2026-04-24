import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Sports" };

const SIDEBAR_LINKS = [
  { label: "Sports", href: "/facilities/sports" },
  { label: "School Transport", href: "/facilities/school-transport" },
  { label: "Meal Plan", href: "/facilities/meal-plan" },
  { label: "Remedial & Enrichment Classes", href: "/facilities/remedial-enrichment" },
];

export default function Page() {
  return (
    <InnerPage
      title="Sports"
      breadcrumbs={[{ label: "Facilities" }]}
      sectionTitle="Facilities"
      sidebarLinks={SIDEBAR_LINKS}
    >
      <p>Extending education beyond the confines of the classrooms, the school aims at cultivating values of team spirit, discipline and physical development. Facilities include Basketball, Football, Handball, Volleyball, Badminton, Chess, Table Tennis, Athletics, and Yoga.</p></InnerPage>
  );
}
