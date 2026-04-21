import Link from "next/link";
import Image from "next/image";

const QUICK_LINKS = [
  { label: "About NGFS School",   href: "/about-school" },
  { label: "Mission Statement",   href: "/mission-statement" },
  { label: "Infrastructure",      href: "/infrastructure" },
  { label: "Affiliation Status",  href: "/affiliation-status" },
  { label: "Term Wise Break Up",  href: "/term-wise-break-up" },
  { label: "Examination Schedule",href: "/examination-schedule" },
];

const USEFUL_LINKS = [
  { label: "Admission Procedure", href: "/admission-procedure" },
  { label: "Award & Achievements",href: "/award-achievements" },
  { label: "School Rules",        href: "/school-rules" },
  { label: "List of Holidays",    href: "/list-of-holidays" },
  { label: "Photo Gallery",       href: "/photo-gallery" },
  { label: "Video Gallery",       href: "/video-gallery" },
  { label: "Staff Login",         href: "https://erp.quickcampus.online/auth", external: true },
];

const STUDENT_LINKS = [
  { label: "Homework",      href: "https://erp.quickcampus.online/auth", external: true },
  { label: "Assignment",    href: "https://erp.quickcampus.online/auth", external: true },
  { label: "Tutorial",      href: "https://erp.quickcampus.online/auth", external: true },
  { label: "Question Bank", href: "https://erp.quickcampus.online/auth", external: true },
  { label: "Syllabus",      href: "https://erp.quickcampus.online/auth", external: true },
  { label: "Timetable",     href: "https://erp.quickcampus.online/auth", external: true },
  { label: "Student Login", href: "https://erp.quickcampus.online/auth", external: true },
];

const SOCIAL = [
  { icon: "fa fa-facebook",  href: "https://www.facebook.com/profile.php?id=61551133657824", label: "Facebook" },
  { icon: "fa fa-youtube",   href: "https://www.youtube.com/channel/UCoJu3eCj9veE-M4na90Wjaw", label: "YouTube" },
  { icon: "fa fa-instagram", href: "https://www.instagram.com/newgreenfieldschoolalaknanda/", label: "Instagram" },
  { icon: "fa fa-twitter",   href: "#", label: "Twitter" },
];

function FooterLinks({ links }: { links: { label: string; href: string; external?: boolean }[] }) {
  return (
    <ul className="footer-quick-links-4" style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {links.map((l) => (
        <li key={l.href}>
          <Link
            href={l.href}
            {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            <i className="fa fa-angle-right" /> {l.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="mt_footer">
      {/* ── Newsletter / Enrol strip ──────────────────────── */}
      <div className="container">
        <section id="newsletter">
          <div className="newsletter-inner">
            <div className="row">
              <div className="col-md-12">
                <div className="news-content">
                  <h2>Enroll your child TODAY !!!</h2>
                  <p className="mar-0">
                    Our kindergarten section prioritizes a play-based approach to learning,
                    creating an environment that fosters joy and creativity.
                  </p>
                  <p className="mar-0">
                    Discover a nurturing and engaging learning environment where your child&apos;s
                    potential can flourish. At New Green Field School - Alaknanda, we are dedicated
                    to providing high-quality education and a supportive community for all our
                    students...
                    <a href="/admission-procedure">
                      <span className="fa fa-angle-double-right" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Main footer columns ───────────────────────── */}
        <div className="footer-main">
          <div className="row">
            {/* Col 1 — About */}
            <div className="col-md-3 col-sm-12 col-xs-12">
              <div className="follow_us">
                <Image
                  src="/images/logo/logo.png"
                  alt="New Green Field School"
                  width={200}
                  height={55}
                  style={{ marginBottom: "15px" }}
                />
                <p>
                  We recognize and develop each child&apos;s unique potential as resilient,
                  resourceful and internationally minded learner. Shall strive to impart extra
                  curricular experience in order to foster student&apos;s individual interest and talent.
                </p>
                <ul className="social_icons">
                  {SOCIAL.map((s) => (
                    <li key={s.href}>
                      <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                        <i className={s.icon} aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Cols 2-4 — Links */}
            <div className="col-md-9 col-sm-6 col-xs-12">
              <div className="footer-right">
                <div className="row">
                  <div className="col-md-4 col-xs-12">
                    <div className="mt_contact_ftr">
                      <h3>Quick Links</h3>
                      <FooterLinks links={QUICK_LINKS} />
                    </div>
                  </div>
                  <div className="col-md-4 col-xs-12">
                    <div className="mt_contact_ftr">
                      <h3>Useful Links</h3>
                      <FooterLinks links={USEFUL_LINKS} />
                    </div>
                  </div>
                  <div className="col-md-4 col-xs-12">
                    <div className="mt_contact_ftr">
                      <h3>Student Section</h3>
                      <FooterLinks links={STUDENT_LINKS} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Copyright bar ────────────────────────────────── */}
      <div className="mt_footer_copy">
        <div className="container">
          <div className="row">
            <div className="col-sm-9">
              <div className="copy_txt">
                <p className="mar-0 white">
                  © Copyright {year}{" "}
                  <Link href="/">New Green Field School - Alaknanda</Link> | Designed &amp;
                  Maintained by{" "}
                  <a href="https://www.quicktouch.co.in/home" target="_blank" rel="noopener noreferrer">
                    Quicktouch Technologies Limited
                  </a>
                </p>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="follow_us pull-right">
                <ul className="social_icons">
                  {SOCIAL.map((s) => (
                    <li key={s.href}>
                      <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                        <i className={s.icon} aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
