import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Photo Gallery" };

export default function Page() {
  return (
    <InnerPage title="Photo Gallery" breadcrumbs={[]}>
      <div className="inner-content">
        <p>Explore photos from school events, sports days, cultural celebrations, and academic activities at De Indian Public School.</p>
      </div>
    </InnerPage>
  );
}
