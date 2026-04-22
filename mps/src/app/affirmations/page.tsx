import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import SidebarLinks from "@/utils/SidebarLinks";
import { SCHOOL_SIDEBAR } from "@/utils/sidebarData";

export const metadata: Metadata = { title: "Affirmations" };

export default function AffirmationsPage() {
  return (
    <InnerPage
      title="Affirmations"
      sidebar={<SidebarLinks heading="School" links={SCHOOL_SIDEBAR} />}
    >
      <div className="normalContent">
        <h2>Our Affirmations</h2>
        <p>At Modern Public School, positive affirmations form a cornerstone of our educational philosophy. Our affirmations guide students toward developing a growth mindset, resilience, self-belief, and a compassionate character.</p>
        <p>Every day, our students recite these affirmations — not as empty words, but as powerful reminders of who they are and who they aspire to be:</p>
        <p>I am a curious and enthusiastic learner who embraces every challenge as an opportunity to grow.</p>
        <p>I treat all people with kindness, respect, and empathy — regardless of their background or beliefs.</p>
        <p>I take responsibility for my actions, learn from my mistakes, and always strive to do better.</p>
        <p>I contribute positively to my school, my community, and the world around me.</p>
        <p>I believe in my potential to achieve great things, and I will work diligently to realise my dreams.</p>
        <p>I am brave enough to ask questions, humble enough to seek help, and strong enough to persevere.</p>
        <p>These affirmations are not just words — they are the guiding principles of life at MPS, woven into every interaction, every lesson, and every celebration.</p>
      </div>
    </InnerPage>
  );
}
