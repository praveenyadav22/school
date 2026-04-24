"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const NAV_ITEMS = [
  {
    label: "About Us",
    children: [
      { label: "About School", href: "/about-us/about-school" },
      { label: "Nursery @ GPS", href: "/about-us/nursery-gps" },
      { label: "Managing Director's Profile", href: "/about-us/managing-directors-profile" },
      { label: "Message From Executive Administrator", href: "/about-us/executive-administrator" },
      { label: "Principal's Message", href: "/about-us/principals-message" },
      { label: "Vice Principal's Message", href: "/about-us/vice-principals-message" },
      { label: "Mandatory Public Disclosure", href: "/about-us/mandatory-public-disclosure" },
      { label: "Faculty", href: "/about-us/faculty" },
      { label: "School Committees", href: "/about-us/school-committees" },
      { label: "Safety & Security", href: "/about-us/safety-security" },
      { label: "Contact Us", href: "/about-us/contact-us" },
    ],
  },
  {
    label: "Academics",
    children: [
      { label: "Examination", href: "/academics/examination" },
      { label: "Promotion Policy", href: "/academics/promotion-policy" },
      { label: "Assessment Policy", href: "/academics/assessment-policy" },
      { label: "Curriculum", href: "/academics/curriculum" },
      { label: "Fee Schedule", href: "/academics/fee-schedule" },
      { label: "Syllabus", href: "https://erp.quickcampus.online/auth", external: true },
      { label: "Worksheets", href: "https://erp.quickcampus.online/auth", external: true },
      { label: "Holiday Homework", href: "https://erp.quickcampus.online/auth", external: true },
      { label: "Vacancy", href: "/academics/vacancy" },
    ],
  },
  {
    label: "Extended Class Rooms",
    children: [
      { label: "Houses", href: "/extended-classrooms/houses" },
      { label: "Sports and Games", href: "/extended-classrooms/sports-and-games" },
      { label: "Indian & Western Music", href: "/extended-classrooms/indian-western-music" },
      { label: "Indian Classical and western Dance", href: "/extended-classrooms/classical-western-dance" },
      { label: "Clubs", href: "/extended-classrooms/clubs" },
      { label: "Educational Excursions & Trips", href: "/extended-classrooms/educational-excursions-trips" },
    ],
  },
  {
    label: "Achievements & Accolades",
    children: [
      { label: "CBSE Results", href: "/achievements/cbse-results" },
      { label: "Other Achievements", href: "/achievements/awards-achievements" },
    ],
  },
  {
    label: "Amenities",
    children: [
      { label: "Laboratories", href: "/amenities/laboratories" },
      { label: "Library", href: "/amenities/library" },
      { label: "Music Studio", href: "/amenities/music-studio" },
      { label: "Art Studio", href: "/amenities/art-studio" },
      { label: "Medical Room", href: "/amenities/medical-room" },
      { label: "Auditorium", href: "/amenities/auditorium" },
      { label: "Conference Room", href: "/amenities/conference-room" },
      { label: "Smart Class", href: "/amenities/smart-class" },
    ],
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileSub, setOpenMobileSub] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " site-header--scrolled" : ""}`}>
      <div className="container">

        {/* ── TOP ROW: Logo LEFT  |  Home+Login+Social RIGHT ── */}
        <div className="site-header__top">

          {/* LEFT: Logo only */}
          <div className="site-header__logo">
            <Link href="/" className="site-header__logo-link">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo/goodley-school-logo.png"
                alt="Goodley Public School"
                className="site-header__logo-img"
              />
              <span className="site-header__logo-text">GOODLEY PUBLIC<br />SCHOOL</span>
            </Link>
          </div>

          {/* RIGHT: Home icon + Login buttons + Social icons */}
          <div className="site-header__right">
            {/* Home icon — first item on right */}
            <Link href="/" className="hdr-home" aria-label="Home">
              <i className="fa fa-home" />
            </Link>

            {/* Login buttons */}
            <div className="hdr-btns">
              <a href="https://erp.quickcampus.online/auth" className="hdr-btn" target="_blank" rel="noopener noreferrer">Login</a>
              <a href="https://erp.quickcampus.online/auth" className="hdr-btn" target="_blank" rel="noopener noreferrer">Student Login</a>
              <Link href="/nursery-registration" className="hdr-btn hdr-btn--yellow">Nursery Registration 2026-27</Link>
            </div>

            {/* Social icons — last */}
            <div className="hdr-social">
              <a href="#" aria-label="Facebook"  className="hdr-social__icon"><i className="fa fa-facebook" /></a>
              <a href="#" aria-label="Twitter"   className="hdr-social__icon"><i className="fa fa-twitter" /></a>
              <a href="#" aria-label="LinkedIn"  className="hdr-social__icon"><i className="fa fa-linkedin" /></a>
              <a href="#" aria-label="YouTube"   className="hdr-social__icon"><i className="fa fa-youtube" /></a>
            </div>
          </div>

        </div>

        {/* ── NAV ROW ── */}
        <div className="site-header__nav-row">
          <button
            className={`site-header__hamburger${mobileOpen ? " is-open" : ""}`}
            onClick={() => setMobileOpen(p => !p)}
            aria-label="Toggle navigation"
          >
            <span /><span /><span />
          </button>

          <nav className={`site-header__nav${mobileOpen ? " is-open" : ""}`} id="mainNavigationERP">
            <ul className="site-header__nav-list">
              {NAV_ITEMS.map((item, i) => (
                <li key={i} className="site-header__nav-item has-dropdown">
                  <span
                    className={`mobile-sub-toggle${openMobileSub === i ? " open" : ""}`}
                    onClick={() => setOpenMobileSub(prev => prev === i ? null : i)}
                    aria-hidden="true"
                  />
                  <a href="#" className="site-header__nav-link">{item.label}</a>
                  <ul className={`site-header__dropdown${openMobileSub === i ? " mobile-open" : ""}`}>
                    {item.children.map((child, j) => (
                      <li key={j}>
                        {(child as any).external ? (
                          <a href={child.href} target="_blank" rel="noopener noreferrer">{child.label}</a>
                        ) : (
                          <Link href={child.href}>{child.label}</Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </nav>
        </div>

      </div>
    </header>
  );
}
