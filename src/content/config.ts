import { z, defineCollection } from "astro:content";
import { rssSchema } from "@astrojs/rss";

const blog = defineCollection({
  schema: rssSchema,
});

const postSchema = z.object({
  title: z.string(),
  date: z
    .date()
    .or(z.string())
    .transform((str) => new Date(str)),
  updated: z
    .date()
    .or(z.string())
    .optional()
    .nullable()
    .transform((str) => new Date(str)),
  description: z.string().nullable().optional(),
  tags: z.array(z.string()).nullable().optional().default([]),
  series: z.string().nullable().optional(),
  katex: z.boolean().optional(),
  draft: z.boolean().nullable().optional().default(true),
  cover: z.string().nullable().optional(),
  pssoes: z.array(z.string()).optional().default([]),
});

const thoughtSchema = z.object({
  title: z.string().optional(),
  date: z
    .date()
    .or(z.string())
    .transform((str) => new Date(str)),
  updated: z
    .date()
    .or(z.string())
    .optional()
    .nullable()
    .transform((str) => new Date(str)),
  description: z.string().optional(),
  draft: z.boolean().optional().default(true),
  tags: z.array(z.string()).optional().default([]),
  pssoes: z.array(z.string()).optional().default([]),
});

const pageSchema = z.object({
  title: z.string(),
});

const posts = defineCollection({
  // type: "content",
  schema: postSchema,
});

const pages = defineCollection({
  schema: pageSchema,
});

const thoughts = defineCollection({
  // type: "content",
  schema: thoughtSchema,
});

export const collections = {
  posts: posts,
  thoughts: thoughts,
  pages: pages,
};
