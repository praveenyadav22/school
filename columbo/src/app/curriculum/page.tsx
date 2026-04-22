import Breadcrumb from '@/components/shared/Breadcrumb';
import PageBanner from '@/components/shared/PageBanner';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Curriculum | St. Columbo Public School',
};

const subjects = [
  { name: 'English', icon: '📖' },
  { name: 'Hindi', icon: '📝' },
  { name: 'Mathematics', icon: '🔢' },
  { name: 'Science', icon: '🔬' },
  { name: 'Social Science', icon: '🌍' },
  { name: 'Computer Science', icon: '💻' },
  { name: 'Physical Education', icon: '⚽' },
  { name: 'Art & Craft', icon: '🎨' },
  { name: 'Music', icon: '🎵' },
  { name: 'Sanskrit', icon: '🕉️' },
  { name: 'General Knowledge', icon: '🧠' },
  { name: 'Moral Science', icon: '❤️' },
];

export default function CurriculumPage() {
  return (
    <div className="column_alignment base_margin">
      <PageBanner title="Curriculum" />
      <Breadcrumb />

      <div className="column_alignment section_wrapper">
        <div className="column_alignment main_content align_self_center">
          <span className="page_heading">
            Our <b>Curriculum</b>
          </span>
          <p style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 40px', fontSize: 18, color: '#555', lineHeight: 1.7 }}>
            Our CBSE-affiliated curriculum is designed to provide a well-rounded education that
            balances academic rigor with creative and physical development.
          </p>

          <div className="row_alignment wrap" style={{ justifyContent: 'center' }}>
            {subjects.map((subj) => (
              <div
                key={subj.name}
                className="column_alignment curriculum_item_wrapper align_center"
                style={{ minWidth: 140, maxWidth: 180 }}
              >
                <span style={{ fontSize: 36 }}>{subj.icon}</span>
                <span style={{ fontSize: 16, marginTop: 8 }}>{subj.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="column_alignment section_wrapper" style={{ background: 'linear-gradient(135deg, #711123, #4c0415)' }}>
        <div className="column_alignment main_content align_self_center align_center" style={{ textAlign: 'center' }}>
          <span className="page_heading dark">
            Beyond the <b className="yellow">Classroom</b>
          </span>
          <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: 600, margin: '16px auto', fontSize: 18, lineHeight: 1.7 }}>
            Our curriculum extends beyond textbooks to include project-based learning, science fairs,
            quiz competitions, sports days, cultural events, and community service initiatives.
          </p>
        </div>
      </div>
    </div>
  );
}
