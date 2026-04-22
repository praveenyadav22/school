import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Computer Lab" };

export default function Page() {
  return (
    <InnerPage title="Computer Lab">
      <div className="inner-content">
        <p>Content for <strong>Computer Lab</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
