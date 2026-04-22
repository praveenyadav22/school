'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback } from 'react';

const slides = [
  { src: '/images/generic/school_topper_x_1.jpg', alt: 'School Topper' },
  { src: '/images/generic/school_topper_x_2.jpg', alt: 'School Topper 2' },
];

export default function ExcellenceSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="column_alignment section_wrapper">
      <div className="column_alignment main_content align_self_center">
        <span className="page_heading">
          Celebrating <b>Excellence</b>
        </span>
        <div style={{ position: 'relative', marginTop: 24 }}>
          <div ref={emblaRef} style={{ overflow: 'hidden' }}>
            <div style={{ display: 'flex' }}>
              {slides.map((slide) => (
                <div key={slide.src} style={{ flex: '0 0 100%', minWidth: 0 }}>
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    style={{
                      borderRadius: 24,
                      width: 'calc(100% - 100px)',
                      margin: '0 auto',
                      display: 'block',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Nav Buttons */}
          <button
            onClick={scrollPrev}
            style={{
              position: 'absolute',
              left: 12,
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'var(--colorAccent)',
              border: 'none',
              color: 'white',
              width: 40,
              height: 40,
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollNext}
            style={{
              position: 'absolute',
              right: 12,
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'var(--colorAccent)',
              border: 'none',
              color: 'white',
              width: 40,
              height: 40,
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
