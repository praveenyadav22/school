import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import { EXTENDED_LINKS } from "@/utils/SidebarLinks";

export const metadata: Metadata = { title: "Indian and Western Music" };

export default function Page() {
  const links = EXTENDED_LINKS.map((l: any) => ({ ...l, active: l.href === "/extended-classrooms/indian-western-music" }));
  return (
    <InnerPage title="Indian and Western Music" sidebarTitle="Indian and Western Music" sidebarLinks={links}>
      <p>This page contains information about <strong>Indian and Western Music</strong>. Please check back soon for detailed content, or contact the school administration for more information.</p>
      <p>Goodley Public School is committed to providing comprehensive information to all students, parents, and visitors.</p>
    </InnerPage>
  );
}
