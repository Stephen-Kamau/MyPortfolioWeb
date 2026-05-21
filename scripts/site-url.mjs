export function resolveSiteUrl() {
  const explicit =
    process.env.SITE_URL ||
    process.env.VITE_SITE_URL ||
    process.env.PUBLIC_SITE_URL;

  if (explicit) return normalizeUrl(explicit);

  // Vercel sets VERCEL_URL to the deployment hostname (no protocol).
  if (process.env.VERCEL_URL) return normalizeUrl(`https://${process.env.VERCEL_URL}`);

  // Local dev fallback (Vite default).
  return "http://localhost:5173";
}

function normalizeUrl(url) {
  const trimmed = String(url).trim().replace(/\/+$/, "");
  if (!trimmed) return "http://localhost:5173";
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

