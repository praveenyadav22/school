import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Biotechnology Laboratory" };

export default function Page() {
  return (
    <InnerPage title="Biotechnology Laboratory">
      <div className="inner-content">
        <p>Content for <strong>Biotechnology Laboratory</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
