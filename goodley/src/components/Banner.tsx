"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

const SLIDES = [
  {
    src: "/images/banner/slide-1.png",
    alt: "Slide 1",
    caption: { p: "Tomorrow belongs to those, who prepare", h3: "FOR IT TODAY." },
  },
  { src: "/images/banner/slide-2.png", alt: "Slide 2", caption: null },
  { src: "/images/banner/slide-3.png", alt: "Slide 3", caption: null },
  { src: "/images/banner/slide-4.png", alt: "Slide 4", caption: null },
  { src: "/images/banner/slide-5.png", alt: "Slide 5", caption: null },
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
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setSnaps(emblaApi.scrollSnapList());
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <div id="carouselExampleIndicators" className="carousel slide embla-carousel">
      {/* Dot indicators */}
      <ol className="carousel-indicators">
        {snaps.map((_, i) => (
          <li
            key={i}
            data-target="#carouselExampleIndicators"
            data-slide-to={i}
            className={i === selected ? "active" : ""}
            onClick={() => scrollTo(i)}
          />
        ))}
      </ol>

      {/* Slides */}
      <div className="carousel-inner embla-viewport" ref={emblaRef} role="listbox">
        <div className="embla-container">
          {SLIDES.map((slide, i) => (
            <div key={i} className={`item embla-slide${i === selected ? " active" : ""}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={slide.src} alt={slide.alt} className="img-responsive" />
              {slide.caption && (
                <div className="carousel-caption">
                  <p>{slide.caption.p}</p>
                  <h3>{slide.caption.h3}</h3>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <button className="left carousel-control" onClick={scrollPrev} aria-label="Previous slide">
        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </button>
      <button className="right carousel-control" onClick={scrollNext} aria-label="Next slide">
        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
}
