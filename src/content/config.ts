import { z, defineCollection } from "astro:content";

const basicSchema = {
  updated: z
    .date()
    .or(z.string().transform((str) => (str ? new Date(str) : null)))
    .nullable()
    .optional(),
  description: z.string().nullable().optional(),
  draft: z.boolean().nullable().optional().default(true),
  pssoes: z.array(z.string()).optional().default([]),
  translateBy: z.string().nullable().optional().default(null),
};

const postSchema = z.object({
  ...basicSchema,
  title: z.string(),
  date: z
    .date()
    .or(z.string().transform((str) => (str ? new Date(str) : null))),
  tags: z.array(z.string()).nullable().optional().default([]),
  series: z.string().nullable().optional(),
  katex: z.boolean().optional(),
  cover: z.string().nullable().optional(),
});

const thoughtSchema = z.object({
  ...basicSchema,
  date: z
    .date()
    .or(z.string().transform((str) => (str ? new Date(str) : null))),
  tags: z.array(z.string()).nullable().optional().default([]),
  images: z.array(z.string()).nullable().optional().default([]),
  reply: z.string().optional(),
  repost: z.string().optional(),
});

const goalSchema = z.object({
  ...basicSchema,
  title: z.string(),
  archivedAt: z
    .date()
    .or(z.string())
    .optional()
    .nullable()
    .transform((str) => new Date(str)),
});

const projectSchema = z.object({
  ...basicSchema,
  title: z.string(),
  logo: z.string(),
  url: z.string(),
  githubLink: z.string().optional().nullable(),
  isOpensource: z.boolean().optional().nullable().default(false),
});

const pageSchema = z.object({
  ...basicSchema,
  title: z.string(),
  url: z.string().nullable().default(""),
  location: z.string().nullable().default("footer"),
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

const goals = defineCollection({
  schema: goalSchema,
});

const projects = defineCollection({
  schema: projectSchema,
});

export const collections = {
  posts,
  thoughts,
  pages,
  goals,
  projects,
};
