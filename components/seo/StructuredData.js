// components/seo/StructuredData.js
export default function StructuredData({ type, data }) {
  const getStructuredData = () => {
    const baseOrganization = {
      "@type": "Organization",
      "@id": "https://harikanusantara.com/#organization",
      name: "Harika Nusantara",
      alternateName: ["Harika Nusantara Indonesia", "Indonesian Coffee Cocoa Exporter"],
      url: "https://harikanusantara.com",
      logo: {
        "@type": "ImageObject",
        url: "https://harikanusantara.com/logo.png",
        width: 300,
        height: 100,
      },
      image: "https://harikanusantara.com/og-image.jpg",
      description: "Leading Indonesian coffee and cocoa supplier & exporter. Premium Arabica, Robusta coffee beans and high-quality cocoa products direct from Indonesian plantations to international wholesale markets.",
      address: {
        "@type": "PostalAddress",
        addressCountry: "Indonesia",
        addressRegion: "Jakarta",
        addressLocality: "Jakarta",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -6.2088,
        longitude: 106.8456,
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+62-xxx-xxxx-xxxx",
          contactType: "sales",
          availableLanguage: ["English", "Indonesian"],
          areaServed: "Worldwide",
        },
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          availableLanguage: ["English", "Indonesian"],
          areaServed: "Worldwide",
        },
      ],
      sameAs: ["https://www.linkedin.com/company/harika-nusantara", "https://twitter.com/HarikaNusantara", "https://www.facebook.com/HarikaNusantara", "https://www.instagram.com/harika_nusantara"],
      foundingDate: "2020",
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        minValue: 50,
        maxValue: 100,
      },
      naics: "111920", // Coffee and Tea Manufacturing
      industry: "Agricultural Export & Supply",
      keywords: "Indonesian coffee supplier, cocoa exporter Indonesia, Arabica beans supplier, Robusta coffee exporter, sustainable coffee sourcing, direct trade cocoa",
      knowsAbout: ["Coffee Export", "Cocoa Supply", "Arabica Coffee Beans", "Robusta Coffee Beans", "Indonesian Agriculture", "Sustainable Sourcing", "International Trade"],
      makesOffer: {
        "@type": "Offer",
        itemOffered: [
          {
            "@type": "Product",
            name: "Indonesian Coffee Beans",
            category: "Coffee Beans Supply",
          },
          {
            "@type": "Product",
            name: "Indonesian Cocoa Products",
            category: "Cocoa Supply",
          },
        ],
      },
    };

    const baseWebsite = {
      "@type": "WebSite",
      "@id": "https://harikanusantara.com/#website",
      url: "https://harikanusantara.com",
      name: "Harika Nusantara - Indonesian Coffee & Cocoa Supplier",
      description: "Premium Indonesian Coffee & Cocoa Supplier and Exporter",
      publisher: {
        "@id": "https://harikanusantara.com/#organization",
      },
      inLanguage: "en-US",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://harikanusantara.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
      about: [
        {
          "@type": "Thing",
          name: "Indonesian Coffee Export",
        },
        {
          "@type": "Thing",
          name: "Cocoa Supply Chain",
        },
      ],
    };

    switch (type) {
      case "homepage":
        return {
          "@context": "https://schema.org",
          "@graph": [
            baseOrganization,
            baseWebsite,
            {
              "@type": "WebPage",
              "@id": "https://harikanusantara.com/#webpage",
              url: "https://harikanusantara.com/",
              name: "Indonesian Coffee & Cocoa Supplier | Premium Arabica Robusta Exporter",
              description: "Leading Indonesian coffee and cocoa supplier. Direct sourcing of premium Arabica, Robusta coffee beans and cocoa products from Java, Sumatra, Sulawesi plantations for international markets.",
              isPartOf: {
                "@id": "https://harikanusantara.com/#website",
              },
              about: {
                "@id": "https://harikanusantara.com/#organization",
              },
              mainEntity: {
                "@id": "https://harikanusantara.com/#organization",
              },
            },
            {
              "@type": "Service",
              "@id": "https://harikanusantara.com/#services",
              name: "Indonesian Coffee & Cocoa Export Services",
              description: "Premium coffee and cocoa supply chain services from Indonesian plantations to global markets",
              provider: {
                "@id": "https://harikanusantara.com/#organization",
              },
              areaServed: "Worldwide",
              serviceType: "Agricultural Export & Supply",
              offers: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Product",
                    name: "Indonesian Arabica Coffee Beans",
                    category: "Coffee Beans",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Product",
                    name: "Indonesian Robusta Coffee Beans",
                    category: "Coffee Beans",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Product",
                    name: "Indonesian Cocoa Products",
                    category: "Cocoa Products",
                  },
                },
              ],
            },
          ],
        };

      case "about":
        return {
          "@context": "https://schema.org",
          "@graph": [
            baseOrganization,
            {
              "@type": "WebPage",
              "@id": "https://harikanusantara.com/about#webpage",
              url: "https://harikanusantara.com/about",
              name: "About Harika Nusantara - Indonesian Coffee & Cocoa Supplier",
              description: "Learn about Harika Nusantara, Indonesia's trusted coffee and cocoa supplier with direct partnerships with local farmers and sustainable sourcing practices.",
              isPartOf: {
                "@id": "https://harikanusantara.com/#website",
              },
              mainEntity: {
                "@id": "https://harikanusantara.com/#organization",
              },
            },
          ],
        };

      case "contact":
        return {
          "@context": "https://schema.org",
          "@graph": [
            baseOrganization,
            {
              "@type": "WebPage",
              "@id": "https://harikanusantara.com/contact#webpage",
              url: "https://harikanusantara.com/contact",
              name: "Contact Indonesian Coffee & Cocoa Supplier - Harika Nusantara",
              description: "Contact Harika Nusantara for premium Indonesian coffee and cocoa supply. Get quotes for Arabica, Robusta coffee beans and cocoa products export.",
              isPartOf: {
                "@id": "https://harikanusantara.com/#website",
              },
            },
          ],
        };

      case "export-process":
        return {
          "@context": "https://schema.org",
          "@graph": [
            baseOrganization,
            {
              "@type": "WebPage",
              "@id": "https://harikanusantara.com/export-process#webpage",
              url: "https://harikanusantara.com/export-process",
              name: "Coffee & Cocoa Export Process - Indonesian Supplier Harika Nusantara",
              description: "Learn about our comprehensive coffee and cocoa export process from Indonesian plantations to global markets. Quality assurance, certifications, and logistics.",
              isPartOf: {
                "@id": "https://harikanusantara.com/#website",
              },
            },
            {
              "@type": "HowTo",
              name: "Indonesian Coffee & Cocoa Export Process",
              description: "Step-by-step process for exporting premium Indonesian coffee and cocoa products",
              supply: ["Indonesian Coffee Beans", "Indonesian Cocoa Products", "Export Documentation", "Quality Certifications"],
              totalTime: "PT30D", // 30 days typical process
              step: [
                {
                  "@type": "HowToStep",
                  name: "Source Selection",
                  text: "Direct sourcing from certified Indonesian plantations",
                },
                {
                  "@type": "HowToStep",
                  name: "Quality Control",
                  text: "Comprehensive quality testing and grading",
                },
                {
                  "@type": "HowToStep",
                  name: "Processing & Packaging",
                  text: "Professional processing and export packaging",
                },
                {
                  "@type": "HowToStep",
                  name: "Documentation & Shipping",
                  text: "Complete export documentation and logistics",
                },
              ],
            },
          ],
        };

      case "product":
        return {
          "@context": "https://schema.org",
          "@graph": [
            baseOrganization,
            {
              "@type": "Product",
              "@id": `https://harikanusantara.com/products/${data?.slug}#product`,
              name: data?.name || "Indonesian Coffee & Cocoa Products",
              description: data?.description || "Premium Indonesian coffee and cocoa products for international markets",
              brand: {
                "@id": "https://harikanusantara.com/#organization",
              },
              manufacturer: {
                "@id": "https://harikanusantara.com/#organization",
              },
              category: data?.category || "Agricultural Products",
              image: data?.images || [],
              offers: {
                "@type": "Offer",
                availability: "https://schema.org/InStock",
                priceCurrency: "USD",
                seller: {
                  "@id": "https://harikanusantara.com/#organization",
                },
                priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split("T")[0], // 1 year from now
              },
              aggregateRating: data?.rating && {
                "@type": "AggregateRating",
                ratingValue: data.rating.average,
                reviewCount: data.rating.count,
              },
              review: data?.reviews?.map((review) => ({
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
            },
            {
              "@type": "WebPage",
              "@id": `https://harikanusantara.com/products/${data?.slug}#webpage`,
              url: `https://harikanusantara.com/products/${data?.slug}`,
              name: `${data?.name} - Indonesian Coffee & Cocoa Supplier`,
              description: data?.description,
              isPartOf: {
                "@id": "https://harikanusantara.com/#website",
              },
              mainEntity: {
                "@id": `https://harikanusantara.com/products/${data?.slug}#product`,
              },
            },
          ],
        };

      case "blog":
        return {
          "@context": "https://schema.org",
          "@graph": [
            baseOrganization,
            {
              "@type": "Article",
              "@id": `https://harikanusantara.com/blog/${data?.slug}#article`,
              headline: data?.title,
              description: data?.description || data?.excerpt,
              image: data?.featuredImage,
              datePublished: data?.publishedAt,
              dateModified: data?.updatedAt || data?.publishedAt,
              author: {
                "@type": "Person",
                name: data?.author?.name || "Harika Nusantara Team",
                url: data?.author?.url,
              },
              publisher: {
                "@id": "https://harikanusantara.com/#organization",
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `https://harikanusantara.com/blog/${data?.slug}`,
              },
              articleSection: data?.category || "Coffee & Cocoa Industry",
              keywords: data?.tags?.join(", ") || "Indonesian coffee, cocoa export, coffee supplier",
              wordCount: data?.wordCount,
              about: [
                {
                  "@type": "Thing",
                  name: "Indonesian Coffee Industry",
                },
                {
                  "@type": "Thing",
                  name: "Cocoa Export",
                },
              ],
            },
            {
              "@type": "WebPage",
              "@id": `https://harikanusantara.com/blog/${data?.slug}#webpage`,
              url: `https://harikanusantara.com/blog/${data?.slug}`,
              name: data?.title,
              description: data?.description || data?.excerpt,
              isPartOf: {
                "@id": "https://harikanusantara.com/#website",
              },
              mainEntity: {
                "@id": `https://harikanusantara.com/blog/${data?.slug}#article`,
              },
            },
          ],
        };

      case "breadcrumb":
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement:
            data?.breadcrumbs?.map((item, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: item.name,
              item: item.url,
            })) || [],
        };

      default:
        return {
          "@context": "https://schema.org",
          "@graph": [baseOrganization, baseWebsite],
        };
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData()),
      }}
    />
  );
}
