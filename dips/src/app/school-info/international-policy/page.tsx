import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "International Policy" };

export default function Page() {
  return (
    <InnerPage title="International Policy" breadcrumbs={[]}>
      <div className="inner-content">
        <p>De Indian Public School follows an inclusive international education policy that prepares students to become global citizens while remaining rooted in Indian culture and values.</p>
      </div>
    </InnerPage>
  );
}
