import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Managing Committee" };

export default function Page() {
  return (
    <InnerPage title="Managing Committee" breadcrumbs={[]}>
      <div className="inner-content">
        <p>The Managing Committee of De Indian Public School comprises distinguished educationists and leaders who guide the institution towards excellence.</p>
      </div>
    </InnerPage>
  );
}
