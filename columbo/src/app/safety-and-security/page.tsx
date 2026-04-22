import Breadcrumb from '@/components/shared/Breadcrumb';
import PageBanner from '@/components/shared/PageBanner';
import SidebarLayout from '@/components/shared/SidebarLayout';
import { aboutSidebarLinks } from '@/lib/sidebarLinks';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Safety & Security | St. Columbo Public School' };

const safetyFeatures = [
  { icon: '📹', title: 'CCTV Surveillance', desc: '24/7 CCTV coverage across all campus areas including classrooms, corridors, and entry/exit points.' },
  { icon: '🚌', title: 'GPS-Tracked Buses', desc: 'All school buses are equipped with GPS tracking, allowing parents to monitor their child\'s journey in real time.' },
  { icon: '🛡️', title: 'Trained Security Staff', desc: 'Professional security personnel stationed at all entry points with strict visitor management protocols.' },
  { icon: '🚒', title: 'Fire Safety', desc: 'Fire extinguishers, smoke detectors, and regular fire drills ensure campus-wide preparedness.' },
  { icon: '🏥', title: 'Medical Facility', desc: 'An in-campus medical room with a trained nurse and first-aid support for emergencies.' },
  { icon: '📱', title: 'Parent Communication', desc: 'Real-time parent notifications via SMS and app alerts for attendance, safety incidents, and updates.' },
];

export default function SafetySecurityPage() {
  return (
    <div className="column_alignment base_margin" style={{ background: 'white' }}>
      <PageBanner title="Safety & Security" />
      <Breadcrumb />

      <SidebarLayout quickLinks={aboutSidebarLinks} activeHref="/safety-and-security">
        <div className="column_alignment about_content_wrapper">
          <span className="page_heading" style={{ alignSelf: 'flex-start' }}>
            Your Child&apos;s Safety is Our <b>Top Priority</b>
          </span>
          <p>
            At St. Columbo Public School, we have implemented a comprehensive safety infrastructure
            to ensure every student is safe, secure, and cared for at all times.
          </p>
          <div className="row_alignment wrap" style={{ margin: '16px -8px' }}>
            {safetyFeatures.map((f) => (
              <div
                key={f.title}
                style={{
                  width: 'calc(50% - 16px)',
                  minWidth: 220,
                  margin: 8,
                  background: 'white',
                  border: '1px solid #eee',
                  borderRadius: 10,
                  padding: 20,
                  boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
                  borderTop: '3px solid var(--colorAccent)',
                }}
              >
                <span style={{ fontSize: 36, display: 'block', marginBottom: 10 }}>{f.icon}</span>
                <strong style={{ color: 'var(--colorAccent)', fontSize: 16 }}>{f.title}</strong>
                <p style={{ margin: '8px 0 0', fontSize: 14, color: '#555', lineHeight: 1.5 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SidebarLayout>
    </div>
  );
}
