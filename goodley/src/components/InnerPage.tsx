import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

interface Props {
  title: string;
  breadcrumbs?: Crumb[];   // parent crumbs e.g. [{ label: "About Us" }]
  children: React.ReactNode;
}

/**
 * InnerPage — wraps every inner page with:
 *   1. #blog_banner  — full-width hero image + black overlay (matches live site)
 *   2. .breadcrumb-main — Home / Parent / Page
 *   3. page content slot
 */
export default function InnerPage({ title, breadcrumbs = [], children }: Props) {
  return (
    <>
      {/* ── Inner hero banner ──────────────────────────────── */}
      <div id="blog_banner">
        <div className="page-title">
          <div className="container">
            {/* Live site leaves container empty — title shown via h2 below */}
          </div>
        </div>
        {/* Dark overlay — matches .black-overlay in original */}
        <div className="black-overlay" />
      </div>

      {/* ── Breadcrumb bar ─────────────────────────────────── */}
      <div className="breadcrumb-main">
        <div className="container">
          <ul className="breadcrumb">
            {/* Home */}
            <li>
              <Link href="/">Home</Link>
            </li>

            {/* Parent crumbs */}
            {breadcrumbs.map((crumb, i) => (
              <li key={i}>
                {crumb.href ? (
                  <Link href={crumb.href}>{crumb.label}</Link>
                ) : (
                  <span>{crumb.label}</span>
                )}
              </li>
            ))}

            {/* Current page — amber, no link */}
            <li className="active">
              <span>{title}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* ── Page content ───────────────────────────────────── */}
      <section style={{ padding: "60px 0 80px" }}>
        <div className="container">
          {children}
        </div>
      </section>
    </>
  );
}
