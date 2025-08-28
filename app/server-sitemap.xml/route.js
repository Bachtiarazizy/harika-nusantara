import { getServerSideSitemap } from "next-sitemap";

export async function GET(request) {
  const dynamicPaths = await getDynamicPaths();

  const fields = dynamicPaths.map((path) => ({
    loc: `https://harika-nusantara.com${path.url}`,
    lastmod: path.lastmod || new Date().toISOString(),
    changefreq: path.changefreq || "monthly",
    priority: path.priority || 0.7,
  }));

  return getServerSideSitemap(fields);
}
