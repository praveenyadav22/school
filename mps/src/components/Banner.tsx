"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

const SLIDES = [
  { src: "/images/banner/slide-1.jpg",  alt: "Modern Public School — Slide 1"  },
  { src: "/images/banner/slide-4.jpg",  alt: "Modern Public School — Slide 2"  },
  { src: "/images/banner/slide-7.jpg",  alt: "Modern Public School — Slide 3"  },
  { src: "/images/banner/slide-2.jpg",  alt: "Modern Public School — Slide 4"  },
  { src: "/images/banner/slide-3.jpg",  alt: "Modern Public School — Slide 5"  },
  { src: "/images/banner/slide-5.jpg",  alt: "Modern Public School — Slide 6"  },
  { src: "/images/banner/slide-6.jpg",  alt: "Modern Public School — Slide 7"  },
  { src: "/images/banner/slide-8.jpg",  alt: "Modern Public School — Slide 8"  },
  { src: "/images/banner/slide-9.jpg",  alt: "Modern Public School — Slide 9"  },
  { src: "/images/banner/slide-10.jpg", alt: "Modern Public School — Slide 10" },
];

export default function Banner() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
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
    <div className="bannersection">
      <div className="bannerWrap fixedHeight">

        {/* Embla viewport */}
        <div className="bannerSlider" ref={emblaRef}>
          <div className="bannerSlider__container">
            {SLIDES.map((slide, i) => (
              <div className="bannerSlider__slide" key={i}>
                <div className="item">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={slide.src} alt={slide.alt} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prev / Next */}
        <button className="bannerWrap__prev" onClick={scrollPrev} aria-label="Previous slide" />
        <button className="bannerWrap__next" onClick={scrollNext} aria-label="Next slide" />

        {/* Dots */}
        <ol className="bannerWrap__dots">
          {snaps.map((_, i) => (
            <li
              key={i}
              className={`bannerWrap__dot${i === selected ? " is-selected" : ""}`}
              onClick={() => scrollTo(i)}
              role="button"
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </ol>

      </div>
    </div>
  );
}
