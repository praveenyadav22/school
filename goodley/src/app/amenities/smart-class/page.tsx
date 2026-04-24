import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import { AMENITIES_LINKS } from "@/utils/SidebarLinks";

export const metadata: Metadata = { title: "Smart Class" };

export default function Page() {
  const links = AMENITIES_LINKS.map((l: any) => ({ ...l, active: l.href === "/amenities/smart-class" }));
  return (
    <InnerPage title="Smart Class" sidebarTitle="Smart Class" sidebarLinks={links}>
      <p>This page contains information about <strong>Smart Class</strong>. Please check back soon for detailed content, or contact the school administration for more information.</p>
      <p>Goodley Public School is committed to providing comprehensive information to all students, parents, and visitors.</p>
    </InnerPage>
  );
}
