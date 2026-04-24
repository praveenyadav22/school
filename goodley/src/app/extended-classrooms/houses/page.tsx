import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import { EXTENDED_LINKS } from "@/utils/SidebarLinks";

export const metadata: Metadata = { title: "Houses" };

export default function Page() {
  const links = EXTENDED_LINKS.map((l: any) => ({ ...l, active: l.href === "/extended-classrooms/houses" }));
  return (
    <InnerPage title="Houses" sidebarTitle="Houses" sidebarLinks={links}>
      <p>This page contains information about <strong>Houses</strong>. Please check back soon for detailed content, or contact the school administration for more information.</p>
      <p>Goodley Public School is committed to providing comprehensive information to all students, parents, and visitors.</p>
    </InnerPage>
  );
}
