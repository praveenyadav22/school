import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "School Calendar" };

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
      title="School Calendar"
      breadcrumbs={[{ label: "Academics" }]}
      sectionTitle="Academics"
      sidebarLinks={SIDEBAR_LINKS}
    >
      <p>The academic calendar for the current session is available below. It includes all important dates, examinations, holidays, and events planned throughout the year.</p></InnerPage>
  );
}
