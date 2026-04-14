"use client";

import { useState } from "react";

export default function TransferCertificatePage() {
  const [enrollmentNo, setEnrollmentNo] = useState("");

  const handleSubmit = () => {
    if (!enrollmentNo.trim()) return;
    // TODO: connect to backend API with enrollmentNo
    alert(`Searching for enrollment number: ${enrollmentNo}`);
  };

  return (
    <>
      <div className="body-conent ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="inner-content">

                <div className="contentsection noborder mt-4 mb-4">
                  <div className="row">
                    <div className="col-md-12 col-xs-12">
                      <div className="fee__wrapper">

                        <h2>Download Student Transfer Certificate</h2>

                        {/* Browser: <form id="contact-form">
                            Using div + onClick instead of <form> —
                            Next.js/React pattern avoids HTML form submission */}
                        <div className="fee__wrapper-form">
                          <div className="input-group col-md-12">

                            {/* Browser: <input class="search-query form-control"> */}
                            <input
                              type="text"
                              className="search-query form-control"
                              name="enrollmentnumber"
                              value={enrollmentNo}
                              onChange={(e) => setEnrollmentNo(e.target.value)}
                              placeholder="Enter Your Enrollment Number*"
                              id="AdmissionNo"
                              required
                              onKeyDown={(e) => { if (e.key === "Enter") handleSubmit(); }}
                            />

                            {/* Browser: <span class="input-group-btn"><button class="btn btn-primary"> */}
                            <span className="input-group-btn">
                              <button
                                type="button"
                                className="btn btn-primary"
                                name="submit-form"
                                onClick={handleSubmit}
                              >
                                Submit
                              </button>
                            </span>

                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
