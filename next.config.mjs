/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable experimental features for better SEO
  experimental: {
    optimizeCss: true,
  },
  images: {
    domains: ["cdn.sanity.io"], // tambahkan domain ini
  },
  // Image optimization
  images: {
    domains: ["harika-nusantara.com"],
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compression
  compress: true,

  // Headers for SEO and security
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        source: "/sitemap.xml",
        headers: [
          {
            key: "Content-Type",
            value: "application/xml",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=86400, s-maxage=86400",
          },
        ],
      },
      {
        source: "/robots.txt",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=86400, s-maxage=86400",
          },
        ],
      },
      {
        source: "/(.*\\.(jpg|jpeg|png|webp|avif|gif|svg|ico))",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Redirects for SEO (if needed)
  async redirects() {
    return [
      // Example: redirect old URLs to new ones
      // {
      //   source: '/old-page',
      //   destination: '/new-page',
      //   permanent: true,
      // },
    ];
  },

  // Enable trailing slash for consistency
  trailingSlash: false,

  // Power by header removal for security
  poweredByHeader: false,

  // Enable React strict mode
  reactStrictMode: true,

  // Webpack configuration for optimization
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle size
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        commons: {
          name: "commons",
          chunks: "all",
          minChunks: 2,
        },
      };
    }

    return config;
  },

  // Environment variables for SEO
  env: {
    SITE_URL: "https://harika-nusantara.com",
    SITE_NAME: "Harika Nusantara",
    SITE_DESCRIPTION: "Premium Indonesian Coffee & Cocoa Exporter",
  },
};

module.exports = nextConfig;
