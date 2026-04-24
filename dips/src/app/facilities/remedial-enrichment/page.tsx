import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Remedial & Enrichment Classes" };

const SIDEBAR_LINKS = [
  { label: "Sports", href: "/facilities/sports" },
  { label: "School Transport", href: "/facilities/school-transport" },
  { label: "Meal Plan", href: "/facilities/meal-plan" },
  { label: "Remedial & Enrichment Classes", href: "/facilities/remedial-enrichment" },
];

export default function Page() {
  return (
    <InnerPage
      title="Remedial & Enrichment Classes"
      breadcrumbs={[{ label: "Facilities" }]}
      sectionTitle="Facilities"
      sidebarLinks={SIDEBAR_LINKS}
    >
      <p>The school organizes remedial classes to achieve expected competencies in core academic skills. Enrichment programs are designed for advanced learners to explore beyond the regular curriculum.</p></InnerPage>
  );
}
