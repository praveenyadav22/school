"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";

// ── Logo images — same as browser: logo-1.png to logo-9.png ──
const LOGOS = [
  { src: "/images/logo/logo-1.png", alt: "Partner Logo 1" },
  { src: "/images/logo/logo-2.png", alt: "Partner Logo 2" },
  { src: "/images/logo/logo-3.png", alt: "Partner Logo 3" },
  { src: "/images/logo/logo-4.png", alt: "Partner Logo 4" },
  { src: "/images/logo/logo-5.png", alt: "Partner Logo 5" },
  { src: "/images/logo/logo-6.png", alt: "Partner Logo 6" },
  { src: "/images/logo/logo-7.png", alt: "Partner Logo 7" },
  { src: "/images/logo/logo-8.png", alt: "Partner Logo 8" },
  { src: "/images/logo/logo-9.png", alt: "Partner Logo 9" },
];

const LogoSlider = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,           // infinite loop — same as Owl cloned items
      align: "start",
      dragFree: true,       // smooth free-drag like Owl's mouseDrag
      slidesToScroll: 1,
    },
    [
      AutoPlay({
        delay: 2500,
        stopOnInteraction: false,   // keeps going after user interaction
        stopOnMouseEnter: true,     // pauses on hover — same as Owl behaviour
      }),
    ]
  );

  return (
    <div className="c-logoslider">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="c-logoslider__section">

              {/* Embla viewport */}
              <div className="logoslider" ref={emblaRef}>
                <div className="logoslider__track">
                  {LOGOS.map((logo, i) => (
                    <div className="logoslider__slide" key={i}>
                      <div className="item">
                        <figure>
                          <img src={logo.src} className="u-img" alt={logo.alt} />
                        </figure>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
