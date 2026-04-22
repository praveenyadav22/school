import Breadcrumb from '@/components/shared/Breadcrumb';
import PageBanner from '@/components/shared/PageBanner';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Infrastructure | St. Columbo Public School' };

const infra = [
  { src: '/images/generic/spacious_classroom.jpg', title: 'Spacious Digital Classrooms', desc: 'Smart boards and projectors in every classroom.' },
  { src: '/images/generic/state_of_art.jpg', title: 'Computer Lab', desc: 'Latest computers with high-speed internet access.' },
  { src: '/images/generic/modern_science.jpg', title: 'Science Laboratories', desc: 'Fully equipped physics, chemistry, and biology labs.' },
  { src: '/images/generic/well_stocked_libs.jpg', title: 'Library', desc: 'Over 10,000 books and digital resources.' },
  { src: '/images/generic/excellent_sports.jpg', title: 'Sports Complex', desc: 'Basketball court, football ground, indoor games room.' },
  { src: '/images/generic/excellent_childcare.jpg', title: 'Childcare Centre', desc: 'Dedicated early learning spaces for young children.' },
];

export default function InfrastructurePage() {
  return (
    <div className="column_alignment base_margin">
      <PageBanner title="Infrastructure" />
      <Breadcrumb />
      <div className="column_alignment section_wrapper">
        <div className="column_alignment main_content align_self_center">
          <span className="page_heading">World-Class <b>Infrastructure</b></span>
          <p style={{ textAlign: 'center', maxWidth: 650, margin: '0 auto 32px', color: '#555', fontSize: 18, lineHeight: 1.7 }}>
            Our campus is designed to provide a stimulating environment for learning, creativity, and growth.
          </p>
          <div className="row_alignment wrap three">
            {infra.map((item) => (
              <div key={item.title} style={{ padding: 8, width: 'calc(33.33% - 16px)' }} className="on_desktop">
                <div style={{ borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.1)', background: 'white' }}>
                  <img src={item.src} alt={item.title} style={{ width: '100%', height: 220, objectFit: 'cover' }} />
                  <div style={{ padding: 16 }}>
                    <h3 style={{ color: 'var(--colorAccent)', margin: '0 0 8px' }}>{item.title}</h3>
                    <p style={{ margin: 0, color: '#666', lineHeight: 1.5 }}>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Mobile view */}
          <div className="row_alignment wrap on_mobile" style={{ flexDirection: 'column', display: 'none' }}>
            {infra.map((item) => (
              <div key={item.title} style={{ padding: 8, width: '100%' }}>
                <div style={{ borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.1)', background: 'white' }}>
                  <img src={item.src} alt={item.title} style={{ width: '100%', height: 220, objectFit: 'cover' }} />
                  <div style={{ padding: 16 }}>
                    <h3 style={{ color: 'var(--colorAccent)', margin: '0 0 8px' }}>{item.title}</h3>
                    <p style={{ margin: 0, color: '#666', lineHeight: 1.5 }}>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
