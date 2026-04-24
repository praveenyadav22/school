import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import { ABOUT_US_LINKS } from "@/utils/SidebarLinks";

export const metadata: Metadata = { title: "About School" };

export default function AboutSchool() {
  const links = ABOUT_US_LINKS.map(l => ({ ...l, active: l.href === "/about-us/about-school" }));
  return (
    <InnerPage title="About School" sidebarTitle="About School" sidebarLinks={links}>
      <p>
        <img alt="About GPS" className="img-responsive img-left img_withBorder" style={{ float: "left", marginRight: 16, marginBottom: 12, maxWidth: 260 }} src="/images/banner/default-inner-banner.jpg" />
        <strong>GPS</strong> is situated in the serene area of Shalimar Bagh in North West Delhi which stands forth with its motto of providing the best to its students establishing an everlasting mark of excellence. The school has already completed 25 years of service in the field of education. The school functions under a registered society with eminent educationists whose self-less work for the upliftment of the school need no testimony. The objective here is to craft socially conscious and responsible individuals in a stimulating environment.
      </p>
      <p>The school offers a dynamic curriculum aligned with CBSE standards, combining academic rigor with extracurricular excellence. Our state-of-the-art infrastructure includes smart classrooms, language labs, science laboratories, an interactive library, music studio, art studio, and a fully equipped auditorium.</p>
      <p>At Goodley Public School, we believe every child is unique and deserves personalized attention. Our dedicated faculty works tirelessly to bring out the best in each student, preparing them not just for examinations but for life itself.</p>
    </InnerPage>
  );
}
