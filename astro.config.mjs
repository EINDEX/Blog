import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import remarkToc from "remark-toc";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";


export default defineConfig({
  site: "https://eindex.me",
  integrations: [
    // AstroPWA({
    //   base: "/",
    //   scope: "/",
    //   registerType: "autoUpdate",
    //   manifest: {
    //     name: "EINDEX's Blog",
    //     short_name: "EINDEX's Blog",
    //     icons: [
    //       {
    //         src: "/favicon-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/favicon-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //     ],
    //     theme_color: "#323232",
    //     background_color: "#323232",
    //     display: "standalone",
    //     prefer_related_applications: false,
    //   },
    //   workbox: {
    //     navigateFallback: "/404",
    //     globPatterns: ["**/*.{css,js,html,svg,png,ico,txt}"],
    //   },
    // }),
    sitemap(),
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "dracula",
      },
      remarkPlugins: [remarkMath, remarkToc],
      rehypePlugins: [rehypeKatex],
      gfm: true,
    }),
    tailwind({ config: { applyBaseStyles: false } }),
  ],
  strictNullChecks: true,

  output: "server",
  adapter: cloudflare({ mode: "directory" }),
});
