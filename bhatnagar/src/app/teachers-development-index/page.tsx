import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Teachers Development Index" };

export default function Page() {
  return (
    <InnerPage title="Teachers Development Index">
      <div className="inner-content">
        <p>Content for <strong>Teachers Development Index</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
