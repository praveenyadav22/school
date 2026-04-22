import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Point Wise List For Registered Candidates" };

export default function Page() {
  return (
    <InnerPage title="Point Wise List For Registered Candidates">
      <div className="inner-content">
        <p>Content for <strong>Point Wise List For Registered Candidates</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
