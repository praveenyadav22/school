import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Admission" };

export default function Page() {
  return (
    <InnerPage title="Admission" breadcrumbs={[]}>
      <p>De Indian Public School welcomes applications for all classes from Pre-School to Class XI. Admissions are conducted as per CBSE and Directorate of Education guidelines.</p><p>To apply, please fill the Admission Enquiry form or visit the school office during working hours.</p></InnerPage>
  );
}
