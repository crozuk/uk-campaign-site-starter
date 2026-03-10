# Architecture Plan

## Goal

Build a reusable Astro starter for UK advocacy and campaign websites that feels polished enough for client demos while staying maintainable enough for repeated reuse.

## Core principles

- Static-first by default
- Config-driven visibility and navigation
- Content kept outside reusable components
- Plain CSS with central theme tokens
- Accessibility-first defaults
- Small, explicit edge function only where needed
- Strong repo documentation for future LLM-assisted editing

## Major systems

### 1. Site config layer

`src/data/site.ts` holds short, high-level settings:

- campaign name
- tagline
- summary
- navigation
- CTAs
- socials
- contact and legal info
- visibility toggles
- MP lookup options
- analytics options

This keeps campaign-level decisions in one place.

### 2. Theme layer

`src/data/theme.ts` defines the theme tokens. `ThemeVars.astro` maps those values into CSS variables, and `src/styles/tokens.css` exposes semantic tokens to the rest of the CSS.

Why this choice:

- colours, gradients, radii, shadows, and motion are easy to swap centrally
- component CSS stays readable
- the design still uses plain CSS rather than a JS styling abstraction

### 3. Content layer

The starter separates short config from longer content.

- homepage content blocks: `src/data/campaign.ts`
- markdown pages: `src/content/pages`
- blog: `src/content/blog`
- FAQ: `src/content/faq`
- quotes: `src/content/quotes`

Why this choice:

- it avoids hardcoding long-form copy into page components
- it makes LLM-assisted edits more predictable
- it gives future teams obvious replacement points

### 4. Route layer

Astro routes are split between static routes and a content-driven route.

- `src/pages/index.astro`
- `src/pages/contact-your-mp.astro`
- `src/pages/blog/index.astro`
- `src/pages/blog/[slug].astro`
- `src/pages/404.astro`
- `src/pages/[page].astro`

`[page].astro` is a deliberate deviation from the originally suggested fixed-page structure. It lets enabled content pages be generated from collection slugs while omitted pages stay out of the build more cleanly.

### 5. Reusable UI and section blocks

The homepage is built from section components under `src/components/sections`. Shared layout and UI live under `src/components/layout` and `src/components/ui`.

Why this choice:

- strong homepage composition without monolithic route files
- easy section-level toggling
- reusable building blocks for future pages

### 6. MP lookup edge function

The MP lookup lives in `functions/api/mp-lookup.ts`, keeping the rest of the site static.

Flow:

1. Browser sends postcode to `/api/mp-lookup`
2. Function normalises postcode
3. Function queries postcodes.io for the parliamentary constituency
4. Function queries the UK Parliament Members API for the current member
5. Function returns a normalised JSON payload

Why this choice:

- only one genuinely dynamic feature needs server logic
- Pages Functions fit the Pages deployment target cleanly
- the function can be switched off without affecting the rest of the site

### 7. Publish safeguard

The repo includes `scripts/prepublish-check.mjs` and supporting data in `src/data/publish-check.ts`.

Modes:

- development: allow
- preview: warn
- production: fail

Why this choice:

- starter repos often ship with demo copy for weeks or months
- preview environments still need to build
- production should not publish placeholder legal/contact/demo content by accident

## Design direction

The default theme aims for:

- civic-tech polish
- calm confidence rather than agency flash
- restrained motion
- layered surfaces and gradients
- strong typography without looking corporate

The visual system is intentionally singular rather than multi-theme. It is easier to adapt one strong default than to maintain a weak theme switcher in a starter repo.
