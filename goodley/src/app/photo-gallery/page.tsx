import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
export const metadata: Metadata = { title: "Photo Gallery" };
export default function PhotoGallery() {
  return (
    <InnerPage title="Photo Gallery">
      <p>Explore our vibrant photo gallery capturing the essence of life at Goodley Public School — from academic achievements to cultural celebrations, sports events, and everyday moments of joy and learning.</p>
      <div className="row" style={{ marginTop: 20 }}>
        {[1,2,3,4,5,6].map(n => (
          <div key={n} className="col-sm-4" style={{ marginBottom: 20 }}>
            <div style={{ background: "#e9e9e9", height: 200, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 4 }}>
              <span style={{ color: "#999", fontSize: 14 }}>Gallery Image {n}</span>
            </div>
          </div>
        ))}
      </div>
    </InnerPage>
  );
}
