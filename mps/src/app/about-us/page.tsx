import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import SidebarLinks from "@/utils/SidebarLinks";

export const metadata: Metadata = { title: "About Us" };

const SIDEBAR_LINKS = [
  { label: "About Us",                    href: "/about-us" },
  { label: "Vision & Mission",            href: "/vision-mission" },
  { label: "Principal's Message",         href: "/principal-message" },
  { label: "Managing Director's Message", href: "/managing-director" },
  { label: "Affirmations",                href: "/affirmations" },
  { label: "Aspire to be a Good Modernite", href: "/good-modernite" },
  { label: "Building A Culture of Trust", href: "/building-trust" },
  { label: "Infrastructure",              href: "/infrastructure" },
  { label: "School Details",              href: "/school-details" },
];

export default function AboutUsPage() {
  return (
    <InnerPage
      title="About Us"
      sidebar={<SidebarLinks heading="School" links={SIDEBAR_LINKS} />}
    >
      <div className="normalContent">
        <h2>About Modern Public School</h2>
        <p>
          Modern Public School, Shalimar Bagh is a premier co-educational CBSE-affiliated
          school situated in B-Block, Shalimar Bagh, Delhi - 110088. Established with an
          unwavering commitment to academic excellence and holistic development, the school
          has been nurturing young minds for over five decades.
        </p>
        <p>
          The school offers a comprehensive curriculum that seamlessly blends rigorous academics
          with co-curricular activities, sports, and value-based education. Our state-of-the-art
          infrastructure includes well-equipped science laboratories, a rich library, sports
          facilities, performing arts studios, and activity rooms — all designed to inspire
          curiosity and foster creativity.
        </p>
        <p>
          At MPS, we believe that education is not merely the accumulation of knowledge but
          the total development of a child — intellectually, emotionally, socially, and
          physically. Our dedicated faculty works tirelessly to kindle the spark of inquiry
          in each learner and guide them toward realising their fullest potential.
        </p>
        <p>
          We are proud to be a community where students are encouraged to think critically,
          act responsibly, and lead with compassion. Our alumni have gone on to excel in
          diverse fields — from science and technology to arts, business, and public service —
          reflecting the breadth and depth of the education they received here.
        </p>
        <h2>Our Heritage</h2>
        <p>
          Founded over 50 years ago, Modern Public School has stood as a beacon of quality
          education in Delhi. Our journey reflects a continuous evolution — adapting our
          curriculum, pedagogy, and infrastructure to remain at the forefront of modern
          education while staying true to our core values of integrity, respect, and
          excellence.
        </p>
        <p>
          Today, MPS is not just a school — it is a community of learners, educators, and
          parents united by a shared vision of building responsible global citizens equipped
          for the challenges of the 21st century.
        </p>
      </div>
    </InnerPage>
  );
}
