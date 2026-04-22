import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "SLFRC Committee" };

export default function Page() {
  return (
    <InnerPage title="SLFRC Committee">
      <div className="inner-content">
        <p>Content for <strong>SLFRC Committee</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
