import Link from "next/link";

const PHOTO_ITEMS = [
  { img: "/images/activity-new2.jpg",        title: "School Activities",    date: "2024-25", href: "/gallery/photo" },
  { img: "/images/assembly-new.jpg",          title: "Assembly Themes",      date: "2024-25", href: "/gallery/photo" },
  { img: "/images/student-council-new1.jpg",  title: "Student Council",      date: "2024-25", href: "/gallery/photo" },
  { img: "/images/house-system-new.png",      title: "House System",         date: "2024-25", href: "/gallery/photo" },
];

const VIDEO_ITEMS = [
  {
    embedUrl: "https://www.youtube.com/embed/rVYVSBGEBuw?rel=0&showinfo=0&color=white&iv_load_policy=3",
    title: "DIPS School Tour",
    date: "2024",
    href: "/gallery/video",
  },
];

const HomeGallery = () => (
  <div className="body-conent pt-4">
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-7">
          <div className="d-flex flex-column flex-1">
            <h2 className="customhead__24 py-3">Photo Gallery</h2>
            {PHOTO_ITEMS.slice(0, 2).map((item, i) => (
              <div className="h-100" key={i}>
                <div className="gallery-cardlist">
                  <div className="gallery-cardlist__imgwrap">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.img} className="u-img" alt={item.title} />
                  </div>
                  <div className="gallery-cardlist__content">
                    <h3 className="gallery-cardlist__content--titel">{item.title}</h3>
                    <div className="gallery-cardlist__content--meta">
                      <ul className="gallery-cardlist__content--postedwrap">
                        <li className="list date">Session: <span className="value">{item.date}</span></li>
                      </ul>
                      <Link href={item.href} className="default-btn btn">
                        Explore More <i className="fa fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-12 col-lg-5 h-100">
          <div className="d-flex flex-column flex-1">
            <h2 className="customhead__24 py-3">Video Gallery</h2>
            {VIDEO_ITEMS.map((item, i) => (
              <div className="h-100" key={i}>
                <div className="gallery-cardlist v2">
                  <div className="gallery-cardlist__imgwrap">
                    <div className="o-video">
                      <iframe src={item.embedUrl} allowFullScreen title={item.title} />
                      <div className="o-video__overlay" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="gallery-cardlist__content">
                    <h3 className="gallery-cardlist__content--titel">{item.title}</h3>
                    <div className="gallery-cardlist__content--meta">
                      <ul className="gallery-cardlist__content--postedwrap">
                        <li className="list date">Year: <span className="value">{item.date}</span></li>
                      </ul>
                      <Link href={item.href} className="default-btn btn">
                        Explore More <i className="fa fa-arrow-right" />
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

export default HomeGallery;
