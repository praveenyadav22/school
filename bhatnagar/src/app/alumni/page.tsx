import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Alumni" };

export default function Page() {
  return (
    <InnerPage title="Alumni">
      <div className="inner-content">
        <p>Content for <strong>Alumni</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
