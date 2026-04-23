import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Remedial & Enrichment Classes" };

export default function Page() {
  return (
    <InnerPage title="Remedial & Enrichment Classes" breadcrumbs={[]}>
      <div className="inner-content">
        <p>The school organizes remedial classes to achieve expected competencies in core academic skills. Enrichment programs are designed for advanced learners to explore beyond the regular curriculum.</p>
      </div>
    </InnerPage>
  );
}
