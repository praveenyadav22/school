import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Chemistry Laboratory" };

export default function Page() {
  return (
    <InnerPage title="Chemistry Laboratory">
      <div className="inner-content">
        <p>Content for <strong>Chemistry Laboratory</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
