import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Curriculum" };

const SIDEBAR_LINKS = [
  { label: "Curriculum", href: "/academics/curriculum" },
  { label: "Transfer Certificate", href: "/academics/transfer-certificate" },
  { label: "School Calendar", href: "/academics/school-calendar" },
  { label: "Board Result", href: "/academics/board-result" },
  { label: "Award Achievements", href: "/academics/award-achievements" },
  { label: "Book List", href: "/academics/book-list" },
  { label: "Circulars", href: "/academics/circulars" },
];

export default function Page() {
  return (
    <InnerPage
      title="Curriculum"
      breadcrumbs={[{ label: "Academics" }]}
      sectionTitle="Academics"
      sidebarLinks={SIDEBAR_LINKS}
    >
      <p>DIPS follows the CBSE curriculum for all classes from Pre-School to Class XII. The curriculum is designed to foster critical thinking, creativity, and holistic development. We offer Science, Commerce, and Humanities streams at the senior secondary level.</p></InnerPage>
  );
}
