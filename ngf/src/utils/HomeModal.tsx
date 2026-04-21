"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/**
 * HomeModal — shows on homepage load/hard-refresh only.
 * Uses sessionStorage so it only shows once per browser session.
 * Image: /images/generic/home-pop-up-other-classes.jpg
 */
export default function HomeModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show only once per session
    const seen = sessionStorage.getItem("ngfs_modal_seen");
    if (!seen) {
      setVisible(true);
      sessionStorage.setItem("ngfs_modal_seen", "1");
    }
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="home-modal__backdrop" onClick={() => setVisible(false)} />

      {/* Dialog */}
      <div
        className="home-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-label="School announcement"
      >
        <div className="home-modal__content">
          {/* Close button */}
          <button
            className="home-modal__close"
            onClick={() => setVisible(false)}
            aria-label="Close announcement"
          >
            &times;
          </button>

          {/* Image only — matching original */}
          <div className="home-modal__body">
            <Image
              src="/images/generic/home-pop-up-other-classes.jpg"
              alt="Other Classes Registration"
              width={600}
              height={450}
              className="img-fluid rounded-3"
              style={{ width: "100%", height: "auto" }}
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
}
