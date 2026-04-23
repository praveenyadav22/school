import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "School Transport" };

export default function Page() {
  return (
    <InnerPage title="School Transport" breadcrumbs={[]}>
      <div className="inner-content">
        <p>The school has its own fleet of AC luxury coaches with trained attendants and experienced drivers. Transport facility is available from Rohini, Ashok Vihar, Shalimar Bagh, Pitampura, and surrounding areas.</p>
      </div>
    </InnerPage>
  );
}
