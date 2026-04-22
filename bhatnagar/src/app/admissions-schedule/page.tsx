import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Admission Schedule" };

export default function Page() {
  return (
    <InnerPage title="Admission Schedule">
      <div className="inner-content">
        <p>Content for <strong>Admission Schedule</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
