import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Mobile Application" };

export default function Page() {
  return (
    <InnerPage title="Mobile Application" breadcrumbs={[]}>
      <div className="inner-content">
        <p>Download the DIPS Mobile App to stay connected with school updates, circulars, homework, and announcements — all at your fingertips.</p><p>Available on Google Play Store and Apple App Store.</p>
      </div>
    </InnerPage>
  );
}
