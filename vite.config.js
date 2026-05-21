import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolveSiteUrl } from "./scripts/site-url.mjs";

const siteUrl = resolveSiteUrl();

export default defineConfig({
  plugins: [
    react(),
    {
      name: "inject-site-url",
      transformIndexHtml(html) {
        return html.replaceAll("https://stiveckamash.vercel.app", siteUrl);
      },
    },
  ],
  publicDir: "public",
  define: {
    __SITE_URL__: JSON.stringify(siteUrl),
  },
  build: {
    sourcemap: true,
  },
});
