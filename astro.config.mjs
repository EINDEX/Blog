import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import remarkHint from "remark-hint";
import remarkToc from "remark-toc";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import {
  remarkReadingTime,
  remarkReadmore,
  remarkContentProcesser,
  remarkRawString,
  remarkTagFounder,
} from "./remark.mjs";
import slugify from "slugify";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://eindex.me",
  // platform: "node",
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "dracula",
      wrap: true,
    },
    remarkPlugins: [
      remarkMath,
      remarkToc,
      remarkHint,
      remarkReadingTime,
      [remarkTagFounder, { usernameLink: (username) => `/tags/${username}` }],
      remarkContentProcesser,
      remarkReadmore,
      remarkRawString,
    ],
    rehypePlugins: [rehypeKatex, rehypeAccessibleEmojis],
    gfm: true,
  },
  integrations: [
    sitemap(),
    tailwind({ config: { applyBaseStyles: false } }),
    mdx(),
  ],
  strictNullChecks: true,
  allowJS: true,

  output: "server",
  adapter: cloudflare({
    mode: "advanced",
  }),

  vite: {
    build: {
      rollupOptions: {
        external: ["path:media"],
      },
    },
  },
});
