// app/sitemap.js
// Next.js App Router sitemap untuk dynamic content

// Required for static export
export const dynamic = "force-static";

export default async function sitemap() {
  const baseUrl = "https://harikanusantara.com";

  // Static pages dengan priority dan frequency yang tepat
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/export-process`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Dynamic content - uncomment dan sesuaikan dengan data source Anda
  try {
    // Import your API functions
    // const { getAllProducts, getAllBlogPosts } = await import('@/lib/api');

    // Fetch dynamic data
    // const products = await getAllProducts();
    // const blogPosts = await getAllBlogPosts();

    // Generate product pages
    // const productPages = products.map((product) => ({
    //   url: `${baseUrl}/products/${product.slug}`,
    //   lastModified: new Date(product.updatedAt),
    //   changeFrequency: 'weekly',
    //   priority: 0.9,
    // }));

    // Generate blog pages
    // const blogPages = blogPosts.map((post) => ({
    //   url: `${baseUrl}/blog/${post.slug}`,
    //   lastModified: new Date(post.updatedAt),
    //   changeFrequency: 'monthly',
    //   priority: 0.6,
    // }));

    // Sementara gunakan static product pages
    const productPages = [
      {
        url: `${baseUrl}/products/sumatra-coffee`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
      },
      {
        url: `${baseUrl}/products/java-coffee`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
      },
      {
        url: `${baseUrl}/products/sulawesi-coffee`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
      },
      {
        url: `${baseUrl}/products/premium-cocoa`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
      },
    ];

    const blogPages = [
      {
        url: `${baseUrl}/blog/sustainable-coffee-farming`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      },
      {
        url: `${baseUrl}/blog/ethical-sourcing-practices`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      },
      {
        url: `${baseUrl}/blog/coffee-processing-methods`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      },
    ];

    // Combine all pages
    return [...staticPages, ...productPages, ...blogPages];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    // Return static pages jika ada error
    return staticPages;
  }
}
