import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Founder Chairman Message" };

export default function Page() {
  return (
    <InnerPage title="Founder Chairman Message">
      <div className="inner-content">
        <p>Content for <strong>Founder Chairman Message</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
