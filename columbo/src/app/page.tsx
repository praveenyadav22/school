import type { Metadata } from "next";
import Banner from "@/components/Banner";

export const metadata: Metadata = {
  title: " St. Columbo Public School",
};

export default function Home() {
  return (
    <>
      <Banner />
    </>
  );
}
