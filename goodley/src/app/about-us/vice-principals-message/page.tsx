import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import { ABOUT_US_LINKS } from "@/utils/SidebarLinks";

export const metadata: Metadata = { title: "Vice Principal's Message" };

export default function Page() {
  const links = ABOUT_US_LINKS.map((l: any) => ({ ...l, active: l.href === "/about-us/vice-principals-message" }));
  return (
    <InnerPage title="Vice Principal's Message" sidebarTitle="Vice Principal's Message" sidebarLinks={links}>
      <p>This page contains information about <strong>Vice Principal's Message</strong>. Please check back soon for detailed content, or contact the school administration for more information.</p>
      <p>Goodley Public School is committed to providing comprehensive information to all students, parents, and visitors.</p>
    </InnerPage>
  );
}
