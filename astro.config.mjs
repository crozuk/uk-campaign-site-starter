import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://uk-campaign-site-starter.pages.dev",
  output: "static",
  integrations: [sitemap()],
  markdown: {
    syntaxHighlight: "shiki",
  },
  vite: {
    css: {
      devSourcemap: true,
    },
  },
});
