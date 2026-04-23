import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "From the Manager's Desk" };

export default function Page() {
  return (
    <InnerPage title="From the Manager's Desk" breadcrumbs={[]}>
      <div className="inner-content">
        <p>Having sowed the seeds of the vision of Shri H.R. Gupta, it gives me deep pleasure to witness the burgeoning growth of DIPS. We believe in nurturing not just academic excellence but the overall personality development of each child.</p>
      </div>
    </InnerPage>
  );
}
