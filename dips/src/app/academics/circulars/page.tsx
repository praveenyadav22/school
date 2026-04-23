import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Circulars" };

export default function Page() {
  return (
    <InnerPage title="Circulars" breadcrumbs={[]}>
      <div className="inner-content">
        <p>All official school circulars and notices are published here. Parents and students are requested to check this page regularly for important updates.</p>
      </div>
    </InnerPage>
  );
}
