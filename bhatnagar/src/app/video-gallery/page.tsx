import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Video Gallery" };

export default function Page() {
  return (
    <InnerPage title="Video Gallery">
      <div className="inner-content">
        <p>Content for <strong>Video Gallery</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
