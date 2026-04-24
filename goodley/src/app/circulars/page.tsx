import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
export const metadata: Metadata = { title: "Circulars" };
export default function CircularsPage() {
  return (
    <InnerPage title="Circulars">
      <p>Stay updated with all official school circulars. All academic, administrative, and event-related notices are published here for easy access by parents and students.</p>
      <p style={{ padding: "20px", background: "#f9f9f9", borderLeft: "4px solid #ffc500" }}>No circulars have been published recently. Please check back soon.</p>
    </InnerPage>
  );
}
