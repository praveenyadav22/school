import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Events" };

export default function Page() {
  return (
    <InnerPage title="Events" breadcrumbs={[]}>
      <p>DIPS hosts a variety of events throughout the academic year — from Annual Sports Day and Cultural Fest to Science Exhibitions, Literary Events, and Interhouse Competitions.</p></InnerPage>
  );
}
