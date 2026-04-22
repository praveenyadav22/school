import Breadcrumb from '@/components/shared/Breadcrumb';
import PageBanner from '@/components/shared/PageBanner';
import SidebarLayout from '@/components/shared/SidebarLayout';
import { campusLifeSidebarLinks } from '@/lib/sidebarLinks';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Events & Celebrations | St. Columbo Public School' };

const events = [
  { title: 'Annual Day', date: 'January 2025', icon: '🎭', desc: 'A grand celebration showcasing student talent in music, dance, and drama.' },
  { title: 'Sports Day', date: 'December 2024', icon: '🏆', desc: 'Annual sports meet where students compete across a range of athletic disciplines.' },
  { title: 'Science Exhibition', date: 'November 2024', icon: '🔬', desc: 'Students present innovative science projects, fostering creativity and curiosity.' },
  { title: 'Independence Day', date: 'August 2024', icon: '🇮🇳', desc: 'Patriotic celebrations with cultural performances and flag hoisting.' },
  { title: 'Republic Day', date: 'January 2025', icon: '🎪', desc: 'National pride celebrations with student parade and cultural presentations.' },
  { title: "Children's Day", date: 'November 2024', icon: '🎉', desc: 'Fun-filled events organised for and by students on this special occasion.' },
];

export default function EventsPage() {
  return (
    <div className="column_alignment base_margin" style={{ background: 'white' }}>
      <PageBanner title="Events & Celebrations" />
      <Breadcrumb />

      <SidebarLayout quickLinks={campusLifeSidebarLinks} activeHref="/g/events-celebrations">
        <div className="column_alignment about_content_wrapper">
          <span className="page_heading" style={{ alignSelf: 'flex-start' }}>Events & <b>Celebrations</b></span>
          <p>
            Life at SCPS is vibrant and full of memorable experiences. Here are some of the
            highlights from our academic year.
          </p>
          <div className="row_alignment wrap" style={{ margin: '16px -8px' }}>
            {events.map((ev) => (
              <div
                key={ev.title}
                style={{
                  width: 'calc(50% - 16px)',
                  minWidth: 200,
                  margin: 8,
                  background: 'white',
                  border: '1px solid #eee',
                  borderRadius: 10,
                  padding: 20,
                  borderTop: '3px solid var(--colorAccent)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                }}
              >
                <span style={{ fontSize: 34, display: 'block', marginBottom: 6 }}>{ev.icon}</span>
                <span style={{ fontSize: 11, color: 'var(--colorAccent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>{ev.date}</span>
                <strong style={{ display: 'block', fontSize: 16, color: '#212121', margin: '6px 0' }}>{ev.title}</strong>
                <p style={{ margin: 0, fontSize: 13, color: '#555', lineHeight: 1.5 }}>{ev.desc}</p>
              </div>
            ))}
          </div>
          <div className="row_alignment wrap" style={{ marginTop: 24, gap: 12 }}>
            {['/images/generic/school_topper_x_1.jpg', '/images/generic/school_topper_x_2.jpg'].map((src) => (
              <img key={src} src={src} alt="School Excellence" style={{ borderRadius: 12, width: 'calc(50% - 6px)', minWidth: 200, boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }} />
            ))}
          </div>
        </div>
      </SidebarLayout>
    </div>
  );
}
