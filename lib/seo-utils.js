// lib/seo-utils.js - SEO Utility Functions
export const seoUtils = {
  // Generate canonical URL
  generateCanonicalUrl: (path) => {
    const baseUrl = "https://harikanusantara.com";
    return `${baseUrl}${path}`;
  },

  // Generate optimized page title
  generatePageTitle: (title, includeCompany = true) => {
    const companyName = "Harika Nusantara";
    const companySuffix = "Indonesian Coffee & Cocoa Supplier";

    if (!includeCompany) return title;

    if (title.includes(companyName)) return title;

    return `${title} - ${companyName}`;
  },

  // Generate meta description with keyword optimization
  generateMetaDescription: (description, keywords = []) => {
    const maxLength = 155;
    let optimizedDescription = description;

    // Ensure primary keywords are included
    const primaryKeywords = ["Indonesian coffee", "cocoa supplier", "coffee exporter"];
    const missingKeywords = primaryKeywords.filter((keyword) => !optimizedDescription.toLowerCase().includes(keyword.toLowerCase()));

    if (missingKeywords.length > 0 && optimizedDescription.length < 100) {
      optimizedDescription += ` ${missingKeywords.join(", ")}.`;
    }

    // Truncate if too long
    if (optimizedDescription.length > maxLength) {
      optimizedDescription = optimizedDescription.substring(0, maxLength - 3) + "...";
    }

    return optimizedDescription;
  },

  // Generate Open Graph image URL
  generateOgImage: (title, type = "article") => {
    const baseUrl = "https://harikanusantara.com";
    // You can integrate with services like Vercel OG Image Generation
    return `${baseUrl}/api/og?title=${encodeURIComponent(title)}&type=${type}`;
  },

  // Generate hreflang tags
  generateHreflangTags: (pathname) => {
    const baseUrl = "https://harikanusantara.com";

    return {
      "en-US": `${baseUrl}${pathname}`,
      en: `${baseUrl}/en${pathname}`,
      "id-ID": `${baseUrl}/id${pathname}`,
      id: `${baseUrl}/id${pathname}`,
      "x-default": `${baseUrl}${pathname}`,
    };
  },

  // Validate and optimize keywords
  optimizeKeywords: (keywords) => {
    const primaryKeywords = ["Indonesian coffee supplier", "Indonesian cocoa supplier", "coffee exporter Indonesia", "cocoa exporter Indonesia"];

    // Remove duplicates and empty strings
    const cleanKeywords = [...new Set(keywords.filter((k) => k && k.trim()))].map((k) => k.trim().toLowerCase());

    // Ensure primary keywords are included
    const missingPrimary = primaryKeywords.filter((pk) => !cleanKeywords.some((ck) => ck.includes(pk.toLowerCase())));

    return [...cleanKeywords, ...missingPrimary].slice(0, 30); // Limit to 30 keywords
  },

  // Generate FAQ schema for common questions
  generateFaqSchema: (faqs) => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    };
  },

  // Generate review schema
  generateReviewSchema: (reviews, productName) => {
    if (!reviews || reviews.length === 0) return null;

    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = totalRating / reviews.length;

    return {
      "@context": "https://schema.org",
      "@type": "Product",
      name: productName,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: averageRating.toFixed(1),
        reviewCount: reviews.length,
      },
      review: reviews.map((review) => ({
        "@type": "Review",
        author: {
          "@type": "Person",
          name: review.author,
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: review.rating,
        },
        reviewBody: review.comment,
      })),
    };
  },

  // Generate BreadcrumbList schema
  generateBreadcrumbSchema: (breadcrumbs) => {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    };
  },
};
