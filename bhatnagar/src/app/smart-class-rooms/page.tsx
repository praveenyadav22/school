import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Smart Class Rooms" };

export default function Page() {
  return (
    <InnerPage title="Smart Class Rooms">
      <div className="inner-content">
        <p>Content for <strong>Smart Class Rooms</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
