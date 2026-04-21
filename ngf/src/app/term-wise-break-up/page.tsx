import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Term Wise Break Up" };

export default function Page() {
  return (
    <InnerPage title="Term Wise Break Up" breadcrumbs={[{ label: "Academics" }]}>
      <div style={{ textAlign: "center", padding: "40px 0" }}>
        <h2 style={{ color: "#333a65", marginBottom: "20px" }}>Term Wise Break Up</h2>
        <p style={{ color: "#666", fontSize: "16px", maxWidth: "600px", margin: "0 auto" }}>
          This page is under construction. Content for <strong>Term Wise Break Up</strong> will be added soon.
        </p>
      </div>
    </InnerPage>
  );
}
