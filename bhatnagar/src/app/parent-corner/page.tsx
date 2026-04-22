import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Parent's Corner" };

export default function Page() {
  return (
    <InnerPage title="Parent's Corner">
      <div className="inner-content">
        <p>Content for <strong>Parent's Corner</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
