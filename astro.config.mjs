import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import remarkToc from "remark-toc";
import rehypeKatex from "rehype-katex";
import astroI18next from "astro-i18next";
import remarkMath from "remark-math";
import sitemap from "@astrojs/sitemap";
import AstroPWA from "@vite-pwa/astro";
import tailwind from "@astrojs/tailwind";

// import cloudflare from "@astrojs/cloudflare";

import react from "@astrojs/react";

export default defineConfig({
  site: "https://eindex.me",
  integrations: [
    AstroPWA({
      base: '/',
      scope: '/',
      injectRegister: "auto",
      registerType: "autoUpdate",
      workbox: { navigateFallback: "/404" },
      manifest: {
        name: "EINDEX's Blog",
        short_name: "EINDEX's Blog",
        description: "EINDEX's Blog, share my thoughts and visions.",
        icons: [
          {
            src: "/favicon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/favicon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        theme_color: "#FFFFFF",
        background_color: "#FFFFFF",
        display: "standalone",
        prefer_related_applications: false,
      },
    }),
    astroI18next(),
    sitemap(),
    mdx({
      syntaxHighlight: "false",
      shikiConfig: {
        theme: "dracula",
      },
      remarkPlugins: [remarkMath, remarkToc],
      rehypePlugins: [rehypeKatex],
    }),
    react(),
    tailwind({ config: { applyBaseStyles: false } }),
  ],
  strictNullChecks: true,

  // TODO pending on astroI18next
  // output: "server",
  // adapter: cloudflare({ mode: "directory" }),
});
