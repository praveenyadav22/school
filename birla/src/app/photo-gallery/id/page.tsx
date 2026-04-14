"use client";

import { useEffect } from "react";
import Link from "next/link";

// ── Gallery data — in real project fetch by ID from API ───────
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

// ── Fallback for unknown IDs ───────────────────────────────────
const FALLBACK = {
  title:       "Gallery Detail",
  description: "Gallery description coming soon.",
  postedBy:    "BVN Admin",
  date:        "01-01-2026",
  images:      Array.from({ length: 8 }, () => "/images/icons/birla-icon.png"),
};

export default function GalleryDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const gallery = GALLERY_DATA[params.id] ?? FALLBACK;

  // ── Load Fancybox from CDN on mount ───────────────────────────
  useEffect(() => {
    // Load Fancybox CSS
    const link = document.createElement("link");
    link.rel  = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css";
    document.head.appendChild(link);

    // Load jQuery then Fancybox JS
    const loadScript = (src: string, onLoad?: () => void) => {
      const s = document.createElement("script");
      s.src   = src;
      s.onload = onLoad ?? null;
      document.body.appendChild(s);
    };

    // Check if jQuery already loaded
    if (!(window as any).jQuery) {
      loadScript(
        "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js",
        () => {
          loadScript(
            "https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js"
          );
        }
      );
    } else {
      loadScript(
        "https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js"
      );
    }

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="body-conent ptb-50">
      <div className="container">
        <div className="row">

          {/* ── Back button ── */}
          <div className="col-12">
            <Link
              href="/photo-gallery"
              className="default-btn btn mb-4"
              title="Back"
            >
              <i className="ri-arrow-left-line" />
            </Link>
          </div>

          {/* ── Gallery title ── */}
          <div className="col-12">
            <div className="inner-content">
              <div className="inner-content__head">
                <span>{gallery.title}</span>
              </div>
            </div>
          </div>

          {/* ── Description ── */}
          <div className="col-12">
            <p style={{ fontSize: "14px", color: "#777", fontFamily: "Poppins, sans-serif", marginBottom: "16px" }}>
              {gallery.description}
            </p>

            {/* ── Image grid with Fancybox ── */}
            <div className="gallery__detail mt-3">
              <div className="galleryWrap">
                <div className="row" id="gallery_row_details_gallery-all">
                  {gallery.images.map((src, i) => (
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" key={i}>
                      <section>
                        <figure>
                          {/* data-fancybox groups all images into a lightbox */}
                          <a href={src} data-fancybox="gallery-group">
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

          {/* ── Posted by / date footer ── */}
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
  );
}
