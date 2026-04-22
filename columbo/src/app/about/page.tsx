import Breadcrumb from '@/components/shared/Breadcrumb';
import PageBanner from '@/components/shared/PageBanner';
import SidebarLayout from '@/components/shared/SidebarLayout';
import { aboutSidebarLinks } from '@/lib/sidebarLinks';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About SCPS | St. Columbo Public School',
};

export default function AboutPage() {
  return (
    <div className="column_alignment base_margin" style={{ background: 'white' }}>
      <PageBanner title="About Us" />
      <Breadcrumb />

      <SidebarLayout quickLinks={aboutSidebarLinks} activeHref="/about">
        <div className="column_alignment about_content_wrapper">
          <span className="page_heading" style={{ alignSelf: 'flex-start' }}>About Us</span>
          <span className="content_heading"><b>&ldquo;Vasudeva Kutumbakam&rdquo;</b></span>
          <span className="content_heading">meaning The World Is One</span>
          <p>
            St Columbo Public School is Delhi&apos;s leading CBSE continuum school located in
            Pitampura and is part of the elite cohort of other CBSE prestigious schools. For the
            past 30 years, SCPS has provided the education sector with a world-class learning
            environment that is truly international in quality, space and spirit.
            <br /><br />
            The school gives its students significant life-changing experiences that are formed by
            innovative educators, who inspire in them a passion for learning, leadership, and service.
            We aim to create responsible, global citizens who are compassionate, understanding, and
            accepting of other people&apos;s viewpoints. We strive to ensure that every child in our
            care is empowered to make choices and encouraged to contribute to our community.
            <br /><br />
            Every student at St Columbo Public School has the opportunity to explore talents, nurture
            intellect and creativity, and grow to his or her fullest potential with the awareness of a
            core value system of commitment and empathy. Our vision is that every young pupil who
            passes through these portals will be a principled thinker, an effective communicator and
            an open-minded global citizen.
          </p>
        </div>
      </SidebarLayout>

      <div className="column_alignment section_wrapper dark_section">
        <div className="column_alignment main_content align_self_center">
          <div className="row_column_alignment two">
            <div className="column_alignment">
              <div className="column_alignment about_content_wrapper">
                <p style={{ color: 'white' }}>
                  St. Columbo Public School provides an ideal atmosphere for learners to acquire and
                  imbibe skills necessary for their physical, mental, social, and intellectual
                  development combined with modern state-of-the-art technology and expertise.
                  <br /><br />
                  The school follows a child-centred approach where each child is an individual and is
                  nurtured accordingly. The school&apos;s vision is to Pioneer a New Paradigm of
                  Excellence in Secondary Education through a learner-centred educational system aimed
                  at awakening and fostering the latent capacity of each student to fully develop his
                  or her own unique individuality and creativity.
                </p>
              </div>
            </div>
            <div className="column_alignment align_center">
              <img
                src="/images/generic/welcome_scps.png"
                alt="About SCPS"
                style={{ width: '90%', maxWidth: 450, borderRadius: 12 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
