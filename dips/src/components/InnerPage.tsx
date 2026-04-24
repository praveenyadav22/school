import Link from "next/link";

interface Crumb { label: string; href?: string; }

interface Props {
  title: string;
  breadcrumbs?: Crumb[];
  sectionTitle?: string;
  sidebarLinks?: { label: string; href: string }[];
  children: React.ReactNode;
}

const GENERAL_LINKS = [
  { label: "About School",    href: "/about/school-logo" },
  { label: "Admission",       href: "/admission" },
  { label: "School Calendar", href: "/academics/school-calendar" },
  { label: "Circulars",       href: "/academics/circulars" },
  { label: "Board Result",    href: "/academics/board-result" },
  { label: "Contact Us",      href: "/contact" },
  { label: "Photo Gallery",   href: "/gallery/photo" },
  { label: "Video Gallery",   href: "/gallery/video" },
];

export default function InnerPage({ title, breadcrumbs = [], sectionTitle, sidebarLinks, children }: Props) {
  const links   = sidebarLinks ?? GENERAL_LINKS;
  const heading = sectionTitle ?? title;

  return (
    <>
      {/* Inner banner — header is position:absolute so it overlaps this */}
      <div className="innerBanner">
        <div className="innerBanner__overlay" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="pageHeadWrap">
                <h1>{title}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Body — below banner */}
      <div className="container">
        <div className="bodySection innerBody">

          {/* Title + breadcrumb row */}
          <div className="row">
            <div className="col-lg-12">
              <div className="pageHeadsection">
                <div className="pageHead">
                  <h2>{title}</h2>
                </div>
                <ul className="breadcrumb themeBreadcrumb">
                  <li>
                    <Link href="/"><i className="fa fa-home" /></Link>
                  </li>
                  {breadcrumbs.map((crumb, i) => (
                    <li key={i}>
                      {crumb.href
                        ? <Link href={crumb.href}>{crumb.label}</Link>
                        : <a href="#">{crumb.label}</a>}
                    </li>
                  ))}
                  <li className="active">{title}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Content + sidebar — content FIRST (left), sidebar SECOND (right) */}
          <div className="row">
            {/* Main content — col-md-9 */}
            <div className="col-md-9">
              <div className="normalContent">
                {children}
              </div>
            </div>

            {/* Sidebar — col-md-3 naturally on the right */}
            <div className="col-md-3">
              <div id="slidbarLink" className="quicklinks__wrapper">
                <div className="quicklinks__wrapper-content">
                  <h3>{heading}</h3>
                  <h4>
                    <a href="javascript:;">
                      {heading} <span className="fa fa-caret-down" />
                    </a>
                  </h4>
                  <ul className="quickLinks">
                    {links.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href}>
                          <i className="fa fa-angle-right" /> {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
