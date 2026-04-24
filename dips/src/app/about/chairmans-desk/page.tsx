import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "From the Chairman's Desk" };

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
      title="From the Chairman's Desk"
      breadcrumbs={[{ label: "About Us" }]}
      sectionTitle="About Us"
      sidebarLinks={SIDEBAR_LINKS}
    >
      <p>Under the visionary leadership of Sh. H.R. Gupta, De Indian Public School has grown into one of the most respected institutions in Delhi. Education is the most powerful weapon which you can use to change the world.</p></InnerPage>
  );
}
