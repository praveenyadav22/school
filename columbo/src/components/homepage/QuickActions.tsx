import Link from 'next/link';

const actions = [
  {
    href: 'https://erp.quickcampus.online/auth',
    icon: '/images/icons/online_admissions.png',
    label: 'Online Admissions',
    external: true,
  },
  {
    href: '#',
    icon: '/images/icons/mobile_application_icon.png',
    label: 'Mobile Application',
  },
  {
    href: '#',
    icon: '/images/icons/online_fees.png',
    label: 'Online Fee Payments',
  },
  {
    href: '/g/gallery',
    icon: '/images/icons/scps_gallery.png',
    label: 'SCPS Gallery',
  },
];

export default function QuickActions() {
  return (
    <div className="column_alignment section_wrapper">
      <div className="main_content column_alignment align_self_center">
        <div className="row_alignment wrap four">
          {actions.map((action) => (
            <div key={action.label} className="column_alignment" style={{ padding: 8 }}>
              <Link
                href={action.href}
                className="option_action_button row_alignment"
                target={action.external ? '_blank' : undefined}
              >
                <img src={action.icon} alt={action.label} />
                <span>{action.label}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
