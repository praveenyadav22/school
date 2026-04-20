import type { Metadata } from "next";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Reach Us — Birla Vidya Niketan",
};

export default function Page() {
  return (
    <div className="body-conent ptb-50">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-12">
            <div className="inner-content">

              <div id="content-section">

                <div className="row">

                  {/* LEFT */}
                  <div className="col-12 col-md-4">
                    <div className="contactContent">

                      <h3 className="inner-content__head theme-red-color">
                        Birla Vidya Niketan School
                      </h3>

                      <ul>

                        <li>
                          <span className="contactContent__item">
                            <MapPin className="contactContent__icon" />
                            Pushp Vihar, Sector-IV, New Delhi-110017, India
                          </span>
                        </li>

                        <li>
                          <span className="contactContent__item">
                            <Phone className="contactContent__icon" />
                            +91-11-2957-8960/8961
                          </span>
                        </li>

                        <li>
                          <span className="contactContent__item">
                            <Mail className="contactContent__icon" />
                            <a href="mailto:s.info@birla.ac.in">
                              s.info@birla.ac.in
                            </a>
                          </span>
                        </li>

                        <li>
                          <span className="contactContent__item">
                            <Globe className="contactContent__icon" />
                            <a
                              href="http://www.satyamschool.net/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              www.birla.ac.in
                            </a>
                          </span>
                        </li>

                      </ul>

                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="col-12 col-md-8">
                    <p className="border p-2">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.4330075331045!2d77.22790841516168!3d28.526701882459697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce185e69aadf7%3A0x8be8bdf75eede5e5!2sBirla+Vidya+Niketan!5e0!3m2!1sen!2sus!4v1490271952067"
                        width="100%"
                        height="300"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </p>
                  </div>

                </div>

                <p className="mt-4">
                  <b>
                    Meeting timings (without appointment) with the Principal/VP/HM
                    are from 8:30 am to 9:30 am on Monday and Thursday. You may
                    take prior appointment for other days/time.
                  </b>
                </p>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}