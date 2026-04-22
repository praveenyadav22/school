import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "List of Registered Students" };

export default function Page() {
  return (
    <InnerPage title="List of Registered Students">
      <div className="inner-content">
        <p>Content for <strong>List of Registered Students</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
