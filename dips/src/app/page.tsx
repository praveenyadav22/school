import type { Metadata } from "next";
import Banner from "@/components/Banner";

export const metadata: Metadata = {
  title: "De Indian Public School, Rohini Sector-24 | Top CBSE School in Delhi",
};

export default function Home() {
  return (
    <>
      <Banner />
    </>
  );
}
