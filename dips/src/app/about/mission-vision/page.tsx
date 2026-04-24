import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Our Mission & Vision" };

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
      title="Our Mission & Vision"
      breadcrumbs={[{ label: "About Us" }]}
      sectionTitle="About Us"
      sidebarLinks={SIDEBAR_LINKS}
    >
      <p>To be a globally recognized institution nurturing future-ready individuals equipped with knowledge, values, and the ability to contribute meaningfully to society.</p><h3 style={{color:"#002649",marginTop:20}}>Mission</h3><p>To provide a stimulating, safe, and inclusive learning environment where every student is empowered to discover their potential.</p></InnerPage>
  );
}
