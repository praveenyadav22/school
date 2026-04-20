import type { Metadata } from "next";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";

export const metadata: Metadata = {
  title: "Alumni Registration — Birla Vidya Niketan",
};

const sidebarData: SidebarLinksProps = {
  heading: "Alumni Zone",
  links: [
    { label: "Announcements", href: "/alumni-zone/announcements" },
    { label: "Principal's Message", href: "/alumni-zone/principal-message" },
    { label: "Alumni Registration", href: "/alumni-zone/alumni-registration" },
  ],
};

export default function AlumniRegistrationPage() {
  return (
    <div className="body-conent ptb-50">
      <div className="container">
        <div className="row">

          {/* MAIN */}
          <div className="col-12 col-lg-8">
            <div className="inner-content">
              <div className="contentArea">

                <h4 className="mb-3">
                  Please click the link below to register as an alumni:-
                </h4>

                <p>
                  <a
                    className="btn btn-danger btn-sm alumni-register-btn"
                    href="https://forms.gle/wHD6anBq9Vysqo1N9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register Now
                  </a>
                </p>

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