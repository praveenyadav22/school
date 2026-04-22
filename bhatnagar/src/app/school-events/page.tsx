import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "School Events" };

export default function Page() {
  return (
    <InnerPage title="School Events">
      <div className="inner-content">
        <p>Content for <strong>School Events</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
