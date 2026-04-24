import type { Metadata } from "next";
import Banner from "@/components/Banner";
import BulletinTicker from "@/utils/BulletinTicker";
import HomeAccordion from "@/utils/HomeAccordion";
import LatestNews from "@/utils/LatestNews";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Goodley Public School | West Shalimar Bagh, New Delhi – CBSE Affiliated School",
};

export default function Home() {
  return (
    <>
      {/* ── Hero Carousel ──────────────────────────────────── */}
      <Banner />

      {/* ── Bulletin Ticker ────────────────────────────────── */}
      <BulletinTicker />

      {/* ── Banner Bottom: 3 Highlight Cards ───────────────── */}
      <div className="container-fluid bannerBottom">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="higlightInfoBlog">
                <div className="title">01</div>
                <div className="textSection">
                  <h3>Nursery Registration</h3>
                  <p>
                    Our newly Renovated Nursery Building is ready to welcome our Little Learners which will be{" "}
                    <b>Fully Air Conditioned from New Session</b> Enroll Your Child Now...
                    <Link href="/nursery-registration"><span className="fa fa-arrow-circle-right" /></Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="higlightInfoBlog blog2">
                <div className="title">02</div>
                <div className="textSection">
                  <h3>Gallery</h3>
                  <p>
                    This photo gallery captures the special moments that shaped our school year-smiles, achievements, friendships, and everyday memories. Each picture...
                    <Link href="/photo-gallery"><span className="fa fa-arrow-circle-right" /></Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="higlightInfoBlog blog3">
                <div className="title">03</div>
                <div className="textSection">
                  <h3>Explore Circulars</h3>
                  <p>
                    Explore Circulars is your one-stop space to stay updated with all important school announcements. From upcoming events and academic schedules...
                    <Link href="/circulars"><span className="fa fa-arrow-circle-right" /></Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── About the School ───────────────────────────────── */}
      <div className="container">
        <div className="row">
          <div className="aboutSchollWrap">
            <div className="col-lg-12">
              <h1>About the school</h1>
            </div>
            <div className="about-cols-row">
              <div className="col-md-4">
                <h2>Objective</h2>
                <p>
                  <Link href="/about-us/about-school">GPS works towards bringing about a holistic... <span className="fa fa-arrow-circle-right" /></Link>
                </p>
              </div>
              <div className="col-md-4">
                <h2>Our Mission</h2>
                <p>
                  <Link href="/about-us/about-school">The mission of the School is to provide inclusive education that ... <span className="fa fa-arrow-circle-right" /></Link>
                </p>
              </div>
              <div className="col-md-4">
                <h2>Latest News</h2>
                <LatestNews />
                <Link href="/news" className="btn btn-theme-colored2">
                  Read All
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── Our Philosophy ──────────────────────────────── */}
        <div className="row">
          <div className="col-lg-12">
            <div className="whychooseustopic">
              <div className="centerText">
                <h1>OUR PHILOSOPHY</h1>
                <div className="aot-separator">
                  <div className="aot-separator-style">&nbsp;</div>
                </div>
                <p>Our Philosophy is to teach mastery over a set core of &ldquo;basic knowledge&rdquo; in order to provide learning in disciplinarian controlled environment and we provide transformational education so that children adapt the changes and become an asset to the society.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── School Corner + Accordion (3 cols same row) ─── */}
        <div className="homeSchollcorner">
          <div className="hsc-row">
            <div className="hsc-col">
              <section>
                <figure>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/generic/home001.jpg" alt="Tech Club" />
                </figure>
                <h2>Tech Club</h2>
                <p>Computer technology is so built into our lives that it surrounds us in every way</p>
              </section>
            </div>
            <div className="hsc-col">
              <section>
                <figure>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/generic/home002.jpg" alt="Art Room" />
                </figure>
                <h2>Art Room</h2>
                <p>I dream my painting, and then I paint my dream…</p>
              </section>
            </div>
            <div className="hsc-col hsc-col--wide">
              <HomeAccordion />
            </div>
          </div>
        </div>
      </div>

      {/* ── Student Corner ──────────────────────────────────── */}
      <div className="highlightCorner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading">STUDENT CORNER</div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-4">
              <section>
                <div className="icon"><i className="fa fa-magic" /></div>
                <h3>Syllabus</h3>
                <p>&ldquo;Make the most of your Syllabus…&rdquo;<a href="https://erp.quickcampus.online/auth" target="_blank" rel="noopener noreferrer"><span className="fa fa-arrow-circle-right" /></a></p>
              </section>
            </div>
            <div className="col-sm-6 col-md-4">
              <section>
                <div className="icon"><i className="fa fa-print" /></div>
                <h3>Worksheets</h3>
                <p>&ldquo;Put your knowledge into practice…&rdquo;<a href="https://erp.quickcampus.online/auth" target="_blank" rel="noopener noreferrer"><span className="fa fa-arrow-circle-right" /></a></p>
              </section>
            </div>
            <div className="col-sm-6 col-md-4">
              <section>
                <div className="icon"><i className="fa fa-home" /></div>
                <h3>Activity Planner</h3>
                <p>Explore….Plan… Be Creative...&rdquo;<a href="https://erp.quickcampus.online/auth" target="_blank" rel="noopener noreferrer"><span className="fa fa-arrow-circle-right" /></a></p>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* ── Our Vision ──────────────────────────────────────── */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="has-padding-top-50 has-padding-bottom-50">
              <div className="centerText">
                <h1>OUR VISION</h1>
                <div className="aot-separator">
                  <div className="aot-separator-style">&nbsp;</div>
                </div>
                <p>We aspire to craft socially conscious and responsible individuals who like to serve the society. GPS aims to be an institution that empowers each child with a sound foundation of knowledge and life skills. We create a stimulating environment where children learn when they want to and not when they have to. Assisting them in recognizing and achieving their fullest potential, the school wishes to help them in the best possible way.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Sports / Music / Dance Hover Section ────────────── */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 padding0">
            <div className="grid">
              <figure className="effect-sarah first">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/generic/project001.jpg" alt="Sports and Games" />
                <figcaption>
                  <h2>SPORTS <span>&amp; GAMES</span></h2>
                  <p>We at Goodley, encourage students to participate in sports activities for enjoyment, relaxation and exercise. Sports are a positive aid to...<br /><br />
                    <Link href="/extended-classrooms/sports-and-games" className="btn btn-default">Read More</Link>
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="col-md-4 padding0">
            <div className="grid">
              <figure className="effect-sarah second">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/generic/project002.jpg" alt="Indian and Western Music" />
                <figcaption>
                  <h2>INDIAN &amp; <span>WESTERN MUSIC</span></h2>
                  <p>To foster love and appreciation of music and nurture the artistic qualities of our learners, the school provides training to the budding artists through Music.....<br /><br />
                    <Link href="/extended-classrooms/indian-western-music" className="btn btn-default">Read More</Link>
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="col-md-4 padding0">
            <div className="grid">
              <figure className="effect-sarah third">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/generic/project03.jpg" alt="Indian and Western Dance" />
                <figcaption>
                  <h2>INDIAN <span>&amp; WESTERN DANCE</span></h2>
                  <p>The school gives the learners a chance to immerse in the flavours of various dance forms. The learners are taught basic dance steps as well as...<br /><br />
                    <Link href="/extended-classrooms/classical-western-dance" className="btn btn-default">Read More</Link>
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
