import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "NGFS Bulletin" };

export default function Page() {
  return (
    <InnerPage title="NGFS Bulletin" breadcrumbs={[{ label: "" }]}>
      <div style={{ textAlign: "center", padding: "40px 0" }}>
        <h2 style={{ color: "#333a65", marginBottom: "20px" }}>NGFS Bulletin</h2>
        <p style={{ color: "#666", fontSize: "16px", maxWidth: "600px", margin: "0 auto" }}>
          This page is under construction. Content for <strong>NGFS Bulletin</strong> will be added soon.
        </p>
      </div>
    </InnerPage>
  );
}
