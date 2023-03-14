import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import remarkToc from "remark-toc";
import rehypeKatex from "rehype-katex";
import astroI18next from "astro-i18next";
import remarkMath from "remark-math";
import sitemap from "@astrojs/sitemap";
import AstroPWA from "@vite-pwa/astro";
import tailwind from '@astrojs/tailwind';

// import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  site: "https://beta.eindex.me",
  integrations: [AstroPWA(), astroI18next(), sitemap(), mdx({
    syntaxHighlight: "false",
    shikiConfig: {
      theme: "dracula"
    },
    remarkPlugins: [remarkMath, remarkToc],
    rehypePlugins: [rehypeKatex]
  }), react(), tailwind()],
  strictNullChecks: true

  // TODO pending on astroI18next
  // output: "server",
  // adapter: cloudflare({ mode: "directory" }),
});