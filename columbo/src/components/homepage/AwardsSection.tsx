export default function AwardsSection() {
  return (
    <div className="column_alignment section_wrapper">
      <div className="main_content row_column_alignment two align_self_center">
        <div className="column_alignment">
          <span className="page_heading left">
            Our <b>Awards</b>
          </span>
          <span
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              fontWeight: 500,
              textAlign: 'left',
              alignSelf: 'flex-start',
              margin: '16px 12px 0',
              color: 'var(--colorAccent)',
            }}
          >
            Times Education Icons Award
          </span>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.6,
              fontWeight: 300,
              textAlign: 'left',
              alignSelf: 'flex-start',
              margin: '16px 12px',
            }}
          >
            St. Columbo Public School proudly adds another feather to its cap! Honoured by the
            prestigious &ldquo;Times Group for Exemplary Performance in Education&rdquo;, this
            renowned award was presented by Mr. Satish Upadhyay, Ex-President, BJP, Delhi. This
            accolade reflects our unwavering commitment towards academic excellence, holistic
            development, and innovative teaching pedagogies.
            <br />
            <br />
            At St. Columbo Public School, we continue to inspire young minds, nurture talents, and
            set benchmarks in the field of education.
          </p>
        </div>
        <div className="column_alignment align_center">
          <img
            style={{ width: '90%', maxWidth: 500, borderRadius: 12 }}
            src="/images/generic/awards_home_img.jpg"
            alt="Times Education Icons Award"
          />
        </div>
      </div>
    </div>
  );
}
