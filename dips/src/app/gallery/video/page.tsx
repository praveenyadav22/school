import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Video Gallery" };

export default function Page() {
  return (
    <InnerPage title="Video Gallery" breadcrumbs={[]}>
      <div className="inner-content">
        <p>Watch videos from school events and activities at De Indian Public School, Rohini.</p>
      </div>
    </InnerPage>
  );
}
