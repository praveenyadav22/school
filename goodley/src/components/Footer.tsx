import Link from "next/link";

const USEFUL_LINKS = [
  { label: "Latest News & Updates", href: "/news" },
  { label: "Bulletin Board", href: "/bulletin-board" },
  { label: "Circulars", href: "/circulars" },
  { label: "Photo Gallery", href: "/photo-gallery" },
  { label: "Video Gallery", href: "/video-gallery" },
  { label: "School Events", href: "/news" },
  { label: "Awards & Achievements", href: "/achievements/awards-achievements" },
  { label: "Vacancy", href: "/academics/vacancy" },
];

const STUDENT_LINKS = [
  { label: "Transfer Certificate", href: "#" },
  { label: "Alumni", href: "#" },
  { label: "Prefectorial Board", href: "#" },
  { label: "Syllabus", href: "https://erp.quickcampus.online/auth", external: true },
  { label: "Worksheets", href: "https://erp.quickcampus.online/auth", external: true },
  { label: "Activity Planner", href: "https://erp.quickcampus.online/auth", external: true },
  { label: "Date Sheet", href: "https://erp.quickcampus.online/auth", external: true },
  { label: "Holidays Home work", href: "https://erp.quickcampus.online/auth", external: true },
];

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            {/* School Tour */}
            <div className="col-md-3 col-sm-6">
              <aside className="footer-widget">
                <h3>School Tour</h3>
                <div className="footer-video-wrap">
                  <a href="https://youtu.be/wRulkHs5zxI" target="_blank" rel="noopener noreferrer">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/generic/video-img.png" alt="School Tour Video" className="footer-video-thumb" />
                  </a>
                </div>
              </aside>
            </div>

            {/* Useful Links */}
            <div className="col-md-3 col-sm-6">
              <aside className="footer-widget">
                <h3>Useful Links</h3>
                <ul className="footer-links">
                  {USEFUL_LINKS.map((link, i) => (
                    <li key={i}>
                      <Link href={link.href}>
                        <i className="fa fa-chevron-right" /> {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>

            {/* Student Corner */}
            <div className="col-md-3 col-sm-6">
              <aside className="footer-widget">
                <h3>Student Corner</h3>
                <ul className="footer-links">
                  {STUDENT_LINKS.map((link, i) => (
                    <li key={i}>
                      {(link as any).external ? (
                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                          <i className="fa fa-chevron-right" /> {link.label}
                        </a>
                      ) : (
                        <Link href={link.href}>
                          <i className="fa fa-chevron-right" /> {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </aside>
            </div>

            {/* Contact Details */}
            <div className="col-md-3 col-sm-6">
              <aside className="footer-widget">
                <h3>Contact Details</h3>
                <div className="footer-contact">
                  <p><Link href="/">Goodley Public School</Link></p>
                  <p><span className="adress">Address:</span> BD Block, Shalimar Bagh<br />Delhi – 110088</p>
                  <p><span className="adress">Phone:</span> (+91)-11 - 47034641, 47034640, 42240226</p>
                  <p><span className="adress">Email:</span>{" "}
                    <a href="mailto:info@goodleypublicschool.in">info@goodleypublicschool.in</a>
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Bottom */}
      <div className="footerBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="footer-copy">
                © Copyright 2024 | <strong>Goodley Public School</strong> | Designed &amp; Maintained by{" "}
                <a href="https://www.quicktouch.co.in/home" target="_blank" rel="noopener noreferrer">
                  Quicktouch Technologies Limited
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
