import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    order: z.number().optional(),
    series: z.string().optional(),
    draft: z.boolean().default(true),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
  }),
});

export const collections = { posts };
