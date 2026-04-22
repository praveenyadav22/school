import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Teacher's Corner" };

export default function Page() {
  return (
    <InnerPage title="Teacher's Corner">
      <div className="inner-content">
        <p>Content for <strong>Teacher's Corner</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
