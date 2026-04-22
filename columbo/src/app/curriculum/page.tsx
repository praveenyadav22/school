import Breadcrumb from '@/components/shared/Breadcrumb';
import PageBanner from '@/components/shared/PageBanner';
import SidebarLayout from '@/components/shared/SidebarLayout';
import { academicsSidebarLinks } from '@/lib/sidebarLinks';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Curriculum | St. Columbo Public School' };

const subjects = [
  { name: 'English', icon: '📖' }, { name: 'Hindi', icon: '📝' },
  { name: 'Mathematics', icon: '🔢' }, { name: 'Science', icon: '🔬' },
  { name: 'Social Science', icon: '🌍' }, { name: 'Computer Science', icon: '💻' },
  { name: 'Physical Education', icon: '⚽' }, { name: 'Art & Craft', icon: '🎨' },
  { name: 'Music', icon: '🎵' }, { name: 'Sanskrit', icon: '🕉️' },
  { name: 'General Knowledge', icon: '🧠' }, { name: 'Moral Science', icon: '❤️' },
];

export default function CurriculumPage() {
  return (
    <div className="column_alignment base_margin" style={{ background: 'white' }}>
      <PageBanner title="Curriculum" />
      <Breadcrumb />

      <SidebarLayout quickLinks={academicsSidebarLinks} activeHref="/curriculum">
        <div className="column_alignment about_content_wrapper">
          <span className="page_heading" style={{ alignSelf: 'flex-start' }}>Our <b>Curriculum</b></span>
          <p>
            Our CBSE-affiliated curriculum is designed to provide a well-rounded education that
            balances academic rigour with creative and physical development. Every subject is taught
            with the aim of nurturing curiosity, critical thinking, and a love for learning.
          </p>
          <div className="row_alignment wrap" style={{ margin: '16px -8px' }}>
            {subjects.map((subj) => (
              <div
                key={subj.name}
                style={{
                  width: 'calc(33.33% - 16px)',
                  minWidth: 130,
                  margin: 8,
                  background: '#FBF2D1',
                  borderRadius: 10,
                  padding: '16px 12px',
                  textAlign: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                }}
              >
                <span style={{ fontSize: 32, display: 'block' }}>{subj.icon}</span>
                <span style={{ fontSize: 14, fontWeight: 600, marginTop: 8, display: 'block', color: '#212121' }}>
                  {subj.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </SidebarLayout>
    </div>
  );
}
