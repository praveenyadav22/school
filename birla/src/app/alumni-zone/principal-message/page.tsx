import type { Metadata } from "next";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";

export const metadata: Metadata = {
  title: "Principal's Message — Birla Vidya Niketan",
};

const sidebarData: SidebarLinksProps = {
  heading: "Alumni Zone",
  links: [
    { label: "Announcements", href: "/alumni-zone/announcements" },
    { label: "Principal's Message", href: "/alumni-zone/principal-message" },
    { label: "Alumni Registration", href: "/alumni-zone/alumni-registration" },
  ],
};

export default function PrincipalMessagePage() {
  return (
    <div className="body-conent ptb-50">
      <div className="container">
        <div className="row">

          {/* MAIN */}
          <div className="col-12 col-lg-8">
            <div className="inner-content">
              <div className="contentArea">

                <p>
                  <b>Dear Alumnus,</b>
                </p>

                <p className="text-justify">
                  How time flies! It seems like yesterday when you walked into this institution as a tiny tot and walked out into the wider world to pursue your dreams. Dreams which we educators can proudly claim to have helped you dream. As you would, most certainly, reminisce about the time spent in school, with memories mostly sweet, some bitter, you would realise the role played by the school in forming your personality. Your school-teachers, you would agree, were just a shade less important than your parents, in moulding you as a human being.
                </p>

                <p className="text-justify">
                  It is, perhaps, time you made us feel prouder! While you reach for greater accomplishments in life, for us, just knowing about your successes and whereabouts will be satisfaction enough. The ‘Alumni Association’, with your participation, will serve not only as a link with your alma mater, but also your friends.
                </p>

                <p className="text-justify">
                  You are cordially invited to be enrolled as a member of the Alumni Association.
                </p>

                <p>
                  <span className="theme-red-color">
                    With Best Wishes
                    <br />
                    Principal
                    <br />
                    BVN, New Delhi
                  </span>
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