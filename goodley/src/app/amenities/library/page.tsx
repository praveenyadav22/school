import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import { AMENITIES_LINKS } from "@/utils/SidebarLinks";

export const metadata: Metadata = { title: "Library" };

export default function Page() {
  const links = AMENITIES_LINKS.map((l: any) => ({ ...l, active: l.href === "/amenities/library" }));
  return (
    <InnerPage title="Library" sidebarTitle="Library" sidebarLinks={links}>
      <p>This page contains information about <strong>Library</strong>. Please check back soon for detailed content, or contact the school administration for more information.</p>
      <p>Goodley Public School is committed to providing comprehensive information to all students, parents, and visitors.</p>
    </InnerPage>
  );
}
