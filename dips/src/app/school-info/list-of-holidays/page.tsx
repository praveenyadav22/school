import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "List of Holidays" };

export default function Page() {
  return (
    <InnerPage title="List of Holidays" breadcrumbs={[]}>
      <div className="inner-content">
        <p>The following is the list of gazetted and local holidays for the current academic session. The school observes all national holidays along with selected state and local festivals.</p>
      </div>
    </InnerPage>
  );
}
