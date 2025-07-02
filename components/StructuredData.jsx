export default function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Harika Nusantara",
    alternateName: "PT Harika Nusantara",
    description: "Leading Indonesian coffee and cocoa exporter serving international markets with premium quality beans from Java, Sumatra, and Sulawesi.",
    url: "https://harikanusantara.com",
    logo: "https://harikanusantara.com/images/logo.png",
    image: "https://harikanusantara.com/images/hero-background.jpg",
    foundingDate: "2009",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Raya Industri No. 123",
      addressLocality: "Semarang",
      addressRegion: "Central Java",
      postalCode: "50123",
      addressCountry: "ID",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+62-123-456-7890",
        contactType: "customer service",
        availableLanguage: ["English", "Indonesian"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+62-123-456-7891",
        contactType: "sales",
        availableLanguage: ["English", "Indonesian"],
      },
    ],
    sameAs: ["https://www.linkedin.com/company/harika-nusantara", "https://www.facebook.com/harikanusantara"],
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Coffee and Cocoa Products",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Arabica Coffee Beans",
            description: "Premium Arabica coffee beans from Indonesian plantations",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Robusta Coffee Beans",
            description: "High-quality Robusta coffee beans from Indonesia",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Cocoa Beans",
            description: "Premium cocoa beans from Indonesian plantations",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Cocoa Powder",
            description: "Fine cocoa powder processed from Indonesian cocoa beans",
          },
        },
      ],
    },
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Harika Nusantara",
    url: "https://harikanusantara.com",
    description: "Leading Indonesian coffee and cocoa exporter",
    publisher: {
      "@type": "Organization",
      name: "Harika Nusantara",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://harikanusantara.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData),
        }}
      />
    </>
  );
}
