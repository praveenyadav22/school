import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Photo Gallery" };

const GALLERY_CATEGORIES = [
  { title: "Annual Day 2024", count: 24 },
  { title: "Sports Day 2024", count: 18 },
  { title: "Science Exhibition", count: 15 },
  { title: "Cultural Program", count: 20 },
  { title: "Republic Day", count: 12 },
  { title: "Independence Day", count: 10 },
];

export default function PhotoGalleryPage() {
  return (
    <InnerPage title="Photo Gallery">
      <div className="normalContent">
        <h2>Photo Gallery</h2>
        <p>
          Browse through our collection of memorable moments from school events, activities,
          and campus life at Modern Public School, Shalimar Bagh.
        </p>
        <div className="row">
          {GALLERY_CATEGORIES.map((cat, i) => (
            <div className="col-lg-4 col-md-6 mb-4" key={i}>
              <div style={{
                background: "#f4f6f9",
                borderRadius: "5px",
                overflow: "hidden",
                border: "1px solid #ddd",
                textAlign: "center",
                padding: "30px 20px",
              }}>
                <div style={{ fontSize: "48px", marginBottom: "12px" }}>🖼️</div>
                <h4 style={{ color: "#003255", marginBottom: "8px", fontSize: "16px" }}>{cat.title}</h4>
                <p style={{ color: "#777", fontSize: "13px", margin: 0 }}>{cat.count} Photos</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </InnerPage>
  );
}
