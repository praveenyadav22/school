import type { Metadata } from "next";
import Banner from "@/components/Banner";

export const metadata: Metadata = {
  title: "New Green Field School, Alaknanda – Top CBSE School in South Delhi",
};

export default function Home() {
  return (
    <>
      <Banner />
    </>
  );
}
