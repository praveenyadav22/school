import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Meal Plan" };

const SIDEBAR_LINKS = [
  { label: "Sports", href: "/facilities/sports" },
  { label: "School Transport", href: "/facilities/school-transport" },
  { label: "Meal Plan", href: "/facilities/meal-plan" },
  { label: "Remedial & Enrichment Classes", href: "/facilities/remedial-enrichment" },
];

export default function Page() {
  return (
    <InnerPage
      title="Meal Plan"
      breadcrumbs={[{ label: "Facilities" }]}
      sectionTitle="Facilities"
      sidebarLinks={SIDEBAR_LINKS}
    >
      <p>The school canteen serves nutritious, hygienic, and balanced meals. A weekly meal plan is shared with parents. Special dietary requirements are accommodated upon prior request.</p></InnerPage>
  );
}
