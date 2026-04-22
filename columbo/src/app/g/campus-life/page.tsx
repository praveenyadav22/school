import Breadcrumb from '@/components/shared/Breadcrumb';
import PageBanner from '@/components/shared/PageBanner';
import SidebarLayout from '@/components/shared/SidebarLayout';
import { campusLifeSidebarLinks } from '@/lib/sidebarLinks';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Campus Life | St. Columbo Public School' };

const highlights = [
  { title: 'A Home Away From Home', img: '/images/generic/excellent_childcare.jpg', desc: "Our warm, welcoming campus feels like a second home. From the moment they arrive, children are greeted by caring teachers and a supportive peer community." },
  { title: 'Academics With Joy', img: '/images/generic/spacious_classroom.jpg', desc: 'Smart classrooms, interactive sessions, and project-based activities make every subject come alive at SCPS.' },
  { title: 'Sports & Fitness', img: '/images/generic/excellent_sports.jpg', desc: 'Physical education is a core part of campus life. Students have access to world-class sports facilities and professional coaching.' },
  { title: 'Creative Expression', img: '/images/generic/state_of_art.jpg', desc: 'From art rooms to music studios, our campus is designed to let every creative impulse flourish.' },
];

export default function CampusLifePage() {
  return (
    <div className="column_alignment base_margin" style={{ background: 'white' }}>
      <PageBanner title="Campus Life" />
      <Breadcrumb />

      <SidebarLayout quickLinks={campusLifeSidebarLinks} activeHref="/g/campus-life">
        <div className="column_alignment about_content_wrapper">
          <span className="page_heading" style={{ alignSelf: 'flex-start' }}>Life at <b>SCPS</b></span>
          <p>
            Campus life at St. Columbo is dynamic, diverse, and deeply enriching. Every day is a
            new adventure filled with learning, friendship, and growth.
          </p>
          <div className="row_alignment wrap" style={{ margin: '16px -8px' }}>
            {highlights.map((item) => (
              <div key={item.title} style={{ width: 'calc(50% - 16px)', minWidth: 220, margin: 8 }}>
                <div style={{ borderRadius: 10, overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.09)', background: 'white', border: '1px solid #f0f0f0' }}>
                  <img src={item.img} alt={item.title} style={{ width: '100%', height: 180, objectFit: 'cover' }} />
                  <div style={{ padding: '14px 16px' }}>
                    <strong style={{ color: 'var(--colorAccent)', fontSize: 15 }}>{item.title}</strong>
                    <p style={{ margin: '6px 0 0', fontSize: 13, color: '#555', lineHeight: 1.5 }}>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <a
            href="https://www.youtube.com/embed/PInJ0Qwu80g"
            target="_blank"
            className="accent_button"
            style={{ alignSelf: 'flex-start', marginTop: 8 }}
          >
            Watch Virtual Tour
          </a>
        </div>
      </SidebarLayout>
    </div>
  );
}
