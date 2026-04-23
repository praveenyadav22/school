"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

const SLIDES = [
  {
    img: "/images/student-council-new1.jpg",
    title: "Student Council",
    desc: "Students Council is an elected body that is comprised of student representatives...",
    href: "/school-info/student-council",
  },
  {
    img: "/images/house-system-new.png",
    title: "House System",
    desc: "The school has a flourishing House System with each House representing a unique set of values...",
    href: "/school-info/house-system",
  },
  {
    img: "/images/assembly-new.jpg",
    title: "Assembly Themes",
    desc: "Assemblies are a medium to enlighten the young minds and channelize their energy...",
    href: "/school-info/assembly-themes",
  },
  {
    img: "/images/activity-new2.jpg",
    title: "School Activities",
    desc: "The School believes that the concept of Clubs is seen as an opportunity for adaptation and growth...",
    href: "/school-info/school-activities",
  },
];

export default function SchoolInfoSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setSnaps(emblaApi.scrollSnapList());
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <div className="facilitiesSlider">
      <div className="facilities-embla" ref={emblaRef}>
        <div className="facilities-embla__container">
          {SLIDES.map((slide, i) => (
            <div className="facilities-embla__slide" key={i}>
              <div className="item">
                <figure>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img width={580} height={366} src={slide.img} className="img-responsive" alt={slide.title} />
                </figure>
                <div className="content">
                  <Link href={slide.href}>
                    <p>
                      <span><strong>{slide.title}</strong></span>{" "}
                      {slide.desc}
                    </p>
                    <span className="link"><i className="fa fa-arrow-circle-right" /> Know More</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="facilities-controls">
        <button className="facilities-btn prev" onClick={scrollPrev} aria-label="Previous">
          <i className="fa fa-angle-left" />
        </button>
        <div className="facilities-dots">
          {snaps.map((_, i) => (
            <button
              key={i}
              className={`facilities-dot${i === selected ? " active" : ""}`}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <button className="facilities-btn next" onClick={scrollNext} aria-label="Next">
          <i className="fa fa-angle-right" />
        </button>
      </div>
    </div>
  );
}
