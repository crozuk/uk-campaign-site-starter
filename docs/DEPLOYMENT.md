# Deployment Guide

## Target platform

This starter is designed for Cloudflare Pages with one Pages Function:

- static Astro output for the site
- `functions/api/mp-lookup.ts` for postcode lookup

## Recommended Cloudflare Pages settings

Use a Git-connected Pages project.

- Framework preset: `Astro`
- Build command: `PUBLISH_CHECK_MODE=production npm run build`
- Build output directory: `dist`
- Root directory: repository root

`wrangler.toml` already includes:

- `compatibility_date = "2026-03-09"`
- `pages_build_output_dir = "./dist"`

## Preview deployments

Recommended preview behaviour:

- Build command: `PUBLISH_CHECK_MODE=preview npm run build`
- Result: previews still build, but placeholder markers are called out in the log

If you want previews to fail on placeholders too, use the same production build command for preview branches.

## Local Pages-style preview

After building:

```bash
npm run preview
```

That serves the built `dist/` output via `wrangler pages dev`, which is useful for checking the Pages Function path locally.

## Pages Functions notes

The MP lookup endpoint lives at:

- `functions/api/mp-lookup.ts`

It relies on:

- `https://api.postcodes.io/`
- `https://members-api.parliament.uk/`

Because the rest of the site is static, if this function is turned off in config the rest of the build remains unaffected.

## Cloudflare Web Analytics

The repo is Web Analytics ready in two ways:

1. Recommended: enable automatic injection in the Cloudflare dashboard for the production site
2. Optional: set `analytics.cloudflareWebAnalytics.enabled = true` and use manual mode in `src/data/site.ts` if you need to inject the beacon yourself

If you use manual mode and run a strict CSP, allow:

- `https://static.cloudflareinsights.com`
- `https://cloudflareinsights.com`

## Direct deploy with Wrangler

Once `dist/` exists, you can also deploy directly:

```bash
npx wrangler pages deploy dist --project-name your-project-name
```

That is useful for smoke tests or non-Git deployment workflows.

## Production safety

Before a live deploy, run:

```bash
PUBLISH_CHECK_MODE=production npm run build
```

This should fail if placeholder markers, dummy emails, or placeholder URLs are still present.

## Suggested dashboard checklist

- set the custom domain
- enable Cloudflare Web Analytics
- set production env var `PUBLISH_CHECK_MODE=production`
- confirm the production branch
- run one test request against `/api/mp-lookup?postcode=SW1A0AA`
