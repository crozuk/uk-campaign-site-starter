import { getCollection, getEntry } from "astro:content";

export async function getBlogPosts() {
  const posts = await getCollection("blog");

  return posts.sort((left, right) => right.data.date.getTime() - left.data.date.getTime());
}

export async function getLatestBlogPosts(limit = 3) {
  const posts = await getBlogPosts();
  return posts.slice(0, limit);
}

export async function getFaqEntries(limit?: number) {
  const entries = await getCollection("faq");
  const sorted = entries.sort((left, right) => left.data.order - right.data.order);

  return typeof limit === "number" ? sorted.slice(0, limit) : sorted;
}

export async function getFeaturedQuote() {
  const quotes = await getCollection("quotes");

  return (
    quotes.find((entry) => entry.data.featured) ??
    quotes.sort((left, right) => left.id.localeCompare(right.id))[0]
  );
}

export async function getCampaignPage(slug: string) {
  return getEntry("pages", slug);
}

export async function getCampaignPages() {
  const pages = await getCollection("pages");
  return pages.sort((left, right) => left.slug.localeCompare(right.slug));
}
