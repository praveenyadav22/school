import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Safety Measure" };

export default function Page() {
  return (
    <InnerPage title="Safety Measure" breadcrumbs={[]}>
      <div className="inner-content">
        <p>The safety and security of our students is our top priority. DIPS has CCTV surveillance throughout the campus, trained security personnel, and a strict visitor management system.</p>
      </div>
    </InnerPage>
  );
}
