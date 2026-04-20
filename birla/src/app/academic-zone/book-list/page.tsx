import type { Metadata } from "next";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";

export const metadata: Metadata = {
  title: "Book List 2024-25 — Birla Vidya Niketan",
};

const sidebarData: SidebarLinksProps = {
  heading: "Academic Zone",
  links: [
    { label: "Affiliation", href: "/academic-zone/affiliation" },
    {
      label: "Curriculum/Syllabus",
      subLinks: [
        { label: "Primary School",          href: "/academic-zone/primary-school" },
        { label: "Middle School",           href: "/academic-zone/middle-school" },
        { label: "Secondary School",        href: "/academic-zone/secondary-school" },
        { label: "Senior Secondary School", href: "/academic-zone/senior-secondary-school" },
      ],
    },
    { label: "Streams Offered",   href: "/academic-zone/streams-offered" },
    { label: "Book List 2024-25", href: "/academic-zone/book-list" },
  ],
};

export default function BookListPage() {
  return (
    <>
      <div className="body-conent ptb-50">
        <div className="container">
          <div className="row">

            {/* ── Main content — 8 columns ── */}
            <div className="col-12 col-lg-8">
              <div className="inner-content">
                <div className="contentArea">

                  {/* Browser: <p><iframe class="border p-2" height="800" src="./images/book-list.pdf" width="100%"> */}
                  <p>
                    <iframe
                      src="/documents/book-list.pdf"
                      width="100%"
                      height="800"
                      frameBorder={0}
                      className="border p-2"
                      title="Book List 2024-25"
                    />
                  </p>

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
