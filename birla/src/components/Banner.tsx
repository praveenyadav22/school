"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

const slides = [
  { src: "/images/banner/hero-1.jpg", alt: "Slide 1" },
  { src: "/images/banner/hero-2.jpg", alt: "Slide 2" },
  { src: "/images/banner/hero-3.jpg", alt: "Slide 3" },
  { src: "/images/banner/hero-4.jpg", alt: "Slide 4" },
];

const Banner = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo  = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", () => setSelectedIndex(emblaApi.selectedScrollSnap()));
  }, [emblaApi]);

  return (
    <section className="c-banner">

      {/* Viewport */}
      <div className="c-banner__viewport" ref={emblaRef}>
        <div className="c-banner__container">
          {slides.map((slide, i) => (
            <div className="c-banner__slide" key={i}>
              <img src={slide.src} alt={slide.alt} className="c-banner__img" />
            </div>
          ))}
        </div>
      </div>

      {/* Prev arrow */}
      <button className="c-banner__arrow c-banner__arrow--prev" onClick={scrollPrev} aria-label="Previous">
        <i className="ri-arrow-left-s-line" />
      </button>

      {/* Next arrow */}
      <button className="c-banner__arrow c-banner__arrow--next" onClick={scrollNext} aria-label="Next">
        <i className="ri-arrow-right-s-line" />
      </button>

      {/* Dots */}
      {/* <div className="c-banner__dots">
        {scrollSnaps.map((_, i) => (
          <button
            key={i}
            className={`c-banner__dot${i === selectedIndex ? " c-banner__dot--active" : ""}`}
            onClick={() => scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div> */}

    </section>
  );
};

export default Banner;