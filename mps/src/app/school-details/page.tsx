import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import SidebarLinks from "@/utils/SidebarLinks";
import { SCHOOL_SIDEBAR } from "@/utils/sidebarData";

export const metadata: Metadata = { title: "School Details" };

export default function SchoolDetailsPage() {
  return (
    <InnerPage
      title="School Details"
      sidebar={<SidebarLinks heading="School" links={SCHOOL_SIDEBAR} />}
    >
      <div className="normalContent">
        <h2>Mandatory Public Disclosure</h2>
        <p>The following details are publicly disclosed in accordance with CBSE requirements:</p>
        <p>School Name: Modern Public School, Shalimar Bagh</p>
        <p>Address: B-Block, Shalimar Bagh, Delhi - 110088</p>
        <p>Affiliation: Central Board of Secondary Education (CBSE), New Delhi</p>
        <p>Phone: +91-11-41427627 | +91-11-41426165 | +91-11-47354557</p>
        <p>Email: info@mpsshalimarbagh.com</p>
        <p>Website: www.mpsshalimarbagh.com</p>
        <p>Classes Offered: Nursery to Class XII</p>
        <p>Medium of Instruction: English</p>
        <p>School Type: Co-educational, Day School</p>
        <p>Recognition Status: Recognised by Government of NCT of Delhi</p>
        <p>For complete Mandatory Public Disclosure as per CBSE norms, please contact the school office.</p>
      </div>
    </InnerPage>
  );
}
