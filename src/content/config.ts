import { z, defineCollection } from "astro:content";
import { rssSchema } from "@astrojs/rss";

const blog = defineCollection({
  schema: rssSchema,
});

const postSchema = z.object({
  title: z.string(),
  date: z.string().transform((str) => new Date(str)),
  updated: z
    .string()
    .transform((str) => new Date(str))
    .optional(),
  description: z.string().optional(),
  tags: z.array(z.string()).optional().default([]),
  series: z.string().optional(),
  katex: z.boolean().optional(),
  draft: z.boolean().optional().default(false),
  cover: z.string().optional(),
  pssoes: z.array(z.string()).optional().default([]),
});

const thoughtSchema = z.object({
  title: z.string().optional(),
  date: z.string().transform((str) => new Date(str)),
  updated: z
    .string()
    .transform((str) => new Date(str))
    .optional(),
  description: z.string().optional(),
  draft: z.boolean().optional().default(true),
  tags: z.array(z.string()).optional().default([]),
  pssoes: z.array(z.string()).optional().default([]),
});

const newsletterSchema = z.object({
  title: z.string(),
  date: z.string().transform((str) => new Date(str)),
  updated: z
    .string()
    .transform((str) => new Date(str))
    .optional(),
  description: z.string().optional(),
  tags: z.array(z.string()).optional().default([]),
  series: z.string().optional(),
  katex: z.boolean().optional(),
  draft: z.boolean().optional().default(false),
  cover: z.string().optional(),
  pssoes: z.array(z.string()).optional().default([]),
});

const pageSchema = z.object({
  title: z.string(),
});

const posts = defineCollection({
  schema: postSchema,
});

const pages = defineCollection({
  schema: pageSchema,
});

const thoughts = defineCollection({
  schema: thoughtSchema,
});

const newsletters = defineCollection({
  schema: newsletterSchema,
});

export const collections = {
  posts: posts,
  thoughts: thoughts,
  pages: pages,
  newsletters: newsletters,
};
