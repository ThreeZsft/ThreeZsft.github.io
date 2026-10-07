import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/** Case studies. One entry per project, rendered at `/work/<id>/`. */
const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** The outcome, said plainly — what the reader gets from the work.
          Falls back to the title when unset. */
      headline: z.string().optional(),
      /** The shipped site, when there is one to show. */
      site: z.string().url().optional(),
      client: z.string(),
      year: z.number(),
      role: z.string(),
      discipline: z.array(z.string()),
      tools: z.array(z.string()),
      summary: z.string(),
      cover: image(),
      /** Where the entry sorts in a listing. Lower comes first. */
      order: z.number().default(0),
      /** A draft still renders, but is kept out of search results. */
      draft: z.boolean().default(false),
    }),
});

export const collections = { work };
