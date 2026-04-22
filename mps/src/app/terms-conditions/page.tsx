import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function TermsConditionsPage() {
  return (
    <InnerPage title="Terms & Conditions">
      <div className="normalContent">
        <h2>Terms &amp; Conditions</h2>
        <p>
          These Terms and Conditions govern the use of the Modern Public School, Shalimar Bagh
          website (<strong>www.mpsshalimarbagh.com</strong>) and the services provided by Modern
          Public School. By accessing or using this website, you agree to be bound by these terms.
        </p>

        <h2>Use of Website</h2>
        <p>
          The content on this website is provided for general informational purposes only.
          Modern Public School reserves the right to modify, update, or remove any content
          at any time without prior notice. The school shall not be held liable for any
          inaccuracies or omissions in the information provided.
        </p>

        <h2>Accuracy of Information</h2>
        <p>
          While we strive to ensure that all information on this website is accurate,
          complete, and up-to-date, we make no guarantees or warranties — express or implied —
          about the accuracy, reliability, or completeness of any information. Users are
          advised to verify critical information by contacting the school directly.
        </p>

        <h2>Privacy Policy</h2>
        <p>
          We respect your privacy. Any personal information submitted through our website —
          including contact forms, admission enquiries, or feedback submissions — will be
          used solely for the purpose for which it was submitted. We do not share personal
          information with third parties except as required by law.
        </p>
        <p>
          Cookies may be used on this website to improve your browsing experience. By
          continuing to use the site, you consent to our use of cookies.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          All content on this website — including text, images, graphics, logos, and design
          elements — is the intellectual property of Modern Public School, Shalimar Bagh,
          and is protected by applicable copyright laws. No part of this website may be
          reproduced, distributed, or used in any form without prior written permission
          from the school.
        </p>

        <h2>Third-Party Links</h2>
        <p>
          This website may contain links to third-party websites for your convenience.
          Modern Public School does not endorse or take responsibility for the content,
          policies, or practices of any linked third-party sites.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          Modern Public School shall not be liable for any direct, indirect, incidental,
          consequential, or special damages arising from the use of, or inability to use,
          this website or its content.
        </p>

        <h2>Contact</h2>
        <p>
          For any queries regarding these Terms and Conditions, please contact us at:{" "}
          <a href="mailto:info@mpsshalimarbagh.com">info@mpsshalimarbagh.com</a>
        </p>

        <p style={{ color: "#777", fontSize: "13px", marginTop: "30px", borderTop: "1px solid #eee", paddingTop: "16px" }}>
          Last updated: April 2026
        </p>
      </div>
    </InnerPage>
  );
}
