import Link from "next/link";
import Image from "next/image";

const CATEGORY_ITEMS = [
  { href: "/photo-gallery",             src: "/images/generic/home-icon-1.jpg", alt: "Photo Gallery" },
  { href: "/award-achievements",        src: "/images/generic/home-icon-2.jpg", alt: "Awards & Achievements" },
  { href: "/online-registration",       src: "/images/generic/home-icon-3.jpg", alt: "Online Registration" },
  { href: "/mobile-application",        src: "/images/generic/home-icon-4.jpg", alt: "BIS Mobile App" },
  { href: "/fit-india-movement",        src: "/images/generic/home-icon-5.jpg", alt: "Fit India Movement" },
  { href: "/teachers-development-index",src: "/images/generic/home-icon-6.jpg", alt: "Teachers Development Index" },
];

export default function HomeFeatured() {
  return (
    <div className="featured__wrapper highlightedBg">
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-sm-7 col-xs-12">
            <div className="content-area">
              <h1>Welcome @ Bhatnagar International School</h1>
              <p>
                <b>Bhatnagar International School</b>, Vasant Kunj is a modern and progressive institution located in South Delhi. Established in 1990, the school represents a vision brought to life, dedicated to nurturing leaders, achievers, and global citizens prepared for the challenges of a changing world.
              </p>
              <p>
                The school believes that value-based learning is essential in today&apos;s dynamic environment. At the senior secondary level, it offers three streams: Science, Commerce, and Humanities, ensuring academic excellence and balanced growth...
              </p>
              <Link href="/about-the-school" className="themeButton fillButton">Know More</Link>
            </div>
          </div>
          <div className="col-md-5 col-sm-5 col-xs-12">
            <div className="school-category">
              <ul>
                {CATEGORY_ITEMS.map((item) => (
                  <li key={item.alt}>
                    <Link href={item.href}>
                      <figure>
                        <Image src={item.src} width={150} height={150} className="img-responsive" alt={item.alt} />
                      </figure>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
