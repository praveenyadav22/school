import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Admissions Under EWS" };

export default function Page() {
  return (
    <InnerPage title="Admissions Under EWS">
      <div className="inner-content">
        <p>Content for <strong>Admissions Under EWS</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
