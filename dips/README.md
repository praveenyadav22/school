# De Indian Public School — Next.js 16 Website

A production-ready, pixel-perfect conversion of the DIPS website to Next.js 16 with modular SCSS.

## Tech Stack
- **Framework:** Next.js 16.2.3 (App Router)
- **Language:** TypeScript
- **Styling:** SCSS with custom variables & mixins (no inline styles)
- **Carousel:** Embla Carousel (with Autoplay)
- **Icons:** Font Awesome 4 (CDN) + Lucide React
- **CSS Framework:** Bootstrap 5 (vendors only, class names preserved)

## Project Structure

```
src/
├── app/                        # Next.js App Router pages
│   ├── page.tsx                # Homepage
│   ├── layout.tsx              # Root layout
│   ├── about/                  # About Us pages
│   ├── academics/              # Academics pages
│   ├── school-info/            # School Info pages
│   ├── facilities/             # Facilities pages
│   ├── admission/
│   ├── contact/
│   ├── events/
│   ├── news/
│   ├── gallery/
│   └── ...
├── components/
│   ├── Header.tsx              # Full header with sticky, mobile drawer, thought ticker
│   ├── Footer.tsx              # Footer with social links
│   ├── Banner.tsx              # Embla carousel homepage banner
│   ├── InnerPage.tsx           # Inner page layout (breadcrumb + sidebar)
│   ├── BreadCrumb.tsx          # Dynamic breadcrumb
│   ├── ScrollTop.tsx           # Scroll-to-top button
│   └── Accessibility/          # Accessibility widget
├── utils/                      # Homepage section components
│   ├── AboutSchool.tsx
│   ├── LatestUpdates.tsx
│   ├── FacilitiesAccordion.tsx
│   ├── ImportantLinks.tsx
│   ├── SchoolInfoSlider.tsx
│   ├── AboutSchoolLinks.tsx
│   ├── BulletinBoard.tsx
│   ├── AdmissionEnquiry.tsx
│   └── ...
├── styles/
│   ├── globals.scss            # Main SCSS entry point
│   ├── custom/
│   │   ├── core/
│   │   │   ├── _variables.scss # CSS custom properties (colors, fonts, sizes)
│   │   │   ├── _mixins.scss    # Reusable SCSS mixins
│   │   │   └── _typography.scss
│   │   ├── layout/
│   │   │   ├── _header.scss
│   │   │   ├── _footer.scss
│   │   │   └── _breadcrumb.scss
│   │   └── components/
│   │       ├── generic/        # Utility classes
│   │       ├── _banner.scss
│   │       ├── _homeslider.scss
│   │       ├── _innersidebar.scss
│   │       └── ...
│   └── vendors/
│       └── bootstrap.min.scss
└── context/
    └── AccessibilityContext.tsx
```

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open browser
# http://localhost:3000
```

## Build for Production

```bash
npm run build
npm run start
```

## Image Setup

Place real images in `/public/images/`:
- `/public/images/banner/slide-1.jpg` through `slide-4.jpg` — homepage banner slides
- `/public/images/logo.png` — school logo
- `/public/images/generic/inner-banner.jpg` — inner page banner
- Other images referenced in components

## Key Features

- ✅ Pixel-perfect match to original DIPS website design
- ✅ Sticky header with scroll animation
- ✅ Thought of the Day ticker (auto-rotating)
- ✅ Embla carousel homepage banner with autoplay
- ✅ Responsive mobile drawer navigation
- ✅ Dropdown navigation with hover effects
- ✅ Dynamic breadcrumb on all inner pages
- ✅ Quick links sidebar on inner pages
- ✅ Scroll-to-top button
- ✅ WhatsApp floating button
- ✅ Admission Enquiry form
- ✅ School Info slider (Embla)
- ✅ Latest Updates ticker
- ✅ Bulletin Board horizontal scroller
- ✅ Accessibility widget
- ✅ 42 pages covering all navigation routes

## Styling Notes

- All class names match the original HTML exactly
- No inline styles (all moved to SCSS)
- Bootstrap classes are preserved, not modified
- Use `_variables.scss` to change brand colors globally
- Use `_mixins.scss` for responsive breakpoints

## Environment

Node.js 18+ required.
