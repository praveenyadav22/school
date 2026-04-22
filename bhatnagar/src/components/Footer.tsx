import Link from "next/link";

const USEFUL_LINKS = [
  { label: "Mandatory Public Disclosure", href: "/mandatory-public-disclosure" },
  { label: "School Activities", href: "/school-activities" },
  { label: "Glimpses", href: "/glimpses" },
  { label: "Media Print Coverage", href: "/media-print-coverage" },
  { label: "Admissions Procedure", href: "/admission-procedure" },
  { label: "School Calendar", href: "/school-calendar" },
  { label: "School Events", href: "/school-events" },
  { label: "Photo Gallery", href: "/photo-gallery" },
  { label: "Video Gallery", href: "/video-gallery" },
  { label: "Transfer Certificate", href: "/transfer-certificate" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Declaration for Book List", href: "/images/declaration_for_book_list.pdf", external: true },
];

const FACILITIES = [
  { label: "Interactive Library", href: "/interactive-library" },
  { label: "Computer Lab", href: "/computer-lab" },
  { label: "Smart Class Rooms", href: "/smart-class-rooms" },
  { label: "Fashion Studies", href: "/fashion-studies" },
  { label: "Physics Laboratory", href: "/physics-laboratory" },
  { label: "Chemistry Laboratory", href: "/chemistry-laboratory" },
  { label: "Biotechnology Laboratory", href: "/biotechnology-laboratory" },
  { label: "Maths Laboratory", href: "/maths-laboratory" },
  { label: "Physical Education & Playground", href: "/physical-playground" },
];

export default function Footer() {
  return (
    <footer className="footer__wrapper">
      <div className="footer__wrapper-top">
        <div className="container">
          <div className="row">
            {/* Vision */}
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="footer__wrapper-top-content">
                <section className="section-head">
                  <h3>Our <span>Vision</span></h3>
                </section>
                <p>To teach self-awareness and consciousness for developing one&apos;s intellectual, artistic and professional talent to the highest degree. To instill sensitivity, empathy, compassion and magnanimity...</p>
                <Link href="/our-vision-mission" className="transition4s themeButton fillButton">Read More</Link>
              </div>
            </div>

            {/* Useful Links */}
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="footer__wrapper-top-content">
                <section className="section-head">
                  <h3>Useful <span>Links</span></h3>
                </section>
                <ul>
                  {USEFUL_LINKS.map((link) => (
                    <li key={link.label}>
                      {link.external ? (
                        <a href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
                      ) : (
                        <Link href={link.href}>{link.label}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Facilities */}
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="footer__wrapper-top-content">
                <section className="section-head">
                  <h3>Facilities <span>BIS</span></h3>
                </section>
                <ul>
                  {FACILITIES.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="footer__wrapper-top-content">
                <section className="section-head">
                  <h3>Contact <span>Us</span></h3>
                </section>
                <h4>Bhatnagar International School</h4>
                <p><span className="fa fa-map-marker"></span> BX Vasant Kunj, New Delhi-110070</p>
                <p><span className="fa fa-phone"></span> 011-26891277, 26893497</p>
                <p><span className="fa fa-mobile"></span> +91-8448687638</p>
                <p className="wrapSpace">
                  <span className="fa fa-envelope"></span>
                  <a href="mailto:info@bhatnagarinternationalschool.in">info@bhatnagarinternationalschool.in</a>
                </p>
                <p className="wrapSpace">
                  <span className="fa fa-globe"></span>
                  <a href="http://www.bhatnagarinternationalschool.in" target="_blank" rel="noopener noreferrer">www.bhatnagarinternationalschool.in</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__wrapper-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-xs-12">
              <div className="footer__wrapper-bottom-content">
                <p>
                  &copy; Copyright 2024 <b>Bhatnagar International School</b> | Designed &amp; Maintained by{" "}
                  <a href="https://www.quicktouch.co.in/home" target="_blank" rel="noopener noreferrer">
                    Quicktouch Technologies Limited
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
