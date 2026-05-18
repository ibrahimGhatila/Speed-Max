# Speedmax — One-Stop Technology Solutions

Modern redesign of [speedmax.my](https://www.speedmax.my/) for **Speedmax Solutions Sdn Bhd**, a Johor Bahru–based provider of structured cabling, system integration, IP telephony, security & access control, and AutoCount accounting software.

Built with **Next.js 16 (App Router)**, **TypeScript** and **Tailwind CSS v4**.

## Tech stack

- Next.js 16 (App Router, Turbopack)
- React 19
- TypeScript 5
- Tailwind CSS v4
- Lucide icons + inline brand SVGs
- Inter (body) + Space Grotesk (display) via `next/font`

## Getting started

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Available scripts

```bash
npm run dev      # start dev server
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

## Project structure

```
src/
  app/
    layout.tsx        # root layout (utility bar, header, footer, floating CTAs)
    page.tsx          # homepage
    products/page.tsx # Products & Services
    about/page.tsx    # About Us
    contact/page.tsx  # Contact + lead form
    globals.css       # Tailwind theme tokens (navy + Speedmax red)
  components/         # UI components (Header, Hero, Services, ...)
  lib/site.ts         # central content: services, stats, partners, etc.
```

All site content (services, stats, contact details, testimonials) lives in `src/lib/site.ts` so non-engineers can edit copy without touching component code.

## Design system

- **Colours:** Navy (`#0b1224`) base, Speedmax red (`#e11d2a`) accent
- **Type:** Space Grotesk (display) + Inter (body)
- **Layout:** max-width 7xl (1280px), generous whitespace, alternating light/dark sections

## Deployment

The build is fully static — deploy to Vercel, Netlify, Cloudflare Pages, or any static host.

```bash
npm run build
```
