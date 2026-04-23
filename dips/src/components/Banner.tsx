"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

const SLIDES = [
  { src: "/images/banner/XGQRSmczo6Gq3MSWMVGS.jpg", alt: "De Indian Public School – Welcome" },
  { src: "/images/banner/932D8VuZZ3N9xMkNPwWM.jpg", alt: "Better education for a better world" },
  { src: "/images/banner/dnQqSI0cLh1lnvdVjim5.jpg", alt: "Exceptional people, exceptional care" },
  { src: "/images/banner/UMbqAzmz2EvLajGYzUy2.jpg", alt: "Excellence in education" },
];

export default function Banner() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo   = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setSnaps(emblaApi.scrollSnapList());
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <div className="hmBanner">
      <div className="tp-banner-container">
        <div className="home-banner-viewport" ref={emblaRef}>
          <div className="home-banner-container">
            {SLIDES.map((slide, i) => (
              <div className="home-banner-slide" key={i}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={slide.src} alt={slide.alt} />
              </div>
            ))}
          </div>
        </div>
        <button className="carousel-control left" onClick={scrollPrev} aria-label="Previous slide">
          <span className="fa fa-angle-left" aria-hidden="true" />
        </button>
        <button className="carousel-control right" onClick={scrollNext} aria-label="Next slide">
          <span className="fa fa-angle-right" aria-hidden="true" />
        </button>
        <ol className="carousel-indicators">
          {snaps.map((_, i) => (
            <li key={i} className={i === selected ? "active" : ""} onClick={() => scrollTo(i)} />
          ))}
        </ol>
      </div>
    </div>
  );
}
