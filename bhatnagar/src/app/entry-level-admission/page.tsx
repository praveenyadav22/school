import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Entry Level Admission Details" };

export default function Page() {
  return (
    <InnerPage title="Entry Level Admission Details">
      <div className="inner-content">
        <p>Content for <strong>Entry Level Admission Details</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
