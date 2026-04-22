import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Clubs" };

export default function Page() {
  return (
    <InnerPage title="Clubs">
      <div className="inner-content">
        <p>Content for <strong>Clubs</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
