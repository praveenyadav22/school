"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

const SLIDES = [
  {
    src: "/images/banner/slide-1.jpg",
    alt: "Welcome to NGFS Alaknanda – Slide 1",
    badge: "Welcome To NGFS Alaknanda",
    title: "Explore the World of Our Graduates",
    btnWhite:  { label: "Know More",       href: "/about-school" },
    btnYellow: { label: "Admission Open",  href: "/admission-procedure" },
    captionClass: "",
  },
  {
    src: "/images/banner/slide-2.jpg",
    alt: "Better education for a better world – Slide 2",
    badge: "Welcome To NGFS Alaknanda",
    title: "Better education for a better world",
    btnWhite:  { label: "Know More",   href: "/about-school" },
    btnYellow: { label: "Contact Us",  href: "#" },
    captionClass: "caption_slide1_right",
  },
  {
    src: "/images/banner/slide-1.jpg",
    alt: "Exceptional People Exceptional Care – Slide 3",
    badge: "Welcome To NGFS Alaknanda",
    title: "Exceptional People, Exceptional Care",
    btnWhite:  { label: "Know More",   href: "/about-school" },
    btnYellow: { label: "Contact Us",  href: "#" },
    captionClass: "caption_slide1_center cap-new",
  },
];

export default function Banner() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps]       = useState<number[]>([]);

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
    <div id="home-banner" className="ps_indicators_l ps_control_rotate_f kbrns_zoomInOut">

      {/* Embla viewport */}
      <div className="home-banner-viewport" ref={emblaRef}>
        <div className="home-banner-container">
          {SLIDES.map((slide, i) => (
            <div className="home-banner-slide" key={i}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={slide.src} alt={slide.alt} />

              {/* Caption overlay */}
              <div className={`caption_slide1${slide.captionClass ? ` ${slide.captionClass}` : ""}`}>
                <h3>{slide.badge}</h3>
                <h1>{slide.title}</h1>
                <a className="mt_btn_white-bor" href={slide.btnWhite.href}>
                  {slide.btnWhite.label}
                </a>
                <a className="mt_btn_yellow" href={slide.btnYellow.href}>
                  {slide.btnYellow.label}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prev arrow */}
      <button
        className="carousel-control left"
        onClick={scrollPrev}
        aria-label="Previous slide"
      >
        <span className="fa fa-angle-left" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </button>

      {/* Next arrow */}
      <button
        className="carousel-control right"
        onClick={scrollNext}
        aria-label="Next slide"
      >
        <span className="fa fa-angle-right" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </button>

      {/* Dot indicators */}
      <ol className="carousel-indicators">
        {snaps.map((_, i) => (
          <li
            key={i}
            className={i === selected ? "active" : ""}
            onClick={() => scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </ol>
    </div>
  );
}
