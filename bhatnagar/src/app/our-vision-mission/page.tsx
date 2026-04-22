import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Our Vision & Mission" };

export default function Page() {
  return (
    <InnerPage title="Our Vision & Mission">
      <div className="inner-content">
        <p>Content for <strong>Our Vision & Mission</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
