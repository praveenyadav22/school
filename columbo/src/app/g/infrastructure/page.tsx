import Breadcrumb from '@/components/shared/Breadcrumb';
import PageBanner from '@/components/shared/PageBanner';
import SidebarLayout from '@/components/shared/SidebarLayout';
import { campusLifeSidebarLinks } from '@/lib/sidebarLinks';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Infrastructure | St. Columbo Public School' };

const infra = [
  { src: '/images/generic/spacious_classroom.jpg', title: 'Spacious Digital Classrooms', desc: 'Smart boards and projectors in every classroom for interactive learning.' },
  { src: '/images/generic/state_of_art.jpg', title: 'Computer Lab', desc: 'Latest computers with high-speed internet access and modern software.' },
  { src: '/images/generic/modern_science.jpg', title: 'Science Laboratories', desc: 'Fully equipped physics, chemistry, and biology labs for hands-on learning.' },
  { src: '/images/generic/well_stocked_libs.jpg', title: 'Library', desc: 'Over 10,000 books and digital resources to foster a reading culture.' },
  { src: '/images/generic/excellent_sports.jpg', title: 'Sports Complex', desc: 'Basketball court, football ground, and indoor games facilities.' },
  { src: '/images/generic/excellent_childcare.jpg', title: 'Childcare Centre', desc: 'Dedicated early learning spaces designed for young children.' },
];

export default function InfrastructurePage() {
  return (
    <div className="column_alignment base_margin" style={{ background: 'white' }}>
      <PageBanner title="Infrastructure" />
      <Breadcrumb />

      <SidebarLayout quickLinks={campusLifeSidebarLinks} activeHref="/g/infrastructure">
        <div className="column_alignment about_content_wrapper">
          <span className="page_heading" style={{ alignSelf: 'flex-start' }}>World-Class <b>Infrastructure</b></span>
          <p>
            Our campus is designed to provide a stimulating environment for learning, creativity, and growth.
            Every facility has been carefully planned to support holistic student development.
          </p>
          <div className="row_alignment wrap" style={{ margin: '16px -8px' }}>
            {infra.map((item) => (
              <div key={item.title} style={{ width: 'calc(50% - 16px)', minWidth: 220, margin: 8 }}>
                <div style={{ borderRadius: 10, overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.09)', background: 'white', border: '1px solid #f0f0f0' }}>
                  <img src={item.src} alt={item.title} style={{ width: '100%', height: 180, objectFit: 'cover' }} />
                  <div style={{ padding: '12px 16px' }}>
                    <strong style={{ color: 'var(--colorAccent)', fontSize: 15 }}>{item.title}</strong>
                    <p style={{ margin: '6px 0 0', fontSize: 13, color: '#666', lineHeight: 1.5 }}>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SidebarLayout>
    </div>
  );
}
