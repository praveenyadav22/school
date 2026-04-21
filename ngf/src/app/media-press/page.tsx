import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Media Press" };

export default function Page() {
  return (
    <InnerPage title="Media Press" breadcrumbs={[{ label: "Gallery" }]}>
      <div style={{ textAlign: "center", padding: "40px 0" }}>
        <h2 style={{ color: "#333a65", marginBottom: "20px" }}>Media Press</h2>
        <p style={{ color: "#666", fontSize: "16px", maxWidth: "600px", margin: "0 auto" }}>
          This page is under construction. Content for <strong>Media Press</strong> will be added soon.
        </p>
      </div>
    </InnerPage>
  );
}
