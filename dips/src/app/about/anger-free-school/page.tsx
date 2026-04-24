import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Anger Free School" };

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
      title="Anger Free School"
      breadcrumbs={[{ label: "About Us" }]}
      sectionTitle="About Us"
      sidebarLinks={SIDEBAR_LINKS}
    >
      <p>De Indian Public School is committed to creating a safe, peaceful environment. We follow an Anger Free School policy where conflicts are resolved through communication, empathy, and understanding.</p></InnerPage>
  );
}
