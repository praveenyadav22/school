import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Curriculum" };

export default function Page() {
  return (
    <InnerPage title="Curriculum" breadcrumbs={[]}>
      <div className="inner-content">
        <p>DIPS follows the CBSE curriculum for all classes from Pre-School to Class XII. The curriculum is designed to foster critical thinking, creativity, and holistic development. We offer Science, Commerce, and Humanities streams at the senior secondary level.</p>
      </div>
    </InnerPage>
  );
}
