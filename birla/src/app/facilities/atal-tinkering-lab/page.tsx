import type { Metadata } from "next";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";

export const metadata: Metadata = {
  title: "Atal Tinkering Lab — Birla Vidya Niketan",
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

export default function AtalTinkeringLabPage() {
  return (
    <div className="body-conent ptb-50">
      <div className="container">
        <div className="row">

          {/* MAIN */}
          <div className="col-12 col-lg-8">
            <div className="inner-content">
              <div className="contentArea">

                <p className="text-justify">
                  With a Vision to cultivate one million child innovators in India, Atal innovation mission By NITI AAYOG and government of India envisaged a Novel programme "establishment of Atal tinkering lab" in schools across the country.
                </p>

                <p className="text-justify">
                  We at Birla Vidya Niketan are grateful to NITI Aayog for selecting us to set the Atal Tinkering Lab and delighted to say that as of now it is fully functional.
                </p>

                <div className="actionArea">
                  <b>ATL FB Page</b> :
                  <a
                    href="https://www.facebook.com/atlbvndelhi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="actionArea__icon"
                    aria-label="Facebook Page"
                  >
                    {/* Facebook SVG */}
                    <svg
                      viewBox="0 0 24 24"
                      className="actionArea__svg"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.7V12h2.7V9.8c0-2.7 1.6-4.2 4-4.2 1.2 0 2.4.2 2.4.2v2.6h-1.4c-1.4 0-1.8.9-1.8 1.7V12h3.1l-.5 2.9h-2.6v7A10 10 0 0 0 22 12z" />
                    </svg>
                  </a>
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