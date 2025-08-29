// lib/metadata.js - Template metadata untuk setiap halaman

// Base keywords yang selalu digunakan (moved to top level)
const baseKeywords = ["Indonesian coffee supplier", "Indonesian cocoa supplier", "coffee exporter Indonesia", "cocoa exporter Indonesia"];

export const generatePageMetadata = (page, data = {}) => {
  const baseUrl = "https://harikanusantara.com";

  const templates = {
    about: {
      title: "About Harika Nusantara - Trusted Indonesian Coffee & Cocoa Supplier",
      description:
        "Learn about Harika Nusantara, Indonesia's trusted coffee and cocoa supplier with over 4 years of experience. Direct partnerships with local farmers, sustainable sourcing, and premium quality assurance for international B2B markets.",
      keywords: [
        ...baseKeywords,
        "Indonesian coffee company",
        "cocoa supplier company Indonesia",
        "sustainable coffee sourcing Indonesia",
        "direct trade coffee Indonesia",
        "coffee plantation partnerships",
        "Indonesian agricultural company",
        "Harika Nusantara about",
        "coffee supply chain Indonesia",
      ],
      openGraph: {
        title: "About Harika Nusantara - Trusted Indonesian Coffee & Cocoa Supplier",
        description: "Trusted Indonesian coffee & cocoa supplier since 2020. Direct partnerships with farmers, sustainable sourcing, premium quality for international markets.",
        images: [
          {
            url: "/about-harika-nusantara.jpg",
            width: 1200,
            height: 630,
            alt: "About Harika Nusantara - Indonesian Coffee & Cocoa Supplier Team",
          },
        ],
      },
    },

    contact: {
      title: "Contact Indonesian Coffee & Cocoa Supplier | Get Quote - Harika Nusantara",
      description: "Contact Harika Nusantara for premium Indonesian coffee and cocoa supply. Get competitive quotes for Arabica, Robusta coffee beans and cocoa products export. Professional B2B customer service and fast response.",
      keywords: [
        ...baseKeywords,
        "contact Indonesian coffee supplier",
        "coffee supplier contact Indonesia",
        "cocoa exporter contact",
        "Indonesian coffee quote",
        "coffee beans supplier contact",
        "cocoa products quote Indonesia",
        "B2B coffee supplier contact",
        "international coffee trade contact",
      ],
      openGraph: {
        title: "Contact Indonesian Coffee & Cocoa Supplier - Harika Nusantara",
        description: "Contact us for premium Indonesian coffee and cocoa supply. Professional B2B service, competitive quotes, and reliable export solutions.",
        images: [
          {
            url: "/contact-indonesian-coffee-supplier.jpg",
            width: 1200,
            height: 630,
            alt: "Contact Harika Nusantara Indonesian Coffee & Cocoa Supplier",
          },
        ],
      },
    },

    exportProcess: {
      title: "Coffee & Cocoa Export Process | Indonesian Supplier Quality Assurance - Harika Nusantara",
      description:
        "Comprehensive Indonesian coffee and cocoa export process from plantation to global delivery. Quality control, certifications, documentation, logistics, and supply chain transparency. Professional export services for international B2B buyers.",
      keywords: [
        ...baseKeywords,
        "Indonesian coffee export process",
        "cocoa export process Indonesia",
        "coffee quality control Indonesia",
        "cocoa quality assurance",
        "Indonesian coffee certifications",
        "export documentation Indonesia",
        "coffee logistics Indonesia",
        "cocoa supply chain process",
        "international coffee shipping",
        "Indonesian agricultural export",
      ],
      openGraph: {
        title: "Coffee & Cocoa Export Process - Indonesian Supplier Quality Assurance",
        description: "Professional Indonesian coffee and cocoa export process. Quality control, certifications, and reliable logistics for international markets.",
        images: [
          {
            url: "/indonesian-coffee-export-process.jpg",
            width: 1200,
            height: 630,
            alt: "Indonesian Coffee and Cocoa Export Process - Quality Assurance",
          },
        ],
      },
    },

    products: {
      title: "Indonesian Coffee & Cocoa Products | Premium Arabica Robusta Supplier - Harika Nusantara",
      description: "Explore our premium Indonesian coffee and cocoa products catalog. Arabica, Robusta coffee beans, specialty coffee, organic cocoa products from Java, Sumatra, Sulawesi. Wholesale supply for international buyers.",
      keywords: [
        ...baseKeywords,
        "Indonesian coffee products catalog",
        "cocoa products Indonesia",
        "Arabica coffee beans Indonesia catalog",
        "Robusta coffee products",
        "Indonesian specialty coffee varieties",
        "organic cocoa products Indonesia",
        "Java coffee beans catalog",
        "Sumatra coffee varieties",
        "Sulawesi coffee products",
        "Indonesian coffee bean grades",
      ],
      openGraph: {
        title: "Indonesian Coffee & Cocoa Products - Premium Quality Catalog",
        description: "Premium Indonesian coffee and cocoa products. Arabica, Robusta, specialty coffee and organic cocoa from top plantations for international wholesale.",
        images: [
          {
            url: "/indonesian-coffee-cocoa-products.jpg",
            width: 1200,
            height: 630,
            alt: "Premium Indonesian Coffee and Cocoa Products Catalog",
          },
        ],
      },
    },

    blog: {
      title: "Coffee & Cocoa Industry Blog | Indonesian Supplier Insights - Harika Nusantara",
      description: "Latest insights on Indonesian coffee and cocoa industry. Market trends, farming practices, export updates, quality tips, and industry news from leading Indonesian supplier Harika Nusantara.",
      keywords: [
        ...baseKeywords,
        "Indonesian coffee industry blog",
        "cocoa industry Indonesia news",
        "coffee market trends Indonesia",
        "Indonesian coffee farming",
        "cocoa plantation news",
        "coffee export trends",
        "Indonesian agricultural blog",
        "coffee industry insights",
        "cocoa market analysis",
      ],
      openGraph: {
        title: "Indonesian Coffee & Cocoa Industry Blog - Expert Insights",
        description: "Expert insights on Indonesian coffee and cocoa industry. Market trends, farming practices, and export updates from industry professionals.",
        images: [
          {
            url: "/indonesian-coffee-blog.jpg",
            width: 1200,
            height: 630,
            alt: "Indonesian Coffee and Cocoa Industry Blog - Expert Insights",
          },
        ],
      },
    },
  };

  const template = templates[page];
  if (!template) return {};

  return {
    title: template.title,
    description: template.description,
    keywords: template.keywords.join(", "),
    openGraph: {
      ...template.openGraph,
      url: `${baseUrl}/${page === "exportProcess" ? "export-process" : page}`,
      siteName: "Harika Nusantara - Indonesian Coffee & Cocoa Supplier",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@HarikaNusantara",
      title: template.openGraph.title,
      description: template.openGraph.description,
      images: template.openGraph.images,
    },
    alternates: {
      canonical: `${baseUrl}/${page === "exportProcess" ? "export-process" : page}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
};

// Fungsi khusus untuk halaman dinamis (product dan blog)
export const generateDynamicMetadata = (type, data) => {
  const baseUrl = "https://harikanusantara.com";

  if (type === "product") {
    const productKeywords = [`${data.title} Indonesian supplier`, `${data.title} Indonesia export`, `buy ${data.title} Indonesia`, `${data.title} wholesale Indonesia`, ...baseKeywords];

    return {
      title: `${data.title} | Premium Indonesian ${data.category?.name || "Coffee & Cocoa"} Supplier - Harika Nusantara`,
      description: `${data.shortDescription || data.fullDescription} Premium quality ${data.title} direct from Indonesian plantations. Wholesale supply for international buyers with quality assurance and competitive pricing.`,
      keywords: productKeywords.join(", "),
      openGraph: {
        title: `${data.title} - Premium Indonesian ${data.category?.name || "Coffee & Cocoa"} Supplier`,
        description: `Premium ${data.title} from Indonesian plantations. Quality assured, competitive pricing, reliable international supply.`,
        url: `${baseUrl}/products/${data.slug?.current || data.slug}`,
        siteName: "Harika Nusantara - Indonesian Coffee & Cocoa Supplier",
        locale: "en_US",
        images: data.mainImage?.asset?.url
          ? [
              {
                url: data.mainImage.asset.url,
                width: 1200,
                height: 630,
                alt: `${data.title} - Indonesian ${data.category?.name || "Coffee & Cocoa"} Supplier`,
              },
            ]
          : [
              {
                url: `/products/${data.slug?.current || data.slug}-main.jpg`,
                width: 1200,
                height: 630,
                alt: `${data.title} - Indonesian ${data.category?.name || "Coffee & Cocoa"} Supplier`,
              },
            ],
        type: "website", // Sudah diperbaiki dari "product"
      },
      twitter: {
        card: "summary_large_image",
        site: "@HarikaNusantara",
        title: `${data.title} - Indonesian ${data.category?.name || "Coffee & Cocoa"} Supplier`,
        description: `Premium ${data.title} from Indonesian plantations for international markets.`,
        images: data.mainImage?.asset?.url ? [data.mainImage.asset.url] : [],
      },
      alternates: {
        canonical: `${baseUrl}/products/${data.slug?.current || data.slug}`,
      },
      robots: {
        index: true,
        follow: true,
      },
    };
  }

  if (type === "blog") {
    const blogKeywords = [...(data.tags || []), "Indonesian coffee industry", "cocoa industry Indonesia", ...baseKeywords];

    return {
      title: `${data.title} | Indonesian Coffee & Cocoa Industry Blog - Harika Nusantara`,
      description: data.excerpt || data.description,
      keywords: blogKeywords.join(", "),
      openGraph: {
        title: data.title,
        description: data.excerpt || data.description,
        url: `${baseUrl}/blog/${data.slug}`,
        siteName: "Harika Nusantara - Indonesian Coffee & Cocoa Supplier",
        locale: "en_US",
        images: [
          {
            url: data.featuredImage || `/blog/${data.slug}-featured.jpg`,
            width: 1200,
            height: 630,
            alt: data.title,
          },
        ],
        type: "article",
        publishedTime: data.publishedAt,
        modifiedTime: data.updatedAt,
        authors: [data.author?.name || "Harika Nusantara Team"],
        section: data.category || "Coffee & Cocoa Industry",
        tags: data.tags || [],
      },
      twitter: {
        card: "summary_large_image",
        site: "@HarikaNusantara",
        title: data.title,
        description: data.excerpt || data.description,
        images: [
          {
            url: data.featuredImage || `/blog/${data.slug}-featured.jpg`,
            width: 1200,
            height: 630,
            alt: data.title,
          },
        ],
      },
      alternates: {
        canonical: `${baseUrl}/blog/${data.slug}`,
      },
      robots: {
        index: true,
        follow: true,
      },
    };
  }

  return {};
};

// Helper untuk generate breadcrumb data
export const generateBreadcrumbs = (path, customLabels = {}) => {
  const segments = path.split("/").filter(Boolean);
  const baseUrl = "https://harikanusantara.com";

  const breadcrumbs = [{ name: "Home", url: baseUrl }];

  let currentPath = "";

  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;

    const labels = {
      about: "About Us",
      contact: "Contact",
      products: "Our Products",
      blog: "Industry Blog",
      "export-process": "Export Process",
      ...customLabels,
    };

    breadcrumbs.push({
      name: labels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1),
      url: `${baseUrl}${currentPath}`,
    });
  });

  return breadcrumbs;
};
