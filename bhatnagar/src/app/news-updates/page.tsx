import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "News & Updates" };

export default function Page() {
  return (
    <InnerPage title="News & Updates">
      <div className="inner-content">
        <p>Content for <strong>News & Updates</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
