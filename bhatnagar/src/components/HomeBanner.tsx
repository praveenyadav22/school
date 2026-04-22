"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

const SLIDES = [
  { src: "/images/banner/home-hero-1.jpg", alt: "Bhatnagar International School" },
  { src: "/images/banner/home-hero-2.jpg", alt: "Bhatnagar International School" },
  { src: "/images/banner/home-hero-5.jpg", alt: "Bhatnagar International School" },
  { src: "/images/banner/home-hero-N1.jpg", alt: "Bhatnagar International School" },
  { src: "/images/banner/home-hero-N2.jpg", alt: "Bhatnagar International School" },
  { src: "/images/banner/home-hero-N3.jpg", alt: "Bhatnagar International School" },
  { src: "/images/banner/home-hero-N4.jpg", alt: "Bhatnagar International School" },
  { src: "/images/banner/home-hero-N5.jpg", alt: "Bhatnagar International School" },
  { src: "/images/banner/home-hero-N6.jpg", alt: "Bhatnagar International School" },
];

export default function HomeBanner() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo   = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <div className="mainbanner__wrapper owl-theme">
      {/* Viewport */}
      <div className="mainbanner__embla-viewport" ref={emblaRef}>
        <div className="mainbanner__embla-container">
          {SLIDES.map((slide, i) => (
            <div className="mainbanner__embla-slide item" key={i}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={slide.src} alt={slide.alt} />
            </div>
          ))}
        </div>
      </div>

      {/* Nav arrows */}
      <div className="owl-nav">
        <div className="owl-prev" onClick={scrollPrev} aria-label="Previous slide">
          <i className="fa fa-angle-left"></i>
        </div>
        <div className="owl-next" onClick={scrollNext} aria-label="Next slide">
          <i className="fa fa-angle-right"></i>
        </div>
      </div>

      {/* Dots */}
      <div className="owl-dots">
        {SLIDES.map((_, i) => (
          <div
            key={i}
            className={`owl-dot${i === selected ? " active" : ""}`}
            onClick={() => scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          >
            <span></span>
          </div>
        ))}
      </div>
    </div>
  );
}
