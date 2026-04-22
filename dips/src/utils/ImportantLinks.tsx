import Link from "next/link";

const LINKS = [
  { href: "/newsletter",        img: "/images/icons/newspaper.png",    label: "News Letter"        },
  { href: "/infrastructure",    img: "/images/icons/school.png",       label: "Infra-Structure"    },
  { href: "/monthly-report",    img: "/images/icons/report.png",       label: "Monthly Report"     },
  { href: "/international-ethos", img: "/images/icons/international.png", label: "International-Ethos" },
  { href: "/games",             img: "/images/icons/fit-india.png",    label: "Fit India"          },
  { href: "/atal-tinkering-lab", img: "/images/icons/innovation.png",  label: "ATL-Innovation"     },
];

const ImportantLinks = () => {
  return (
    <div className="c-importantlink">
      {LINKS.map((item) => (
        <div className="c-importantlink__item" key={item.href}>
          <Link href={item.href} className="link">
            <figure>
              <img src={item.img} className="u-img" alt={item.label} />
            </figure>
            <div className="content">{item.label}</div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ImportantLinks;
