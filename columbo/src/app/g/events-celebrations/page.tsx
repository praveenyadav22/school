import Breadcrumb from '@/components/shared/Breadcrumb';
import PageBanner from '@/components/shared/PageBanner';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Events & Celebrations | St. Columbo Public School' };

const events = [
  { title: 'Annual Day', date: 'January 2025', icon: '🎭', desc: 'A grand celebration showcasing student talent in music, dance, drama, and sports.' },
  { title: 'Sports Day', date: 'December 2024', icon: '🏆', desc: 'Annual sports meet where students compete across a range of athletic disciplines.' },
  { title: 'Science Exhibition', date: 'November 2024', icon: '🔬', desc: 'Students present innovative science projects, fostering creativity and curiosity.' },
  { title: 'Independence Day', date: 'August 2024', icon: '🇮🇳', desc: 'Patriotic celebrations with cultural performances and flag hoisting.' },
  { title: 'Republic Day', date: 'January 2025', icon: '🎪', desc: 'National pride celebrations with student parade and cultural presentations.' },
  { title: "Children's Day", date: 'November 2024', icon: '🎉', desc: 'Fun-filled events organised for and by students on this special occasion.' },
];

export default function EventsPage() {
  return (
    <div className="column_alignment base_margin">
      <PageBanner title="Events & Celebrations" />
      <Breadcrumb />
      <div className="column_alignment section_wrapper">
        <div className="column_alignment main_content align_self_center">
          <span className="page_heading">Events & <b>Celebrations</b></span>
          <p style={{ textAlign: 'center', maxWidth: 650, margin: '0 auto 40px', color: '#555', fontSize: 18, lineHeight: 1.7 }}>
            Life at SCPS is vibrant and full of memorable experiences. Here are some of the highlights from our academic year.
          </p>
          <div className="row_alignment wrap three">
            {events.map((ev) => (
              <div
                key={ev.title}
                className="column_alignment"
                style={{
                  margin: 10,
                  background: 'white',
                  borderRadius: 12,
                  padding: 24,
                  boxShadow: '0 4px 16px rgba(0,0,0,0.09)',
                  width: 'calc(33.33% - 20px)',
                  position: 'relative',
                  borderTop: '4px solid var(--colorAccent)',
                }}
              >
                <span style={{ fontSize: 40, marginBottom: 12, display: 'block' }}>{ev.icon}</span>
                <span style={{ fontSize: 12, color: 'var(--colorAccent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>
                  {ev.date}
                </span>
                <h3 style={{ color: '#212121', margin: '8px 0' }}>{ev.title}</h3>
                <p style={{ margin: 0, color: '#666', lineHeight: 1.5 }}>{ev.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Excellence Toppers */}
      <div className="column_alignment section_wrapper" style={{ background: '#f8f8f8' }}>
        <div className="column_alignment main_content align_self_center">
          <span className="page_heading">Celebrating <b>Excellence</b></span>
          <div className="row_alignment wrap" style={{ marginTop: 24, justifyContent: 'center', gap: 16 }}>
            {['/images/generic/school_topper_x_1.jpg', '/images/generic/school_topper_x_2.jpg'].map((src) => (
              <img
                key={src}
                src={src}
                alt="School Toppers"
                style={{ borderRadius: 16, width: '45%', minWidth: 280, boxShadow: '0 4px 20px rgba(0,0,0,0.12)' }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
