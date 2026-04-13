import type { Metadata } from "next";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";

export const metadata: Metadata = {
  title: "Newsletter — Birla Vidya Niketan",
};

const sidebarData: SidebarLinksProps = {
  heading: "Quick Links",
  links: [
    { label: "Newsletter", href: "/newsletter" },
    { label: "Monthly Report", href: "/monthly-report" },
    { label: "Wall Journals", href: "/wall-journals" },
    { label: "Social Responsibility", href: "/social-responsibility" },
    { label: "Infrastructure", href: "/infrastructure" },
    { label: "Creative Corners", href: "/creative-corner" },
    { label: "CLRA", href: "/clra" },
  ],
};

export default function NewsletterPage() {
  return (
    <>
      <div className="body-conent ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              Newsletter
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
