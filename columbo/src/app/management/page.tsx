import Breadcrumb from '@/components/shared/Breadcrumb';
import PageBanner from '@/components/shared/PageBanner';
import SidebarLayout from '@/components/shared/SidebarLayout';
import { aboutSidebarLinks } from '@/lib/sidebarLinks';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Management | St. Columbo Public School' };

export default function ManagementPage() {
  return (
    <div className="column_alignment base_margin" style={{ background: 'white' }}>
      <PageBanner title="Words of Wisdom by The Management" />
      <Breadcrumb />

      <SidebarLayout quickLinks={aboutSidebarLinks} activeHref="/management">
        <div className="column_alignment about_content_wrapper">
          <span className="page_heading" style={{ alignSelf: 'flex-start' }}>Message from <b>The Chairman</b></span>
          <div className="column_alignment align_center" style={{ margin: '16px 0' }}>
            <img
              src="/images/generic/chairman_home.png"
              alt="Chairman"
              style={{ width: '100%', maxWidth: 340, borderRadius: 12 }}
            />
          </div>
          <p>Dear Parents and Students,</p>
          <p>
            It is with immense pride and gratitude that I welcome you to St. Columbo Public School.
            Education, in its truest sense, is not merely the acquisition of knowledge but the
            development of character, wisdom, and the courage to make a positive difference in the world.
          </p>
          <p>
            At St. Columbo, we strive to nurture confident and curious learners through a thoughtful
            balance of academics and co-curricular activities. We believe that strong collaboration
            between the school and home plays a vital role in a child&apos;s overall development,
            helping them grow into well-rounded individuals with a passion for learning.
          </p>
          <p>
            Our commitment to excellence is unwavering. We continue to invest in world-class
            facilities, innovative teaching methods, and a supportive community that brings out
            the best in every child.
          </p>
          <p>Together, let us nurture the leaders of tomorrow.</p>
          <span style={{ fontWeight: 700, fontSize: 18, color: 'var(--colorAccent)', marginTop: 8, display: 'block' }}>
            — The Chairman, SCPS
          </span>
        </div>
      </SidebarLayout>
    </div>
  );
}
