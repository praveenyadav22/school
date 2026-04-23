import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Symbolism of School Logo" };

export default function Page() {
  return (
    <InnerPage title="Symbolism of School Logo" breadcrumbs={[]}>
      <div className="inner-content">
        <p>The school logo embodies the values and vision of De Indian Public School. The torch represents the light of knowledge guiding students towards a brighter future. The open book symbolizes learning and pursuit of wisdom.</p>
      </div>
    </InnerPage>
  );
}
