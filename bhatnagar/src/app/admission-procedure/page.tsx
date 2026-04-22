import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Admission Procedure" };

export default function Page() {
  return (
    <InnerPage title="Admission Procedure">
      <div className="inner-content">
        <p>Content for <strong>Admission Procedure</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
