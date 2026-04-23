import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Mandatory Public Disclosure" };

export default function Page() {
  return (
    <InnerPage title="Mandatory Public Disclosure" breadcrumbs={[]}>
      <div className="inner-content">
        <p>As per CBSE affiliation norms, the following public disclosure is made. School Name: De Indian Public School. Affiliation No.: 2730295. Address: Pocket 11, Sector-24, Rohini, Delhi-110085. Phone: 011-47586215.</p>
      </div>
    </InnerPage>
  );
}
