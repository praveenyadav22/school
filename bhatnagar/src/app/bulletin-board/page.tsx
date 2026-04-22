import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Bulletin Board" };

export default function Page() {
  return (
    <InnerPage title="Bulletin Board">
      <div className="inner-content">
        <p>Content for <strong>Bulletin Board</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
