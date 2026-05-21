import fs from "node:fs";
import path from "node:path";
import { resolveSiteUrl } from "./site-url.mjs";

const rootDir = process.cwd();
const publicDir = path.join(rootDir, "public");

const siteUrl = resolveSiteUrl();
const today = new Date().toISOString().slice(0, 10);

fs.mkdirSync(publicDir, { recursive: true });

writeFile("robots.txt", robotsTxt(siteUrl));
writeFile("sitemap.xml", sitemapXml(siteUrl, today));
patchLlmsTxt(siteUrl);

function writeFile(name, contents) {
  fs.writeFileSync(path.join(publicDir, name), contents, "utf8");
}

function robotsTxt(base) {
  return `# robots.txt
# Stephen Kamau — Portfolio

User-agent: *
Allow: /
Crawl-delay: 1

Sitemap: ${base}/sitemap.xml
`;
}

function sitemapXml(base, lastmod) {
  const urls = [
    { loc: `${base}/#about`, priority: "0.9" },
    { loc: `${base}/#services`, priority: "0.9" },
    { loc: `${base}/#work`, priority: "0.9" },
    { loc: `${base}/#experience`, priority: "0.8" },
    { loc: `${base}/#stack`, priority: "0.7" },
    { loc: `${base}/#contact`, priority: "0.9" },
    { loc: `${base}/llms.txt`, priority: "0.6" },
  ];

  const urlTags = urls
    .map(
      (u) => `  <url>
    <loc>${escapeXml(u.loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${u.priority}</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${escapeXml(`${base}/`)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>${escapeXml(`${base}/og-image.png`)}</image:loc>
      <image:title>Stephen Kamau — Senior Data &amp; ML Engineer</image:title>
      <image:caption>Stephen Kamau, Senior Data and Machine Learning Engineer based in Nairobi, Kenya.</image:caption>
    </image:image>
  </url>
${urlTags.replace(/^/gm, "")}
</urlset>
`;
}

function patchLlmsTxt(base) {
  const llmsPath = path.join(publicDir, "llms.txt");
  if (!fs.existsSync(llmsPath)) return;
  const raw = fs.readFileSync(llmsPath, "utf8");
  const updated = raw.replace(/https?:\/\/stiveckamash\.vercel\.app\/?/g, base);
  fs.writeFileSync(llmsPath, updated, "utf8");
}

function escapeXml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}
