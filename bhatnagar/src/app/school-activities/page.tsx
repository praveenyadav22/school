import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "School Activities" };

export default function Page() {
  return (
    <InnerPage title="School Activities">
      <div className="inner-content">
        <p>Content for <strong>School Activities</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
