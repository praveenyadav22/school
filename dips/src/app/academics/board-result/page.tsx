import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Board Result" };

export default function Page() {
  return (
    <InnerPage title="Board Result" breadcrumbs={[]}>
      <div className="inner-content">
        <p>De Indian Public School consistently achieves outstanding results in CBSE Board Examinations. Our students have excelled in both Class X and Class XII examinations with distinction.</p>
      </div>
    </InnerPage>
  );
}
