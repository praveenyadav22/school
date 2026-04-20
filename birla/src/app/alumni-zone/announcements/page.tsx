import type { Metadata } from "next";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";

export const metadata: Metadata = {
  title: "Announcements — Birla Vidya Niketan",
};

const sidebarData: SidebarLinksProps = {
  heading: "Alumni Zone",
  links: [
    { label: "Announcements", href: "/alumni-zone/announcements" },
    { label: "Principal's Message", href: "/alumni-zone/principal-message" },
    { label: "Alumni Registration", href: "/alumni-zone/alumni-registration" },
  ],
};

export default function AnnouncementsPage() {
  return (
    <>
      <div className="body-conent ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              No announcements data available yet!
            </div>
            <div className="col-12 col-lg-4">
              <SidebarLinks {...sidebarData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
