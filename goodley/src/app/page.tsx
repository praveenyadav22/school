import type { Metadata } from "next";
import Banner from "@/components/Banner";

export const metadata: Metadata = {
  title: "Goodley Public School | West Shalimar Bagh, New Delhi – CBSE Affiliated School",
};

export default function Home() {
  return (
    <>
      <Banner />
    </>
  );
}
