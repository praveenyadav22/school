import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import { AMENITIES_LINKS } from "@/utils/SidebarLinks";

export const metadata: Metadata = { title: "Laboratories" };

export default function Page() {
  const links = AMENITIES_LINKS.map((l: any) => ({ ...l, active: l.href === "/amenities/laboratories" }));
  return (
    <InnerPage title="Laboratories" sidebarTitle="Laboratories" sidebarLinks={links}>
      <p>This page contains information about <strong>Laboratories</strong>. Please check back soon for detailed content, or contact the school administration for more information.</p>
      <p>Goodley Public School is committed to providing comprehensive information to all students, parents, and visitors.</p>
    </InnerPage>
  );
}
