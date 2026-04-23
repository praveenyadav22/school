import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "From the Principal's Desk" };

export default function Page() {
  return (
    <InnerPage title="From the Principal's Desk" breadcrumbs={[]}>
      <div className="inner-content">
        <p>On behalf of the Management, staff and the school community, I extend to all our parents and children a very warm welcome. Education is about shaping young minds into responsible, compassionate, and capable individuals.</p>
      </div>
    </InnerPage>
  );
}
