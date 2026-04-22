import Breadcrumb from '@/components/shared/Breadcrumb';
import PageBanner from '@/components/shared/PageBanner';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Academics | St. Columbo Public School',
};

const academicLevels = [
  {
    level: 'Pre-Primary',
    grades: 'Nursery – KG',
    color: '#FFF3CD',
    border: '#EFB137',
    desc: 'A play-based learning environment that builds foundational skills in literacy, numeracy, and social development.',
  },
  {
    level: 'Primary',
    grades: 'Class I – V',
    color: '#D4EDDA',
    border: '#28a745',
    desc: 'Core subjects taught through activity-based learning, encouraging curiosity and critical thinking.',
  },
  {
    level: 'Middle School',
    grades: 'Class VI – VIII',
    color: '#CCE5FF',
    border: '#007bff',
    desc: 'Deeper engagement with all subjects, project-based learning, and introduction to specialized labs.',
  },
  {
    level: 'Secondary',
    grades: 'Class IX – X',
    color: '#F8D7DA',
    border: '#dc3545',
    desc: 'CBSE board preparation with focused academics, skill development, and career guidance.',
  },
];

export default function AcademicsPage() {
  return (
    <div className="column_alignment base_margin">
      <PageBanner title="Academics" />
      <Breadcrumb />

      <div className="column_alignment section_wrapper">
        <div className="column_alignment main_content align_self_center">
          <span className="page_heading">
            Academic <b>Programs</b>
          </span>
          <p style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 40px', fontSize: 18, color: '#555', lineHeight: 1.7 }}>
            SCPS follows the CBSE curriculum, offering a comprehensive and balanced academic
            program from pre-primary to secondary level.
          </p>
          <div className="row_alignment wrap two">
            {academicLevels.map((lvl) => (
              <div
                key={lvl.level}
                className="column_alignment academics_content_section_wrapper"
                style={{ background: lvl.color, borderLeft: `4px solid ${lvl.border}`, margin: 12 }}
              >
                <h2 style={{ color: lvl.border, margin: '0 0 4px' }}>{lvl.level}</h2>
                <span style={{ fontWeight: 600, color: '#555', marginBottom: 12 }}>{lvl.grades}</span>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: '#444' }}>{lvl.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="column_alignment section_wrapper" style={{ background: '#f8f8f8' }}>
        <div className="column_alignment main_content align_self_center">
          <span className="page_heading">Our <b>Teaching Approach</b></span>
          <div className="row_alignment wrap three" style={{ marginTop: 24 }}>
            {[
              { title: 'Experiential Learning', icon: '🧪', desc: 'Learning by doing through labs, field trips, and hands-on projects.' },
              { title: 'Technology Integration', icon: '💻', desc: 'Smart classrooms and digital tools enhance the learning experience.' },
              { title: 'Value-Based Education', icon: '🌱', desc: 'Moral values and life skills are integrated into daily learning.' },
            ].map((item) => (
              <div
                key={item.title}
                className="column_alignment align_center"
                style={{ background: 'white', borderRadius: 12, padding: 24, margin: 8, boxShadow: '0 4px 12px rgba(0,0,0,0.08)', textAlign: 'center' }}
              >
                <span style={{ fontSize: 48 }}>{item.icon}</span>
                <h3 style={{ color: 'var(--colorAccent)', margin: '12px 0 8px' }}>{item.title}</h3>
                <p style={{ margin: 0, color: '#666', lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32, textAlign: 'center' }}>
            <Link href="/curriculum" className="accent_button">View Curriculum</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
