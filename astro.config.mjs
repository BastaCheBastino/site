// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

// Live: custom domain. Preview path /site/ solo se si torna a project Pages senza dominio.
// Locale: http://localhost:4321/…
export default defineConfig({
  site: "https://www.bastachebastino.it",
  base: "/",
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
