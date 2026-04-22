import Link from "next/link";

// ── Data ─────────────────────────────────────────────────────
const PHOTO_ITEMS = [
  {
    img: "/images/generic/class-activities.png",
    title: "Class Activities",
    date: "06-05-2024",
    href: "/photo-gallery",
  },
  {
    img: "/images/generic/library-img.png",
    title: "Library Activities",
    date: "06-05-2024",
    href: "/photo-gallery",
  },
];

const VIDEO_ITEMS = [
  {
    embedUrl: "https://www.youtube.com/embed/qecvWapRgBo?rel=0&showinfo=0&color=white&iv_load_policy=3",
    title: "Glimpses of BVN",
    date: "29 May 2024",
    href: "/video-gallery",
  },
];

// ── HomeGallery ───────────────────────────────────────────────
const HomeGallery = () => {
  return (
    <div className="body-conent pt-4">
      <div className="container">
        <div className="row">

          {/* ── Photo Gallery ── */}
          <div className="col-12 col-lg-7">
            <div className="d-flex flex-column flex-1">
              <h2 className="customhead__24 py-3">Photo Gallery</h2>

              {PHOTO_ITEMS.map((item, i) => (
                <div className="h-100" key={i}>
                  <div className="gallery-cardlist">
                    <div className="gallery-cardlist__imgwrap">
                      <img src={item.img} className="u-img" alt={item.title} />
                    </div>
                    <div className="gallery-cardlist__content">
                      <h3 className="gallery-cardlist__content--titel">{item.title}</h3>
                      <div className="gallery-cardlist__content--meta">
                        <ul className="gallery-cardlist__content--postedwrap">
                          <li className="list date">
                            Date : <span className="value">{item.date}</span>
                          </li>
                        </ul>
                        <Link href={item.href} className="default-btn btn">
                          Explore More <i className="ri-arrow-right-line" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Video Gallery ── */}
          <div className="col-12 col-lg-5 h-100">
            <div className="d-flex flex-column flex-1">
              <h2 className="customhead__24 py-3">Video Gallery</h2>

              {VIDEO_ITEMS.map((item, i) => (
                <div className="h-100" key={i}>
                  <div className="gallery-cardlist v2">
                    <div className="gallery-cardlist__imgwrap">
                      <div className="o-video">
                        <iframe
                          src={item.embedUrl}
                          allowFullScreen
                          title={item.title}
                        />
                    
                        <div className="o-video__overlay" aria-hidden="true" />
                      </div>
                    </div>
                    <div className="gallery-cardlist__content">
                      <h3 className="gallery-cardlist__content--titel">{item.title}</h3>
                      <div className="gallery-cardlist__content--meta">
                        <ul className="gallery-cardlist__content--postedwrap">
                          <li className="list date">
                            Date : <span className="value">{item.date}</span>
                          </li>
                        </ul>
                        <Link href={item.href} className="default-btn btn">
                          Explore More <i className="ri-arrow-right-line" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomeGallery;
