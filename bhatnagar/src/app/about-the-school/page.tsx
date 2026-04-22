import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "About The School" };

export default function Page() {
  return (
    <InnerPage title="About The School">
      <div className="inner-content">
        <p>Content for <strong>About The School</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
