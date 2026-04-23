import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Meal Plan" };

export default function Page() {
  return (
    <InnerPage title="Meal Plan" breadcrumbs={[]}>
      <div className="inner-content">
        <p>The school canteen serves nutritious, hygienic, and balanced meals. A weekly meal plan is shared with parents. Special dietary requirements are accommodated upon prior request.</p>
      </div>
    </InnerPage>
  );
}
