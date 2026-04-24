import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Board Result" };

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
      title="Board Result"
      breadcrumbs={[{ label: "Academics" }]}
      sectionTitle="Academics"
      sidebarLinks={SIDEBAR_LINKS}
    >
      <p>De Indian Public School consistently achieves outstanding results in CBSE Board Examinations. Our students have excelled in both Class X and Class XII examinations with distinction.</p></InnerPage>
  );
}
