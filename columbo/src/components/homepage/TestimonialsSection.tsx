'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { testimonials } from '@/lib/navigation';

const videoTestimonials = [
  'https://www.youtube.com/embed/ALa3hyZMiVg?si=mQPtgYbhrLwm-IsE',
  'https://www.youtube.com/embed/vxIs-au_y0M',
  'https://www.youtube.com/embed/6W3MXqXdv_w',
];

export default function TestimonialsSection() {
  const [textRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);
  const [videoRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 6000 })]);

  return (
    <div className="column_alignment section_wrapper">
      <div className="column_alignment main_content align_self_center">
        <span className="page_heading">
          Stories That Shine - <b>In Words &amp; Frames</b>
        </span>
        <div className="column_alignment main_content align_self_center" style={{ marginTop: 24 }}>
          <div className="row_column_alignment">
            {/* Text Testimonials */}
            <div className="column_alignment fill" style={{ minWidth: '49%' }}>
              <div ref={textRef} style={{ overflow: 'hidden' }}>
                <div style={{ display: 'flex' }}>
                  {testimonials.map((t) => (
                    <div key={t.name} style={{ flex: '0 0 100%', minWidth: 0 }}>
                      <div className="column_alignment testimonial_item_wrapper">
                        <img src={t.image} alt={t.name} />
                        <div className="column_alignment">
                          <span>{t.name}</span>
                          <span>{t.grade}</span>
                          <p>{t.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Separator */}
            <span
              className="on_desktop align_self_center"
              style={{
                width: 2,
                height: 300,
                margin: '0 8px',
                background: 'linear-gradient(to bottom, transparent, var(--colorAccent), transparent)',
                flexShrink: 0,
              }}
            />

            {/* Video Testimonials */}
            <div className="column_alignment fill" style={{ minWidth: '49%' }}>
              <div ref={videoRef} style={{ overflow: 'hidden' }}>
                <div style={{ display: 'flex' }}>
                  {videoTestimonials.map((src) => (
                    <div key={src} style={{ flex: '0 0 100%', minWidth: 0 }}>
                      <div className="column_alignment testimonial_item_wrapper video">
                        <iframe
                          src={src}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                          title="Testimonial Video"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
