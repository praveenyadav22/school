import type { Metadata } from "next";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";

export const metadata: Metadata = {
  title: "Transport — Birla Vidya Niketan",
};

const sidebarData: SidebarLinksProps = {
  heading: "Facilities",
  links: [
    { label: "Sarala Birla Krida Kendra",   href: "/facilities/birla-krida-kendra" },
    { label: "Transport",                    href: "/facilities/transport" },
    { label: "Excursion/Educational Tours",  href: "/facilities/educational-tours" },
    { label: "BVN-IAPT Anveshika",          href: "/facilities/bvn-anveshika" },
    { label: "BVN-MUN",                     href: "#" },
    {
      label: "Clubs",
      subLinks: [
        { label: "Senior Section", href: "/facilities/senior-section-club" },
        { label: "Junior Section", href: "/facilities/junior-section-club" },
      ],
    },
    { label: "Canteen",                  href: "/facilities/canteen" },
    { label: "Career Counselling Cell",  href: "/facilities/career-counselling-cell" },
    { label: "Mind Spark",               href: "/facilities/mind-spark" },
    { label: "Atal Tinkering Lab",       href: "/facilities/atal-tinkering-lab" },
  ],
};

export default function TransportPage() {
  return (
    <>
      <div className="body-conent ptb-50">
        <div className="container">
          <div className="row">

            {/* ── Main content — 8 columns ── */}
            <div className="col-12 col-lg-8">
              <div className="inner-content">
                <div className="contentArea">

                  <h4 className="mb-2 theme-red-color">BUS FEE</h4>
                  <p>Bus fee is to be paid along with the school fee for students availing of the service. Fee for eleven months has to be paid in a year. Once the facility is availed of, it cannot be withdrawn during the academic session. Full year fee is to be paid in case of withdrawal in the middle of the session.</p>

                  <h4 className="mb-2 theme-red-color">RULES TO BE FOLLOWED:-</h4>
                  <ul className="checklist">
                    <li>Students are expected to wait on the left side of the bus on the road. Buses will not wait for latecomers.</li>
                    <li>Drivers are authorized to stop at designated stops only unless directed otherwise by the bus in-charge (teacher).</li>
                    <li>The list of stops is prepared keeping in view the convenience and safety of commuters and may be changed by the school authorities if necessary.</li>
                    <li>Students should not move about when the bus is in motion.</li>
                    <li>Students will be held responsible for any damage caused due to negligence or acts of vandalism.</li>
                    <li>Unruly behaviour, shouting should be strictly avoided.</li>
                    <li>The bus in-charge (teacher) and bus monitors are responsible for maintaining discipline, and any serious offence must be reported to the Principal.</li>
                    <li>
                      {/* Browser had broken nested <strong> tags — fixed here */}
                      In case of emergency, parents are requested to get in touch with the school authorities immediately. The contact numbers are <strong>29578900, 29578960</strong>. Mobile Numbers (<strong>between 6 a.m. to 4.00 p.m</strong>) are <strong>7065024731, 7065024733, 7065024736, 7065024737.</strong>
                    </li>
                  </ul>

                  {/* Browser: .actionArea with PDF download buttons
                      fa fa-hand-o-right replaced with ri-arrow-right-circle-line (remixicon)
                      PDF paths updated to /documents/ */}
                  <div className="actionArea mt-3">
                    <ul className="list-unstyled list-inline">
                      <li className="list-inline-item">
                        <a
                          href="/documents/gps-tracking.pdf"
                          className="btn btn-secondary btn-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GPS Tracking PDF (opens in new tab)"
                        >
                          <i className="ri-arrow-right-circle-line" aria-hidden="true" />{" "}GPS Tracking
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="/documents/bus-route-chart.pdf"
                          className="btn btn-secondary btn-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Bus Route Chart PDF (opens in new tab)"
                        >
                          <i className="ri-arrow-right-circle-line" aria-hidden="true" />{" "}Bus Route Chart
                        </a>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>

            {/* ── Sidebar — 4 columns ── */}
            <div className="col-12 col-lg-4">
              <SidebarLinks {...sidebarData} />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
