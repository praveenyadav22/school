import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import { ABOUT_US_LINKS } from "@/utils/SidebarLinks";

export const metadata: Metadata = { title: "Managing Director's Profile" };

export default function Page() {
  const links = ABOUT_US_LINKS.map((l: any) => ({ ...l, active: l.href === "/about-us/managing-directors-profile" }));
  return (
    <InnerPage title="Managing Director's Profile" sidebarTitle="Managing Director's Profile" sidebarLinks={links}>
      <p>This page contains information about <strong>Managing Director's Profile</strong>. Please check back soon for detailed content, or contact the school administration for more information.</p>
      <p>Goodley Public School is committed to providing comprehensive information to all students, parents, and visitors.</p>
    </InnerPage>
  );
}
