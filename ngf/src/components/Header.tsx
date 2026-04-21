"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

// ─── Navigation data ──────────────────────────────────────────
const NAV = [
  {
    label: "About Us",
    href: "#",
    children: [
      { label: "About NGFS School",  href: "/about-school" },
      { label: "Mission Statement",  href: "/mission-statement" },
      { label: "Infrastructure",     href: "/infrastructure" },
      { label: "Affiliation Status", href: "/affiliation-status" },
    ],
  },
  {
    label: "Academics",
    href: "#",
    children: [
      { label: "Term Wise Break Up",     href: "/term-wise-break-up" },
      { label: "Examination Schedule",   href: "/examination-schedule" },
      { label: "Activity Planner",       href: "/activity-planner" },
      { label: "X and XII Board Result", href: "/board-result" },
    ],
  },
  {
    label: "Admission",
    href: "#",
    children: [
      { label: "Admission Procedure", href: "/admission-procedure" },
      {
        label: "Online Registration",
        href: "https://erp.quickcampus.online/registration/f23eb39d-e587-4ff5-b0e7-796fdab87e79",
        external: true,
      },
      { label: "Admission Updates", href: "/admission-updates" },
    ],
  },
  {
    label: "School Info.",
    href: "#",
    children: [
      { label: "School Rules",     href: "/school-rules" },
      { label: "List of Holidays", href: "/list-of-holidays" },
      { label: "Circulars",        href: "/circulars" },
      { label: "School Events",    href: "/school-events" },
      { label: "School Clubs",     href: "/school-clubs" },
    ],
  },
  {
    label: "Gallery",
    href: "#",
    children: [
      { label: "Photo Gallery",   href: "/photo-gallery" },
      { label: "Video Gallery",   href: "/video-gallery" },
      { label: "Media Press",     href: "/media-press" },
      { label: "Creative Corner", href: "/creative-corner" },
    ],
  },
  { label: "NGFS Bulletin", href: "/bulletin-board" },
];

// ─── Mobile accordion item ────────────────────────────────────
function SlicknavItem({ item }: { item: typeof NAV[0] }) {
  const [open, setOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  if (!hasChildren) {
    return (
      <li>
        <Link href={item.href} role="menuitem" tabIndex={-1}>
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li className={`slicknav_parent ${open ? "slicknav_open" : "slicknav_collapsed"}`}>
      <div
        className="slicknav_row"
        role="menuitem"
        aria-haspopup="true"
        onClick={() => setOpen((p) => !p)}
      >
        <a href={item.href} tabIndex={-1}>
          {item.label}
        </a>
        <span className="slicknav_arrow">
          <i className={`fa fa-${open ? "minus" : "plus"}`} />
        </span>
      </div>
      <ul
        role="menu"
        className={open ? "" : "slicknav_hidden"}
        aria-hidden={!open}
        style={{ display: open ? "block" : "none" }}
      >
        {item.children!.map((child) => (
          <li key={child.href}>
            <Link
              href={child.href}
              role="menuitem"
              tabIndex={-1}
              {...("external" in child && child.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {child.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

// ─── Header ───────────────────────────────────────────────────
export default function Header() {
  const [sticky, setSticky]         = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [backTop, setBackTop]       = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setSticky(window.scrollY > 80);
      setBackTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navClass = [
    "navbar navbar-default navbar-fixed-top navbar-sticky-function navbar-arrow",
    sticky ? "navbar-sticky-in" : "",
  ].filter(Boolean).join(" ");

  return (
    <>
      <header id="inner-navigation">

        {/* ── Bulletin ticker ──────────────────────────────── */}
        <div className="topbar-section">
          <div className="container">
            <div className="topbar-inner">
              <div className="top-bar-left text-center">
                <div className="bulletin-ticker">
                  <ul id="bulletin_row_top">
                    <li>📢 Admission Open for Session 2025–26 &nbsp;|&nbsp; Apply Online Now</li>
                    <li>🏆 NGFS ranked among top CBSE schools in South Delhi</li>
                    <li>📅 Annual Day celebration on 15th May 2025</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Contact topbar ───────────────────────────────── */}
        <div className="topbar-section">
          <div className="container">
            <div className="topbar-inner">
              <div className="top-bar-left pull-left">
                <ul>
                  <li><i className="fa fa-phone" /> <a href="tel:+911126023421">+91-11-26023421</a></li>
                  <li><i className="fa fa-envelope" /> <a href="mailto:alaknanda_ngfs@rediffmail.com">alaknanda_ngfs@rediffmail.com</a></li>
                  <li><i className="fa fa-envelope" /> <a href="mailto:ngfsalaknanda.school.info@gmail.com">ngfsalaknanda.school.info@gmail.com</a></li>
                </ul>
              </div>
              <div className="top-bar-right pull-right">
                <ul>
                  <li><a href="https://erp.quickcampus.online/auth" target="_blank" rel="noopener noreferrer">Student Login</a></li>
                  <li><Link href="/mobile-application">Mobile Application</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ── Main navbar ──────────────────────────────────── */}
        <nav className={navClass} ref={navRef}>

          {/* Container: flexbox row — logo left, nav right */}
          <div className="container">

            {/* Logo */}
            <div className="logo">
              <Link href="/">
                <Image
                  src="/images/logo/logo.png"
                  alt="New Green Field School Alaknanda"
                  width={300}
                  height={70}
                  priority
                  className="mar-bottom-10"
                 
                />
              </Link>
            </div>

            {/* Desktop nav — flex pushes it to the right */}
            <div id="navbar" className="navbar-nav-wrapper">
              <ul className="nav navbar-nav navbar-right" id="responsive-menu">
                {NAV.map((item) => (
                  <li key={item.label}>
                    <a href={item.href}>
                      {item.label}
                      {item.children && <i className="fa fa-angle-down" />}
                    </a>
                    {item.children && (
                      <ul style={{ display: "none" }}>
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              {...("external" in child && child.external
                                ? { target: "_blank", rel: "noopener noreferrer" }
                                : {})}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile hamburger — only visible at ≤991px */}
            <div id="slicknav-mobile">
              <div className="slicknav_menu">
                <button
                  className={`slicknav_btn ${mobileOpen ? "slicknav_open" : "slicknav_collapsed"}`}
                  onClick={() => setMobileOpen((p) => !p)}
                  aria-label="Toggle navigation"
                  aria-expanded={mobileOpen}
                  style={{ outline: "none" }}
                >
                  <span className="slicknav_menutxt" />
                  <span className="slicknav_icon slicknav_no-text">
                    <span className="slicknav_icon-bar" />
                    <span className="slicknav_icon-bar" />
                    <span className="slicknav_icon-bar" />
                  </span>
                </button>
              </div>
            </div>

          </div>{/* end .container */}

          {/* Mobile nav panel — full width, below container */}
          {mobileOpen && (
            <ul
              className="slicknav_nav"
              role="menu"
              style={{ display: "block" }}
            >
              {NAV.map((item) => (
                <SlicknavItem key={item.label} item={item} />
              ))}
            </ul>
          )}

        </nav>
      </header>

      {/* Back to top */}
      <a
        id="back-to-top"
        href="#"
        className={`btn btn-primary btn-lg back-to-top${backTop ? " show" : ""}`}
        role="button"
        aria-label="Back to top"
        style={{ display: backTop ? "flex" : "none" }}
        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
      >
        <span className="fa fa-arrow-up" />
      </a>
    </>
  );
}
