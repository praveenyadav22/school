import type { Metadata } from "next";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";

export const metadata: Metadata = {
  title: "Senior Section Council — Birla Vidya Niketan",
};

const sidebarData: SidebarLinksProps = {
  heading: "Student Zone",
  links: [
    {
      label: "Rules & Regulations",
      href: "/student-zone/rules-regulations",
    },
    {
      label: "Awards & Scholarships",
      href: "/student-zone/awards-scholarships",
    },
    {
      label: "Student's Council",
      subLinks: [
        {
          label: "Senior Section",
          href: "/student-zone/senior-section-council",
        },
        {
          label: "Junior Section",
          href: "/student-zone/junior-section-council",
        },
      ],
    },
    {
      label: "Examination Schedule",
      subLinks: [
        {
          label: "Schedule",
          href: "https://erp.quickcampus.online/auth",
          target: "_blank",
        },
        {
          label: "Syllabus",
          href: "https://erp.quickcampus.online/auth",
          target: "_blank",
        },
      ],
    },
    {
      label: "Admission",
      href: "/student-zone/admission",
    },
  ],
};

export default function SeniorSectionCouncilPage() {
  return (
    <>
      <div className="body-conent ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              Senior Section Council
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
