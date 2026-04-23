import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "School Timings" };

export default function Page() {
  return (
    <InnerPage title="School Timings" breadcrumbs={[]}>
      <div className="inner-content">
        <p><strong>Pre-Primary (Nursery to KG):</strong> 8:00 AM – 12:00 PM</p><p><strong>Classes I to V:</strong> 7:50 AM – 1:30 PM</p><p><strong>Classes VI to XII:</strong> 7:50 AM – 2:10 PM</p>
      </div>
    </InnerPage>
  );
}
