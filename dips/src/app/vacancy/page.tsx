import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Vacancy" };

export default function Page() {
  return (
    <InnerPage title="Vacancy" breadcrumbs={[]}>
      <div className="inner-content">
        <p>De Indian Public School invites applications from qualified and experienced candidates for teaching and non-teaching positions. Send your CV to rohini.dips@yahoo.co.in.</p>
      </div>
    </InnerPage>
  );
}
