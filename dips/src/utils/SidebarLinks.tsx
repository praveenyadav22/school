import Link from "next/link";

export interface SubLinkItem { label: string; href: string; isExternal?: boolean; }
export interface LinkItem { label: string; href?: string; isExternal?: boolean; subLinks?: SubLinkItem[]; }
export interface SidebarLinksProps { heading: string; links: LinkItem[]; }

const SidebarLinks = ({ heading, links }: SidebarLinksProps) => (
  <div id="slidbarLink" className="important-links quickLinksWrap">
    <h3 className="important-links__head">{heading}</h3>
    <ul className="listitem">
      {links.map((item, i) => (
        <li key={i} className={item.subLinks ? "sub-quicklinks" : ""}>
          {item.href ? (
            item.isExternal ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer">{item.label}</a>
            ) : (
              <Link href={item.href}>{item.label}</Link>
            )
          ) : (
            <button type="button" className="sidebar-parent-btn" style={{ background: "none", border: "none", padding: "10px 20px", width: "100%", textAlign: "left", cursor: "pointer", fontSize: "15px", color: "#002649" }}>
              {item.label}
            </button>
          )}
          {item.subLinks && item.subLinks.length > 0 && (
            <ul className="sub-list" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {item.subLinks.map((sub, j) => (
                <li key={j}>
                  {sub.isExternal ? (
                    <a href={sub.href} target="_blank" rel="noopener noreferrer">{sub.label}</a>
                  ) : (
                    <Link href={sub.href}>{sub.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default SidebarLinks;
