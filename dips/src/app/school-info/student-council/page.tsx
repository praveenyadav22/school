import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Students Council" };

const SIDEBAR_LINKS = [
  { label: "Students Council", href: "/school-info/student-council" },
  { label: "House System", href: "/school-info/house-system" },
  { label: "School Timings", href: "/school-info/school-timings" },
  { label: "List of Holidays", href: "/school-info/list-of-holidays" },
  { label: "School Uniform", href: "/school-info/school-uniform" },
  { label: "PTA", href: "/school-info/pta" },
  { label: "Assembly Themes", href: "/school-info/assembly-themes" },
  { label: "Safety Measure", href: "/school-info/safety-measure" },
  { label: "School Activities", href: "/school-info/school-activities" },
  { label: "International Policy", href: "/school-info/international-policy" },
  { label: "Best Practices", href: "/school-info/best-practices" },
  { label: "Publications", href: "/school-info/publications" },
];

export default function Page() {
  return (
    <InnerPage
      title="Students Council"
      breadcrumbs={[{ label: "School Info" }]}
      sectionTitle="School Info"
      sidebarLinks={SIDEBAR_LINKS}
    >
      <p>Students Council is an elected body comprised of student representatives from each class. It acts as a bridge between the student body and the school administration, fostering leadership and democratic values.</p></InnerPage>
  );
}
