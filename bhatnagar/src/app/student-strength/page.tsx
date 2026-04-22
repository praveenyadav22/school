import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Student Strength" };

export default function Page() {
  return (
    <InnerPage title="Student Strength">
      <div className="inner-content">
        <p>Content for <strong>Student Strength</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
