"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

// ── Navigation data ───────────────────────────────────────────
const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "School", href: "#",
    children: [
      { label: "About Us",                    href: "/about-us" },
      { label: "Vision & Mission",            href: "/vision-mission" },
      { label: "Principal's Message",         href: "/principal-message" },
      { label: "Managing Director's Message", href: "/managing-director" },
      { label: "Affirmations",                href: "/affirmations" },
      { label: "Aspire to be a good Modernite", href: "/good-modernite" },
      { label: "Building A Culture of Trust", href: "/building-trust" },
      { label: "Infrastructure",              href: "/infrastructure" },
      { label: "School Details",              href: "/school-details" },
    ],
  },
  {
    label: "Academics", href: "#",
    children: [
      { label: "Streams",                          href: "/streams" },
      { label: "Admission",                        href: "/admission" },
      { label: "Curriculum",                       href: "/curriculum" },
      { label: "Examination & Assessment Rules",   href: "/assessment-rules" },
      { label: "School Information",               href: "/school-information" },
    ],
  },
  { label: "Best Practices", href: "/innovation" },
  {
    label: "Beyond Classroom", href: "#",
    children: [
      { label: "Life Skills",           href: "/life-skills" },
      { label: "Workshops",             href: "/workshops" },
      { label: "Clubs",                 href: "/clubs" },
      { label: "Sports",                href: "/sports" },
      { label: "Phad se Padh Initiative", href: "/phad-se-padh" },
      { label: "Rashtriya e-Pustakalya", href: "https://ndl.education.gov.in/home", external: true },
      { label: "Health and Wellness",   href: "/health-wellness" },
    ],
  },
  {
    label: "Campus Life", href: "#",
    children: [
      { label: "School Events",        href: "/kindergarten-events" },
      { label: "House System",         href: "/house-system" },
      { label: "International Ventures", href: "/international-ventures" },
      { label: "Mandatory Committees", href: "/mandatory-committees" },
    ],
  },
  { label: "School Policies", href: "https://mpsmentalhealthcorner.my.canva.site/school-policies", external: true },
  { label: "Contact Us", href: "/contact-us" },
];

interface NavChild { label: string; href: string; external?: boolean; }
interface NavItem  { label: string; href: string; external?: boolean; children?: NavChild[]; }

// ── Sub-menu item ─────────────────────────────────────────────
function DropdownItem({ item }: { item: NavChild }) {
  if (item.external) {
    return (
      <li>
        <a href={item.href} target="_blank" rel="noopener noreferrer">
          {item.label}
        </a>
      </li>
    );
  }
  return <li><Link href={item.href}>{item.label}</Link></li>;
}

// ── Top-level nav item ────────────────────────────────────────
function NavItemComponent({ item }: { item: NavItem }) {
  const [openMobile, setOpenMobile] = useState(false);
  const hasChildren = !!item.children?.length;

  return (
    <li className={hasChildren ? "has-sub" : ""}>
      {hasChildren && (
        <span
          className={`submenu-button${openMobile ? " submenu-opened" : ""}`}
          onClick={() => setOpenMobile((p) => !p)}
          role="button"
          aria-label={`Toggle ${item.label} submenu`}
        />
      )}
      {item.external ? (
        <a href={item.href} target="_blank" rel="noopener noreferrer">{item.label}</a>
      ) : (
        <Link href={item.href}>{item.label}</Link>
      )}
      {hasChildren && (
        <ul style={openMobile ? { display: "block" } : undefined}>
          {item.children!.map((child) => (
            <DropdownItem key={child.href} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
}

// ── Header ────────────────────────────────────────────────────
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);

  // Close mobile nav on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="header">
      {/* ── Top bar ──────────────────────────────────────────── */}
      <div className="header_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Social icons */}
              <div className="topsocialicon">
                <a href="https://www.facebook.com/pages/Modern-Public-SchoolShalimar-Bagh/1527179024228479"
                   target="_blank" rel="noopener noreferrer" className="facebook">Facebook</a>
                <a href="https://www.youtube.com/channel/UCOqIemKKBtg6T7KALKL61Bg?view_as=subscriber"
                   target="_blank" rel="noopener noreferrer" className="youtube">Youtube</a>
                <a href="https://twitter.com/mpsshbagh"
                   target="_blank" rel="noopener noreferrer" className="twitter">Twitter</a>
                <a href="https://www.instagram.com/mpsshbagh/?hl=en"
                   target="_blank" rel="noopener noreferrer" className="instagram">Instagram</a>
              </div>

              {/* Parent / Staff login */}
              <div className="parent_login">
                <a href="https://erp.quickcampus.online/auth" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-user" aria-hidden="true" /> Student Login
                </a>
                <a href="https://erp.quickcampus.online/auth" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-user" aria-hidden="true" /> Staff Login
                </a>
                <a href="https://sites.google.com/view/mps-resources/home" target="_blank" rel="noopener noreferrer">
                  MPS-Collection
                </a>
                <Link href="/school-details">Mandatory Public Disclosure</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Logo bar ─────────────────────────────────────────── */}
      <div className="header_bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="logo">
                <Link href="/">
                  <Image
                    src="/images/icons/mps-logo.jpg"
                    alt="Modern Public School Shalimar Bagh"
                    width={280}
                    height={80}
                    priority
                  />
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="logoother">
                <Image
                  src="/images/generic/logo-others-new.png"
                  alt="Accreditation logos"
                  width={300}
                  height={80}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Navigation bar ───────────────────────────────────── */}
      <div className="menuWraper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="mainNavWrap">
                <nav id="mainNavigationERP">
                  {/* Mobile toggle */}
                  <div className="mobileNav_button">
                    Nav
                    <button
                      className="navbar-btn collapsed"
                      onClick={() => setMobileOpen((p) => !p)}
                      aria-label="Toggle navigation"
                      aria-expanded={mobileOpen}
                    >
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  </div>

                  {/* Nav list */}
                  <ul ref={navRef} className={mobileOpen ? "open" : ""}>
                    {NAV_ITEMS.map((item) => (
                      <NavItemComponent key={item.label} item={item} />
                    ))}
                  </ul>
                </nav>

                {/* Quick-access header links */}
                <div className="linkContainer">
                  <span className="headerLink yellow speechBubble first">
                    <a href="https://modern.campuscare.cloud" target="_blank" rel="noopener noreferrer">
                      Online Fee Payment
                    </a>
                  </span>
                  <span className="headerLink penPaper open">
                    <a href="https://sessionmps.wixsite.com/50yearsofmps" target="_blank" rel="noopener noreferrer">
                      Legacy of 50 years
                    </a>
                  </span>
                  <span className="headerLink mapMarker open">
                    <a href="https://mpstour.my.canva.site/" target="_blank" rel="noopener noreferrer">
                      Virtual Tour
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
