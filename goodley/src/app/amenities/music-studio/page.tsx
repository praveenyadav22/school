import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import { AMENITIES_LINKS } from "@/utils/SidebarLinks";

export const metadata: Metadata = { title: "Music Studio" };

export default function Page() {
  const links = AMENITIES_LINKS.map((l: any) => ({ ...l, active: l.href === "/amenities/music-studio" }));
  return (
    <InnerPage title="Music Studio" sidebarTitle="Music Studio" sidebarLinks={links}>
      <p>This page contains information about <strong>Music Studio</strong>. Please check back soon for detailed content, or contact the school administration for more information.</p>
      <p>Goodley Public School is committed to providing comprehensive information to all students, parents, and visitors.</p>
    </InnerPage>
  );
}
