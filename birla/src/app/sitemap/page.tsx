import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sitemap — Birla Vidya Niketan",
};

export default function SitemapPage() {
  return (
    <>
      <div className="body-conent ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="inner-content">

                <div className="contentArea">

                  {/* ── Row 1 ── */}
                  <div className="row">

                    {/* Home */}
                    <div className="col-lg-4 col-md-4">
                      <div className="exam-card">
                        <h3 className="sitemap-heading">Home</h3>
                        <ul className="checklist sitemaplist">
                          <li><Link href="/circular">Circulars</Link></li>
                          <li><Link href="/newsletter">Newsletter</Link></li>
                          <li><Link href="/monthly-report">Monthly Report</Link></li>
                          <li><Link href="/wall-journals">Wall Journals</Link></li>
                          <li><Link href="/social-responsibility">Social Responsibility</Link></li>
                          <li><Link href="/infrastructure">Infrastructure</Link></li>
                          <li><Link href="/creative-corner">Creative Corner</Link></li>
                          <li><Link href="/clra">CLRA</Link></li>
                          <li>
                            <a href="https://erp.quickcampus.online/auth" target="_blank" rel="noopener noreferrer">
                              Staff Login
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* About Us */}
                    <div className="col-lg-4 col-md-4">
                      <div className="exam-card">
                        <h3 className="sitemap-heading">About Us</h3>
                        <ul className="checklist sitemaplist">
                          <li><Link href="/about/school-profile">School Profile</Link></li>
                          <li><Link href="/about/vision-mission">Vision and Mission</Link></li>
                          <li><Link href="/about/founders">Founders</Link></li>
                          <li><Link href="/about/chairperson">Chairperson</Link></li>
                          <li><Link href="/about/director-manager">Director &amp; Manager</Link></li>
                          <li><Link href="/about/principal">Principal</Link></li>
                          <li><Link href="/about/vice-principal/sr-section">Vice Principal</Link></li>
                          <li><Link href="/about/school-managing-committee">School Managing Committee</Link></li>
                          <li><Link href="/about/faculty">Faculty</Link></li>
                          <li><Link href="/about/pta">PTA</Link></li>
                        </ul>
                      </div>
                    </div>

                    {/* CBSE Results + Student Zone */}
                    <div className="col-lg-4 col-md-4">
                      <div className="exam-card">
                        <h3 className="sitemap-heading">CBSE Results</h3>
                        <ul className="checklist sitemaplist">
                          <li><Link href="/cbse-results/class-xii">Class XII</Link></li>
                          <li><Link href="/cbse-results/class-x">Class X</Link></li>
                          <li><Link href="/cbse-results/batch-after-school">Batch After School</Link></li>
                        </ul>
                        <h3 className="sitemap-heading">Student Zone</h3>
                        <ul className="checklist sitemaplist">
                          <li><Link href="/student-zone/rules-regulations">Rules &amp; Regulations</Link></li>
                          <li><Link href="/student-zone/awards-scholarships">Awards &amp; Scholarships</Link></li>
                          <li><Link href="/student-zone/senior-section-council">Student&apos;s Council</Link></li>
                          <li>
                            <a href="https://erp.quickcampus.online/auth" target="_blank" rel="noopener noreferrer">
                              Examination Schedule
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                  </div>

                  {/* ── Row 2 ── */}
                  <div className="row">

                    {/* Facilities */}
                    <div className="col-lg-4 col-md-4">
                      <div className="exam-card">
                        <h3 className="sitemap-heading">Facilities</h3>
                        <ul className="checklist sitemaplist">
                          <li><Link href="/facilities/birla-krida-kendra">Sarala Birla Krida Kendra</Link></li>
                          <li><Link href="/facilities/transport">Transport</Link></li>
                          <li><Link href="/facilities/educational-tours">Excursion/Educational Tours</Link></li>
                          <li><Link href="/facilities/bvn-anveshika">BVN-IAPT Anveshika</Link></li>
                          <li><a href="#">BVN-MUN</a></li>
                          <li><Link href="/facilities/senior-section-club">Clubs</Link></li>
                          <li><Link href="/facilities/canteen">Canteen</Link></li>
                          <li><Link href="/facilities/career-counselling-cell">Career Counselling Cell</Link></li>
                          <li><Link href="/facilities/mind-spark">Mind Spark</Link></li>
                          <li><Link href="/facilities/atal-tinkering-lab">Atal Tinkering Lab</Link></li>
                        </ul>
                      </div>
                    </div>

                    {/* Academics Zone + Alumni Zone + Media */}
                    <div className="col-lg-4 col-md-4">
                      <div className="exam-card">
                        <h3 className="sitemap-heading">Academics Zone</h3>
                        <ul className="checklist sitemaplist">
                          <li><Link href="/academic-zone/affiliation">Affiliation</Link></li>
                          <li><Link href="/academic-zone/primary-school">Curriculum/Syllabus</Link></li>
                          <li><Link href="/academic-zone/streams-offered">Streams Offered</Link></li>
                        </ul>
                        <h3 className="sitemap-heading">Alumni Zone</h3>
                        <ul className="checklist sitemaplist">
                          <li><Link href="/alumni-zone/announcements">Announcements</Link></li>
                          <li><Link href="/alumni-zone/principal-message">Principal&apos;s Message</Link></li>
                          <li><Link href="/alumni-zone/alumni-registration">Alumni Registration</Link></li>
                        </ul>
                        <h3 className="sitemap-heading">Media</h3>
                        <ul className="checklist sitemaplist">
                          <li><Link href="/media/media-press-coverage">Media / Press Coverage</Link></li>
                        </ul>
                      </div>
                    </div>

                    {/* Connect */}
                    <div className="col-lg-4 col-md-4">
                      <div className="exam-card">
                        <h3 className="sitemap-heading">Connect</h3>
                        <ul className="checklist sitemaplist">
                          <li><Link href="/connect/reach-us">Reach Us</Link></li>
                          <li><Link href="/connect/sitemap">Sitemap</Link></li>
                        </ul>
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
