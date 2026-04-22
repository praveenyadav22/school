import Breadcrumb from '@/components/shared/Breadcrumb';
import PageBanner from '@/components/shared/PageBanner';
import SidebarLayout from '@/components/shared/SidebarLayout';
import { aboutSidebarLinks } from '@/lib/sidebarLinks';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Vision & Mission | St. Columbo Public School' };

export default function MissionVisionPage() {
  return (
    <div className="column_alignment base_margin" style={{ background: 'white' }}>
      <PageBanner title="Vision & Mission" />
      <Breadcrumb />

      <SidebarLayout quickLinks={aboutSidebarLinks} activeHref="/mission-vision">
        <div className="column_alignment about_content_wrapper">
          <span className="page_heading" style={{ alignSelf: 'flex-start' }}>Our Vision</span>
          <span className="content_heading"><b>Shaping Tomorrow&apos;s Leaders</b></span>
          <p>
            To be a globally recognised institution that nurtures compassionate, creative, and
            critical thinkers who contribute positively to society — individuals who embrace
            diversity, lead with integrity, and are lifelong learners.
            <br /><br />
            We envision a school where every student discovers their unique potential and is
            empowered to make a meaningful difference in the world.
          </p>

          <span className="page_heading" style={{ alignSelf: 'flex-start', marginTop: 24 }}>Our Mission</span>
          <p>
            To provide a stimulating and inclusive learning environment that fosters academic
            excellence, character development, and holistic growth — enabling each student to
            achieve their fullest potential and become a responsible global citizen.
          </p>

          <span className="page_heading" style={{ alignSelf: 'flex-start', marginTop: 24 }}>Our Core Values</span>
          <ul style={{ paddingLeft: 20 }}>
            {[
              'Excellence — pursuing the highest standards in everything we do.',
              'Compassion — caring for each other and the world around us.',
              'Integrity — honesty and transparency in all our actions.',
              'Collaboration — working together to achieve greater outcomes.',
              'Innovation — embracing new ideas and approaches to learning.',
              'Responsibility — being accountable to our community and environment.',
            ].map((val) => (
              <li key={val} style={{ fontSize: 18, fontWeight: 300, lineHeight: 1.6, marginBottom: 8 }}>
                {val}
              </li>
            ))}
          </ul>
        </div>
      </SidebarLayout>
    </div>
  );
}
