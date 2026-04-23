import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "School Calendar" };

export default function Page() {
  return (
    <InnerPage title="School Calendar" breadcrumbs={[]}>
      <div className="inner-content">
        <p>The academic calendar for the current session is available below. It includes all important dates, examinations, holidays, and events planned throughout the year.</p>
      </div>
    </InnerPage>
  );
}
