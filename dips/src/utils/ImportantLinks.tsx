import Link from "next/link";

const LINKS = [
  {
    href: "/about/school-logo",
    bg: "/images/generic/about-school-new.jpg",
    thumb: "/images/content-3.jpg",
    label: "About School",
  },
  {
    href: "/academics/school-calendar",
    bg: "/images/generic/calendar.jpg",
    thumb: "/images/content-1-1.jpg",
    label: "School Calendar",
  },
  {
    href: "/facilities/meal-plan",
    bg: "/images/generic/meal_plan.jpg",
    thumb: "/images/content-2-1.jpg",
    label: "Meal Plan",
  },
  {
    href: "/mobile-application",
    bg: "/images/content-3.jpg",
    thumb: "/images/content-3.jpg",
    label: "Mobile Application",
  },
];

export default function ImportantLinks() {
  return (
    <div className="importantlink">
      {LINKS.map((item) => (
        <section key={item.href}>
          <Link href={item.href}>
            <figure style={{ background: `url(${item.bg})` }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.thumb} width={580} height={580} alt={item.label} />
            </figure>
            <figcaption>{item.label}</figcaption>
          </Link>
        </section>
      ))}
    </div>
  );
}
