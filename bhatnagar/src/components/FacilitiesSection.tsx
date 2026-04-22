"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

const FACILITIES = [
  {
    img: "/images/generic/home-physics-lab.jpg",
    title: "Physics Laboratory",
    desc: "Physics lab situated on the first floor of the school building comprises of the main lab and a store room. The lab is very well lit and ven...",
    href: "/physics-laboratory",
  },
  {
    img: "/images/generic/home-chemistry-lab.jpg",
    title: "Chemistry Laboratory",
    desc: "Chemistry lab is situated on the first floor of the school building. It comprises of main lab and a store room and a separate place for...",
    href: "/chemistry-laboratory",
  },
  {
    img: "/images/generic/home-bio-lab.jpg",
    title: "Biotechnology Laboratory",
    desc: "Science cannot be imagined without laboratory and experiments, laboratory is that place where students extend their theoretical...",
    href: "/biotechnology-laboratory",
  },
  {
    img: "/images/generic/home-maths-lab.jpg",
    title: "Maths Laboratory",
    desc: "Maths laboratory project in Bhatnagar International School is not a new concept. The active department of mathematics always provided...",
    href: "/maths-laboratory",
  },
  {
    img: "/images/generic/home-computer-lab.jpg",
    title: "Computer Lab",
    desc: "The school has the state of the art Computer lab-Gigabyte. The school ensures that the computers are replaced every few years to keep...",
    href: "/computer-lab",
  },
];

export default function FacilitiesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
  });

  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setPrevDisabled(!emblaApi.canScrollPrev());
      setNextDisabled(!emblaApi.canScrollNext());
    };
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <div className="facilitiesBis__wrapper highlightedBg themeSlide">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-xs-12">
            <section className="main-head">
              <h2>Facilities @ BIS</h2>
              <p>Bhatnagar International School</p>
            </section>

            <div className="facilitiesBis owl-theme themeSlidebtn">
              {/* Embla viewport */}
              <div className="facilitiesBis__embla-viewport" ref={emblaRef}>
                <div className="facilitiesBis__embla-container">
                  {FACILITIES.map((fac, i) => (
                    <div className="facilitiesBis__embla-slide item" key={i}>
                      <div className="facilitiesBis-content">
                        <figure>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={fac.img} alt="facilities" className="img-responsive" />
                        </figure>
                        <h3>{fac.title}</h3>
                        <p>{fac.desc}</p>
                        <Link href={fac.href} className="themeButton">Know More</Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nav */}
              <div className="owl-nav">
                <div
                  className={`owl-prev${prevDisabled ? " disabled" : ""}`}
                  onClick={scrollPrev}
                  aria-label="Previous"
                >
                  <i className="fa fa-angle-left"></i>
                </div>
                <div
                  className={`owl-next${nextDisabled ? " disabled" : ""}`}
                  onClick={scrollNext}
                  aria-label="Next"
                >
                  <i className="fa fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
