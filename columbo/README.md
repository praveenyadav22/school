# New Green Field School — Next.js Website

A production-ready Next.js 16 + TypeScript school website with SCSS styling, Bootstrap 5, and full accessibility support.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: SCSS + Bootstrap 5
- **Icons**: Remixicon (via SCSS + self-hosted fonts in `/public/fonts/`)
- **Carousel**: Embla Carousel
- **Accessibility**: Custom AccessibilityWidget (font size, contrast, dyslexia mode, etc.)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout — Header + BreadCrumb + Footer on every page
│   └── page.tsx            # Homepage
├── components/
│   ├── Header.tsx          # Sticky header, desktop nav, mobile drawer, info sidebar
│   ├── Footer.tsx          # Footer columns, copyright, scroll-to-top
│   ├── BreadCrumb.tsx      # Auto breadcrumb (hidden on homepage)
│   ├── Banner.tsx          # Embla carousel hero banner
│   └── Accessibility/      # Floating accessibility widget + drawer + panel
├── context/
│   └── AccessibilityContext.tsx
├── styles/
│   ├── globals.scss        # Entry point — imports all partials
│   ├── vendors/            # Bootstrap + Lucide SCSS
│   └── custom/
│       ├── core/           # _variables, _mixins, _typography
│       ├── components/     # Per-component SCSS partials
│       └── layout/         # _header, _footer, _breadcrumb
├── utils/                  # Shared utility components (Pagination, SidebarLinks, etc.)
public/
├── fonts/                  # Self-hosted Remixicon / Lucide font files
├── images/                 # banner/, logo/, icons/, generic/
└── favicons
```

## Getting Started

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build
npm start

# Lint
npm run lint
```

## Adding New Pages

1. Create `src/app/[route]/page.tsx`
2. The `layout.tsx` automatically wraps it with Header + BreadCrumb + Footer
3. The BreadCrumb auto-generates from the URL path

## Adding Logo

Place your logo files at:
- `/public/images/logo/logo.png` — main logo (used in header + footer)
- `/public/images/logo/logo-white.png` — white version for dark footer background

## Adding Banner Images

Place hero images at:
- `/public/images/banner/hero-1.jpg`
- `/public/images/banner/hero-2.jpg`
- `/public/images/banner/hero-3.jpg`
- `/public/images/banner/hero-4.jpg`

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```bash
cp .env.example .env.local
```

## Production Deployment

This project is optimised for deployment on **Vercel** (zero-config) or any Node.js host.

```bash
npm run build   # Creates .next/ build artefacts
npm start       # Serves production build on port 3000
```
