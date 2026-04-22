// Navigation configuration for St. Columbo Public School

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigationItems: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About Us',
    href: '#',
    children: [
      { label: 'About SCPS', href: '/about' },
      { label: 'Vision & Mission', href: '/mission-vision' },
      { label: 'Why Us', href: '/why-us' },
      { label: 'Safety & Security', href: '/safety-and-security' },
      { label: 'Management', href: '/management' },
    ],
  },
  {
    label: 'Academics',
    href: '#',
    children: [
      { label: 'Curriculum', href: '/curriculum' },
      { label: 'Academics', href: '/academics' },
    ],
  },
  {
    label: 'Admissions',
    href: '/static/admission_procedure.pdf',
  },
  {
    label: 'Gallery',
    href: '#',
    children: [
      { label: 'Photo Gallery', href: '/g/gallery' },
      { label: 'Video Gallery', href: '/videos' },
    ],
  },
  {
    label: 'Campus Life',
    href: '#',
    children: [
      { label: 'Infrastructure', href: '/g/infrastructure' },
      { label: 'Co-Curricular Activities', href: '/g/cocurricular' },
      { label: 'Events & Celebrations', href: '/g/events-celebrations' },
      { label: 'Campus Life', href: '/g/campus-life' },
    ],
  },
  {
    label: 'More',
    href: '#',
    children: [
      { label: 'School Policies', href: '/school-policies' },
      { label: 'News & Updates', href: '/news-updates' },
      { label: 'Blog', href: '/blog-b' },
      { label: 'Contact Us', href: '/support/contact' },
    ],
  },
];

export const testimonials = [
  {
    name: 'Devansh Majumdar',
    grade: '(IV A)',
    image: '/images/generic/Male_obH0cmj.png',
    text: "The day we are associated with this school, I would say that this is the best school. We have a long association with this school. All the teachers are very loving. The school has strong academics and I recommend everyone that your ward should be in this school.",
  },
  {
    name: 'Harshika Shankar',
    grade: '(X C)',
    image: '/images/generic/Female_KfJATmH.png',
    text: "The school gives an academic atmosphere to the children. The school contributes to the overall development of the child. This school is full of activities that makes the difference. Apart from teaching, the entire set of activities makes the child complete.",
  },
  {
    name: 'Gauranshi Gupta',
    grade: '(IX B)',
    image: '/images/generic/Female_KfJATmH.png',
    text: "The environment of the school is very congenial. All the important festivals and days are celebrated with great participation of the children. Teachers are very kind and supportive.",
  },
  {
    name: 'Rajvir Singh Gill',
    grade: '(V A)',
    image: '/images/generic/Male_obH0cmj.png',
    text: "This school is a fantastic school. My son is doing great. The teachers and the staff members are helping him with whatever he needs. Physical activities are good. The school's infrastructure – labs and library are good and well equipped.",
  },
];

export const whyChooseItems = [
  {
    image: '/images/generic/spacious_classroom.jpg',
    title: 'Spacious Digital Classrooms',
    description: 'Equipped with smart technology to create an engaging learning environment.',
  },
  {
    image: '/images/generic/excellent_childcare.jpg',
    title: 'Excellent Childcare Facilities',
    description: 'Safe, nurturing spaces that support early childhood development.',
  },
  {
    image: '/images/generic/state_of_art.jpg',
    title: 'State-of-the-Art Computer Lab',
    description: 'Modern systems to build strong digital and technological skills.',
  },
  {
    image: '/images/generic/modern_science.jpg',
    title: 'Modern Science Laboratories',
    description: 'Hands-on labs that encourage scientific inquiry and discovery.',
  },
  {
    image: '/images/generic/well_stocked_libs.jpg',
    title: 'Well-Stocked Library',
    description: 'A rich collection of books to foster reading and research habits.',
  },
  {
    image: '/images/generic/excellent_sports.jpg',
    title: 'Excellent Sports Facilities',
    description: 'Wide range of sports options to promote fitness and teamwork.',
  },
  {
    image: '/images/generic/modern_science.jpg',
    title: 'Experiential Learning Hubs',
    description: 'Interactive zones designed for practical and project-based learning.',
  },
  {
    image: '/images/generic/gps_transport.jpg',
    title: 'GPS-Enabled Transport',
    description: 'Safe and secure transportation with real-time tracking for parents.',
  },
];

export const noticeItems = [
  'List of Nursury Admissions (2026-2027)',
  'Admission Open (2026-2027) From 04 December onwards',
];
