// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

// Preview / test: GitHub Pages project site → https://bastachebastino.github.io/site/
// Live (custom domain): ripristinare site = https://bastachebastino.it e base = "/"
// Finché non è il lancio, resta noindex nel layout.
export default defineConfig({
  site: "https://bastachebastino.github.io",
  base: "/site/",
  trailingSlash: "always",
  integrations: [mdx()],
  markdown: {
    shikiConfig: { theme: "min-light" },
  },
});
