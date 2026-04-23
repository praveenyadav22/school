import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Best Practices" };

export default function Page() {
  return (
    <InnerPage title="Best Practices" breadcrumbs={[]}>
      <div className="inner-content">
        <p>DIPS implements several best practices including experiential learning, project-based education, digital learning tools, peer mentoring, and regular teacher training programs.</p>
      </div>
    </InnerPage>
  );
}
