import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Creative Corner" };

export default function Page() {
  return (
    <InnerPage title="Creative Corner" breadcrumbs={[{ label: "Gallery" }]}>
      <div style={{ textAlign: "center", padding: "40px 0" }}>
        <h2 style={{ color: "#333a65", marginBottom: "20px" }}>Creative Corner</h2>
        <p style={{ color: "#666", fontSize: "16px", maxWidth: "600px", margin: "0 auto" }}>
          This page is under construction. Content for <strong>Creative Corner</strong> will be added soon.
        </p>
      </div>
    </InnerPage>
  );
}
