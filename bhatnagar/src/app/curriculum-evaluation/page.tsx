import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Curriculum & Evaluation" };

export default function Page() {
  return (
    <InnerPage title="Curriculum & Evaluation">
      <div className="inner-content">
        <p>Content for <strong>Curriculum & Evaluation</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
