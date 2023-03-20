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
  tags: z.array(z.string()).optional(),
  series: z.string().optional(),
  katex: z.boolean().optional(),
  draft: z.boolean().optional(),
  cover: z.string().optional(),
});

const thoughtSchema = z.object({
  date: z.string().transform((str) => new Date(str)),
  updated: z
    .string()
    .transform((str) => new Date(str))
    .optional(),
  description: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

const pageSchema = z.object({
  title: z.string(),
});

const posts = defineCollection({
  schema: postSchema,
});

const postsCN = defineCollection({
  schema: postSchema,
});

const pages = defineCollection({
  schema: pageSchema,
});

const pagesCN = defineCollection({
  schema: pageSchema,
});

const thoughts = defineCollection({
  schema: thoughtSchema,
});

const thoughtsCN = defineCollection({
  schema: thoughtSchema,
});

export const collections = {
  "posts-en": posts,
  "posts-cn": postsCN,
  "thoughts-en": thoughts,
  "thoughts-cn": thoughtsCN,
  "pages-en": pages,
  "pages-cn": pagesCN,
};
