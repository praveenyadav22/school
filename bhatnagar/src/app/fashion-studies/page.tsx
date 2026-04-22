import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Fashion Studies" };

export default function Page() {
  return (
    <InnerPage title="Fashion Studies">
      <div className="inner-content">
        <p>Content for <strong>Fashion Studies</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
