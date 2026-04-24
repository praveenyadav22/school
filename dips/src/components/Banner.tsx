"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

const SLIDES = [
  { src: "/images/banner/XGQRSmczo6Gq3MSWMVGS.jpg", alt: "De Indian Public School" },
  { src: "/images/banner/932D8VuZZ3N9xMkNPwWM.jpg", alt: "De Indian Public School" },
  { src: "/images/banner/dnQqSI0cLh1lnvdVjim5.jpg", alt: "De Indian Public School" },
  { src: "/images/banner/UMbqAzmz2EvLajGYzUy2.jpg", alt: "De Indian Public School" },
];

export default function Banner() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );
  const [selected, setSelected] = useState(0);
  const [count, setCount] = useState(SLIDES.length);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setCount(emblaApi.scrollSnapList().length);
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <div className="hmBanner">
      {/* Main viewport */}
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

      {/* Left / Right arrows - positioned absolutely on sides like live site */}
      <button className="tp-leftarrow" onClick={scrollPrev} aria-label="Previous slide">
        <i className="fa fa-angle-left" />
      </button>
      <button className="tp-rightarrow" onClick={scrollNext} aria-label="Next slide">
        <i className="fa fa-angle-right" />
      </button>

      {/* Vertical bullet dots (right side, like live) */}
      <div className="verticalbullet">
        {Array.from({ length: count }, (_, i) => (
          <button
            key={i}
            className={`bullet${i === selected ? " selected" : ""}`}
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll icon (right side bottom, like live) */}
      <div className="scroll-icon">
        <div className="mouse" />
        <div className="end-top" />
      </div>
    </div>
  );
}
