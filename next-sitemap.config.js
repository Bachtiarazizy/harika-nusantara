/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://harika-nusantara.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ["/admin/*", "/api/*", "/private/*", "/temp/*", "/_next/*", "/404", "/500", "/server-sitemap.xml"],

  // Additional paths to include
  additionalPaths: async (config) => [
    await config.transform(config, "/products/coffee/java-arabica"),
    await config.transform(config, "/products/coffee/sumatra-mandheling"),
    await config.transform(config, "/products/coffee/sulawesi-toraja"),
    await config.transform(config, "/products/coffee/robusta"),
    await config.transform(config, "/products/cocoa/cocoa-beans"),
    await config.transform(config, "/products/cocoa/natural-cocoa-powder"),
    await config.transform(config, "/products/cocoa/alkalized-cocoa-powder"),
  ],

  // Custom transformation for specific pages
  transform: async (config, path) => {
    // Default transformation
    const defaultTransform = {
      loc: path,
      changefreq: "monthly",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };

    // Custom priorities and change frequencies
    const customConfig = {
      "/": {
        priority: 1.0,
        changefreq: "weekly",
      },
      "/products": {
        priority: 0.9,
        changefreq: "weekly",
      },
      "/products/coffee": {
        priority: 0.9,
        changefreq: "weekly",
      },
      "/products/cocoa": {
        priority: 0.9,
        changefreq: "weekly",
      },
      "/about": {
        priority: 0.8,
        changefreq: "monthly",
      },
      "/contact": {
        priority: 0.8,
        changefreq: "monthly",
      },
      "/export-services": {
        priority: 0.8,
        changefreq: "monthly",
      },
      "/certifications": {
        priority: 0.7,
        changefreq: "monthly",
      },
      "/sustainability": {
        priority: 0.7,
        changefreq: "monthly",
      },
      "/quality": {
        priority: 0.7,
        changefreq: "monthly",
      },
      "/blog": {
        priority: 0.7,
        changefreq: "weekly",
      },
      "/faq": {
        priority: 0.6,
        changefreq: "monthly",
      },
      "/privacy-policy": {
        priority: 0.3,
        changefreq: "yearly",
      },
      "/terms-of-service": {
        priority: 0.3,
        changefreq: "yearly",
      },
    };

    // Coffee and cocoa product pages
    const productPages = [
      "/products/coffee/java-arabica",
      "/products/coffee/sumatra-mandheling",
      "/products/coffee/sulawesi-toraja",
      "/products/coffee/robusta",
      "/products/cocoa/cocoa-beans",
      "/products/cocoa/natural-cocoa-powder",
      "/products/cocoa/alkalized-cocoa-powder",
    ];

    if (productPages.includes(path)) {
      return {
        ...defaultTransform,
        priority: 0.8,
        changefreq: "monthly",
      };
    }

    // Blog posts
    if (path.startsWith("/blog/") && path !== "/blog") {
      return {
        ...defaultTransform,
        priority: 0.6,
        changefreq: "yearly",
      };
    }

    // Apply custom config if exists
    if (customConfig[path]) {
      return {
        ...defaultTransform,
        ...customConfig[path],
      };
    }

    return defaultTransform;
  },

  // Robots.txt configuration
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/private/", "/api/", "/temp/", "/_next/", "/node_modules/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        crawlDelay: 1,
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        crawlDelay: 2,
      },
      {
        userAgent: "Slurp",
        allow: "/",
        crawlDelay: 2,
      },
      // Block problematic bots
      {
        userAgent: "AhrefsBot",
        disallow: "/",
      },
      {
        userAgent: "MJ12bot",
        disallow: "/",
      },
      {
        userAgent: "DotBot",
        disallow: "/",
      },
      // Allow social media bots
      {
        userAgent: "facebookexternalhit",
        allow: "/",
      },
      {
        userAgent: "Twitterbot",
        allow: "/",
      },
      {
        userAgent: "LinkedInBot",
        allow: "/",
      },
      {
        userAgent: "WhatsApp",
        allow: "/",
      },
    ],
    additionalSitemaps: ["https://harika-nusantara.com/server-sitemap.xml"],
    host: "https://harika-nusantara.com",
  },

  // Additional options
  outDir: "./public",
  sourceDir: "./pages",

  // For App Router (Next.js 13+)
  // sourceDir: './app',

  // Custom server sitemap for dynamic content
  serverSitemapOptions: {
    siteUrl: "https://harika-nusantara.com",
    generateIndexSitemap: false,
  },
};
