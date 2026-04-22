import Link from 'next/link';

interface QuickLink {
  label: string;
  href: string;
}

interface SidebarLayoutProps {
  children: React.ReactNode;
  quickLinks: QuickLink[];
  activeHref?: string;
}

export default function SidebarLayout({ children, quickLinks, activeHref }: SidebarLayoutProps) {
  return (
    <div className="column_alignment section_wrapper" style={{ background: 'white' }}>
      <div className="column_alignment main_content align_self_center">
        {/* row_column_reverse_alignment: on desktop → content LEFT, sidebar RIGHT
            on mobile → sidebar stacks BELOW content (column-reverse) */}
        <div className="row_column_reverse_alignment" style={{ alignItems: 'flex-start' }}>

          {/* Sidebar — Quick Links */}
          <div
            className="column_alignment quick_links_section"
            style={{ flexShrink: 0, marginBottom: 24 }}
          >
            <span className="heading">Quick Links</span>
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  background: activeHref === link.href ? '#dad2b6' : '#F7E9BC',
                  fontWeight: activeHref === link.href ? 600 : 400,
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Main Content */}
          <div className="column_alignment fill">
            {children}
          </div>

        </div>
      </div>
    </div>
  );
}
