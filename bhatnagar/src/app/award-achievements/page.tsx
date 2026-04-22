import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Awards & Achievements" };

export default function Page() {
  return (
    <InnerPage title="Awards & Achievements">
      <div className="inner-content">
        <p>Content for <strong>Awards & Achievements</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
