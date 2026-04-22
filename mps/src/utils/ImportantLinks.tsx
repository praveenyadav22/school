import Link from "next/link";
import Image from "next/image";

const LINKS = [
  { href: "/circulars",          img: "/images/icons/newspaper.png",    label: "Circulars"       },
  { href: "/infrastructure",     img: "/images/icons/school.png",       label: "Infrastructure"  },
  { href: "/photo-gallery",      img: "/images/icons/report.png",       label: "Photo Gallery"   },
  { href: "/international-ventures", img: "/images/icons/international.png", label: "International" },
  { href: "/sports",             img: "/images/icons/fit-india.png",    label: "Sports"          },
  { href: "/innovation",         img: "/images/icons/innovation.png",   label: "Best Practices"  },
];

const ImportantLinks = () => {
  return (
    <div className="c-importantlink">
      {LINKS.map((item) => (
        <div className="c-importantlink__item" key={item.href}>
          <Link href={item.href} className="link">
            <figure>
              <Image
                src={item.img}
                className="u-img"
                alt={item.label}
                width={65}
                height={65}
                style={{ objectFit: "contain" }}
              />
            </figure>
            <div className="content">{item.label}</div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ImportantLinks;
