import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Contact Details" };

export default function Page() {
  return (
    <InnerPage title="Contact Details" breadcrumbs={[]}>
      <p><strong>De Indian Public School</strong><br/>Pocket 11, Sector-24, Rohini, Delhi – 110085</p><p><strong>Phone:</strong> 011-47586215, 011-27050252/3/4<br/><strong>WhatsApp:</strong> 8448209126<br/><strong>Email:</strong> rohini.dips@yahoo.co.in<br/><strong>Website:</strong> www.dipsrohini.in</p></InnerPage>
  );
}
