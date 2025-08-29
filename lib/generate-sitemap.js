// lib/generate-sitemap.js - Advanced Sitemap Generation
export async function generateAdvancedSitemap() {
  const baseUrl = "https://harikanusantara.com";

  // Static routes with detailed configuration
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 1.0,
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          caption: "Harika Nusantara - Indonesian Coffee & Cocoa Supplier",
          title: "Homepage Hero Image",
        },
      ],
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [
        {
          url: `${baseUrl}/about-harika-nusantara.jpg`,
          caption: "About Harika Nusantara Team",
        },
      ],
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/export-process`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.7,
      images: [
        {
          url: `${baseUrl}/export-process-diagram.jpg`,
          caption: "Coffee and Cocoa Export Process",
        },
      ],
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];

  // You would fetch these from your database/API
  const products = await fetchProducts(); // Replace with actual function
  const blogPosts = await fetchBlogPosts(); // Replace with actual function

  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: product.updatedAt || product.createdAt,
    changeFrequency: "weekly",
    priority: 0.8,
    images:
      product.images?.map((img) => ({
        url: img.url,
        caption: img.alt || product.name,
        title: product.name,
      })) || [],
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt || post.publishedAt,
    changeFrequency: "monthly",
    priority: 0.6,
    images: post.featuredImage
      ? [
          {
            url: post.featuredImage,
            caption: post.title,
            title: post.title,
          },
        ]
      : [],
  }));

  return [...staticRoutes, ...productRoutes, ...blogRoutes];
}
