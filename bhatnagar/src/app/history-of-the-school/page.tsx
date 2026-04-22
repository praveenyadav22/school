import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "History Of the School" };

export default function Page() {
  return (
    <InnerPage title="History Of the School">
      <div className="inner-content">
        <p>Content for <strong>History Of the School</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
