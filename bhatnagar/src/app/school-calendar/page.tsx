import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "School Calendar" };

export default function Page() {
  return (
    <InnerPage title="School Calendar">
      <div className="inner-content">
        <p>Content for <strong>School Calendar</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
