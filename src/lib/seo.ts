import { siteConfig } from "@data/site";

type PageMeta = {
  title?: string;
  description?: string;
  image?: string;
};

export function buildPageTitle(title?: string) {
  if (!title) {
    return siteConfig.seo.defaultTitle;
  }

  return `${title} | ${siteConfig.campaignName}`;
}

export function absoluteUrl(pathname = "/") {
  return new URL(pathname, siteConfig.siteUrl).toString();
}

export function buildPageMeta(meta: PageMeta = {}) {
  return {
    title: buildPageTitle(meta.title),
    description: meta.description ?? siteConfig.seo.defaultDescription,
    image: absoluteUrl(meta.image ?? siteConfig.seo.ogImage),
    canonical: absoluteUrl("/"),
  };
}
