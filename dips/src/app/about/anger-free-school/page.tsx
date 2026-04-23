import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Anger Free School" };

export default function Page() {
  return (
    <InnerPage title="Anger Free School" breadcrumbs={[]}>
      <div className="inner-content">
        <p>De Indian Public School is committed to creating a safe, peaceful environment. We follow an Anger Free School policy where conflicts are resolved through communication, empathy, and understanding.</p>
      </div>
    </InnerPage>
  );
}
