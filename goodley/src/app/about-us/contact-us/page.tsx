import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import { ABOUT_US_LINKS } from "@/utils/SidebarLinks";

export const metadata: Metadata = { title: "Contact Us" };

export default function Page() {
  const links = ABOUT_US_LINKS.map((l: any) => ({ ...l, active: l.href === "/about-us/contact-us" }));
  return (
    <InnerPage title="Contact Us" sidebarTitle="Contact Us" sidebarLinks={links}>
      <p>This page contains information about <strong>Contact Us</strong>. Please check back soon for detailed content, or contact the school administration for more information.</p>
      <p>Goodley Public School is committed to providing comprehensive information to all students, parents, and visitors.</p>
    </InnerPage>
  );
}
