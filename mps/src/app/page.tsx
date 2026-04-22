import type { Metadata } from "next";
import Banner from "@/components/Banner";


export const metadata: Metadata = {
  title: "Modern Public School, Shalimar Bagh | Top CBSE School in Delhi",
};

export default function Home() {
  return (
    <>
      <Banner />
     
    </>
  );
}
