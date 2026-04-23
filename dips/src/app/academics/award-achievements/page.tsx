import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Award Achievements" };

export default function Page() {
  return (
    <InnerPage title="Award Achievements" breadcrumbs={[]}>
      <div className="inner-content">
        <p>DIPS students have achieved remarkable success in academics, sports, arts, and co-curricular activities at national and international levels. We are proud of every achievement.</p>
      </div>
    </InnerPage>
  );
}
