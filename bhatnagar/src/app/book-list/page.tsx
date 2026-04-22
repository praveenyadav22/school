import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Book List 2026-27" };

export default function Page() {
  return (
    <InnerPage title="Book List 2026-27">
      <div className="inner-content">
        <p>Content for <strong>Book List 2026-27</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
