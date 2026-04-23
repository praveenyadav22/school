const SOCIAL_LINKS = [
  { href: "https://www.facebook.com/De-Indian-Public-School-A-Senior-Secondary-School-159716587442885/", icon: "fa fa-facebook", label: "Facebook" },
  { href: "https://www.instagram.com/deindianpublicschool/", icon: "fa fa-instagram", label: "Instagram" },
  { href: "https://www.youtube.com/channel/UCKB-4qLoPG_vgDKpZEUm6eQ", icon: "fa fa-youtube-play", label: "YouTube" },
  { href: "https://twitter.com/DeIndianPublic1", icon: "fa fa-twitter", label: "Twitter" },
  { href: "https://www.linkedin.com/in/de-indian-public-school-2985a1228", icon: "fa fa-linkedin", label: "LinkedIn" },
  { href: "https://api.whatsapp.com/send?phone=918448209126", icon: "fa fa-whatsapp", label: "WhatsApp" },
];

const SocialMedia = () => (
  <div className="topsocialicon shadow border">
    <ul className="bottom-social-list list-inline">
      {SOCIAL_LINKS.map((item) => (
        <li className="list-inline-item" key={item.label}>
          <a href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label}>
            <i className={item.icon} />
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default SocialMedia;
