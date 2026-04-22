import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Physical Education & Playground" };

export default function Page() {
  return (
    <InnerPage title="Physical Education & Playground">
      <div className="inner-content">
        <p>Content for <strong>Physical Education & Playground</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
