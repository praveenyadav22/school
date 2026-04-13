"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

// ── Mobile accordion nav item (recursive) ────────────────────
interface NavItem {
  label: string;
  href?: string;
  isExternal?: boolean;
  children?: NavItem[];
}

const NAV_ITEMS: NavItem[] = [
  {
    label: "About Us",
    children: [
      { label: "School Profile", href: "/about/school-profile" },
      { label: "Vision and Mission", href: "/about/vision-mission" },
      { label: "Founders", href: "/about/founders" },
      { label: "Chairperson", href: "/about/chairperson" },
      { label: "Director & Manager", href: "/about/director-manager" },
      { label: "Principal", href: "/about/principal" },
      {
        label: "Vice Principal",
        children: [{ label: "Sr. Section", href: "/about/vice-principal/sr-section" }],
      },
      { label: "Head Mistress", href: "/about/head-mistress" },
      { label: "School Managing Committee", href: "/about/school-managing-committee" },
      { label: "Faculty", href: "/about/faculty" },
      { label: "PTA", href: "/about/pta" },
      { label: "Internal Committee", href: "/about/internal-committee" },
      { label: "Mandatory Public Disclosure", href: "/about/mandatory-public-disclosure" },
    ],
  },
  {
    label: "CBSE Results",
    children: [
      { label: "Class XII", href: "/cbse-results/class-xii" },
      { label: "Class X", href: "/cbse-results/class-x" },
      { label: "Batch After School", href: "/cbse-results/batch-after-school" },
    ],
  },
  {
    label: "Student Zone",
    children: [
      { label: "Rules & Regulations", href: "/student-zone/rules-regulations" },
      { label: "Awards & Scholarships", href: "/student-zone/awards-scholarships" },
      {
        label: "Student's Council",
        children: [
          { label: "Senior Section", href: "/student-zone/senior-section-council" },
          { label: "Junior Section", href: "/student-zone/junior-section-council" },
        ],
      },
      {
        label: "Examination Schedule",
        children: [
          { label: "Schedule", href: "https://erp.quickcampus.online/auth", isExternal: true },
          { label: "Syllabus", href: "https://erp.quickcampus.online/auth", isExternal: true },
        ],
      },
      { label: "Admission", href: "/student-zone/admission" },
    ],
  },
  {
    label: "Academic Zone",
    children: [
      { label: "Affiliation", href: "/academic-zone/affiliation" },
      {
        label: "Curriculum/Syllabus",
        children: [
          { label: "Primary School", href: "/academic-zone/primary-school" },
          { label: "Middle School", href: "/academic-zone/middle-school" },
          { label: "Secondary School", href: "/academic-zone/secondary-school" },
          { label: "Senior Secondary School", href: "/academic-zone/senior-secondary-school" },
        ],
      },
      { label: "Streams Offered", href: "/academic-zone/streams-offered" },
      { label: "Book List 2024-25", href: "/academic-zone/book-list" },
    ],
  },
  {
    label: "Facilities",
    children: [
      { label: "Sarala Birla Krida Kendra", href: "/facilities/birla-krida-kendra" },
      { label: "Transport", href: "/facilities/transport" },
      { label: "Excursion/Educational Tours", href: "/facilities/educational-tours" },
      { label: "BVN-IAPT Anveshika", href: "/facilities/bvn-anveshika" },
      {
        label: "Clubs",
        children: [
          { label: "Senior Section", href: "/facilities/senior-section-club" },
          { label: "Junior Section", href: "/facilities/junior-section-club" },
        ],
      },
      { label: "Canteen", href: "/facilities/canteen" },
      { label: "Career Counselling Cell", href: "/facilities/career-counselling-cell" },
      { label: "Mind Spark", href: "/facilities/mind-spark" },
      { label: "Atal Tinkering Lab", href: "/facilities/atal-tinkering-lab" },
    ],
  },
  {
    label: "Alumni Zone",
    children: [
      { label: "Announcements", href: "/alumni-zone/announcements" },
      { label: "Principal's Message", href: "/alumni-zone/principal-message" },
      { label: "Alumni Registration", href: "/alumni-zone/alumni-registration" },
    ],
  },
  {
    label: "Media",
    children: [{ label: "Media / Press Coverage", href: "/media/media-press-coverage" }],
  },
  {
    label: "Connect",
    children: [
      { label: "Reach Us", href: "/connect/reach-us" },
      { label: "Sitemap", href: "/connect/sitemap" },
    ],
  },
];

