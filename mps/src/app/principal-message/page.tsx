import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import SidebarLinks from "@/utils/SidebarLinks";
import { SCHOOL_SIDEBAR } from "@/utils/sidebarData";

export const metadata: Metadata = { title: "Principal's Message" };

export default function PrincipalMessagePage() {
  return (
    <InnerPage
      title="Principal's Message"
      sidebar={<SidebarLinks heading="School" links={SCHOOL_SIDEBAR} />}
    >
      <div className="normalContent">
        <p>Dear Students, Parents, and Well-wishers,</p>
        <p>It is with immense joy and pride that I welcome you to the Modern Public School family. At MPS Shalimar Bagh, we firmly believe that education is not merely the accumulation of knowledge but the total development of a child — intellectually, emotionally, socially, and physically.</p>
        <p>Our dedicated team of educators strives every day to kindle the spark of curiosity in each learner and guide them to reach their highest potential. We create an environment where questioning is encouraged, creativity is celebrated, and every child feels seen, heard, and valued.</p>
        <p>We are committed to nurturing thinkers, innovators, and compassionate leaders who will make a difference in the world. We aim to prepare our students not just for examinations, but for life — equipping them with the skills, values, and resilience to face any challenge.</p>
        <p>To our parents: thank you for entrusting us with your children. Your partnership and support are invaluable. To our students: believe in yourselves, embrace every learning opportunity, and know that we are here to guide you every step of the way.</p>
        <p>Together, let us continue to make MPS a centre of excellence and a place where every child thrives.</p>
        <p>With warm regards,</p>
        <p>Principal, Modern Public School, Shalimar Bagh</p>
      </div>
    </InnerPage>
  );
}
