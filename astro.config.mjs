import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import remarkToc from "remark-toc";
import rehypeKatex from "rehype-katex";
import astroI18next from "astro-i18next";
import remarkMath from "remark-math";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
// import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://beta.eindex.me",
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "dracula",
    },
    remarkPlugins: [remarkMath, remarkToc],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [
    astroI18next(),
    sitemap(),
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "dracula",
      },
      remarkPlugins: [remarkMath, remarkToc],
      rehypePlugins: [rehypeKatex],
    }),
  ],
  strictNullChecks: true,

  // TODO pending on astroI18next
  // output: "server",
  // adapter: cloudflare({ mode: "advanced" }),
});
