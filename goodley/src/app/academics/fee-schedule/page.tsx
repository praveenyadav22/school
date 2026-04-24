import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import { ACADEMICS_LINKS } from "@/utils/SidebarLinks";

export const metadata: Metadata = { title: "Fee Schedule" };

export default function Page() {
  const links = ACADEMICS_LINKS.map((l: any) => ({ ...l, active: l.href === "/academics/fee-schedule" }));
  return (
    <InnerPage title="Fee Schedule" sidebarTitle="Fee Schedule" sidebarLinks={links}>
      <p>This page contains information about <strong>Fee Schedule</strong>. Please check back soon for detailed content, or contact the school administration for more information.</p>
      <p>Goodley Public School is committed to providing comprehensive information to all students, parents, and visitors.</p>
    </InnerPage>
  );
}
