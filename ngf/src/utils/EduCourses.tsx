import Link from "next/link";

const COURSES = [
  {
    icon: "fa-laptop",
    style: "text-courses",
    title: "School Activities",
    desc: "Learning in school becomes an interesting and enjoyable process beyond teaching and textbooks...",
    href: "/school-events",
  },
  {
    icon: "fa-users",
    style: "text-courses",
    title: "Circulars",
    desc: "School circulars are official notices issued by the school to inform students, parents, and staff about...",
    href: "/circulars",
  },
  {
    icon: "fa-book",
    style: "text-coursesa",
    title: "Achievements",
    desc: "The school lays a great stress on co-curricular activities such as Debating, Dramatic, Quizzing, Elocution...",
    href: "/award-achievements",
  },
  {
    icon: "fa-laptop",
    style: "text-courses",
    title: "School Events",
    desc: "Bringing students, parents, and staff together for a fun and enriching experience altogether at NGF School...",
    href: "/school-events",
  },
  {
    icon: "fa-users",
    style: "text-courses",
    title: "Smart Class Rooms",
    desc: "A smart classroom is a classroom that uses technology to make learning more interactive, efficient...",
    href: "#",
  },
  {
    icon: "fa-book",
    style: "text-coursesa",
    title: "House System",
    desc: "A house system is a school organization where students are divided into groups called houses. Students...",
    href: "#",
  },
];

export default function EduCourses() {
  return (
    <div className="edu-courses">
      <div className="container">
        <div className="row panel-grid-banner">
          {COURSES.map((c) => (
            <div key={c.title} className="col-md-4 col-sm-6 col-xs-12">
              <div className="inner-grid text-center">
                <div className={c.style}>
                  <i className={`fa ${c.icon} mar-bottom-20`} />
                  <h3>{c.title}</h3>
                </div>
                <div className="courses-content">
                  <p className="mar-top-20">{c.desc}</p>
                  <Link href={c.href} className="mt_btn_yellow">
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
