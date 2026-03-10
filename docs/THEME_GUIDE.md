# Theme Guide

The visual system is driven by `src/data/theme.ts` and plain CSS files under `src/styles/`.

## Theme source of truth

Edit `src/data/theme.ts` to change:

- heading and body fonts
- brand colours
- background/surface colours
- accent colour
- gradients
- shadows
- radii
- section spacing
- motion timings

`ThemeVars.astro` converts those values into root CSS variables.

## CSS architecture

- `src/styles/tokens.css`
  Semantic CSS variables and shared sizing tokens.
- `src/styles/global.css`
  Reset, typography, layout wrappers, form defaults, and prose styling.
- `src/styles/motion.css`
  Keyframes, reveal-on-scroll states, and reduced-motion handling.
- `src/styles/utilities.css`
  Small helper classes only.
- `src/styles/components.css`
  Shared component patterns such as buttons, cards, header, footer, hero, grids, and MP lookup UI.

## Changing colours

Update the values in `src/data/theme.ts`, not the component CSS first.

Suggested order:

1. `colors.brand`
2. `colors.brandStrong`
3. `colors.brandSoft`
4. `colors.accent`
5. `colors.canvas`
6. `colors.surface`
7. `gradients.hero`
8. `gradients.cta`

That keeps the palette coherent across buttons, surfaces, and backgrounds.

## Changing typography

Current defaults:

- headings: Fraunces
- body: Public Sans

If you switch fonts:

- update `src/data/theme.ts`
- update the font import in `src/components/layout/SeoHead.astro`
- check heading scale and line height afterwards

## Changing button feel

Button styles live in `src/styles/components.css`.

Most campaigns only need to change:

- gradient strength on `.button--primary`
- softness of `.button--secondary`
- pill radius via the theme token
- shadow intensity

Avoid introducing page-specific button variants unless the pattern is genuinely reusable.

## Changing surfaces and card depth

Look at:

- `.surface`
- `.card`
- `.hero__card`
- `.quote-panel`
- `.cta-band__panel`

These rely on shared tokens for:

- border treatment
- blur/backdrop feel
- radius
- shadow

If the site starts to look too glossy or too flat, adjust the shared surface treatment first before editing individual sections.

## Motion guidance

Motion is intentionally light:

- reveal on scroll
- floating abstract art
- soft hover lift on buttons and cards

If you change motion, keep these rules:

- respect `prefers-reduced-motion`
- do not make motion necessary to understand content
- keep durations restrained

## Good customisation workflow

1. Update `src/data/theme.ts`
2. Check `src/components/layout/SeoHead.astro` for font imports
3. Adjust shared classes in `src/styles/components.css`
4. Verify homepage, blog index, blog post, and MP lookup page

That order preserves the starter's consistency.
