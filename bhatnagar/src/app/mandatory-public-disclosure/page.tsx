import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Mandatory Public Disclosure" };

export default function Page() {
  return (
    <InnerPage title="Mandatory Public Disclosure">
      <div className="inner-content">
        <p>Content for <strong>Mandatory Public Disclosure</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
