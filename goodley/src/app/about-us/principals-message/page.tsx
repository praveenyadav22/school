import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import { ABOUT_US_LINKS } from "@/utils/SidebarLinks";

export const metadata: Metadata = { title: "Principal'\''s Message" };

export default function Page() {
  const links = ABOUT_US_LINKS.map((l: any) => ({ ...l, active: l.href === "/about-us/principals-message" }));
  return (
    <InnerPage title="Principal'\''s Message" sidebarTitle="Principal'\''s Message" sidebarLinks={links}>
      <p>Dear Students, Parents, and Well-Wishers,</p><p>It is a matter of great pride and privilege to lead an institution like Goodley Public School. Our school has always stood for academic excellence, character building, and the holistic development of every child entrusted to our care.</p><p>Education is not just about acquiring knowledge; it is about developing the ability to think critically, act responsibly, and contribute meaningfully to society. At GPS, we strive to create an environment where every student feels valued, inspired, and empowered to reach their fullest potential.</p><p>We believe in nurturing curiosity, creativity, and compassion alongside academic achievement. Our dedicated faculty, state-of-the-art infrastructure, and comprehensive co-curricular programme ensure that each child gets the attention and guidance they deserve.</p><p>I invite you all to be active partners in this educational journey. Together, we can build a brighter tomorrow for our children and our nation.</p><p><strong>With warm regards,</strong><br/>Principal, Goodley Public School</p>
    </InnerPage>
  );
}
