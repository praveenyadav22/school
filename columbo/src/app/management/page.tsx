import Breadcrumb from '@/components/shared/Breadcrumb';
import PageBanner from '@/components/shared/PageBanner';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Management | St. Columbo Public School',
};

export default function ManagementPage() {
  return (
    <div className="column_alignment base_margin">
      <PageBanner title="Words of Wisdom by The Management" />
      <Breadcrumb />

      <div className="column_alignment section_wrapper">
        <div className="main_content row_column_alignment two align_self_center">
          <div className="column_alignment align_center" style={{ maxWidth: 450, minWidth: '40%' }}>
            <img
              src="/images/generic/chairman_home.png"
              alt="Chairman"
              style={{ width: '90%', maxWidth: 380, borderRadius: 12 }}
            />
          </div>
          <div className="column_alignment fill align_center">
            <div className="column_alignment about_content_wrapper">
              <span className="content_heading">
                Message from <b>The Chairman</b>
              </span>
              <p>
                Dear Parents and Students,
              </p>
              <p>
                It is with immense pride and gratitude that I welcome you to St. Columbo Public
                School. Education, in its truest sense, is not merely the acquisition of knowledge
                but the development of character, wisdom, and the courage to make a positive
                difference in the world.
              </p>
              <p>
                At St. Columbo, we strive to nurture confident and curious learners through a
                thoughtful balance of academics and co-curricular activities. We believe that strong
                collaboration between the school and home plays a vital role in a child&apos;s
                overall development, helping them grow into well-rounded individuals with a passion
                for learning.
              </p>
              <p>
                Our commitment to excellence is unwavering. We continue to invest in world-class
                facilities, innovative teaching methods, and a supportive community that brings out
                the best in every child.
              </p>
              <p>
                Together, let us nurture the leaders of tomorrow.
              </p>
              <span style={{ fontWeight: 700, fontSize: 18, color: 'var(--colorAccent)', marginTop: 8 }}>
                — The Chairman, SCPS
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
