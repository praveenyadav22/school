import Breadcrumb from '@/components/shared/Breadcrumb';
import PageBanner from '@/components/shared/PageBanner';
import SidebarLayout from '@/components/shared/SidebarLayout';
import { campusLifeSidebarLinks } from '@/lib/sidebarLinks';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Co-Curricular Activities | St. Columbo Public School' };

const activities = [
  { icon: '🎨', name: 'Art & Craft', desc: 'Develop creativity and fine motor skills through painting and craft projects.' },
  { icon: '🎵', name: 'Music & Dance', desc: 'Classical and contemporary music and dance taught by expert instructors.' },
  { icon: '🎭', name: 'Drama & Theatre', desc: 'Stage performances that build confidence, expression, and teamwork.' },
  { icon: '⚽', name: 'Sports & Athletics', desc: 'Football, basketball, athletics, badminton coached by trained professionals.' },
  { icon: '🥋', name: 'Martial Arts (Judo)', desc: 'Judo and self-defence training that builds discipline and physical fitness.' },
  { icon: '🎯', name: 'Rifle Shooting', desc: 'A unique opportunity for students to develop precision and focus.' },
  { icon: '🤖', name: 'Robotics Club', desc: 'STEM-focused hands-on activities that spark innovation and problem-solving.' },
  { icon: '📢', name: 'Debate & Elocution', desc: 'Public speaking and debate activities that sharpen communication skills.' },
];

export default function CocurricularPage() {
  return (
    <div className="column_alignment base_margin" style={{ background: 'white' }}>
      <PageBanner title="Co-Curricular Activities" />
      <Breadcrumb />

      <SidebarLayout quickLinks={campusLifeSidebarLinks} activeHref="/g/cocurricular">
        <div className="column_alignment about_content_wrapper">
          <span className="page_heading" style={{ alignSelf: 'flex-start' }}>Beyond <b>Academics</b></span>
          <p>
            At SCPS, a child&apos;s true potential is revealed beyond the classroom. Our rich
            programme of co-curricular activities ensures every talent finds a stage.
          </p>
          <div className="row_alignment wrap" style={{ margin: '16px -8px' }}>
            {activities.map((act) => (
              <div
                key={act.name}
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
                <span style={{ fontSize: 34, display: 'block', marginBottom: 8 }}>{act.icon}</span>
                <strong style={{ color: 'var(--colorAccent)', fontSize: 15 }}>{act.name}</strong>
                <p style={{ margin: '6px 0 0', fontSize: 13, color: '#555', lineHeight: 1.5 }}>{act.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SidebarLayout>
    </div>
  );
}
