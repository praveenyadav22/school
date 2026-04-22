import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Core Values" };

export default function Page() {
  return (
    <InnerPage title="Core Values">
      <div className="inner-content">
        <p>Content for <strong>Core Values</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
