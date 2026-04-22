import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Maths Laboratory" };

export default function Page() {
  return (
    <InnerPage title="Maths Laboratory">
      <div className="inner-content">
        <p>Content for <strong>Maths Laboratory</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
