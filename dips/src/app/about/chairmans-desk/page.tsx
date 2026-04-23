import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "From the Chairman's Desk" };

export default function Page() {
  return (
    <InnerPage title="From the Chairman's Desk" breadcrumbs={[]}>
      <div className="inner-content">
        <p>Under the visionary leadership of Sh. H.R. Gupta, De Indian Public School has grown into one of the most respected institutions in Delhi. Education is the most powerful weapon which you can use to change the world.</p>
      </div>
    </InnerPage>
  );
}
