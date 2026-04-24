import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
export const metadata: Metadata = { title: "Alumni" };
export default function Page() {
  return (
    <InnerPage title="Alumni">
      <p>This section is currently being updated. Please contact the school administration for more information.</p>
    </InnerPage>
  );
}
