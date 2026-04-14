"use client";

import { useState } from "react";
import Link from "next/link";

// ── Gallery data — replace with API fetch by ID when backend ready ──
const GALLERY_DATA: Record<string, {
  title:       string;
  description: string;
  postedBy:    string;
  date:        string;
  images:      string[];
}> = {
  "6804967b-b1ce-4c90-9920-c27b165000e6": {
    title:       "Club Fiesta Junior BVN",
    description: "Junior BVN celebrated Club Fiesta on 9th February 2023 where students from various clubs showcased their talent under the guidance of their respective teachers.",
    postedBy:    "Quick Campus",
    date:        "28-02-2023",
    images: [
      "/web-content/gallery/images/UploadFile2025-02-26T13_12_59_629537839.jpeg",
      "/web-content/gallery/images/UploadFile2025-02-26T13_12_59_630515663.jpeg",
      "/web-content/gallery/images/UploadFile2025-02-26T13_12_59_631699171.jpeg",
      "/web-content/gallery/images/UploadFile2025-02-26T13_12_59_629916408.jpeg",
      "/web-content/gallery/images/UploadFile2025-02-26T13_12_59_630390940.jpeg",
      "/web-content/gallery/images/UploadFile2025-02-26T13_12_59_630860291.jpeg",
      "/web-content/gallery/images/UploadFile2025-02-26T13_12_59_631137337.jpeg",
      "/web-content/gallery/images/UploadFile2025-02-26T13_12_59_635628533.jpeg",
      "/web-content/gallery/images/UploadFile2025-02-26T13_12_59_633959534.jpeg",
      "/web-content/gallery/images/UploadFile2025-02-26T13_12_59_666553415.jpeg",
      "/web-content/gallery/images/UploadFile2025-02-26T13_12_59_630229706.jpeg",
      "/web-content/gallery/images/UploadFile2025-02-26T13_12_59_632782626.jpeg",
    ],
  },
};

const FALLBACK = {
  title:       "Gallery Detail",
  description: "Gallery description coming soon.",
  postedBy:    "BVN Admin",
  date:        "01-01-2026",
  images:      Array.from({ length: 8 }, () => "/images/icons/birla-icon.png"),
};

// ── Pure-React lightbox — no jQuery needed ─────────────────────
function Lightbox({
  images,
  startIndex,
  onClose,
}: {
  images:     string[];
  startIndex: number;
  onClose:    () => void;
}) {
  const [current, setCurrent] = useState(startIndex);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape")      onClose();
    if (e.key === "ArrowLeft")   prev();
    if (e.key === "ArrowRight")  next();
  };

  return (
    <div
      className="lb-backdrop"
      onClick={handleBackdrop}
      onKeyDown={handleKey}
      tabIndex={-1}
      ref={(el) => el?.focus()}
    >
      <button className="lb-close" onClick={onClose} aria-label="Close">
        <i className="ri-close-line" />
      </button>
      <button className="lb-arrow lb-arrow--prev" onClick={prev} aria-label="Previous">
        <i className="ri-arrow-left-s-line" />
      </button>
      <div className="lb-img-wrap">
        <img src={images[current]} alt={`Photo ${current + 1}`} className="lb-img" />
        <p className="lb-counter">{current + 1} / {images.length}</p>
      </div>
      <button className="lb-arrow lb-arrow--next" onClick={next} aria-label="Next">
        <i className="ri-arrow-right-s-line" />
      </button>
    </div>
  );
}

export default function GalleryDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const gallery = GALLERY_DATA[params.id] ?? FALLBACK;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      {lightboxIndex !== null && (
        <Lightbox
          images={gallery.images}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}

      <div className="body-conent ptb-50">
        <div className="container">
          <div className="row">

            <div className="col-12">
              <Link href="/photo-gallery" className="default-btn btn mb-4" title="Back">
                <i className="ri-arrow-left-line" /> Back
              </Link>
            </div>

            <div className="col-12">
              <div className="inner-content">
                <div className="inner-content__head">
                  <span>{gallery.title}</span>
                </div>
              </div>
            </div>

            <div className="col-12">
              <p className="gallery-desc">{gallery.description}</p>

              <div className="gallery__detail mt-3">
                <div className="galleryWrap">
                  <div className="row" id="gallery_row_details_gallery-all">
                    {gallery.images.map((src, i) => (
                      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" key={i}>
                        <section>
                          <figure>
                            <a
                              href={src}
                              onClick={(e) => { e.preventDefault(); setLightboxIndex(i); }}
                              aria-label={`Open photo ${i + 1}`}
                            >
                              <img src={src} alt={`${gallery.title} — photo ${i + 1}`} />
                            </a>
                          </figure>
                        </section>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="detail-section">
                <div className="detail-section--left">
                  <div className="item post">
                    Posted By : <span>{gallery.postedBy}</span>
                  </div>
                  <div className="item date">
                    Date : <span>{gallery.date}</span>
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
