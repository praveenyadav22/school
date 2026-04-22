const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/Join2BVN/",
    icon: "ri-facebook-fill",
    label: "Facebook",
  },
  {
    href: "https://twitter.com/BVN_delhi",
    icon: "ri-twitter-line",
    label: "Twitter",
  },
  {
    href: "https://www.instagram.com/birla_vidya_niketan/",
    icon: "ri-instagram-line",
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com/in/birla-vidya-niketan-new-delhi-199039219",
    icon: "ri-linkedin-fill",
    label: "LinkedIn",
  },
  {
    href: "https://www.youtube.com/channel/UCmeheKJmv94r5mUGGKyaCyg",
    icon: "ri-youtube-fill",
    label: "YouTube",
  },
  {
    href: "https://whatsapp.com/channel/0029Va9dBv76hENjtywoHc34",
    icon: "ri-whatsapp-fill",
    label: "WhatsApp",
  },
];

const SocialMedia = () => {
  return (
    <div className="topsocialicon shadow border">
      <ul className="bottom-social-list list-inline">
        {SOCIAL_LINKS.map((item) => (
          <li className="list-inline-item" key={item.label}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
            >
              <i className={item.icon} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMedia;
