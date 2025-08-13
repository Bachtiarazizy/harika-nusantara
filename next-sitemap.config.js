// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://harikanusantara.com",
  generateRobotsTxt: true,

  // Exclude pages yang tidak perlu di-index
  exclude: ["/admin/*", "/api/*", "/server-sitemap-index.xml", "/404", "/500", "/thank-you", "/privacy-policy", "/terms-of-service"],

  // Default values untuk semua pages
  changefreq: "weekly",
  priority: 0.7,

  // Custom configuration untuk pages tertentu
  transform: async (config, path) => {
    // Homepage - priority tertinggi
    if (path === "/") {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }

    // Product pages - priority tinggi
    if (path.startsWith("/products/")) {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 0.9,
        lastmod: new Date().toISOString(),
      };
    }

    // Coffee & Cocoa category pages
    if (path.includes("/coffee") || path.includes("/cocoa")) {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 0.8,
        lastmod: new Date().toISOString(),
      };
    }

    // Blog pages
    if (path.startsWith("/blog/")) {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 0.6,
        lastmod: new Date().toISOString(),
      };
    }

    // About, Contact pages
    if (path === "/about" || path === "/contact") {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 0.8,
        lastmod: new Date().toISOString(),
      };
    }

    // Default return
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },

  // Additional paths untuk dynamic content
  additionalPaths: async (config) => {
    const result = [];

    try {
      // Jika Anda punya dynamic products dari database/CMS
      // Uncomment dan sesuaikan dengan data source Anda

      // const { getAllProducts, getAllBlogPosts } = require('./lib/api');
      // const products = await getAllProducts();
      // const blogPosts = await getAllBlogPosts();

      // Product pages
      // const productPaths = products.map(product => ({
      //   loc: `/products/${product.slug}`,
      //   lastmod: new Date(product.updatedAt).toISOString(),
      //   changefreq: 'weekly',
      //   priority: 0.9,
      // }));

      // Blog pages
      // const blogPaths = blogPosts.map(post => ({
      //   loc: `/blog/${post.slug}`,
      //   lastmod: new Date(post.updatedAt).toISOString(),
      //   changefreq: 'monthly',
      //   priority: 0.6,
      // }));

      // Static additional paths untuk Harika Nusantara
      const staticPaths = [
        {
          loc: "/products/sumatra-coffee",
          lastmod: new Date().toISOString(),
          changefreq: "weekly",
          priority: 0.9,
        },
        {
          loc: "/products/java-coffee",
          lastmod: new Date().toISOString(),
          changefreq: "weekly",
          priority: 0.9,
        },
        {
          loc: "/products/sulawesi-coffee",
          lastmod: new Date().toISOString(),
          changefreq: "weekly",
          priority: 0.9,
        },
        {
          loc: "/products/premium-cocoa",
          lastmod: new Date().toISOString(),
          changefreq: "weekly",
          priority: 0.9,
        },
        {
          loc: "/sustainability",
          lastmod: new Date().toISOString(),
          changefreq: "monthly",
          priority: 0.7,
        },
        {
          loc: "/certifications",
          lastmod: new Date().toISOString(),
          changefreq: "monthly",
          priority: 0.7,
        },
      ];

      result.push(...staticPaths);
      // result.push(...productPaths, ...blogPaths);
    } catch (error) {
      console.error("Error generating additional paths:", error);
    }

    return result;
  },

  // Robots.txt configuration
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/", "/thank-you", "/404", "/500"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },
    ],
    additionalSitemaps: [
      // Jika ada sitemap tambahan
      // 'https://harikanusantara.com/server-sitemap.xml',
    ],
    transformRobotsTxt: async (_, robotsTxt) => {
      return `${robotsTxt}
# Custom robots.txt for Harika Nusantara
# Indonesian Coffee & Cocoa Exports

# Sitemap
Sitemap: https://harikanusantara.com/sitemap.xml

# Crawl-delay for specific bots
User-agent: Bingbot
Crawl-delay: 1

# Allow specific paths for better indexing
Allow: /products/
Allow: /coffee/
Allow: /cocoa/
Allow: /blog/
`;
    },
  },
};
