import Breadcrumb from '@/components/shared/Breadcrumb';
import PageBanner from '@/components/shared/PageBanner';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Safety & Security | St. Columbo Public School',
};

const safetyFeatures = [
  {
    icon: '📹',
    title: 'CCTV Surveillance',
    desc: '24/7 CCTV coverage across all campus areas including classrooms, corridors, and entry/exit points.',
  },
  {
    icon: '🚌',
    title: 'GPS-Tracked Buses',
    desc: 'All school buses are equipped with GPS tracking, allowing parents to monitor their child\'s journey in real time.',
  },
  {
    icon: '🛡️',
    title: 'Trained Security Staff',
    desc: 'Professional security personnel stationed at all entry points with strict visitor management protocols.',
  },
  {
    icon: '🚒',
    title: 'Fire Safety',
    desc: 'Fire extinguishers, smoke detectors, and regular fire drills ensure campus-wide preparedness.',
  },
  {
    icon: '🏥',
    title: 'Medical Facility',
    desc: 'An in-campus medical room with a trained nurse and first-aid support for emergencies.',
  },
  {
    icon: '📱',
    title: 'Parent Communication',
    desc: 'Real-time parent notifications via SMS and app alerts for attendance, safety incidents, and updates.',
  },
];

export default function SafetySecurityPage() {
  return (
    <div className="column_alignment base_margin">
      <PageBanner title="Safety & Security" />
      <Breadcrumb />

      <div className="column_alignment section_wrapper">
        <div className="column_alignment main_content align_self_center">
          <span className="page_heading">
            Your Child&apos;s Safety is Our <b>Top Priority</b>
          </span>
          <p style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 40px', fontSize: 18, color: '#555', lineHeight: 1.7 }}>
            At St. Columbo Public School, we have implemented a comprehensive safety infrastructure
            to ensure every student is safe, secure, and cared for at all times.
          </p>
          <div className="row_alignment wrap three">
            {safetyFeatures.map((f) => (
              <div key={f.title} className="column_alignment safety_item_wrapper" style={{ margin: 12 }}>
                <div className="column_alignment icon_wrapper align_center" style={{ padding: 24 }}>
                  <span style={{ fontSize: 48 }}>{f.icon}</span>
                </div>
                <div style={{ padding: 16 }}>
                  <span style={{ fontSize: 20, color: '#EFB137', fontWeight: 600, display: 'block', marginBottom: 8 }}>
                    {f.title}
                  </span>
                  <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.5, margin: 0 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
