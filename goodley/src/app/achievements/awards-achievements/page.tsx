import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import { ACHIEVEMENTS_LINKS } from "@/utils/SidebarLinks";

export const metadata: Metadata = { title: "Other Achievements" };

export default function Page() {
  const links = ACHIEVEMENTS_LINKS.map((l: any) => ({ ...l, active: l.href === "/achievements/awards-achievements" }));
  return (
    <InnerPage title="Other Achievements" sidebarTitle="Other Achievements" sidebarLinks={links}>
      <p>This page contains information about <strong>Other Achievements</strong>. Please check back soon for detailed content, or contact the school administration for more information.</p>
      <p>Goodley Public School is committed to providing comprehensive information to all students, parents, and visitors.</p>
    </InnerPage>
  );
}
