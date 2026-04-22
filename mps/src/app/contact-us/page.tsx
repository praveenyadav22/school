import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function ContactUsPage() {
  return (
    <InnerPage title="Contact Us">
      <div className="normalContent">
        <div className="row">
          <div className="col-lg-6">
            <h2>Get In Touch</h2>
            <div style={{ marginBottom: "24px" }}>
              <p>
                <strong>Modern Public School, Shalimar Bagh</strong><br />
                B-Block, Shalimar Bagh,<br />
                Delhi - 110088
              </p>
              <p>
                <strong>Phone:</strong><br />
                <a href="tel:+911141427627" style={{ color: "#003255", textDecoration: "none" }}>+91-11-41427627</a><br />
                <a href="tel:+911141426165" style={{ color: "#003255", textDecoration: "none" }}>+91-11-41426165</a><br />
                <a href="tel:+911147354557" style={{ color: "#003255", textDecoration: "none" }}>+91-11-47354557</a>
              </p>
              <p>
                <strong>Principal Email:</strong><br />
                <a href="mailto:alkakapur23@gmail.com" style={{ color: "#003255" }}>alkakapur23@gmail.com</a>
              </p>
              <p>
                <strong>School Email:</strong><br />
                <a href="mailto:info@mpsshalimarbagh.com" style={{ color: "#003255" }}>info@mpsshalimarbagh.com</a>
              </p>
              <p>
                <strong>School Hours:</strong><br />
                Monday to Saturday<br />
                Summer: 7:30 AM – 1:30 PM<br />
                Winter: 8:00 AM – 2:00 PM
              </p>
            </div>

            <div style={{ background: "#f4f6f9", padding: "16px", borderRadius: "5px", borderLeft: "4px solid #4dc3cf" }}>
              <p style={{ margin: 0, fontWeight: 600, color: "#003255" }}>Admissions Enquiries</p>
              <p style={{ margin: "4px 0 0" }}>
                Call: <a href="tel:+911141426165" style={{ color: "#003255", fontWeight: 700 }}>+91-11-41426165</a>
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <h2>Location</h2>
            <div style={{ width: "100%", height: "350px", overflow: "hidden", borderRadius: "5px", border: "1px solid #ddd" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.186285428!2d77.1620!3d28.7218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01f42e7d8d3b%3A0x0!2sModern+Public+School+Shalimar+Bagh!5e0!3m2!1sen!2sin!4v1680000000000"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Modern Public School Location"
              />
            </div>
          </div>
        </div>
      </div>
    </InnerPage>
  );
}
