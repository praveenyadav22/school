import type { Metadata } from "next";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";

export const metadata: Metadata = {
  title: "Mind Spark — Birla Vidya Niketan",
};

const sidebarData: SidebarLinksProps = {
  heading: "Facilities",
  links: [
    {
      label: "Sarala Birla Krida Kendra",
      href: "/facilities/birla-krida-kendra",
    },
    {
      label: "Transport",
      href: "/facilities/transport",
    },
    {
      label: "Excursion/Educational Tours",
      href: "/facilities/educational-tours",
    },
    {
      label: "BVN-IAPT Anveshika",
      href: "/facilities/bvn-anveshika",
    },

    // ⚠️ Placeholder (no link in HTML)
    {
      label: "BVN-MUN",
      href: "#",
    },

    // ✅ Clubs (Nested)
    {
      label: "Clubs",
      subLinks: [
        {
          label: "Senior Section",
          href: "/facilities/senior-section-club",
        },
        {
          label: "Junior Section",
          href: "/facilities/junior-section-club",
        },
      ],
    },

    {
      label: "Canteen",
      href: "/facilities/canteen",
    },
    {
      label: "Career Counselling Cell",
      href: "/facilities/career-counselling-cell",
    },
    {
      label: "Mind Spark",
      href: "/facilities/mind-spark",
    },
    {
      label: "Atal Tinkering Lab",
      href: "/facilities/atal-tinkering-lab",
    },
  ],
};

export default function MindSparkPage() {
  return (
    <>
      <div className="body-conent ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
             <div className="inner-content">
        <div className="contentArea">
         <p>Mindspark is a personalized, computer-based, adaptive learning programme for Mathematics. It is personalized because the question that a student gets depends entirely on how he/she has performed in the previous question-the system focuses on helping him/her overcome his/her weaknesses. If the student requires practice, it provides practice. If he/ she requires concept - based understanding, it challenges him / her with such activities. If a lower class concept is not understood, it provides specially remedial items. If the child has completed all the contents for that class level, it provides enrichment activities.</p>
         <p>Mindspark as a paradigm resonates to push the boundaries of learning well beyond exams into understanding, application and appreciation. Every child experiences the magic, enjoying Mathematics at just beyond the comfort level in a manner which helps to grasp and embed concepts, resulting in learning of Mathematics for life. Mindspark works individually with each student to diagnose, remediate and motivate the student to invest the time needed to make him / her confident and fluent in the subject.</p>
        </div> 
       </div>
            </div>
            <div className="col-12 col-lg-4">
              <SidebarLinks {...sidebarData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
