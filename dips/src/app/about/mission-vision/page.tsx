import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Our Mission & Vision" };

export default function Page() {
  return (
    <InnerPage title="Our Mission & Vision" breadcrumbs={[]}>
      <div className="inner-content">
        <p>To be a globally recognized institution nurturing future-ready individuals equipped with knowledge, values, and the ability to contribute meaningfully to society.</p><h3 style={{color:"#002649",marginTop:20}}>Mission</h3><p>To provide a stimulating, safe, and inclusive learning environment where every student is empowered to discover their potential.</p>
      </div>
    </InnerPage>
  );
}
