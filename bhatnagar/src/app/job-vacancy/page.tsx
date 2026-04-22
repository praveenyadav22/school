import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Job Vacancy" };

export default function Page() {
  return (
    <InnerPage title="Job Vacancy">
      <div className="inner-content">
        <p>Content for <strong>Job Vacancy</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
