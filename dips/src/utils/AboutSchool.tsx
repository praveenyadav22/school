import Link from "next/link";

export default function AboutSchool() {
  return (
    <div className="aboutScholl">
      <div className="sectionHead">
        <h2>About School</h2>
      </div>
      <p>
        <span>De Indian Public School</span> is recognised by Directorate of Education and is
        affiliated to CBSE. It is one of the top ranking schools in Rohini. It was conceived by
        M.D. Education Society in the year 2009 with an integrated approach towards learning. It
        is a Senior Secondary School with classes Pre School to class XII with all the three
        streams: Science, Commerce and Humanities. The school can boast off having best teachers
        in all the three streams at Sr. Secondary level. The school&apos;s futurist approach is
        targeted towards encouragement of self-discovery and self-expression that values honesty
        and civility among all members of the school community. It is being mentored by Sh. H.R.
        Gupta, Former Secretary, Central Board of Secondary Education (CBSE), as its Chairman and
        is being formulated and supervised by Sh. Sanjeev Gupta as the Director.{" "}
        <Link href="/about/school-logo">
          <span className="fa fa-arrow-circle-right" /> Know More
        </Link>
      </p>
    </div>
  );
}
