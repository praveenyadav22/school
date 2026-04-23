import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Sports" };

export default function Page() {
  return (
    <InnerPage title="Sports" breadcrumbs={[]}>
      <div className="inner-content">
        <p>Extending education beyond the confines of the classrooms, the school aims at cultivating values of team spirit, discipline and physical development. Facilities include Basketball, Football, Handball, Volleyball, Badminton, Chess, Table Tennis, Athletics, and Yoga.</p>
      </div>
    </InnerPage>
  );
}
