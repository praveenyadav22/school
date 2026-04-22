import Breadcrumb from '@/components/shared/Breadcrumb';
import PageBanner from '@/components/shared/PageBanner';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Campus Life | St. Columbo Public School' };

export default function CampusLifePage() {
  return (
    <div className="column_alignment base_margin">
      <PageBanner title="Campus Life" />
      <Breadcrumb />

      <div className="column_alignment section_wrapper">
        <div className="column_alignment main_content align_self_center">
          <span className="page_heading">Life at <b>SCPS</b></span>
          <p style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 40px', color: '#555', fontSize: 18, lineHeight: 1.7 }}>
            Campus life at St. Columbo is dynamic, diverse, and deeply enriching. Every day is a
            new adventure filled with learning, friendship, and growth.
          </p>

          {/* Feature grid */}
          <div className="row_alignment wrap two">
            {[
              {
                title: 'A Home Away From Home',
                img: '/images/generic/excellent_childcare.jpg',
                desc: "Our warm, welcoming campus feels like a second home for students. From the moment they arrive, children are greeted by caring teachers and a supportive peer community.",
              },
              {
                title: 'Academics With Joy',
                img: '/images/generic/spacious_classroom.jpg',
                desc: 'Learning at SCPS is never dull. Smart classrooms, interactive sessions, and project-based activities make every subject come alive.',
              },
              {
                title: 'Sports & Fitness',
                img: '/images/generic/excellent_sports.jpg',
                desc: 'Physical education is a core part of our campus life. Students have access to world-class sports facilities and professional coaching.',
              },
              {
                title: 'Creative Expression',
                img: '/images/generic/state_of_art.jpg',
                desc: 'From art rooms to music studios, our campus is designed to let every creative impulse flourish.',
              },
            ].map((item) => (
              <div key={item.title} style={{ padding: 12, width: 'calc(50% - 24px)', minWidth: 280 }}>
                <div style={{ borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', background: 'white' }}>
                  <img src={item.img} alt={item.title} style={{ width: '100%', height: 240, objectFit: 'cover' }} />
                  <div style={{ padding: 20 }}>
                    <h3 style={{ color: 'var(--colorAccent)', margin: '0 0 10px' }}>{item.title}</h3>
                    <p style={{ margin: 0, color: '#555', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Virtual Tour CTA */}
      <div className="column_alignment section_wrapper align_center" style={{ background: 'linear-gradient(135deg, #711123, #4c0415)', textAlign: 'center' }}>
        <h2 style={{ color: '#EFB137', fontSize: 30, margin: '0 0 16px', fontFamily: 'var(--heading-font)' }}>
          See It For Yourself
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: 500, margin: '0 auto 24px', fontSize: 17 }}>
          Take a virtual tour of our beautiful campus and experience the SCPS difference.
        </p>
        <a
          href="https://www.youtube.com/embed/PInJ0Qwu80g"
          target="_blank"
          className="accent_button"
          style={{ background: '#EFB137', color: '#212121', padding: '14px 32px', fontSize: 16 }}
        >
          Watch Virtual Tour
        </a>
      </div>
    </div>
  );
}
