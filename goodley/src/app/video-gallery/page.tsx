import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
export const metadata: Metadata = { title: "Video Gallery" };
export default function VideoGallery() {
  return (
    <InnerPage title="Video Gallery">
      <p>Watch videos of school events, performances, and activities that capture the spirit of Goodley Public School.</p>
      <div style={{ marginTop: 20, position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
        <iframe src="https://www.youtube.com/embed/wRulkHs5zxI" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} allowFullScreen title="School Tour" />
      </div>
    </InnerPage>
  );
}
