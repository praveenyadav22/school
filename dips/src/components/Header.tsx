"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

const THOUGHTS = [
  `" Education is not preparation for life, education is life itself". John Dewey`,
  `"An investment in knowledge pays the best interest." – Benjamin Franklin`,
  "Always do your best. What you plant now, you will harvest later.",
  "Rise, Shine and smile — each new day has a new beginning and a new hope.",
  `"Today is a new day. Even if you were wrong yesterday, you can get it right today."`,
  "Self Confidence is a super power. Once you start to believe in yourself, miracles start happening.",
];

const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    children: [
      { label: "Symbolism of School Logo", href: "/about/school-logo" },
      { label: "Our Mission & Vision", href: "/about/mission-vision" },
      { label: "From the Chairman's Desk", href: "/about/chairmans-desk" },
      { label: "From the Manager's Desk", href: "/about/managers-desk" },
      { label: "From the Principal's Desk", href: "/about/principals-desk" },
      { label: "Managing Committee", href: "/about/managing-committee" },
      { label: "School Tour", href: "https://www.youtube.com/watch?v=rVYVSBGEBuw", external: true },
      { label: "Anger Free School", href: "/about/anger-free-school" },
      { label: "Mandatory Public Disclosure", href: "/about/mandatory-disclosure" },
    ],
  },
  {
    label: "Academics",
    children: [
      { label: "Curriculum", href: "/academics/curriculum" },
      { label: "Transfer Certificate", href: "/academics/transfer-certificate" },
      { label: "School Calendar", href: "/academics/school-calendar" },
      { label: "Holiday Homework", href: "https://erp.quickcampus.online/auth", external: true },
      { label: "Board Result", href: "/academics/board-result" },
      { label: "Award Achievements", href: "/academics/award-achievements" },
      { label: "Book List", href: "/academics/book-list" },
      { label: "Circulars", href: "/academics/circulars" },
    ],
  },
  {
    label: "School Info.",
    children: [
      { label: "Students Council", href: "/school-info/student-council" },
      { label: "House System", href: "/school-info/house-system" },
      { label: "School Timings", href: "/school-info/school-timings" },
      { label: "List of Holidays", href: "/school-info/list-of-holidays" },
      { label: "School Uniform", href: "/school-info/school-uniform" },
      { label: "PTA", href: "/school-info/pta" },
      { label: "Assembly Themes", href: "/school-info/assembly-themes" },
      { label: "Safety Measure", href: "/school-info/safety-measure" },
      { label: "School Activities", href: "/school-info/school-activities" },
      { label: "International Policy", href: "/school-info/international-policy" },
      { label: "School Safety", href: "/school-info/school-safety" },
      { label: "Best Practices", href: "/school-info/best-practices" },
      { label: "Publications", href: "/school-info/publications" },
    ],
  },
  {
    label: "Facilities",
    children: [
      { label: "Sports", href: "/facilities/sports" },
      { label: "School Transport", href: "/facilities/school-transport" },
      { label: "Meal Plan", href: "/facilities/meal-plan" },
      { label: "Remedial & Enrichment Classes", href: "/facilities/remedial-enrichment" },
      { label: "Registration of New Voter", href: "/facilities/new-voter" },
    ],
  },
  {
    label: "Contact Us",
    children: [
      { label: "Contact Details", href: "/contact" },
    ],
  },
];

