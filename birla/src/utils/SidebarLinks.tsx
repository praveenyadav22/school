import Link from "next/link";

// ── Types ─────────────────────────────────────────────────────
export interface SubLinkItem {
  label: string;
  href: string;
}

export interface LinkItem {
  label: string;
  href?: string;           // omit href for parent items that only toggle sub-list
  subLinks?: SubLinkItem[];
}

export interface SidebarLinksProps {
  heading: string;
  links: LinkItem[];
}

// ─────────────────────────────────────────────────────────────
// SidebarLinks — reusable sidebar navigation widget
// Usage: import this component + pass your page-specific data
// ─────────────────────────────────────────────────────────────
const SidebarLinks = ({ heading, links }: SidebarLinksProps) => {
  return (
    <div id="slidbarLink" className="important-links quickLinksWrap">

      <h3 className="important-links__head">{heading}</h3>

      <ul className="listitem">
        {links.map((item, i) => (
          <li key={i} className={item.subLinks ? "sub-quicklinks" : ""}>

            {/* Main link — if no href treat as non-navigable parent */}
            {item.href ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <a href="javascript:;">{item.label}</a>
            )}

            {/* Sub-links — only rendered when subLinks array exists */}
            {item.subLinks && item.subLinks.length > 0 && (
              <ul className="sub-list">
                {item.subLinks.map((sub, j) => (
                  <li key={j}>
                    <Link href={sub.href}>{sub.label}</Link>
                  </li>
                ))}
              </ul>
            )}

          </li>
        ))}
      </ul>

    </div>
  );
};

export default SidebarLinks;
