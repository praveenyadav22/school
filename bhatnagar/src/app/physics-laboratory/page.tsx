import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Physics Laboratory" };

export default function Page() {
  return (
    <InnerPage title="Physics Laboratory">
      <div className="inner-content">
        <p>Content for <strong>Physics Laboratory</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
