import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import partytown from "@astrojs/partytown";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://deploy-preview-1--phenomenal-lokum-6a3826.netlify.app",
  trailingSlash: "never",
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "github-light",
      },
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
    sitemap(),
    tailwind(),
    react(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
        debug: true,
      },
    }),
  ],
  output: "server",
  adapter: netlify(),
});
