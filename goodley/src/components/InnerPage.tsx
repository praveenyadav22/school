import Breadcrumb from "./BreadCrumb";

interface SidebarLink {
  label: string;
  href: string;
  active?: boolean;
}

interface Props {
  title: string;
  sidebarTitle?: string;
  sidebarLinks?: SidebarLink[];
  children: React.ReactNode;
}

export default function InnerPage({ title, sidebarTitle, sidebarLinks = [], children }: Props) {
  const hasSidebar = sidebarLinks.length > 0;

  return (
    <div className="inner-page-offset">
      {/* ── Inner Banner ── */}
      <section className="banner00">
        <div
          className="innerBanner"
          style={{ backgroundImage: "url(/images/banner/default-inner-banner.jpg)" }}
        />
      </section>

      {/* ── Page Header / Breadcrumb ── */}
      <div className="pageHeaderWrap">
        <div className="container">
          <div className="pageHeader">
            <div className="pageHeader__title">
              <h1>{title}</h1>
            </div>
            <div className="pageHeader__breadcrumb">
              <Breadcrumb />
            </div>
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="container">
        <div className="bodySection inner">
          {hasSidebar ? (
            <div className="inner-layout">
              {/* LEFT: main content — col-md-9 */}
              <main className="inner-content normalContent">
                {children}
              </main>

              {/* RIGHT: sidebar — col-md-3 */}
              <aside className="inner-sidebar">
                <div className="quicklinks__wrapper">
                  <div className="quicklinks__head">
                    <h3>{sidebarTitle || title}</h3>
                  </div>
                  <ul className="quickLinks">
                    {sidebarLinks.map((link, i) => (
                      <li key={i} className={link.active ? "active" : ""}>
                        <a href={link.href}>
                          <i className="fa fa-angle-right" /> {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          ) : (
            <div className="normalContent no-sidebar">
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
