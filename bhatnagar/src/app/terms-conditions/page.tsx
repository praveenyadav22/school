import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function Page() {
  return (
    <InnerPage title="Terms & Conditions">
      <div className="inner-content">
        <p>Content for <strong>Terms & Conditions</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
