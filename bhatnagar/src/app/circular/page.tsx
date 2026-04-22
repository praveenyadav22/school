import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Circulars" };

export default function Page() {
  return (
    <InnerPage title="Circulars">
      <div className="inner-content">
        <p>Content for <strong>Circulars</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
