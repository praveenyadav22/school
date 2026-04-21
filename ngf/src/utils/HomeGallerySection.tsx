import Link from "next/link";
import Image from "next/image";

const COL_LEFT  = ["gl-01.jpg", "gl-02.jpg"];
const COL_MID   = ["gl-s1.jpg"];
const COL_RIGHT = ["gl-03.jpg", "gl-04.jpg"];

function GalleryItem({ file }: { file: string }) {
  const src = `/images/generic/${file}`;
  return (
    <div className="item port-popup">
      <a href={src}>
        <Image
          src={src}
          alt={`Gallery ${file}`}
          width={400}
          height={300}
          style={{ width: "100%", height: "auto", display: "block" }}
        />
        <i className="fa fa-search" />
      </a>
    </div>
  );
}

export default function HomeGallerySection() {
  return (
    <section id="const-testi" className="wide-gallery pb-5 mar-bottom-40">
      <div className="container">
        <div className="inner-heading">
          <h3>New Green Field School</h3>
          <h2>Our Latest Photo Gallery</h2>
        </div>
        <div className="row">
          <div className="col-sm-4 mix">
            {COL_LEFT.map((f) => <GalleryItem key={f} file={f} />)}
          </div>
          <div className="col-sm-4 mix">
            {COL_MID.map((f) => <GalleryItem key={f} file={f} />)}
          </div>
          <div className="col-sm-4 mix">
            {COL_RIGHT.map((f) => <GalleryItem key={f} file={f} />)}
          </div>
          <div className="col-sm-12 mix">
            <div className="last-item-g">
              <div className="text-center mar-top-40 mar-bottom-40">
                <Link href="/photo-gallery" className="mt_btn_yellow">
                  View All Albums
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
