import Link from "next/link";
import ScrollTop from "./ScrollTop";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer_linkswrap">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <section>
                  <h1>DE INDIAN PUBLIC SCHOOL</h1>
                  <div className="footerAddress">
                    <p>Pocket 11, Sector - 24, Rohini, Delhi- 110085</p>
                    <ul className="address">
                      <li><span><i className="fa fa-phone" /></span> 011-47586215, 011-27050252/3/4</li>
                      <li><span><i className="fa fa-whatsapp" /></span> 8448209126</li>
                      <li><span><i className="fa fa-envelope-o" /></span> rohini.dips@yahoo.co.in</li>
                      <li><span><i className="fa fa-globe" /></span> www.dipsrohini.in</li>
                    </ul>
                    <ul className="socialicon">
                      <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/De-Indian-Public-School-A-Senior-Secondary-School-159716587442885/"><i className="fa fa-facebook" /></a></li>
                      <li><a target="_blank" rel="noopener noreferrer" href="https://instagram.com/deindianpublicschool"><i className="fa fa-instagram" /></a></li>
                      <li><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCKB-4qLoPG_vgDKpZEUm6eQ"><i className="fa fa-youtube-play" /></a></li>
                      <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/DeIndianPublic1"><i className="fa fa-twitter" /></a></li>
                      <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/de-indian-public-school-2985a1228"><i className="fa fa-linkedin" /></a></li>
                    </ul>
                  </div>
                </section>
              </div>

              <div className="col-md-3">
                <section>
                  <h1>Useful Links</h1>
                  <ul className="footerLInk">
                    <li className="admisson"><Link href="/admission">Admission</Link></li>
                    <li><Link href="/about/school-logo">About Us</Link></li>
                    <li><Link href="/about/mission-vision">Our Mission</Link></li>
                    <li><Link href="/facilities/sports">Facilities</Link></li>
                    <li><Link href="/terms-conditions">Terms &amp; Conditions</Link></li>
                  </ul>
                </section>
              </div>

              <div className="col-md-3">
                <section>
                  <h1>Student Section</h1>
                  <ul className="footerLInk">
                    <li><Link href="/academics/transfer-certificate">Transfer Certificate</Link></li>
                    <li><a href="https://erp.quickcampus.online/auth" target="_blank" rel="noopener noreferrer">Assignments</a></li>
                    <li><a href="https://erp.quickcampus.online/auth" target="_blank" rel="noopener noreferrer">Holiday Homework</a></li>
                    <li><Link href="/school-info/school-activities">School Activities</Link></li>
                    <li><Link href="/gallery/photo">Photo Gallery</Link></li>
                    <li><Link href="/gallery/video">Video Gallery</Link></li>
                  </ul>
                </section>
              </div>

              <div className="col-md-3">
                <section>
                  <h1>Our Mission &amp; Vision</h1>
                  <div className="footerContent">
                    <p>
                      Truly believing in these words, we at DE INDIAN PUBLIC SCHOOL incorporate
                      this golden rule in our approach towards learning. Our learning approach
                      designed on Maria Montessori Method of Education facilitates interactive
                      learning, wherein education can translate into...{" "}
                      <span><Link href="/about/mission-vision">Read More</Link></span>
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>

        <div className="footer_bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                © Copyright 2024 | <u>De Indian Public School</u> | Designed &amp; Maintained by{" "}
                <a href="https://www.quicktouch.co.in/home" target="_blank" rel="noopener noreferrer">
                  Quicktouch Technologies Limited
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <ScrollTop />
    </>
  );
}
