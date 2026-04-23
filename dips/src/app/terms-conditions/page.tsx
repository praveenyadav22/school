import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function Page() {
  return (
    <InnerPage title="Terms & Conditions" breadcrumbs={[]}>
      <div className="inner-content">
        <p>By using this website, you agree to comply with and be bound by the following terms and conditions. The information on this site is provided for general informational purposes only.</p>
      </div>
    </InnerPage>
  );
}
