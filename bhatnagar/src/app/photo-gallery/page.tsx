import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Photo Gallery" };

export default function Page() {
  return (
    <InnerPage title="Photo Gallery">
      <div className="inner-content">
        <p>Content for <strong>Photo Gallery</strong> will be available here.</p>
      </div>
    </InnerPage>
  );
}
