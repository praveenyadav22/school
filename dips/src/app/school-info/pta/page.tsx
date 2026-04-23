import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "PTA" };

export default function Page() {
  return (
    <InnerPage title="PTA" breadcrumbs={[]}>
      <div className="inner-content">
        <p>The Parent Teacher Association (PTA) at DIPS plays a vital role in building a strong partnership between parents and school. Regular PTA meetings are conducted to discuss student progress and school development.</p>
      </div>
    </InnerPage>
  );
}