export default function Header() {
  const pathname = usePathname();
  const [isFixed, setIsFixed] = useState(false);
  const [thoughtIdx, setThoughtIdx] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const len = THOUGHTS.length;

  useEffect(() => {
    const onScroll = () => setIsFixed(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setThoughtIdx((i) => (i + 1) % len), 4000);
    return () => clearInterval(t);
  }, [len]);

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
    setOpenMobileMenu(null);
  }, []);

  return (
    <>
      <header className="header">
        {/* ── Top bar ─────────────────────────────── */}
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <ul className="topsociallink">
                  <li><strong style={{ color: "white" }}>Follow Us At</strong></li>
                  <li><a href="https://www.facebook.com/De-Indian-Public-School-A-Senior-Secondary-School-159716587442885/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" /></a></li>
                  <li><a href="https://www.instagram.com/deindianpublicschool/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" /></a></li>
                  <li><a href="https://www.youtube.com/channel/UCKB-4qLoPG_vgDKpZEUm6eQ" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube-play" /></a></li>
                  <li><a href="https://twitter.com/DeIndianPublic1" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" /></a></li>
                  <li><a href="https://www.linkedin.com/in/de-indian-public-school-2985a1228" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" /></a></li>
                </ul>
                <div className="top_link">
                  <ul>
                    <li><Link href="/admission">Admission</Link></li>
                    <li><a href="https://erp.quickcampus.online/auth" target="_blank" rel="noopener noreferrer">Holiday Homework</a></li>
                    <li><a href="https://erp.quickcampus.online/auth" target="_blank" rel="noopener noreferrer">Student Login</a></li>
                    <li><a href="https://erp.quickcampus.online/auth" target="_blank" rel="noopener noreferrer">Staff Login</a></li>
                    <li><Link href="/events">Event</Link></li>
                    <li><Link href="/academics/circulars">Circulars</Link></li>
                    <li><Link href="/news">News</Link></li>
                    <li><Link href="/vacancy">Vacancy</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Thought of the Day ───────────────────── */}
        <div className="header__top thought">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="contentsection">
                  <div className="head">Thought Of The Day</div>
                  <div className="content">
                    <Link href="/thoughts-of-the-day" className="readMore">
                      {THOUGHTS[thoughtIdx]}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Main navbar ──────────────────────────── */}
        <div className={`header__bottom${isFixed ? " fixed" : ""}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="mainNavWrap">
                  <div className="navigationLogoWrappper">
                    {/* Logo */}
                    <div className="logo">
                      <Link href="/">
                        <Image
                          src="/images/logo.png"
                          alt="De Indian Public School"
                          width={206}
                          height={56}
                          priority
                          style={{ objectFit: "contain" }}
                        />
                      </Link>
                    </div>

                    {/* Mobile App button */}
                    <div className="applicationlink">
                      <Link href="/mobile-application">Mobile App</Link>
                    </div>

                    {/* Nav — mobileNav_button INSIDE nav, matching original HTML */}
                    <nav id="mainNavigationERP">
                      {/* Hamburger — inside nav, display:none on desktop via CSS */}
                      <div className="mobileNav_button">
                        Nav{" "}
                        <button
                          className="navbar-btn collapsed"
                          aria-label="Open navigation"
                          onClick={() => setDrawerOpen(true)}
                        >
                          <span className="icon-bar" />
                          <span className="icon-bar" />
                          <span className="icon-bar" />
                        </button>
                      </div>

                      <ul>
                        {NAV_LINKS.map((item) => (
                          <li key={item.label} className={item.children ? "has-sub" : ""}>
                            {item.children ? (
                              <>
                                <span className="submenu-button" />
                                <a href="#" onClick={(e) => e.preventDefault()}>{item.label}</a>
                                <ul>
                                  {item.children.map((child) => (
                                    <li key={child.label}>
                                      {(child as any).external ? (
                                        <a href={child.href} target="_blank" rel="noopener noreferrer">{child.label}</a>
                                      ) : (
                                        <Link href={child.href} className={pathname === child.href ? "active" : ""}>{child.label}</Link>
                                      )}
                                    </li>
                                  ))}
                                </ul>
                              </>
                            ) : (
                              <Link href={item.href!} className={pathname === item.href ? "active" : ""}>{item.label}</Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div className={`mobile-nav-overlay${drawerOpen ? " open" : ""}`} onClick={closeDrawer} aria-hidden="true" />

      {/* Mobile drawer */}
      <nav className={`mobile-drawer${drawerOpen ? " open" : ""}`} aria-label="Mobile navigation">
        <div className="mobile-drawer__header">
          <span>Menu</span>
          <button onClick={closeDrawer} aria-label="Close"><X size={20} /></button>
        </div>
        <div className="mobile-drawer__nav">
          <ul>
            {NAV_LINKS.map((item) => (
              <li key={item.label}>
                {item.href ? (
                  <Link href={item.href} onClick={closeDrawer}>{item.label}</Link>
                ) : (
                  <button onClick={() => setOpenMobileMenu(openMobileMenu === item.label ? null : item.label)}>
                    {item.label} {item.children && <span>{openMobileMenu === item.label ? " ▲" : " ▼"}</span>}
                  </button>
                )}
                {item.children && (
                  <ul className={openMobileMenu === item.label ? "open" : ""}>
                    {item.children.map((child) => (
                      <li key={child.label}>
                        {(child as any).external ? (
                          <a href={child.href} target="_blank" rel="noopener noreferrer" onClick={closeDrawer}>{child.label}</a>
                        ) : (
                          <Link href={child.href} onClick={closeDrawer}>{child.label}</Link>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
