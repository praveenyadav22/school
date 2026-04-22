import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import SidebarLinks from "@/utils/SidebarLinks";
import { ACADEMICS_SIDEBAR } from "@/utils/sidebarData";

export const metadata: Metadata = { title: "Admission" };

export default function AdmissionPage() {
  return (
    <InnerPage
      title="Admission"
      sidebar={<SidebarLinks heading="Academics" links={ACADEMICS_SIDEBAR} />}
    >
      <div className="normalContent">
        <h2>Admissions at MPS Shalimar Bagh</h2>
        <p>Modern Public School welcomes applications from students seeking quality education in a nurturing, stimulating, and values-driven environment. We admit students based on availability of seats and a fair assessment process.</p>
        <h2>Admission Process</h2>
        <p>Step 1 — Registration: Collect or download the registration form from the school office or website. Fill in all required details and submit with the necessary documents.</p>
        <p>Step 2 — Document Submission: Submit the completed form along with required documents including birth certificate, previous academic records, transfer certificate, and passport-size photographs.</p>
        <p>Step 3 — Assessment: Students may be called for an interaction or written assessment as applicable by class and as per school norms.</p>
        <p>Step 4 — Admission Confirmation: Results are communicated within the stipulated time. Confirmed students must complete the admission formalities and fee payment within the specified deadline.</p>
        <h2>Required Documents</h2>
        <p>Original birth certificate with photocopy. School Leaving Certificate / Transfer Certificate (for Classes II onwards). Report card of the previous class. Aadhar card of the student. Two passport-size photographs of the student and each parent. Address proof (Aadhar / utility bill).</p>
        <h2>Contact for Admissions</h2>
        <p>Phone: +91-11-41426165. Email: info@mpsshalimarbagh.com. School Office hours: Monday–Friday, 9:00 AM – 2:00 PM.</p>
      </div>
    </InnerPage>
  );
}
