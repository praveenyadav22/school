import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Fit India Movement" };

export default function Page() {
  return (
    <InnerPage title="Fit India Movement">
      <div className="inner-content">
        <p>Content for <strong>Fit India Movement</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
