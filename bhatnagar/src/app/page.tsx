import type { Metadata } from "next";
import Banner from "@/components/Banner";

export const metadata: Metadata = {
  title: "Bhatnagar International School | Top CBSE School in Vasant Kunj, Delhi",
};

export default function Home() {
  return (
    <>
      <Banner />
    </>
  );
}
