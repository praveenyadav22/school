import Link from "next/link";
import Image from "next/image";

const PROFILES = [
  {
    id: "founder",
    subtitle: "New Green Field School",
    title: "Founder Vision & Mission",
    image: "/images/generic/founder-desk.jpg",
    imageAlt: "Founder Vision & Mission",
    imageColClass: "mar-bottom-25",
    imageFirst: true,
    paragraphs: [
      "Our mission is to provide a congenial & safe environment to foster our students holistically into Empowered, Compassionate, Skilled global citizens who will take our country to greater heights. Our focus is well balanced development of every child: Physically, Intellectually, Creatively, Emotionally, Spiritually, morally & aesthetically.",
      "Students are recognized as individuals with a need to succeed. Thus, are provided with unlimited opportunities to empower them...",
    ],
    btnLabel: "Reading Continue",
    btnHref: "#",
  },
  {
    id: "principal",
    subtitle: "Principal's Communique",
    title: "From Principal's Desk",
    image: "/images/generic/principal-desk.jpg",
    imageAlt: "From Principal's Desk",
    imageColClass: "mar-top-25",
    imageFirst: false,
    paragraphs: [
      "Real meaning of education is to create an environment which not only helps children learn well but also inspires them to recognize and explore their own potential. We lay the foundation of the child's overall development i.e development in all five domains- physical, mental, emotional, social and moral. We wish our children to be mentally alert, physically agile, emotionally stable, socially amiable and morally upright. Our motto is also to awaken patriotic fervor in our children. Therefore, we strive to provide a learning conducive....",
    ],
    btnLabel: "Reading Continue",
    btnHref: "#",
  },
];

export default function ProfileSection() {
  return (
    <>
      {PROFILES.map((profile) => {
        const textCol = (
          <div className="col-md-6 col-sm-12" key="text">
            <div className="about-items">
              <div className="inner-heading">
                <h3>{profile.subtitle}</h3>
                <h2 className="mar-0">{profile.title}</h2>
              </div>
              {profile.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <div className="smt-items">
                <Link href={profile.btnHref} className="mt_btn_yellow">
                  {profile.btnLabel}
                </Link>
              </div>
            </div>
          </div>
        );

        const imgCol = (
          <div className={`col-md-6 col-sm-12 ${profile.imageColClass}`} key="img">
            <div className="about-edu-bg">
              <Image
                src={profile.image}
                alt={profile.imageAlt}
                width={600}
                height={420}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        );

        return (
          <section key={profile.id} id="mt_about">
            <div className="container">
              <div className="about_services">
                <div className="row">
                  {profile.imageFirst ? [imgCol, textCol] : [textCol, imgCol]}
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
