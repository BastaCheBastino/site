// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

// Live target: https://bastachebastino.it (GitHub Pages + custom domain)
// Finché Pages non è collegato al dominio, resta noindex nel layout.
export default defineConfig({
  site: "https://bastachebastino.it",
  base: "/",
  trailingSlash: "always",
  integrations: [mdx()],
  markdown: {
    shikiConfig: { theme: "min-light" },
  },
});
