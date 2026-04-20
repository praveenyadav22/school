import type { Metadata } from "next";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";

export const metadata: Metadata = {
  title: "Senior Section Club — Birla Vidya Niketan",
};

const sidebarData: SidebarLinksProps = {
  heading: "Facilities",
  links: [
    { label: "Sarala Birla Krida Kendra", href: "/facilities/birla-krida-kendra" },
    { label: "Transport", href: "/facilities/transport" },
    { label: "Excursion/Educational Tours", href: "/facilities/educational-tours" },
    { label: "BVN-IAPT Anveshika", href: "/facilities/bvn-anveshika" },
    { label: "BVN-MUN", href: "#" },
    {
      label: "Clubs",
      subLinks: [
        { label: "Senior Section", href: "/facilities/senior-section-club" },
        { label: "Junior Section", href: "/facilities/junior-section-club" },
      ],
    },
    { label: "Canteen", href: "/facilities/canteen" },
    { label: "Career Counselling Cell", href: "/facilities/career-counselling-cell" },
    { label: "Mind Spark", href: "/facilities/mind-spark" },
    { label: "Atal Tinkering Lab", href: "/facilities/atal-tinkering-lab" },
  ],
};

export default function SeniorSectionClubPage() {

  // ✅ JSON DATA (exact from HTML)
  const clubs = [
    "Science in everyday Life",
    "Art/Craft",
    "Dance",
    "Vocal Music",
    "Western Music",
    "Home Science",
    "Aerobics",
    "Hindi Drama",
    "English Drama",
    "English Debating",
    "Maths / Logical Reasoning",
    "Wellness",
    "English Literature Club",
    "Hindi Literature Club",
    "Bharat Ek Khoj",
    "Yoga",
    "MUN (VIII to X)",
    "Sports",
  ];

  return (
    <div className="body-conent ptb-50">
      <div className="container">
        <div className="row">

          {/* MAIN */}
          <div className="col-12 col-lg-8">
            <div className="inner-content">
              <div className="contentArea">

                <div className="contentsection with_table">
                  <div className="table-responsive">

                    <table className="table headerBg">

                      <thead>
                        <tr>
                          <th colSpan={2}>
                            Clubs [Senior Wing] Academic Session : 2021-22
                          </th>
                        </tr>
                      </thead>

                      <tbody>

                        <tr>
                          <td><strong>S.No.</strong></td>
                          <td><strong>Clubs</strong></td>
                        </tr>

                        {clubs.map((club, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{club}</td>
                          </tr>
                        ))}

                      </tbody>

                    </table>

                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="col-12 col-lg-4">
            <SidebarLinks {...sidebarData} />
          </div>

        </div>
      </div>
    </div>
  );
}