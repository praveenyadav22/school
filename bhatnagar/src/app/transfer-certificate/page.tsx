import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Transfer Certificate" };

export default function Page() {
  return (
    <InnerPage title="Transfer Certificate">
      <div className="inner-content">
        <p>Content for <strong>Transfer Certificate</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
