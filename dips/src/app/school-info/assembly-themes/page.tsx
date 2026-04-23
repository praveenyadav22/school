import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Assembly Themes" };

export default function Page() {
  return (
    <InnerPage title="Assembly Themes" breadcrumbs={[]}>
      <div className="inner-content">
        <p>Assemblies are a medium to enlighten young minds and channelize their energy positively. Each week has a unique theme — ranging from national values, environmental awareness, to moral education and leadership.</p>
      </div>
    </InnerPage>
  );
}
