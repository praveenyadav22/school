import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Media Print Coverage" };

export default function Page() {
  return (
    <InnerPage title="Media Print Coverage">
      <div className="inner-content">
        <p>Content for <strong>Media Print Coverage</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
