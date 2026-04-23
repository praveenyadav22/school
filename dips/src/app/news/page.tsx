import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Latest News" };

export default function Page() {
  return (
    <InnerPage title="Latest News" breadcrumbs={[]}>
      <div className="inner-content">
        <p>Stay updated with all the latest happenings at De Indian Public School. Check this page regularly for news, achievements, and announcements.</p>
      </div>
    </InnerPage>
  );
}
