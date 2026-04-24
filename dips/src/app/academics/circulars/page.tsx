import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Circulars" };

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
      title="Circulars"
      breadcrumbs={[{ label: "Academics" }]}
      sectionTitle="Academics"
      sidebarLinks={SIDEBAR_LINKS}
    >
      <p>All official school circulars and notices are published here. Parents and students are requested to check this page regularly for important updates.</p></InnerPage>
  );
}
