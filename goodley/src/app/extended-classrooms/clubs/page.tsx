import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import { EXTENDED_LINKS } from "@/utils/SidebarLinks";

export const metadata: Metadata = { title: "Clubs" };

export default function Page() {
  const links = EXTENDED_LINKS.map((l: any) => ({ ...l, active: l.href === "/extended-classrooms/clubs" }));
  return (
    <InnerPage title="Clubs" sidebarTitle="Clubs" sidebarLinks={links}>
      <p>This page contains information about <strong>Clubs</strong>. Please check back soon for detailed content, or contact the school administration for more information.</p>
      <p>Goodley Public School is committed to providing comprehensive information to all students, parents, and visitors.</p>
    </InnerPage>
  );
}
