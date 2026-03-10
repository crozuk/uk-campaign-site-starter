import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://replace-me.example.com",
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
