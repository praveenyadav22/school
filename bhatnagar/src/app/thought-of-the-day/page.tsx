import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Thought Of the Day" };

export default function Page() {
  return (
    <InnerPage title="Thought Of the Day">
      <div className="inner-content">
        <p>Content for <strong>Thought Of the Day</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
