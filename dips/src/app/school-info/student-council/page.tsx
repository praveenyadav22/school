import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Students Council" };

export default function Page() {
  return (
    <InnerPage title="Students Council" breadcrumbs={[]}>
      <div className="inner-content">
        <p>Students Council is an elected body comprised of student representatives from each class. It acts as a bridge between the student body and the school administration, fostering leadership and democratic values.</p>
      </div>
    </InnerPage>
  );
}
