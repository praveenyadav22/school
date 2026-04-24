import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "School Transport" };

const SIDEBAR_LINKS = [
  { label: "Sports", href: "/facilities/sports" },
  { label: "School Transport", href: "/facilities/school-transport" },
  { label: "Meal Plan", href: "/facilities/meal-plan" },
  { label: "Remedial & Enrichment Classes", href: "/facilities/remedial-enrichment" },
];

export default function Page() {
  return (
    <InnerPage
      title="School Transport"
      breadcrumbs={[{ label: "Facilities" }]}
      sectionTitle="Facilities"
      sidebarLinks={SIDEBAR_LINKS}
    >
      <p>The school has its own fleet of AC luxury coaches with trained attendants and experienced drivers. Transport facility is available from Rohini, Ashok Vihar, Shalimar Bagh, Pitampura, and surrounding areas.</p></InnerPage>
  );
}
