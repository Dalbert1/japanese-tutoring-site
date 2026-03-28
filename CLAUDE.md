# Hikaru Language Studio — Japanese Tutoring Business Site

## Project Overview
Single-page marketing website for Hikaru Language Studio, a Japanese language tutoring business based in Carlsbad, California. Built to attract local and online students with a warm, professional design.

## Design Decisions

### Architecture
- **Static SPA:** All content lives in JSON data files. No backend needed.
- **SEO-first:** Structured data (JSON-LD), geo meta tags, semantic HTML, and keyword-optimized content for local search.
- **Data-driven content:** All business content (services, testimonials, FAQ) lives in `frontend/src/data/`. Easy to update without touching components.

### Tech Choices
- **React + Vite:** Fast builds, modern tooling.
- **Tailwind CSS v3:** Utility-first warm theme with custom color tokens.
- **Framer Motion:** Scroll-triggered entrance animations.

### Theme — Warm Japanese-Inspired
- Background: `#fffbf7` (warm cream)
- Surface: `#fff5ee` (soft peach)
- Card: `#ffffff` (white)
- Border: `#e8ddd4` (warm border)
- Primary Accent: `#c2185b` (sakura/deep pink)
- Secondary Accent: `#2d4a7a` (traditional indigo)
- Gold Accent: `#d4a574`
- Text Primary: `#2d2d3a`
- Text Secondary: `#6b7280`
- Font: Inter (body), Noto Serif JP (Japanese text, headings accents)

### SEO Strategy
- Target domain: `carlsbad-japanese-tutor.com`
- Local keywords: "Japanese lessons Carlsbad", "Japanese tutor San Diego", "JLPT prep Carlsbad"
- JSON-LD LocalBusiness schema with geo coordinates
- Serving areas: Carlsbad, Encinitas, Oceanside, Vista, San Diego

### Deployment
- **Vercel** (free tier). `vercel.json` config included.

## Running Locally
```bash
cd frontend
npm install
npm run dev
```

## Content Updates
All content is in `frontend/src/data/`. Edit the JSON files to update services, testimonials, or FAQ. No component changes needed for content-only updates.
