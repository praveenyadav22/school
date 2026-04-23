import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Publications" };

export default function Page() {
  return (
    <InnerPage title="Publications" breadcrumbs={[]}>
      <div className="inner-content">
        <p>The school publishes an annual magazine, newsletters, and student journals showcasing the creative work of students across all grades. These publications celebrate academic and creative excellence.</p>
      </div>
    </InnerPage>
  );
}
