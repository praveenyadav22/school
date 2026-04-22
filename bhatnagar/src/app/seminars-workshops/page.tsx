import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Seminars & Workshops" };

export default function Page() {
  return (
    <InnerPage title="Seminars & Workshops">
      <div className="inner-content">
        <p>Content for <strong>Seminars & Workshops</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
