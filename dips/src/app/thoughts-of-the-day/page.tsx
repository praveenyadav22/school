import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Thoughts of the Day" };

export default function Page() {
  return (
    <InnerPage title="Thoughts of the Day" breadcrumbs={[]}>
      <p>Daily thoughts and quotes curated to inspire students and the school community towards positive thinking and self-improvement.</p></InnerPage>
  );
}
