import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import { ACADEMICS_LINKS } from "@/utils/SidebarLinks";

export const metadata: Metadata = { title: "Vacancy" };

export default function Page() {
  const links = ACADEMICS_LINKS.map((l: any) => ({ ...l, active: l.href === "/academics/vacancy" }));
  return (
    <InnerPage title="Vacancy" sidebarTitle="Vacancy" sidebarLinks={links}>
      <p>This page contains information about <strong>Vacancy</strong>. Please check back soon for detailed content, or contact the school administration for more information.</p>
      <p>Goodley Public School is committed to providing comprehensive information to all students, parents, and visitors.</p>
    </InnerPage>
  );
}
