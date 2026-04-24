import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Managing Committee" };

const SIDEBAR_LINKS = [
  { label: "Symbolism of School Logo", href: "/about/school-logo" },
  { label: "Our Mission & Vision", href: "/about/mission-vision" },
  { label: "From the Chairman's Desk", href: "/about/chairmans-desk" },
  { label: "From the Manager's Desk", href: "/about/managers-desk" },
  { label: "From the Principal's Desk", href: "/about/principals-desk" },
  { label: "Managing Committee", href: "/about/managing-committee" },
  { label: "Anger Free School", href: "/about/anger-free-school" },
  { label: "Mandatory Public Disclosure", href: "/about/mandatory-disclosure" },
];

export default function Page() {
  return (
    <InnerPage
      title="Managing Committee"
      breadcrumbs={[{ label: "About Us" }]}
      sectionTitle="About Us"
      sidebarLinks={SIDEBAR_LINKS}
    >
      <p>The Managing Committee of De Indian Public School comprises distinguished educationists and leaders who guide the institution towards excellence.</p></InnerPage>
  );
}
