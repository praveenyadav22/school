import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Online Registration" };

export default function Page() {
  return (
    <InnerPage title="Online Registration">
      <div className="inner-content">
        <p>Content for <strong>Online Registration</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
