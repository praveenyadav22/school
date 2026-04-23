"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function EduTeam() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="educate-team">
      <div className="container">
        <div className="inner-heading text-center">
          <h2>LAURELS</h2>
        </div>

        {/* Two main laurel images */}
        <div className="row text-center">
          <div className="col-md-6 col-sm-12 mar-bottom-20 d-flex justify-content-center">
            <div className="imgWrapper">
              <Image
                src="/images/generic/alaknanda-laurels-N1.jpg"
                alt="Alaknanda Laurels"
                width={600}
                height={500}
                className="img-fluid u-image"
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 mar-bottom-20 d-flex justify-content-center">
            <div className="imgWrapper">
              <Image
                src="/images/generic/alaknanda-laurels-N2.jpg"
                alt="Alaknanda Laurels"
                width={600}
                height={500}
                className="img-fluid u-image"
              />
            </div>
          </div>

          {/* Show More button */}
          <div className="col-md-12 col-sm-12 mar-bottom-20 mar-top-40 text-center">
            <button
              className="mt_btn_yellow show-more-btn"
              onClick={() => setShowMore((p) => !p)}
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>

        {/* Hidden / expanded content */}
        {showMore && (
          <div className="row more-content">
            {[1, 2, 3].map((n) => (
              <div key={n} className="col-md-4 col-sm-12 mar-bottom-20">
                <a
                  href={`/documents/alaknanda-laurels-${n}.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={`/images/generic/alaknanda-laurels-${n}.jpg`}
                    alt={`Laurels Award ${n}`}
                    width={400}
                    height={300}
                    className="img-responsive laurels-img"
                    style={{ width: "100%", height: "auto" }}
                  />
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
