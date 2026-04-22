import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Fee Structure" };

export default function Page() {
  return (
    <InnerPage title="Fee Structure">
      <div className="inner-content">
        <p>Content for <strong>Fee Structure</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
