# Modern Public School — Shalimar Bagh (Next.js)

A production-ready Next.js 16 website for Modern Public School, Shalimar Bagh, Delhi.

## Tech Stack
- **Framework**: Next.js 16.2.3 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: SCSS with CSS custom properties (variables + mixins)
- **Carousel**: Embla Carousel v8 with Autoplay plugin
- **Icons**: Font Awesome 4 (CDN) + Lucide React
- **CSS Framework**: Bootstrap 5.3 (via vendor SCSS)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                        # Next.js App Router pages (32 pages)
│   ├── page.tsx                # Homepage
│   ├── about-us/
│   ├── vision-mission/
│   ├── principal-message/
│   ├── managing-director/
│   ├── affirmations/
│   ├── good-modernite/
│   ├── building-trust/
│   ├── infrastructure/
│   ├── school-details/
│   ├── streams/
│   ├── admission/
│   ├── curriculum/
│   ├── assessment-rules/
│   ├── school-information/
│   ├── innovation/             # Best Practices
│   ├── life-skills/
│   ├── workshops/
│   ├── clubs/
│   ├── sports/
│   ├── phad-se-padh/
│   ├── health-wellness/
│   ├── kindergarten-events/    # School Events
│   ├── house-system/
│   ├── international-ventures/
│   ├── mandatory-committees/
│   ├── contact-us/
│   ├── circulars/
│   ├── photo-gallery/
│   ├── video-gallery/
│   ├── transfer-certificate/
│   └── terms-conditions/
│
├── components/                 # Core layout components
│   ├── Header.tsx              # Full nav with dropdowns, mobile menu
│   ├── Footer.tsx              # Address, Facebook embed, quick links
│   ├── Banner.tsx              # Embla carousel (10 slides)
│   ├── BreadCrumb.tsx          # Dynamic breadcrumb with route mapping
│   ├── InnerPage.tsx           # Inner page wrapper (breadcrumb + sidebar)
│   └── Accessibility/          # Full accessibility widget
│
├── utils/                      # Reusable utility components
│   ├── LatestNews.tsx          # Bulletin Board + Bus Updates ticker
│   ├── Circulars.tsx           # Latest Circulars scrolling list
│   ├── HomeGallery.tsx         # Photo + Video gallery homepage section
│   ├── SidebarLinks.tsx        # Sidebar navigation widget
│   ├── sidebarData.ts          # Sidebar link data (SCHOOL, ACADEMICS, etc.)
│   ├── ImportantLinks.tsx      # Quick-access icon links
│   ├── SocialMedia.tsx         # Social media links
│   ├── Pagination.tsx          # Prev/Next pagination
│   └── Accordion.tsx           # Accordion + BatchTable + PdfEmbed
│
├── context/
│   └── AccessibilityContext.tsx
│
└── styles/
    ├── globals.scss            # Main SCSS entry point
    ├── vendors/
    │   ├── bootstrap.min.scss
    │   └── lucide.scss
    └── custom/
        ├── core/
        │   ├── _variables.scss # All CSS custom properties
        │   ├── _mixins.scss    # All mixins (flex, mq, transitions...)
        │   └── _typography.scss
        ├── components/
        │   ├── generic/        # basic, colors, loader, sizes
        │   ├── _banner.scss
        │   ├── _button.scss
        │   ├── _homeslider.scss  # Circulars + Gallery + marquee
        │   ├── _innersidebar.scss
        │   ├── _cards.scss
        │   ├── _accessibility.scss
        │   ├── _circulars.scss
        │   ├── _animation.scss
        │   ├── _pagination.scss
        │   ├── _gallerydetail.scss
        │   ├── _videogallery.scss
        │   ├── _socialmedia.scss
        │   └── _vacancy.scss
        └── layout/
            ├── _header.scss
            ├── _footer.scss
            └── _breadcrumb.scss
```

## Key Features

- **Pixel-perfect layout** matching the original MPS browser design
- **Responsive** — mobile-first using SCSS `@include mq()` breakpoints
- **Dynamic breadcrumbs** — auto-generated from URL path with parent-section mapping
- **Sidebar navigation** on all inner pages, grouped by section
- **Embla Carousel** for the homepage banner (replaces Owl Carousel)
- **CSS marquee ticker** for Bulletin Board and Bus Updates (replaces deprecated `<marquee>`)
- **Accessibility widget** — font size, line height, letter spacing, dark mode, high contrast, dyslexia font, hide images, large cursor, screen reader
- **Static generation** — all 35 pages pre-rendered at build time (○ Static)

## Images

All images should be placed in `/public/images/`:
- `/public/images/banner/` — slide-1.jpg through slide-10.jpg, breadcrumbs-bg.jpg
- `/public/images/icons/` — mps-logo.jpg, icon files
- `/public/images/generic/` — logo-others-new.png

## External Links Used
- Online Fee Payment: https://modern.campuscare.cloud
- Legacy of 50 Years: https://sessionmps.wixsite.com/50yearsofmps
- Virtual Tour: https://mpstour.my.canva.site/
- School Policies: https://mpsmentalhealthcorner.my.canva.site/school-policies
- Student/Staff Login: https://erp.quickcampus.online/auth
- CBSE: https://www.cbse.gov.in/
