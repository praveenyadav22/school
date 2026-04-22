import Breadcrumb from "@/components/BreadCrumb";

interface Props {
  title: string;
  children: React.ReactNode;
}

/**
 * InnerPage — wraps every inner page with:
 *   1. .inner-banner-section  — full-width hero with breadcrumbs-bg.jpg
 *   2. .bodyConentWrap        — page content slot
 *
 * Breadcrumb is now fully automatic via usePathname() inside <Breadcrumb />.
 * Just pass `title` — no manual breadcrumb array needed.
 */
export default function InnerPage({ title, children }: Props) {
  return (
    <>
      {/* ── Inner banner ──────────────────────────────────── */}
      <section
        className="inner-banner-section"
        style={{ backgroundImage: "url(/images/banner/breadcrumbs-bg.jpg)" }}
      >
        <div className="container">
          <div className="clearfix">
            {/* Page title box */}
            <div className="page-name">
              <h1>{title}</h1>
            </div>

            {/* Dynamic breadcrumb — auto-reads the current URL */}
            <Breadcrumb />
          </div>
        </div>
      </section>

      {/* ── Page content ──────────────────────────────────── */}
      <div className="bodyConentWrap">
        <div className="container">
          {children}
        </div>
      </div>
    </>
  );
}
