import Link from "next/link";

const BOXES = [
  {
    title: "From Principal's Desk",
    desc: "On behalf of the Management, staff and the school community, I extend to all our parents and children a very warm welcome...",
    href: "/about/principals-desk",
    cls: "first",
  },
  {
    title: "Vision & Mission",
    desc: "Truly believing in these words, we at DE INDIAN PUBLIC SCHOOL incorporate this golden rule in our approach towards learning...",
    href: "/about/mission-vision",
    cls: "second",
  },
  {
    title: "From The Chairman's Desk",
    desc: "A towering inspiration — You stand like a General in Command. Perfection is what you demand, with generosity and compassion...",
    href: "/about/chairmans-desk",
    cls: "",
  },
  {
    title: "From The Manager's Desk",
    desc: "Having sowed the seeds of the vision of Shri H. R. Gupta, our Chairman, it gives me a deep sense of pleasure to witness the burgeoning...",
    href: "/about/managers-desk",
    cls: "",
  },
];

export default function AboutSchoolLinks() {
  return (
    <div className="aboutschoollink">
      <div className="container">
        <div className="row">
          {BOXES.map((box) => (
            <div className="col-md-6 col-lg-3" key={box.href}>
              <section className={box.cls}>
                <h2>{box.title}</h2>
                <p>{box.desc}</p>
                <Link href={box.href}>
                  <span className="fa fa-arrow-circle-right" /> Know More
                </Link>
              </section>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
