import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Departments & Faculty" };

export default function Page() {
  return (
    <InnerPage title="Departments & Faculty">
      <div className="inner-content">
        <p>Content for <strong>Departments & Faculty</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
