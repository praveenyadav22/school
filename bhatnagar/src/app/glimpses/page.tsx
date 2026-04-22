import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Glimpses" };

export default function Page() {
  return (
    <InnerPage title="Glimpses">
      <div className="inner-content">
        <p>Content for <strong>Glimpses</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
