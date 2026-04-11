"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* ── C-FOOTER ─────────────────────────────── */}
      <div className="c-footer">
        <div className="c-footer__top">
          <div className="container">
            <div className="row">

              {/* Useful Links */}
              <div className="col-12 col-md-4">
                <h2 className="c-footer__top--title">Useful Links</h2>
                <ul className="footer-link">
                  <li className="item"><Link className="link" href="/bus-updates">Bus Updates</Link></li>
                  <li className="item"><Link className="link" href="/bulletin-board">Bulletin Board</Link></li>
                  <li className="item"><Link className="link" href="/circular">Circulars</Link></li>
                  <li className="item"><Link className="link" href="/photo-gallery">Photo Gallery</Link></li>
                  <li className="item"><Link className="link" href="/video-gallery">Video Gallery</Link></li>
                </ul>
              </div>

              {/* Student Section */}
              <div className="col-12 col-md-4">
                <h2 className="c-footer__top--title">Student Section</h2>
                <ul className="footer-link">
                  <li className="item"><a className="link" href="https://erp.quickcampus.online/auth" target="_blank" rel="noreferrer">Homework</a></li>
                  <li className="item"><a className="link" href="https://erp.quickcampus.online/auth" target="_blank" rel="noreferrer">Assignment</a></li>
                  <li className="item"><a className="link" href="https://erp.quickcampus.online/auth" target="_blank" rel="noreferrer">Timetable</a></li>
                  <li className="item"><a className="link" href="https://erp.quickcampus.online/auth" target="_blank" rel="noreferrer">Syllabus</a></li>
                  <li className="item"><a className="link" href="https://erp.quickcampus.online/auth" target="_blank" rel="noreferrer">Datesheet</a></li>
                </ul>
              </div>

              {/* Contact Us */}
              <div className="col-12 col-md-4">
                <h2 className="c-footer__top--title">Contact Us</h2>
                <div className="c-footercontent">
                  <h6 className="c-footercontent__title">Birla Vidya Niketan</h6>
                  <p className="c-footercontent__text withoutlink address">
                    Pushp Vihar, Sector-IV, New Delhi-110017, India
                  </p>
                  <p className="c-footercontent__text phone">
                    <a className="link" href="tel:+911129578960">+91-11-2957-8960/8961</a>
                  </p>
                  <p className="c-footercontent__text mail">
                    <a className="link" href="mailto:s.info@birla.ac.in">s.info@birla.ac.in</a>
                  </p>
                  <p className="c-footercontent__text globe">
                    <a className="link" href="http://www.birla.ac.in" target="_blank" rel="noreferrer">www.birla.ac.in</a>
                  </p>
                  <p className="c-footercontent__text address">
                    <Link className="link" href="/reach-us">Reach Us</Link>
                  </p>
                </div>
              </div>

            </div>

            {/* App Store Icons */}
            <div className="row">
              <div className="col-12 col-md-7" />
              <div className="col-12 col-md-5">
                <div className="c-footercontent-icon mt-3">
                  <ul>
                    <li>
                      <a href="https://play.google.com/store/apps/details?id=com.quicktouch.quickcampus&hl=en_IN&gl=US" target="_blank" rel="noopener noreferrer">
                        <img src="/images/generic/icon-play-store.png" className="img-fluid w-25" alt="Play Store" />
                      </a>
                    </li>
                    <li>
                      <a href="https://apps.apple.com/in/app/quick-campus/id6447619100" target="_blank" rel="noopener noreferrer">
                        <img src="/images/generic/icon-app-store.png" className="img-fluid w-25" alt="App Store" />
                      </a>
                    </li>
                    <li>
                      <a href="/mobile-application" rel="noopener noreferrer">
                        <img src="/images/generic/get_otp.png" className="img-fluid w-25" alt="Get OTP" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── C-COPYRIGHT ──────────────────────────── */}
      <div className="c-copyright">
        <div className="container">
          <div className="copyright">
            <div className="row">

              {/* Copy */}
              <div className="col-lg-6 col-md-4 copy">
                <div>
                  <p>
                    © Copyright 2023 | <b>Birla Vidya Niketan</b><br />
                    Designed &amp; Maintained by{" "}
                    <a href="https://www.quicktouch.co.in/home" target="_blank" rel="noreferrer">
                      Quicktouch Technologies Limited
                    </a>
                  </p>
                </div>
              </div>

              {/* Bottom Links */}
              <div className="col-lg-6 col-md-8 bottom-links">
                <div className="list">
                  <ul>
                    <li><a href="https://www.nvsp.in/" target="_blank" rel="noopener noreferrer">Registration of New Voters</a></li>
                    <li><Link href="/transfer-certificate">Transfer Certificate</Link></li>
                    <li><Link href="/clra">CLRA</Link></li>
                    <li><a href="https://erp.quickcampus.online/auth" target="_blank" rel="noopener noreferrer">Admin Login</a></li>
                    <li><a href="https://erp.quickcampus.online/auth" target="_blank" rel="noopener noreferrer">Staff Login</a></li>
                    <li><a href="/images/assist-for-scholarship.pdf" target="_blank" rel="noreferrer">Helpdesk : To assist for scholarship</a></li>
                    <li><Link href="/sitemap">Sitemap</Link></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Scroll to Top */}
        <a
          onClick={scrollToTop}
          className="scroll-top"
          role="button"
          aria-label="Scroll to top"
          style={{ display: showScroll ? "flex" : "none" }}
        >
          <i className="ri-arrow-up-s-line" />
        </a>
      </div>
    </>
  );
};

export default Footer;
