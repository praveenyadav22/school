import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import SidebarLinks from "@/utils/SidebarLinks";
import { SCHOOL_SIDEBAR } from "@/utils/sidebarData";

export const metadata: Metadata = { title: "Aspire to be a Good Modernite" };

export default function GoodModernitePage() {
  return (
    <InnerPage
      title="Aspire to be a Good Modernite"
      sidebar={<SidebarLinks heading="School" links={SCHOOL_SIDEBAR} />}
    >
      <div className="normalContent">
        <h2>What is a Good Modernite?</h2>
        <p>A Good Modernite embodies the values, spirit, and aspirations of Modern Public School. It is more than academic achievement — it is the embodiment of character, leadership, and service.</p>
        <h2>Qualities of a Good Modernite</h2>
        <p>Academic Excellence: A Good Modernite pursues knowledge with diligence, intellectual honesty, and genuine curiosity. They take pride in their learning and always strive to improve.</p>
        <p>Character and Integrity: Honesty, fairness, and ethical conduct define a Good Modernite in all situations — in the classroom, on the sports field, and in life.</p>
        <p>Respect and Empathy: A Good Modernite treats every person — fellow students, teachers, support staff, and community members — with dignity and understanding.</p>
        <p>Leadership: A Good Modernite does not wait for opportunity — they create it. They take initiative, inspire others, and serve the community selflessly.</p>
        <p>Resilience and Adaptability: A Good Modernite faces challenges with determination, bounces back from setbacks, and sees change as an opportunity rather than a threat.</p>
        <p>Global Citizenship: A Good Modernite thinks beyond personal success — they are aware of the world, its challenges, and their responsibility to contribute to its betterment.</p>
      </div>
    </InnerPage>
  );
}
