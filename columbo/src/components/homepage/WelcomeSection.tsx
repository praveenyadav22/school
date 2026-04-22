import Link from 'next/link';

export default function WelcomeSection() {
  return (
    <div className="column_alignment section_wrapper">
      <div className="main_content column_alignment align_self_center">
        {/* Welcome */}
        <div className="row_column_alignment two">
          <div className="column_alignment align_center">
            <div className="column_alignment">
              <span className="page_heading left">
                Welcome to <br />
                <b className="yellow">St. Columbo Public School</b>
              </span>
              <p
                style={{
                  fontSize: 20,
                  lineHeight: 1.6,
                  fontWeight: 300,
                  maxWidth: 600,
                  textAlign: 'left',
                  alignSelf: 'flex-start',
                  margin: '16px 12px',
                }}
              >
                St. Columbo School fosters all-round development through creative, practical, and
                value based learning. We provide a nurturing environment where children grow beyond
                academics, gaining experiences that shape confident and well-rounded individuals.
              </p>
              <Link
                className="accent_button"
                href="/about"
                style={{ alignSelf: 'flex-start', margin: '12px 12px 0' }}
              >
                Know More
              </Link>
            </div>
          </div>
          <div className="column_alignment align_center">
            <img
              style={{ width: '90%', maxWidth: 500 }}
              src="/images/generic/welcome_scps.png"
              alt="Welcome SCPS"
            />
          </div>
        </div>

        {/* Chairman Message */}
        <div className="row_column_alignment" style={{ marginTop: 40 }}>
          <div className="column_alignment align_center fill" style={{ maxWidth: 500, minWidth: '40%' }}>
            <img
              style={{ width: '90%', maxWidth: 400 }}
              src="/images/generic/chairman_home.png"
              alt="Chairman"
            />
          </div>
          <div className="column_alignment fill align_center">
            <div className="column_alignment">
              <span className="page_heading left">
                Message From <br />
                <b>The Chairman</b>
              </span>
              <p
                style={{
                  fontSize: 20,
                  lineHeight: 1.6,
                  fontWeight: 300,
                  textAlign: 'left',
                  alignSelf: 'flex-start',
                  margin: '16px 12px',
                }}
              >
                At St. Columbo, we strive to nurture confident and curious learners through a
                thoughtful balance of academics and co-curricular activities. We believe that strong
                collaboration between the school and home plays a vital role in a child&apos;s
                overall development, helping them grow into well-rounded individuals with a passion
                for learning.
              </p>
              <Link
                className="accent_button"
                href="/management"
                style={{ alignSelf: 'flex-start', margin: '12px 12px 0' }}
              >
                Know More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
