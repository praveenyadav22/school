import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "School Uniform" };

export default function Page() {
  return (
    <InnerPage title="School Uniform" breadcrumbs={[]}>
      <div className="inner-content">
        <p><strong>Summer Uniform (Boys):</strong> White shirt, Grey trousers, Black shoes.<br/><strong>Summer Uniform (Girls):</strong> White shirt, Grey skirt/salwar, Black shoes.<br/><strong>Winter Uniform:</strong> Navy blue blazer over summer uniform with tie.</p>
      </div>
    </InnerPage>
  );
}
