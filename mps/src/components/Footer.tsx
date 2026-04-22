import Link from "next/link";

const QUICK_LINKS = [
  { label: "Streams",     href: "/streams" },
  { label: "Admission",   href: "/admission" },
  { label: "Curriculum",  href: "/curriculum" },
  { label: "Life Skills", href: "/life-skills" },
  { label: "Workshops",   href: "/workshops" },
  { label: "CBSE",        href: "https://www.cbse.gov.in/", external: true },
];

const USEFUL_LINKS = [
  { label: "Circulars",             href: "/circulars" },
  { label: "Photo Gallery",         href: "/photo-gallery" },
  { label: "Video Gallery",         href: "/video-gallery" },
  { label: "Transfer Certificate",  href: "/transfer-certificate" },
  { label: "School Events",         href: "/kindergarten-events" },
];

export default function Footer() {
  return (
    <footer className="dl-container" data-dl-container="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">

            {/* ── Top Footer ─────────────────────────────────── */}
            <div className="topFooter">
              <div className="col12 clearfix">

                {/* Address + Facebook */}
                <div className="colAlpha contactDetails stacked">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="address">
                        <div>
                          <p className="name">Modern Public School - Shalimar Bagh</p>
                          <p className="addressDetails">
                            <span><b>Address</b> : B-Block, Shalimar Bagh, Delhi - 110088</span>
                            <span><b>Phone No.</b> : +91-11-41427627, 41426165, 47354557</span>
                            <span>
                              <b>Principal Email</b> :{" "}
                              <a href="mailto:alkakapur23@gmail.com">alkakapur23@gmail.com</a>
                            </span>
                            <span>
                              <b>School</b> :{" "}
                              <a href="mailto:info@mpsshalimarbagh.com">info@mpsshalimarbagh.com</a>
                            </span>
                            <span>
                              <b>Website</b> :{" "}
                              <a href="#">www.mpsshalimarbagh.com</a>
                            </span>
                          </p>
                        </div>
                      </div>
                      <p className="header">
                        <span>General Enquiries</span>
                        <a href="tel:+911141427627" className="telephoneLink">+91-11-41427627</a>
                      </p>
                      <p className="header">
                        <span>Admissions Open</span>
                        <a href="tel:+911141426165" className="telephoneLink">+91-11-41426165</a>
                      </p>
                    </div>

                    {/* Facebook embed */}
                    <div className="col-lg-6">
                      <iframe
                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMPS.Del%2F%23&tabs=timeline&width=400&height=400&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                        width="100%"
                        height="300"
                        style={{ border: "none", overflow: "hidden" }}
                        scrolling="no"
                        frameBorder={0}
                        allowFullScreen
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        title="Facebook Page"
                      />
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="links colAlpha stacked first">
                  <div className="inner">
                    <h2>Quick Links</h2>
                    <ul>
                      {QUICK_LINKS.map((l) => (
                        <li key={l.href}>
                          {l.external ? (
                            <a href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
                          ) : (
                            <Link href={l.href}>{l.label}</Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Useful Links */}
                <div className="links colAlpha stacked">
                  <div className="inner">
                    <h2>Useful Links</h2>
                    <ul>
                      {USEFUL_LINKS.map((l) => (
                        <li key={l.href}>
                          <Link href={l.href}>{l.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </div>
            {/* ── Top Footer END ─────────────────────────────── */}

            {/* ── Bottom Footer ──────────────────────────────── */}
            <div className="bottomFooter">
              <div className="col12 clearfix">
                <div className="housekeepingWrap colAlpha">
                  <div className="housekeeping_links clearfix stacked">
                    <p>
                      © Copyright {new Date().getFullYear()} |{" "}
                      <b>Modern Public School</b>
                      <br />
                      Designed &amp; Maintained by{" "}
                      <a href="https://www.quicktouch.co.in/home" target="_blank" rel="noopener noreferrer">
                        Quicktouch Technologies Limited
                      </a>
                    </p>
                    <ul>
                      <li>
                        <a href="https://erp.quickcampus.online/auth" target="_blank" rel="noopener noreferrer">
                          Admin Login
                        </a>
                      </li>
                      <li>
                        <Link href="/terms-conditions">Terms &amp; Conditions</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* ── Bottom Footer END ──────────────────────────── */}

          </div>
        </div>
      </div>
    </footer>
  );
}
