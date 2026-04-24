import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import { EXTENDED_LINKS } from "@/utils/SidebarLinks";

export const metadata: Metadata = { title: "Indian Classical and Western Dance" };

export default function Page() {
  const links = EXTENDED_LINKS.map((l: any) => ({ ...l, active: l.href === "/extended-classrooms/classical-western-dance" }));
  return (
    <InnerPage title="Indian Classical and Western Dance" sidebarTitle="Indian Classical and Western Dance" sidebarLinks={links}>
      <p>This page contains information about <strong>Indian Classical and Western Dance</strong>. Please check back soon for detailed content, or contact the school administration for more information.</p>
      <p>Goodley Public School is committed to providing comprehensive information to all students, parents, and visitors.</p>
    </InnerPage>
  );
}
