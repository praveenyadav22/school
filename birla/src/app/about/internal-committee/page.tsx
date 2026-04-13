import type { Metadata } from "next";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";

export const metadata: Metadata = {
  title: "Internal Committee — Birla Vidya Niketan",
};

const sidebarData: SidebarLinksProps = {
  heading: "About Us",
  links: [
    { label: "School Profile", href: "/about/school-profile" },
    { label: "Vision And Mission", href: "/about/vision-mission" },
    { label: "Founders", href: "/about/founders" },
    { label: "Chairperson", href: "/about/chairperson" },
    { label: "Director & Manager", href: "/about/director-manager" },
    { label: "Principal", href: "/about/principal" },
    { label: "Vice Principal", href: "/about/vice-principal/sr-section" },
    { label: "Head Mistress", href: "/about/head-mistress" },
    { label: "School Managing Committee", href: "/about/school-managing-committee" },
    { label: "Faculty", href: "/about/faculty" },
    { label: "PTA", href: "/about/pta" },
    { label: "Internal Committee", href: "/about/internal-committee" },
    { label: "Mandatory Public Disclosure", href: "/about/mandatory-public-disclosure" },
  ],
};

export default function InternalCommitteePage() {
  return (
    <>
      <div className="body-conent ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              Internal Committee
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