// Recursive mobile accordion item — matches browser screenshot exactly
const MobileNavItem = ({ item, depth = 0 }: { item: NavItem; depth?: number }) => {
  const [open, setOpen] = useState(false);
  const hasChildren = !!(item.children && item.children.length > 0);

  if (!hasChildren) {
    return (
      <li className="mobile-nav__item">
        {item.isExternal ? (
          <a href={item.href} className="mobile-nav__link" target="_blank" rel="noreferrer">
            {item.label}
          </a>
        ) : (
          <Link href={item.href ?? "#"} className="mobile-nav__link">
            {item.label}
          </Link>
        )}
      </li>
    );
  }

  return (
    <li className={`mobile-nav__item mobile-nav__item--parent${open ? " mobile-nav__item--open" : ""}`}>
      <button
        className="mobile-nav__toggle"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="mobile-nav__toggle-label">{item.label}</span>
        {/* + / × icon — exactly as in browser screenshot */}
        <span className="mobile-nav__toggle-icon">{open ? "×" : "+"}</span>
      </button>
      {open && (
        <ul className={`mobile-nav__sub mobile-nav__sub--depth-${depth + 1}`}>
          {item.children!.map((child) => (
            <MobileNavItem key={child.label} item={child} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  );
};

// ── Main Header ──────────────────────────────────────────────
const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);    // right info sidebar
  const [mobileNavOpen, setMobileNavOpen] = useState(false); // left mobile nav drawer
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsFixed(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = (sidebarOpen || mobileNavOpen) ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [sidebarOpen, mobileNavOpen]);

  return (
    <>
      <header className="c-header">

        {/* ── TOP BAR ───────────────────────────────── */}
        <div className="c-header__top">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="c-header__top--content">
                  <ul className="left-content">
                    <li className="left-content--item">
                      <Link href="/vacancy" className="link">Vacancy</Link>
                    </li>
                    <li className="left-content--item">
                      <a href="https://erp.quickcampus.online/auth" className="link" target="_blank" rel="noreferrer">
                        Student Login
                      </a>
                    </li>
                    <li className="left-content--item">
                      <a href="https://erp.quickcampus.online/auth" className="link" target="_blank" rel="noreferrer">
                        Staff Login
                      </a>
                    </li>
                  </ul>
                  <ul className="right-content">
                    <li className="right-content--item">
                      <Link href="/admission" className="link">Admission</Link>
                    </li>
                    <li className="right-content--item">
                      <Link href="/pay-online" className="link">Pay Online</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR ────────────────────────────── */}
        <div className={`c-header__bottom${isFixed ? " fixedmenu" : ""}`}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="c-header__bottom--content">

                  {/* Desktop floating logo */}
                  <div className="header-logo">
                    <Link href="/" className="link">
                      <img src="/images/logo/bvn-logo.png" alt="BVN Logo" />
                    </Link>
                  </div>

                  {/* Mobile logo */}
                  <div className="mobile-logo">
                    <Link href="/" className="link">
                      <img src="/images/logo/bvn-logo.png" alt="BVN Logo" />
                    </Link>
                  </div>

                  <div className="menu-section">

                    {/* Desktop stellarnav — hidden on mobile */}
                    <div className="navigationsection">
                      <div className="c-navigationwrap">
                        <nav className="stellarnav dark left desktop">
                          <ul className="stellarnav__root">

                            {/* About Us */}
                            <li className="has-sub">
                              <a href="#">About Us <i className="ri-arrow-down-s-line" /></a>
                              <ul className="sub-menu">
                                <li><Link href="/about/school-profile">School Profile</Link></li>
                                <li><Link href="/about/vision-mission">Vision and Mission</Link></li>
                                <li><Link href="/about/founders">Founders</Link></li>
                                <li><Link href="/about/chairperson">Chairperson</Link></li>
                                <li><Link href="/about/director-manager">Director &amp; Manager</Link></li>
                                <li><Link href="/about/principal">Principal</Link></li>
                                <li className="has-sub has-sub--nested">
                                  <a href="#">Vice Principal <i className="ri-arrow-right-s-line sub-arrow" /></a>
                                  <ul className="sub-menu sub-menu--nested">
                                    <li><Link href="/about/vice-principal/sr-section">Sr. Section</Link></li>
                                  </ul>
                                </li>
                                <li><Link href="/about/head-mistress">Head Mistress</Link></li>
                                <li><Link href="/about/school-managing-committee">School Managing Committee</Link></li>
                                <li><Link href="/about/faculty">Faculty</Link></li>
                                <li><Link href="/about/pta">PTA</Link></li>
                                <li><Link href="/about/internal-committee">Internal Committee</Link></li>
                                <li><Link href="/about/mandatory-public-disclosure">Mandatory Public Disclosure</Link></li>
                              </ul>
                            </li>

                            {/* CBSE Results */}
                            <li className="has-sub">
                              <a href="#">CBSE Results <i className="ri-arrow-down-s-line" /></a>
                              <ul className="sub-menu">
                                <li><Link href="/cbse-results/class-xii">Class XII</Link></li>
                                <li><Link href="/cbse-results/class-x">Class X</Link></li>
                                <li><Link href="/cbse-results/batch-after-school">Batch After School</Link></li>
                              </ul>
                            </li>

                            {/* Student Zone */}
                            <li className="has-sub">
                              <a href="#">Student Zone <i className="ri-arrow-down-s-line" /></a>
                              <ul className="sub-menu">
                                <li><Link href="/student-zone/rules-regulations">Rules &amp; Regulations</Link></li>
                                <li><Link href="/student-zone/awards-scholarships">Awards &amp; Scholarships</Link></li>
                                <li className="has-sub has-sub--nested">
                                  <a href="#">Student&apos;s Council <i className="ri-arrow-right-s-line sub-arrow" /></a>
                                  <ul className="sub-menu sub-menu--nested">
                                    <li><Link href="/student-zone/senior-section-council">Senior Section</Link></li>
                                    <li><Link href="/student-zone/junior-section-council">Junior Section</Link></li>
                                  </ul>
                                </li>
                                <li className="has-sub has-sub--nested">
                                  <a href="#">Examination Schedule <i className="ri-arrow-right-s-line sub-arrow" /></a>
                                  <ul className="sub-menu sub-menu--nested">
                                    <li><a href="https://erp.quickcampus.online/auth" target="_blank" rel="noreferrer">Schedule</a></li>
                                    <li><a href="https://erp.quickcampus.online/auth" target="_blank" rel="noreferrer">Syllabus</a></li>
                                  </ul>
                                </li>
                                <li><Link href="/student-zone/admission">Admission</Link></li>
                              </ul>
                            </li>

                            {/* Academic Zone */}
                            <li className="has-sub">
                              <a href="#">Academic Zone <i className="ri-arrow-down-s-line" /></a>
                              <ul className="sub-menu">
                                <li><Link href="/academic-zone/affiliation">Affiliation</Link></li>
                                <li className="has-sub has-sub--nested">
                                  <a href="#">Curriculum/Syllabus <i className="ri-arrow-right-s-line sub-arrow" /></a>
                                  <ul className="sub-menu sub-menu--nested">
                                    <li><Link href="/academic-zone/primary-school">Primary School</Link></li>
                                    <li><Link href="/academic-zone/middle-school">Middle School</Link></li>
                                    <li><Link href="/academic-zone/secondary-school">Secondary School</Link></li>
                                    <li><Link href="/academic-zone/senior-secondary-school">Senior Secondary School</Link></li>
                                  </ul>
                                </li>
                                <li><Link href="/academic-zone/streams-offered">Streams Offered</Link></li>
                                <li><Link href="/academic-zone/book-list">Book List 2024-25</Link></li>
                              </ul>
                            </li>

                            {/* Facilities */}
                            <li className="has-sub">
                              <a href="#">Facilities <i className="ri-arrow-down-s-line" /></a>
                              <ul className="sub-menu">
                                <li><Link href="/facilities/birla-krida-kendra">Sarala Birla Krida Kendra</Link></li>
                                <li><Link href="/facilities/transport">Transport</Link></li>
                                <li><Link href="/facilities/educational-tours">Excursion/Educational Tours</Link></li>
                                <li><Link href="/facilities/bvn-anveshika">BVN-IAPT Anveshika</Link></li>
                                <li className="has-sub has-sub--nested">
                                  <a href="#">Clubs <i className="ri-arrow-right-s-line sub-arrow" /></a>
                                  <ul className="sub-menu sub-menu--nested">
                                    <li><Link href="/facilities/senior-section-club">Senior Section</Link></li>
                                    <li><Link href="/facilities/junior-section-club">Junior Section</Link></li>
                                  </ul>
                                </li>
                                <li><Link href="/facilities/canteen">Canteen</Link></li>
                                <li><Link href="/facilities/career-counselling-cell">Career Counselling Cell</Link></li>
                                <li><Link href="/facilities/mind-spark">Mind Spark</Link></li>
                                <li><Link href="/facilities/atal-tinkering-lab">Atal Tinkering Lab</Link></li>
                              </ul>
                            </li>

                            {/* Alumni Zone */}
                            <li className="has-sub">
                              <a href="#">Alumni Zone <i className="ri-arrow-down-s-line" /></a>
                              <ul className="sub-menu">
                                <li><Link href="/alumni-zone/announcements">Announcements</Link></li>
                                <li><Link href="/alumni-zone/principal-message">Principal&apos;s Message</Link></li>
                                <li><Link href="/alumni-zone/alumni-registration">Alumni Registration</Link></li>
                              </ul>
                            </li>

                            {/* Media */}
                            <li className="has-sub">
                              <a href="#">Media <i className="ri-arrow-down-s-line" /></a>
                              <ul className="sub-menu">
                                <li><Link href="/media/media-press-coverage">Media / Press Coverage</Link></li>
                              </ul>
                            </li>

                            {/* Connect */}
                            <li className="has-sub drop-left">
                              <a href="#">Connect <i className="ri-arrow-down-s-line" /></a>
                              <ul className="sub-menu">
                                <li><Link href="/connect/reach-us">Reach Us</Link></li>
                                <li><Link href="/connect/sitemap">Sitemap</Link></li>
                              </ul>
                            </li>

                          </ul>
                        </nav>
                      </div>
                    </div>

                    {/* Mobile hamburger — primary color, hidden on desktop */}
                    <button
                      className="mobile-nav__hamburger"
                      onClick={() => setMobileNavOpen(true)}
                      aria-label="Open navigation menu"
                      aria-expanded={mobileNavOpen}
                    >
                      <i className="ri-menu-3-fill" />
                    </button>

                    {/* Othericon — original ri-menu-3-fill, always visible */}
                    <div className="othericon">
                      <i
                        className="ri-menu-3-fill"
                        onClick={() => setSidebarOpen(true)}
                        role="button"
                        aria-label="Open sidebar"
                      />
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── MOBILE NAV DRAWER ─────────────────────── */}
        {/* Backdrop */}
        {mobileNavOpen && (
          <div
            className="mobile-nav__overlay"
            onClick={() => setMobileNavOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Left slide-in panel */}
        <div className={`mobile-nav__drawer${mobileNavOpen ? " mobile-nav__drawer--open" : ""}`}>

          {/* Top bar: phone | location | close — 3 equal thirds, black bg */}
          <div className="mobile-nav__topbar">
            <a href="tel:+911129578960" className="mobile-nav__topbar-item third">
              {/* Phone SVG — same as browser HTML */}
              <svg id="icon-phone" viewBox="0 0 480 480" className="mobile-nav__topbar-svg">
                <path d="M340.273,275.083l-53.755-53.761c-10.707-10.664-28.438-10.34-39.518,0.744l-27.082,27.076 c-1.711-0.943-3.482-1.928-5.344-2.973c-17.102-9.476-40.509-22.464-65.14-47.113c-24.704-24.701-37.704-48.144-47.209-65.257 c-1.003-1.813-1.964-3.561-2.913-5.221l18.176-18.149l8.936-8.947c11.097-11.1,11.403-28.826,0.721-39.521L73.39,8.194 C62.708-2.486,44.969-2.162,33.872,8.938l-15.15,15.237l0.414,0.411c-5.08,6.482-9.325,13.958-12.484,22.02 C3.74,54.28,1.927,61.603,1.098,68.941C-6,127.785,20.89,181.564,93.866,254.541c100.875,100.868,182.167,93.248,185.674,92.876 c7.638-0.913,14.958-2.738,22.397-5.627c7.992-3.122,15.463-7.361,21.941-12.43l0.331,0.294l15.348-15.029 C350.631,303.527,350.95,285.795,340.273,275.083z" />
              </svg>
            </a>
            <a href="http://www.birla.ac.in/" className="mobile-nav__topbar-item third" target="_blank" rel="noreferrer">
              {/* Location SVG — same as browser HTML */}
              <svg id="icon-location" viewBox="0 0 480 480" className="mobile-nav__topbar-svg">
                <path d="M322.621,42.825C294.073,14.272,259.619,0,219.268,0c-40.353,0-74.803,14.275-103.353,42.825 c-28.549,28.549-42.825,63-42.825,103.353c0,20.749,3.14,37.782,9.419,51.106l104.21,220.986   c2.856,6.276,7.283,11.225,13.278,14.838c5.996,3.617,12.419,5.428,19.273,5.428c6.852,0,13.278-1.811,19.273-5.428 c5.996-3.613,10.513-8.562,13.559-14.838l103.918-220.986c6.282-13.324,9.424-30.358,9.424-51.106 C365.449,105.825,351.176,71.378,322.621,42.825z M270.942,197.855c-14.273,14.272-31.497,21.411-51.674,21.411 s-37.401-7.139-51.678-21.411c-14.275-14.277-21.414-31.501-21.414-51.678c0-20.175,7.139-37.402,21.414-51.675 c14.277-14.275,31.504-21.414,51.678-21.414c20.177,0,37.401,7.139,51.674,21.414c14.274,14.272,21.413,31.5,21.413,51.675 C292.355,166.352,285.217,183.575,270.942,197.855z" />
              </svg>
            </a>
            <button
              className="mobile-nav__topbar-item third mobile-nav__close-btn"
              onClick={() => setMobileNavOpen(false)}
              aria-label="Close navigation"
            >
              <span className="mobile-nav__close-icon" /> CLOSE
            </button>
          </div>

          {/* Scrollable nav list */}
          <nav className="mobile-nav__body">
            <ul className="mobile-nav__list">
              {NAV_ITEMS.map((item) => (
                <MobileNavItem key={item.label} item={item} />
              ))}
            </ul>
          </nav>

        </div>

        {/* ── INFO SIDEBAR MODAL ────────────────────── */}
        {sidebarOpen && (
          <div
            className="sidebarModal modal right fade show"
            aria-modal="true"
            role="dialog"
            onClick={(e) => { if (e.target === e.currentTarget) setSidebarOpen(false); }}
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <button
                  type="button"
                  className="close"
                  onClick={() => setSidebarOpen(false)}
                  aria-label="Close"
                >
                  <i className="ri-close-line" />
                </button>
                <div className="modal-body">
                  <Link href="/" className="sidebar-logo-link">
                    <img src="/images/logo/white-logo.png" className="main-logo" alt="BVN Logo" />
                  </Link>

                  <div className="sidebar-content">
                    <h3>About Us</h3>
                    <p>
                      Shri B.K. Birla &amp; Dr. Sarala Birla laid the foundation for Birla Vidya Niketan,
                      a premier South Delhi school started on 20<sup>th</sup> September 1983…{" "}
                      <Link href="/about/school-profile">
                        <i className="ri-arrow-right-up-line" />
                      </Link>
                    </p>
                    <div className="mt-2">
                      <img src="/images/logo/bottom-logos.jpg" className="img-fluid" alt="Partner logos" />
                    </div>
                  </div>

                  <div className="sidebar-contact-info">
                    <h3>Contact Information</h3>
                    <ul className="info-list">
                      <li>
                        <i className="ri-phone-fill" />
                        <a href="tel:+911129578960">+91-11-2957-8960/8961</a>
                      </li>
                      <li>
                        <i className="ri-mail-line" />
                        <a href="mailto:s.info@birla.ac.in">s.info@birla.ac.in</a>
                      </li>
                      <li>
                        <i className="ri-map-pin-line" />
                        Pushp Vihar, Sector-IV, New Delhi-110017, India
                      </li>
                    </ul>
                    <a className="btn btn-danger btn-sm mt-3" href="/connect/reach-us" rel="noopener noreferrer">
                      Explore More
                    </a>
                  </div>

                  <ul className="sidebar-social-list">
                    <li><a href="https://www.facebook.com/Join2BVN/" target="_blank" rel="noopener noreferrer"><i className="ri-facebook-fill" /></a></li>
                    <li><a href="https://twitter.com/BVN_delhi" target="_blank" rel="noopener noreferrer"><i className="ri-twitter-line" /></a></li>
                    <li><a href="https://www.instagram.com/birla_vidya_niketan/" target="_blank" rel="noopener noreferrer"><i className="ri-instagram-line" /></a></li>
                    <li><a href="https://www.linkedin.com/in/birla-vidya-niketan-new-delhi-199039219" target="_blank" rel="noopener noreferrer"><i className="ri-linkedin-fill" /></a></li>
                    <li><a href="https://www.youtube.com/channel/UCmeheKJmv94r5mUGGKyaCyg" target="_blank" rel="noopener noreferrer"><i className="ri-youtube-fill" /></a></li>
                    <li><a href="https://whatsapp.com/channel/0029Va9dBv76hENjtywoHc34" target="_blank" rel="noopener noreferrer"><i className="ri-whatsapp-fill" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        {sidebarOpen && (
          <div className="modal-backdrop fade show" onClick={() => setSidebarOpen(false)} />
        )}

      </header>
    </>
  );
};

export default Header;
