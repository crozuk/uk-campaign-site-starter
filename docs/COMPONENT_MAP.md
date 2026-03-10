# Component Map

## Layout components

### `src/components/layout/BaseLayout.astro`

- Purpose: Global shell, shared CSS imports, SEO, header, footer, motion script.
- Key props: `title`, `description`, `image`, `pathname`, `noIndex`
- Used by: all page routes

### `src/components/layout/SeoHead.astro`

- Purpose: titles, descriptions, canonical URLs, Open Graph, favicon, font imports, optional manual Cloudflare analytics beacon
- Key props: `title`, `description`, `image`, `pathname`, `noIndex`
- Used by: `BaseLayout`

### `src/components/layout/Header.astro`

- Purpose: primary nav, campaign identity, primary CTA, mobile menu
- Key props: none
- Used by: `BaseLayout`

### `src/components/layout/Footer.astro`

- Purpose: summary, nav, contact details, social links, legal line
- Key props: none
- Used by: `BaseLayout`

## Motion components

### `src/components/motion/Reveal.astro`

- Purpose: wrapper for reveal-on-scroll sections and cards
- Key props: `as`, `class`, `delay`
- Used by: homepage sections

### `src/components/motion/MotionScripts.astro`

- Purpose: IntersectionObserver setup for reveal animations
- Key props: none
- Used by: `BaseLayout`

## UI components

### `src/components/ui/Button.astro`

- Purpose: shared button and anchor rendering
- Key props: `href`, `variant`, `size`, `type`, `target`, `icon`
- Used by: header, hero, CTA band, action cards, 404, MP UI

### `src/components/ui/Card.astro`

- Purpose: shared surface card wrapper with optional link behaviour
- Key props: `href`, `title`, `class`
- Used by: issue cards, action cards, blog cards

### `src/components/ui/PageHero.astro`

- Purpose: interior page hero block
- Key props: `eyebrow`, `title`, `summary`, `actions`
- Used by: content pages, blog index, contact-your-mp

### `src/components/ui/CalloutPanel.astro`

- Purpose: small sidebar callout for content pages
- Key props: `title`, `body`, `tone`
- Used by: `MarkdownPageLayout`

### `src/components/ui/FeatureGrid.astro`

- Purpose: two-column feature summary grid
- Key props: `items`
- Used by: contact-your-mp page

### `src/components/ui/TagList.astro`

- Purpose: display blog tags as pills
- Key props: `tags`
- Used by: blog index, blog posts, latest posts section

### `src/components/ui/ShareLinks.astro`

- Purpose: quick share actions for blog posts
- Key props: `title`, `pathname`
- Used by: `BlogPostLayout`

## Homepage section components

### `HeroSection.astro`

- Purpose: homepage hero with layered visual and two key stats
- Used by: homepage

### `IssueCardsSection.astro`

- Purpose: three-part issue framing grid
- Used by: homepage

### `StatsSection.astro`

- Purpose: example proof-point cards
- Used by: homepage

### `WhyThisMattersSection.astro`

- Purpose: broader framing and reusable campaign logic
- Used by: homepage

### `ActionCardsSection.astro`

- Purpose: multiple supporter pathways
- Used by: homepage

### `MpLookupTeaser.astro`

- Purpose: homepage MP lookup block using the shared lookup component
- Used by: homepage

### `QuoteSection.astro`

- Purpose: featured supporter quote
- Used by: homepage

### `LatestPostsSection.astro`

- Purpose: latest markdown posts teaser
- Used by: homepage

### `FaqTeaserSection.astro`

- Purpose: homepage FAQ teaser built from content collection entries
- Used by: homepage

### `CtaBand.astro`

- Purpose: final conversion band
- Used by: homepage

## MP components

### `src/components/mp/MpLookupForm.astro`

- Purpose: postcode lookup UI, result rendering, configurable email/copy actions
- Key props: `title`, `summary`, `compact`
- Used by: homepage MP teaser, `/contact-your-mp`

## Layout wrappers

### `src/layouts/MarkdownPageLayout.astro`

- Purpose: render content-driven campaign pages with a hero and optional callout sidebar
- Key props: `title`, `description`, `eyebrow`, `summary`, `calloutTitle`, `calloutBody`, `calloutTone`, `ctaLabel`, `ctaHref`, `pathname`
- Used by: `src/pages/[page].astro`

### `src/layouts/BlogPostLayout.astro`

- Purpose: render blog posts with cover block, metadata, tags, and share links
- Key props: `title`, `summary`, `date`, `tags`, `coverStyle`, `pathname`
- Used by: `src/pages/blog/[slug].astro`
