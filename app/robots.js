// =================================================================
// app/robots.js - Dynamic Robots.txt Generator
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/api/", "/private/", "/*.json$", "/search?*"],
    },
    sitemap: "https://harikanusantara.com/sitemap.xml",
    host: "https://harikanusantara.com",
  };
}
