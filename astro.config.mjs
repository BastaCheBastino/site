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
