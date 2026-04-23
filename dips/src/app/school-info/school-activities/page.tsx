import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "School Activities" };

export default function Page() {
  return (
    <InnerPage title="School Activities" breadcrumbs={[]}>
      <div className="inner-content">
        <p>DIPS offers a rich array of clubs and activities including: Robotics Club, Literary Club, Eco Club, Art & Craft, Music, Dance, Drama, and various Sports clubs. These activities promote holistic development.</p>
      </div>
    </InnerPage>
  );
}
