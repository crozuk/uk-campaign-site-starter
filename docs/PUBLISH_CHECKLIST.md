# Publish Checklist

Use this before switching from demo mode to a real campaign launch.

## Content

- Replace the fictional campaign name, tagline, and summary in `src/data/site.ts`
- Replace homepage demo content in `src/data/campaign.ts`
- Replace dummy contact emails and phone numbers in `src/data/site.ts`
- Replace legal/org details in `src/data/site.ts`
- Replace privacy copy in `src/content/pages/privacy.md`
- Review all blog posts, FAQs, and quotes
- Remove demo markers such as `EXAMPLE_` and `REPLACE_ME`

## Navigation and visibility

- Confirm `visibility.pages` in `src/data/site.ts`
- Confirm `visibility.homeSections` in `src/data/site.ts`
- Confirm whether the blog should be visible in navigation
- Confirm whether the MP lookup should appear on the homepage
- Confirm whether `/contact-your-mp` should be enabled

## Theme and assets

- Replace the default site URL in `src/data/site.ts`
- Replace the placeholder `site` URL in `astro.config.mjs`
- Replace favicon, OG image, and placeholder abstract art if needed
- Confirm fonts are acceptable for the live campaign brand

## MP lookup

- Test `/contact-your-mp`
- Test at least two valid UK postcodes
- Check Parliament profile links
- Review email template text in `src/data/actions.ts`
- Confirm `emailMode`, `showParty`, and `showProfileLink`

## Build and deployment

- Run `npm run typecheck`
- Run `PUBLISH_CHECK_MODE=production npm run build`
- Confirm no placeholder warnings remain
- Confirm Cloudflare Pages build command is `PUBLISH_CHECK_MODE=production npm run build`
- Confirm build output directory is `dist`

## Analytics and operations

- Enable Cloudflare Web Analytics if required
- Confirm the production branch in Cloudflare Pages
- Confirm the custom domain
- Confirm robots, indexing, and metadata expectations
