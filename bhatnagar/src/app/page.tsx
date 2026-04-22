import type { Metadata } from "next";
import HomeBanner from "@/components/HomeBanner";
import CusMarquee from "@/components/CusMarquee";
import HomeFeatured from "@/components/HomeFeatured";
import SchoolInfo from "@/components/SchoolInfo";
import FacilitiesSection from "@/components/FacilitiesSection";

export const metadata: Metadata = {
  title: "Bhatnagar International School | Top CBSE School in Vasant Kunj, Delhi",
};

export default function Home() {
  return (
    <>
      <HomeBanner />
      <CusMarquee />
      <HomeFeatured />
      <SchoolInfo />
      <FacilitiesSection />
    </>
  );
}
