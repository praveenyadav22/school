import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Annual Pedagogical Plan" };

export default function Page() {
  return (
    <InnerPage title="Annual Pedagogical Plan">
      <div className="inner-content">
        <p>Content for <strong>Annual Pedagogical Plan</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
