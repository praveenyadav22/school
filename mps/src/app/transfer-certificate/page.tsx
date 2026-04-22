import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import { GALLERY_SIDEBAR } from "@/utils/sidebarData";
import SidebarLinks from "@/utils/SidebarLinks";

export const metadata: Metadata = { title: "Transfer Certificate" };

const STEPS = [
  { no: "01", title: "Written Application", desc: "Submit a written application from the parent/guardian to the school office at least 10 working days in advance of the required date." },
  { no: "02", title: "Fee Clearance", desc: "Clear all outstanding dues — including tuition fees, transport fees, library dues, and any pending school property charges." },
  { no: "03", title: "No-Dues Certificate", desc: "Collect the No-Dues Certificate from the library, sports department, class teacher, and accounts office." },
  { no: "04", title: "Collection", desc: "The Transfer Certificate will be issued within 5 working days after clearance of all dues and submission of complete documentation." },
];

export default function TransferCertificatePage() {
  return (
    <InnerPage
      title="Transfer Certificate"
      sidebar={<SidebarLinks heading="Useful Links" links={GALLERY_SIDEBAR} />}
    >
      <div className="normalContent">
        <h2>Transfer Certificate (TC)</h2>
        <p>
          Modern Public School issues Transfer Certificates to students who are leaving the school.
          The TC is an essential document required for admission to a new school and must be
          applied for through the process described below.
        </p>

        <div className="row" style={{ margin: "24px 0" }}>
          {STEPS.map((s) => (
            <div className="col-md-6" key={s.no} style={{ marginBottom: "20px" }}>
              <div style={{
                display: "flex",
                gap: "16px",
                background: "#f4f6f9",
                padding: "20px",
                borderRadius: "8px",
                border: "1px solid #e0e0e0",
              }}>
                <div style={{
                  minWidth: "44px", height: "44px", background: "#003255",
                  borderRadius: "50%", display: "flex", alignItems: "center",
                  justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "15px",
                }}>
                  {s.no}
                </div>
                <div>
                  <h4 style={{ color: "#003255", marginBottom: "6px", fontSize: "15px", fontWeight: 600 }}>{s.title}</h4>
                  <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ background: "#fff3cd", border: "1px solid #ffc107", borderRadius: "6px", padding: "16px 20px", marginBottom: "24px" }}>
          <p style={{ margin: 0, fontWeight: 600, color: "#856404" }}>
            ⚠️ Important Note
          </p>
          <p style={{ margin: "6px 0 0", color: "#533f03", fontSize: "14px" }}>
            Transfer Certificates will only be issued after the completion of the current
            academic term unless there is an exceptional circumstance with prior written
            approval from the Principal.
          </p>
        </div>

        <h2>Contact</h2>
        <p>
          For TC-related queries, please visit the school office during working hours
          (Monday–Friday, 9:00 AM – 2:00 PM) or contact us at:
        </p>
        <p>
          Phone: <a href="tel:+911141427627" style={{ color: "#003255" }}>+91-11-41427627</a>
          &nbsp;|&nbsp;
          Email: <a href="mailto:info@mpsshalimarbagh.com" style={{ color: "#003255" }}>info@mpsshalimarbagh.com</a>
        </p>
      </div>
    </InnerPage>
  );
}
