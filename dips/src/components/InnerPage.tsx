import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

interface Props {
  title: string;
  breadcrumbs?: Crumb[];
  children: React.ReactNode;
}

export default function InnerPage({ title, breadcrumbs = [], children }: Props) {
  return (
    <>
      {/* Inner hero banner */}
      <div id="blog_banner">
        <div className="black-overlay" />
      </div>

      {/* Breadcrumb */}
      <div className="breadcrumb-main">
        <div className="container">
          <ul className="breadcrumb">
            <li>
              <Link href="/">Home</Link>
            </li>
            {breadcrumbs.map((crumb, i) => (
              <li key={i}>
                {crumb.href ? (
                  <Link href={crumb.href}>{crumb.label}</Link>
                ) : (
                  <span>{crumb.label}</span>
                )}
              </li>
            ))}
            <li className="active">
              <span>{title}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Page content */}
      <section className="innerBodySection">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8">
              <div className="contentsection">
                <h2 style={{ fontSize: 28, color: "#002649", marginBottom: 20, fontWeight: 600 }}>{title}</h2>
                {children}
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <QuickLinks />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function QuickLinks() {
  const links = [
    { label: "About School", href: "/about/school-logo" },
    { label: "Admission", href: "/admission" },
    { label: "School Calendar", href: "/academics/school-calendar" },
    { label: "Circulars", href: "/academics/circulars" },
    { label: "Board Result", href: "/academics/board-result" },
    { label: "Contact Us", href: "/contact" },
    { label: "Photo Gallery", href: "/gallery/photo" },
    { label: "Video Gallery", href: "/gallery/video" },
  ];

  return (
    <div id="slidbarLink" className="important-links quickLinksWrap">
      <h3 className="important-links__head">Quick Links</h3>
      <ul className="listitem">
        {links.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
