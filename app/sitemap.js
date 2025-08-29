// app/sitemap.js - Dynamic Sitemap Generator with Sanity Integration
import { getAllProductSlugs } from "@/lib/sanityProductQueries";
import { getAllPosts } from "@/lib/sanityQueries";

export default async function sitemap() {
  console.log("Generating sitemap...");
  const baseUrl = "https://harikanusantara.com";

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/export-process`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];

  try {
    // Fetch dynamic product pages from Sanity
    const products = await getAllProductSlugs();
    const productPages = products.map((product) => ({
      url: `${baseUrl}/products/${product.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    }));

    // Fetch dynamic blog pages from Sanity
    const blogPosts = await getAllPosts();
    const blogPages = blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug.current}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly",
      priority: 0.6,
    }));

    return [...staticPages, ...productPages, ...blogPages];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    // Return static pages only if there's an error fetching dynamic content
    return staticPages;
  }
}
