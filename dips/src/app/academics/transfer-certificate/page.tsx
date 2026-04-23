import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Transfer Certificate" };

export default function Page() {
  return (
    <InnerPage title="Transfer Certificate" breadcrumbs={[]}>
      <div className="inner-content">
        <p>Transfer Certificates can be obtained from the school office. Parents must submit a written application along with cleared dues. The TC will be issued within 3 working days of application.</p>
      </div>
    </InnerPage>
  );
}
