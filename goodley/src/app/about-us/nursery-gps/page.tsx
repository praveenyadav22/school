import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import { ABOUT_US_LINKS } from "@/utils/SidebarLinks";

export const metadata: Metadata = { title: "Nursery @ GPS" };

export default function Page() {
  const links = ABOUT_US_LINKS.map((l: any) => ({ ...l, active: l.href === "/about-us/nursery-gps" }));
  return (
    <InnerPage title="Nursery @ GPS" sidebarTitle="Nursery @ GPS" sidebarLinks={links}>
      <p>Our newly renovated Nursery Building is ready to welcome Little Learners with a <strong>Fully Air Conditioned</strong> environment from the new session. Enroll your child now for the session 2026-27. The nursery wing is designed with child-friendly infrastructure, colorful classrooms, and trained Montessori educators to give your child the best start in life.</p><p>We offer a play-based learning environment that encourages curiosity, creativity, and confidence. Our curriculum is age-appropriate and holistic, covering language development, number concepts, fine motor skills, and social-emotional learning.</p>
    </InnerPage>
  );
}
