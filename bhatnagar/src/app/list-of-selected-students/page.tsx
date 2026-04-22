import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "List Of Selected Students" };

export default function Page() {
  return (
    <InnerPage title="List Of Selected Students">
      <div className="inner-content">
        <p>Content for <strong>List Of Selected Students</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
