import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Book List" };

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
      title="Book List"
      breadcrumbs={[{ label: "Academics" }]}
      sectionTitle="Academics"
      sidebarLinks={SIDEBAR_LINKS}
    >
      <p>The prescribed book list for the current academic session is available at the school office and on the school portal. Parents are requested to ensure timely procurement of all required books.</p></InnerPage>
  );
}
