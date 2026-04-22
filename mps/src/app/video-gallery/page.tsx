import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Video Gallery" };

const VIDEOS = [
  { title: "Annual Day 2024 Highlights", embedId: "qecvWapRgBo" },
  { title: "Sports Day 2024", embedId: "dQw4w9WgXcQ" },
  { title: "School Cultural Event", embedId: "qecvWapRgBo" },
];

export default function VideoGalleryPage() {
  return (
    <InnerPage title="Video Gallery">
      <div className="normalContent">
        <h2>Video Gallery</h2>
        <p>
          Watch highlights from our school events, performances, and campus life.
        </p>
        <div className="row">
          {VIDEOS.map((v, i) => (
            <div className="col-lg-6 mb-4" key={i}>
              <div className="video-grid__item">
                <div className="video-wrapper" style={{ position: "relative", paddingTop: "56.25%" }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${v.embedId}?rel=0`}
                    title={v.title}
                    allowFullScreen
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
                  />
                </div>
                <div style={{ padding: "12px", background: "#fff", borderTop: "2px solid #4dc3cf" }}>
                  <p style={{ margin: 0, fontWeight: 600, color: "#003255" }}>{v.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </InnerPage>
  );
}
