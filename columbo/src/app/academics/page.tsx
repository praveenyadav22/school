import Breadcrumb from '@/components/shared/Breadcrumb';
import PageBanner from '@/components/shared/PageBanner';
import SidebarLayout from '@/components/shared/SidebarLayout';
import { academicsSidebarLinks } from '@/lib/sidebarLinks';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Academics | St. Columbo Public School' };

const levels = [
  { level: 'Pre-Primary', grades: 'Nursery – KG', color: '#FFF8E1', border: '#EFB137', desc: 'Play-based learning that builds foundational skills in literacy, numeracy, and social development.' },
  { level: 'Primary', grades: 'Class I – V', color: '#E8F5E9', border: '#4CAF50', desc: 'Core subjects taught through activity-based learning, encouraging curiosity and critical thinking.' },
  { level: 'Middle School', grades: 'Class VI – VIII', color: '#E3F2FD', border: '#2196F3', desc: 'Deeper subject engagement, project-based learning, and introduction to specialised labs.' },
  { level: 'Secondary', grades: 'Class IX – X', color: '#FCE4EC', border: '#E91E63', desc: 'CBSE board preparation with focused academics, skill development, and career guidance.' },
];

export default function AcademicsPage() {
  return (
    <div className="column_alignment base_margin" style={{ background: 'white' }}>
      <PageBanner title="Academics" />
      <Breadcrumb />

      <SidebarLayout quickLinks={academicsSidebarLinks} activeHref="/academics">
        <div className="column_alignment about_content_wrapper">
          <span className="page_heading" style={{ alignSelf: 'flex-start' }}>Academic <b>Programs</b></span>
          <p>
            SCPS follows the CBSE curriculum, offering a comprehensive and balanced academic programme
            from pre-primary to secondary level. Our teaching approach blends modern pedagogy with
            time-tested values.
          </p>
          <div style={{ marginTop: 16 }}>
            {levels.map((lvl) => (
              <div
                key={lvl.level}
                style={{
                  background: lvl.color,
                  borderLeft: `4px solid ${lvl.border}`,
                  borderRadius: 8,
                  padding: 20,
                  marginBottom: 16,
                }}
              >
                <strong style={{ color: lvl.border, fontSize: 18 }}>{lvl.level}</strong>
                <span style={{ display: 'block', color: '#666', fontSize: 14, margin: '4px 0 8px' }}>{lvl.grades}</span>
                <p style={{ margin: 0, fontSize: 16, color: '#444', lineHeight: 1.6 }}>{lvl.desc}</p>
              </div>
            ))}
          </div>
          <Link href="/curriculum" className="accent_button" style={{ alignSelf: 'flex-start', marginTop: 8 }}>
            View Curriculum
          </Link>
        </div>
      </SidebarLayout>
    </div>
  );
}
