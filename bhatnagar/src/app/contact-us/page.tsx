import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Contact Us" };

export default function Page() {
  return (
    <InnerPage title="Contact Us">
      <div className="inner-content">
        <p>Content for <strong>Contact Us</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
