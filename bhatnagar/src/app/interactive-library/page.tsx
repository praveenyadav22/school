import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Interactive Library" };

export default function Page() {
  return (
    <InnerPage title="Interactive Library">
      <div className="inner-content">
        <p>Content for <strong>Interactive Library</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
