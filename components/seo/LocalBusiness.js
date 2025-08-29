// components/seo/LocalBusiness.js - Local Business Schema
export default function LocalBusinessSchema() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://harikanusantara.com/#localbusiness",
    name: "Harika Nusantara",
    alternateName: "Harika Nusantara Indonesian Coffee & Cocoa Supplier",
    description: "Leading Indonesian coffee and cocoa supplier & exporter specializing in premium Arabica, Robusta coffee beans and high-quality cocoa products for international wholesale markets.",
    url: "https://harikanusantara.com",
    telephone: "+90-542-179-3483",
    email: "info@harikanusantara.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Example Street No. 123",
      addressLocality: "Jakarta",
      addressRegion: "DKI Jakarta",
      postalCode: "10xxx",
      addressCountry: "Indonesia",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.2088,
      longitude: 106.8456,
    },
    image: "https://harikanusantara.com/harika-nusantara-building.jpg",
    logo: "https://harikanusantara.com/logo.png",
    openingHours: "Mo-Fr 08:00-17:00",
    priceRange: "$$",
    currenciesAccepted: "USD, EUR, IDR",
    paymentAccepted: "Bank Transfer, Letter of Credit",
    areaServed: [
      {
        "@type": "Country",
        name: "Global",
      },
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: -6.2088,
        longitude: 106.8456,
      },
      geoRadius: "25000000", // 25,000 km (global)
    },
    knowsAbout: ["Coffee Export", "Cocoa Supply", "Indonesian Coffee", "Indonesian Cocoa", "Arabica Coffee Beans", "Robusta Coffee Beans", "Sustainable Sourcing", "International Trade"],
    memberOf: [
      {
        "@type": "Organization",
        name: "Indonesian Coffee Association",
      },
      {
        "@type": "Organization",
        name: "Indonesian Cocoa Association",
      },
    ],
    award: ["Best Indonesian Coffee Exporter 2023", "Sustainable Sourcing Excellence Award"],
    foundingDate: "2020-01-01",
    founders: [
      {
        "@type": "Person",
        name: "Founder Name",
      },
    ],
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 50,
      maxValue: 100,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusiness),
      }}
    />
  );
}
