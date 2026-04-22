import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "From Principal's Desk" };

export default function Page() {
  return (
    <InnerPage title="From Principal's Desk">
      <div className="inner-content">
        <p>Content for <strong>From Principal's Desk</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
