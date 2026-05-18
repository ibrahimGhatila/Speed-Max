# Speedmax — One-Stop Technology Solutions

Editorial redesign of [speedmax.my](https://www.speedmax.my/) for **Speedmax Solutions Sdn Bhd**, a Johor Bahru–based specialist contractor for ICT and extra-low-voltage construction since 2010.

Built with **Next.js 16 (App Router)**, **TypeScript** and **Tailwind CSS v4**, on Inter throughout.

## Design language

- **Palette:** warm paper `#FAFAF9` and near-black ink `#0A0A0A` with a single red accent `#DC2626` used sparingly.
- **Type:** Inter — display weights at editorial sizes (88–128px), tight tracking (-0.04em), tabular numerals.
- **Layout:** asymmetric 12-column grids, generous whitespace, hairline rules between sections, numbered section labels.
- **Motion:** subtle rise-in on hero, marquee partner strip — nothing decorative.
- **Photography:** desaturated/duotone treatment, used cinematically.

## Tech stack

- Next.js 16 (App Router, Turbopack)
- React 19, TypeScript 5
- Tailwind CSS v4
- Inter via `next/font/google`

## Getting started

```bash
npm install
npm run dev
```

## Project structure

```
src/
  app/
    layout.tsx        # root layout
    page.tsx          # /  (Index)
    products/page.tsx # /products  (Capabilities)
    about/page.tsx    # /about     (Studio)
    contact/page.tsx  # /contact
    globals.css       # theme tokens & base type
  components/
    Header, Hero, FeaturedProject, Services, Approach,
    About, Quote, Partners, CtaBanner, Footer, Logo
  lib/
    site.ts           # copy: services, stats, approach, featured project
    images.ts         # curated Unsplash photo references
```

