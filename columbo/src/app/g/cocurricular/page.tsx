import Breadcrumb from '@/components/shared/Breadcrumb';
import PageBanner from '@/components/shared/PageBanner';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Co-Curricular Activities | St. Columbo Public School' };

const activities = [
  { icon: '🎨', name: 'Art & Craft', desc: 'Develop creativity and fine motor skills through painting, sketching, and craft projects.' },
  { icon: '🎵', name: 'Music & Dance', desc: 'Classical and contemporary music and dance forms taught by expert instructors.' },
  { icon: '🎭', name: 'Drama & Theatre', desc: 'Stage performances that build confidence, expression, and teamwork.' },
  { icon: '⚽', name: 'Sports & Athletics', desc: 'Football, basketball, athletics, badminton, and more — coached by trained professionals.' },
  { icon: '🥋', name: 'Martial Arts', desc: 'Judo and self-defence training that builds discipline and physical fitness.' },
  { icon: '🎯', name: 'Rifle Shooting', desc: 'A unique opportunity for students to develop precision and focus.' },
  { icon: '🤖', name: 'Robotics Club', desc: 'STEM-focused hands-on activities that spark innovation and problem-solving.' },
  { icon: '📢', name: 'Debate & Elocution', desc: 'Public speaking, debate, and MUN activities that sharpen communication skills.' },
  { icon: '🌿', name: 'Eco Club', desc: 'Environmental awareness programs encouraging sustainability and green habits.' },
];

export default function CocurricularPage() {
  return (
    <div className="column_alignment base_margin">
      <PageBanner title="Co-Curricular Activities" />
      <Breadcrumb />
      <div className="column_alignment section_wrapper">
        <div className="column_alignment main_content align_self_center">
          <span className="page_heading">Beyond <b>Academics</b></span>
          <p style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 40px', color: '#555', fontSize: 18, lineHeight: 1.7 }}>
            At SCPS, we believe that a child&apos;s true potential is revealed beyond the classroom. Our
            rich programme of co-curricular activities nurtures every talent.
          </p>
          <div className="row_alignment wrap three">
            {activities.map((act) => (
              <div
                key={act.name}
                className="column_alignment"
                style={{
                  margin: 10,
                  background: 'white',
                  borderRadius: 12,
                  padding: 24,
                  boxShadow: '0 4px 16px rgba(0,0,0,0.09)',
                  transition: '0.3s',
                  width: 'calc(33.33% - 20px)',
                }}
              >
                <span style={{ fontSize: 42 }}>{act.icon}</span>
                <h3 style={{ color: 'var(--colorAccent)', margin: '12px 0 8px' }}>{act.name}</h3>
                <p style={{ margin: 0, color: '#666', lineHeight: 1.5 }}>{act.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
