import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "BIS Mobile App" };

export default function Page() {
  return (
    <InnerPage title="BIS Mobile App">
      <div className="inner-content">
        <p>Content for <strong>BIS Mobile App</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
