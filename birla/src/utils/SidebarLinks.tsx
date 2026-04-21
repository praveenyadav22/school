import Link from "next/link";

// ── Types ─────────────────────────────────────────────────────
export interface SubLinkItem {
  label:      string;
  href:       string;
  isExternal?: boolean;
}

export interface LinkItem {
  label:      string;
  href?:      string;
  isExternal?: boolean;
  subLinks?:  SubLinkItem[];
}

export interface SidebarLinksProps {
  heading: string;
  links:   LinkItem[];
}

// ─────────────────────────────────────────────────────────────
// SidebarLinks — reusable sidebar navigation widget
// Supports: internal links, external links, nested sub-lists
// ─────────────────────────────────────────────────────────────
const SidebarLinks = ({ heading, links }: SidebarLinksProps) => {
  return (
    <div id="slidbarLink" className="important-links quickLinksWrap">

      <h3 className="important-links__head">{heading}</h3>

      <ul className="listitem">
        {links.map((item, i) => (
          <li key={i} className={item.subLinks ? "sub-quicklinks" : ""}>

            {/* Main link */}
            {item.href ? (
              item.isExternal ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.label} (opens in new tab)`}
                >
                  {item.label}
                </a>
              ) : (
                <Link href={item.href}>{item.label}</Link>
              )
            ) : (
              // Parent toggle — no navigation, just expands sub-list
              <button
                type="button"
                className="sidebar-parent-btn"
                aria-expanded={true}
              >
                {item.label}
              </button>
            )}

            {/* Sub-links */}
            {item.subLinks && item.subLinks.length > 0 && (
              <ul className="sub-list">
                {item.subLinks.map((sub, j) => (
                  <li key={j}>
                    {sub.isExternal ? (
                      <a
                        href={sub.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${sub.label} (opens in new tab)`}
                      >
                        {sub.label}
                      </a>
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
};

export default SidebarLinks;
