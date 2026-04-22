"use client";

import Link from "next/link";
import { useState, useRef } from "react";

// ── Nav data ─────────────────────────────────────────────────
const NAV_LEFT = [
  {
    label: "About Us",
    children: [
      { label: "About The School", href: "/about-the-school" },
      { label: "History Of the School", href: "/history-of-the-school" },
      { label: "Our Inspiration", href: "/our-inspiration" },
      { label: "Core Values", href: "/core-values" },
      { label: "Our Vision & Mission", href: "/our-vision-mission" },
      { label: "Founder Chairman Message", href: "/chairman-message" },
      { label: "Director Message", href: "/director-message" },
    ],
  },
  {
    label: "Admission",
    children: [
      { label: "Admission Schedule", href: "/admissions-schedule" },
      { label: "Admission Procedure", href: "/admission-procedure" },
      { label: "Admissions Under EWS", href: "/admissions-under-ews" },
      { label: "Fee Structure", href: "/fee-structure" },
      { label: "Online Registration", href: "/online-registration" },
      { label: "Entry Level Admission Details", href: "/entry-level-admission" },
      { label: "List of Registered Students", href: "/registered-students" },
      { label: "Point Wise List For Registered Candidates", href: "/point-wise-registered" },
      { label: "List Of Selected Students", href: "/list-of-selected-students" },
    ],
  },
  {
    label: "Facilities",
    children: [
      { label: "Interactive Library", href: "/interactive-library" },
      { label: "Computer Lab", href: "/computer-lab" },
      { label: "Smart Class Rooms", href: "/smart-class-rooms" },
      { label: "Fashion Studies", href: "/fashion-studies" },
      { label: "Physics Laboratory", href: "/physics-laboratory" },
      { label: "Chemistry Laboratory", href: "/chemistry-laboratory" },
      { label: "Biotechnology Laboratory", href: "/biotechnology-laboratory" },
      { label: "Maths Laboratory", href: "/maths-laboratory" },
      { label: "Physical Education & Playground", href: "/physical-playground" },
    ],
  },
  {
    label: "Academic",
    children: [
      { label: "Curriculum & Evaluation", href: "/curriculum-evaluation" },
      { label: "Seminars & Workshops", href: "/seminars-workshops" },
    ],
  },
];

const NAV_RIGHT = [
  {
    label: "Info. Desk",
    children: [
      { label: "Departments & Faculty", href: "/department-faculty" },
      { label: "Student Strength", href: "/student-strength" },
      { label: "Safety and Transport", href: "/safety-and-transport" },
      { label: "Circulars", href: "/circular" },
      { label: "Bulletin Board", href: "/bulletin-board" },
      { label: "Thought Of the Day", href: "/thought-of-the-day" },
      { label: "CBSE Results", href: "/cbse-results" },
      { label: "Book List 2026-27", href: "/book-list" },
      { label: "Annual Pedagogical Plan", href: "/pedagogical-plan" },
      { label: "Mandatory Public Disclosure", href: "/mandatory-public-disclosure" },
      { label: "SLFRC Committee", href: "/slfrc-committee" },
    ],
  },
  { label: "Job Vacancy", href: "/job-vacancy" },
  { label: "Clubs", href: "/clubs" },
  {
    label: "Login",
    children: [
      { label: "Admin Login", href: "https://erp.quickcampus.online/auth", external: true },
      { label: "Student Login", href: "https://erp.quickcampus.online/auth", external: true },
    ],
  },
];

const TOP_MENU = [
  { label: "Online Registration", href: "/online-registration" },
  { label: "Parent's Corner", href: "/parent-corner" },
  { label: "Teacher's Corner", href: "/teacher-corner" },
  { label: "Alumni", href: "/alumni" },
  { label: "Contact Us", href: "/contact-us" },
];

// ── Single dropdown item ──────────────────────────────────────
type Child = { label: string; href: string; external?: boolean };
type NavItemType = { label: string; href?: string; children?: Child[] };

