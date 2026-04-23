"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

const SLIDES = [
  { img: "/images/generic/activity-new2.jpg",       title: "School Activities", desc: "The School believes that the concept of Clubs is seen as an opportunity for adaptation...", href: "/school-info/school-activities" },
  { img: "/images/generic/student-council-new1.jpg", title: "Student Council",  desc: "Students Council is an elected body that is comprised of student representatives...", href: "/school-info/student-council" },
  { img: "/images/generic/house-system-new.png",     title: "House System",     desc: "The school has a flourishing House System with each House representing unique values...", href: "/school-info/house-system" },
  { img: "/images/generic/assembly-new.jpg",         title: "Assembly Themes",  desc: "Assemblies are a medium to enlighten the young minds and channelize the energy...", href: "/school-info/assembly-themes" },
];

export default function SchoolInfoSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

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
                  <img src={slide.img} className="img-responsive" alt={slide.title} />
                </figure>
                <div className="content">
                  <Link href={slide.href}>
                    <p>
                      <span><strong>{slide.title}</strong></span> {slide.desc}
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
        <button className="facilities-btn prev" onClick={() => emblaApi?.scrollPrev()} aria-label="Previous">
          <i className="fa fa-angle-left" />
        </button>
        <div className="facilities-dots">
          {snaps.map((_, i) => (
            <button key={i} className={`facilities-dot${i === selected ? " active" : ""}`} onClick={() => emblaApi?.scrollTo(i)} />
          ))}
        </div>
        <button className="facilities-btn next" onClick={() => emblaApi?.scrollNext()} aria-label="Next">
          <i className="fa fa-angle-right" />
        </button>
      </div>
    </div>
  );
}
