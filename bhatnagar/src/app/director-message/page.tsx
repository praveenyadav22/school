import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Director Message" };

export default function Page() {
  return (
    <InnerPage title="Director Message">
      <div className="inner-content">
        <p>Content for <strong>Director Message</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
