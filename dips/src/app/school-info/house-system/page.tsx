import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "House System" };

export default function Page() {
  return (
    <InnerPage title="House System" breadcrumbs={[]}>
      <div className="inner-content">
        <p>The school has a flourishing House System with four houses: Ruby, Sapphire, Emerald, and Pearl. Each house represents unique values and competes in academics, sports, and cultural activities throughout the year.</p>
      </div>
    </InnerPage>
  );
}