function NavItem({ item, onClose, alignRight }: { item: NavItemType; onClose: () => void; alignRight?: boolean }) {
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const enter = () => { if (timer.current) clearTimeout(timer.current); setOpen(true); };
  const leave = () => { timer.current = setTimeout(() => setOpen(false), 120); };
  const toggle = (e: React.MouseEvent) => { if (item.children) { e.preventDefault(); setOpen(v => !v); } };

  if (!item.children) {
    return (
      <li className="bis-nav__item">
        <Link className="bis-nav__link" href={item.href!} onClick={onClose}>{item.label}</Link>
      </li>
    );
  }

  return (
    <li
      className={`bis-nav__item bis-nav__item--has-dropdown${open ? " is-open" : ""}`}
      onMouseEnter={enter}
      onMouseLeave={leave}
    >
      <a className="bis-nav__link" href="#" onClick={toggle}>
        {item.label} <span className="bis-nav__caret">▾</span>
      </a>
      {open && (
        <ul className={`bis-nav__dropdown${alignRight ? " bis-nav__dropdown--right" : ""}`}>
          {/* Up caret arrow */}
          <li className="bis-nav__arrow" aria-hidden="true"></li>
          {item.children.map((child) => (
            <li key={child.label} className="bis-nav__dropdown-item">
              {child.external ? (
                <a href={child.href} target="_blank" rel="noopener noreferrer">{child.label}</a>
              ) : (
                <Link href={child.href} onClick={() => { setOpen(false); onClose(); }}>{child.label}</Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

// ── Main Header ───────────────────────────────────────────────
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const close = () => setMobileOpen(false);

  return (
    <header className="bis-header">

      {/* ── Top bar ─────────────────────────────────────── */}
      <div className="bis-topbar">
        <div className="container">
          <div className="bis-topbar__inner">
            {/* Social icons */}
            <ul className="bis-topbar__social">
              <li>
                <a href="https://www.instagram.com/bhatnagarinternational_school" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/icons/instagram-icon.png" alt="Instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/bisvk" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/icons/facebook-icon.png" alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@BhatnagarInternationalSchool" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/icons/youtube-icon.png" alt="YouTube" />
                </a>
              </li>
            </ul>

            {/* Top menu links */}
            <ul className="bis-topbar__menu">
              {TOP_MENU.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Main navbar ─────────────────────────────────── */}
      <nav className="bis-navbar" role="navigation" aria-label="Main navigation">
        <div className="container">

          {/* Mobile: toggle + logo row */}
          <div className="bis-navbar__mobile-bar">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="bis-navbar__mobile-logo"
              src="/images/logo/bhatnagar-school-logo.png"
              alt="Bhatnagar International School"
            />
            <button
              className="bis-navbar__toggle"
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
            >
              <span className="bis-navbar__toggle-bar" />
              <span className="bis-navbar__toggle-bar" />
              <span className="bis-navbar__toggle-bar" />
            </button>
          </div>

          {/* Desktop: 3-column layout  LEFT | LOGO | RIGHT */}
          <div className={`bis-navbar__inner${mobileOpen ? " is-open" : ""}`}>

            {/* Left nav */}
            <ul className="bis-nav bis-nav--left">
              {NAV_LEFT.map((item) => (
                <NavItem key={item.label} item={item} onClose={close} />
              ))}
            </ul>

            {/* Centre logo (desktop only) */}
            <div className="bis-navbar__logo">
              <Link href="/">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/logo/bhatnagar-school-logo.png"
                  alt="Bhatnagar International School"
                />
              </Link>
            </div>

            {/* Right nav */}
            <ul className="bis-nav bis-nav--right">
              {NAV_RIGHT.map((item) => (
                <NavItem key={item.label} item={item} onClose={close} alignRight={item.label === "Login"} />
              ))}
            </ul>
          </div>

        </div>
      </nav>

    </header>
  );
}
