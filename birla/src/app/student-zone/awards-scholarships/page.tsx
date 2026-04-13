import type { Metadata } from "next";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";

export const metadata: Metadata = {
  title: "Awards & Scholarships — Birla Vidya Niketan",
};

const sidebarData: SidebarLinksProps = {
  heading: "Student Zone",
  links: [
    { label: "Rules & Regulations", href: "/student-zone/rules-regulations" },
    { label: "Awards & Scholarships", href: "/student-zone/awards-scholarships" },
    { label: "Senior Section Council", href: "/student-zone/senior-section-council" },
    { label: "Junior Section Council", href: "/student-zone/junior-section-council" },
    { label: "Admission", href: "/student-zone/admission" },
  ],
};

export default function AwardsScholarshipsPage() {
  return (
    <>
      <div className="body-conent ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              Awards & Scholarships
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
