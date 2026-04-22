import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Safety and Transport" };

export default function Page() {
  return (
    <InnerPage title="Safety and Transport">
      <div className="inner-content">
        <p>Content for <strong>Safety and Transport</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
