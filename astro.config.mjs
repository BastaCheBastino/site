// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// Preview GitHub Pages (project): base DEVE essere /site/
// Go-live su www.bastachebastino.it: site = https://www.bastachebastino.it , base = "/" + public/CNAME
// Locale: http://localhost:4321/site/… (con base /site/) oppure 4321/ se base /
export default defineConfig({
  site: "https://bastachebastino.github.io/site",
  base: "/site/",
  trailingSlash: "always",
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes("/articoli/test-commenti"),
    }),
  ],
  markdown: {
    shikiConfig: { theme: "min-light" },
  },
  // WSL su /mnt/c: inotify non vede i salvataggi da Windows → senza polling il HMR resta fermo.
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 1000,
      },
    },
  },
});
