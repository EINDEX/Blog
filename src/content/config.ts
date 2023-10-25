import { z, defineCollection, reference } from "astro:content";

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
  keywords: z.array(z.string()).nullable().optional().default([]),
  katex: z.boolean().optional(),
  cover: z.string().nullable().optional(),
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
  order: z.number().nullable().default(0),
});


const posts = defineCollection({
  schema: postSchema,
});

const pages = defineCollection({
  schema: pageSchema,
});

const goals = defineCollection({
  schema: goalSchema,
});

const projects = defineCollection({
  schema: projectSchema,
});


export const collections = {
  posts,
  pages,
  goals,
  projects,
};
