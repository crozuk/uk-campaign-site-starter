import { defineCollection, z } from "astro:content";

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heroEyebrow: z.string().optional(),
    summary: z.string().optional(),
    calloutTitle: z.string().optional(),
    calloutBody: z.string().optional(),
    calloutTone: z.enum(["soft", "strong"]).default("soft"),
    ctaLabel: z.string().optional(),
    ctaHref: z.string().optional(),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    tags: z.array(z.string()).optional(),
    coverStyle: z.enum(["mesh", "signal", "horizon"]).optional(),
    featured: z.boolean().default(false),
  }),
});

const faq = defineCollection({
  type: "content",
  schema: z.object({
    question: z.string(),
    summary: z.string(),
    order: z.number().default(0),
  }),
});

const quotes = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    role: z.string(),
    location: z.string().optional(),
    quote: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  blog,
  faq,
  pages,
  quotes,
};
