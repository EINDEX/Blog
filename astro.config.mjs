import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import remarkToc from "remark-toc";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://eindex.me",
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "dracula",
      wrap: true,
    },
    remarkPlugins: [remarkMath, remarkToc, remarkReadingTime],
    rehypePlugins: [rehypeKatex],
    gfm: true,
  },
  integrations: [
    sitemap(),
    tailwind({ config: { applyBaseStyles: false } }),
    mdx(),
  ],
  strictNullChecks: true,

  output: "server",
  adapter: cloudflare({ mode: "directory" }),

  vite: {
    build: {
      rollupOptions: {
        external: ["path:media"],
      },
    },
  },
});
