import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Our Inspiration" };

export default function Page() {
  return (
    <InnerPage title="Our Inspiration">
      <div className="inner-content">
        <p>Content for <strong>Our Inspiration</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
