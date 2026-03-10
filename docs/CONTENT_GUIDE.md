# Content Guide

This starter separates short config from longer copy. Use the map below when replacing the fictional Fair Bills UK content.

## Site-wide basics

Edit `src/data/site.ts` for:

- campaign name
- tagline
- short summary
- nav items
- default CTA labels and links
- social links
- contact details
- legal/org details
- blog visibility in nav
- page visibility
- homepage section visibility
- MP lookup settings
- Cloudflare Web Analytics options

## Homepage content

Edit `src/data/campaign.ts` for:

- hero title and summary
- hero supporting pills
- demo stats on the homepage
- issue cards
- why-this-matters copy
- optional MP lookup teaser copy if you decide to re-enable it on the homepage
- featured quote intro copy
- latest posts intro copy
- FAQ teaser intro copy
- final CTA band copy and optional secondary action

The homepage route itself is `src/pages/index.astro`, but most text should stay in the data file.

## Long-form campaign pages

Edit the markdown files in `src/content/pages/`:

- `about.md`
- `get-involved.md`
- `privacy.md`

These are rendered by `src/pages/[page].astro` using `src/layouts/MarkdownPageLayout.astro`.

How to add a new content page later:

1. Add a new markdown file in `src/content/pages/`
2. Use a slug that matches the desired route
3. Add the slug to `visibility.pages` in `src/data/site.ts`
4. Add a nav item if needed

## Blog posts

Create or edit markdown files in `src/content/blog/`.

Frontmatter fields:

- `title`
- `date`
- `summary`
- `tags`
- `coverStyle`
- `featured`

The blog index lives at `src/pages/blog/index.astro`.
The post route lives at `src/pages/blog/[slug].astro`.

## FAQ entries

Edit `src/content/faq/*.md`.

Use FAQ files for:

- recurring supporter questions
- campaign process questions
- reusable teaser content that can later become a full FAQ page

The current homepage teaser reads the collection from `src/lib/content.ts`.

## Quotes

Edit `src/content/quotes/*.md`.

Current fields:

- `name`
- `role`
- `location`
- `quote`
- `featured`

Mark one quote as `featured: true` for the homepage quote section.

## MP contact message templates

Edit `src/data/actions.ts`.

There are two template sources:

- `global`
- `campaign`

The active source is selected by `siteConfig.mpLookup.copyTemplateSource`.

Supported placeholders inside the templates:

- `[MP name]`
- `[Your postcode]`
- `[Constituency]`

Fields like `[Your name]` are intentionally left for the supporter to fill in manually.

## Legal copy

Edit both:

- `src/data/site.ts` for organisation/contact/legal details
- `src/content/pages/privacy.md` for the full privacy page

Do not treat the current privacy content as production-ready legal text.

## Placeholder markers

This starter intentionally includes placeholder markers for demo safety.

Before launch, remove or replace:

- `EXAMPLE_`
- `REPLACE_ME`
- dummy `example.org` inboxes
- `replace-me.example.com`
- placeholder company/legal values

Run:

```bash
PUBLISH_CHECK_MODE=production npm run build
```

That is the final content safety check before production deployment.
