import Link from "next/link";

const LINKS = [
  {
    href: "/about/school-logo",
    bg: "/images/generic/about-school-new.jpg",
    label: "About School",
  },
  {
    href: "/academics/school-calendar",
    bg: "/images/generic/calendar.jpg",
    label: "School Calendar",
  },
  {
    href: "/facilities/meal-plan",
    bg: "/images/generic/meal_plan.jpg",
    label: "Meal Plan",
  },
  {
    href: "/mobile-application",
    bg: "/images/generic/content-3.jpg",
    label: "Mobile Application",
  },
];

export default function ImportantLinks() {
  return (
    <div className="importantlink">
      {LINKS.map((item) => (
        <section key={item.href}>
          <Link href={item.href}>
            <figure style={{ background: `url(${item.bg}) center center / cover no-repeat` }} />
            <figcaption>{item.label}</figcaption>
          </Link>
        </section>
      ))}
    </div>
  );
}
