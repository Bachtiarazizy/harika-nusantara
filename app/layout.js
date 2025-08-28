import Navigation from "@/components/layout/Navbar";
import "./globals.css";
import { Archivo } from "next/font/google";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/home/WhatsAppButton";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Harika Nusantara - Premium Indonesian Coffee & Cocoa Exporter | Arabica, Robusta, Cocoa Beans Wholesale",
  description:
    "Leading Indonesian coffee and cocoa exporter specializing in premium Arabica, Robusta coffee beans and high-quality cocoa products. Direct sourcing from Java, Sumatra, Sulawesi plantations for international wholesale markets. Certified organic, fair trade, sustainable export solutions.",
  keywords: [
    // Primary keywords
    "Indonesian coffee exporter",
    "cocoa exporter Indonesia",
    "coffee beans wholesale",
    "cocoa beans wholesale",
    "premium coffee export",

    // Coffee-specific keywords
    "Arabica coffee beans Indonesia",
    "Robusta coffee beans export",
    "Java coffee beans wholesale",
    "Sumatra coffee exporter",
    "Sulawesi coffee beans",
    "Mandheling coffee export",
    "Toraja coffee beans",
    "specialty coffee Indonesia",
    "green coffee beans export",

    // Cocoa-specific keywords
    "Indonesian cocoa beans",
    "cocoa powder export",
    "organic cocoa Indonesia",
    "sustainable cocoa export",
    "cocoa products wholesale",
    "fermented cocoa beans",

    // Business and quality keywords
    "coffee export company",
    "international coffee trade",
    "B2B coffee supplier",
    "certified organic coffee",
    "fair trade coffee export",
    "sustainable coffee sourcing",
    "direct trade coffee",
    "coffee plantation Indonesia",
    "cocoa plantation sourcing",
  ].join(", "),
  authors: [{ name: "Harika Nusantara", url: "https://harika-nusantara.com" }],
  creator: "Harika Nusantara",
  publisher: "Harika Nusantara",
  category: "Agriculture, Export, International Trade",
  classification: "Business",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://harika-nusantara.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "id-ID": "/id",
    },
  },
  openGraph: {
    title: "Harika Nusantara - Premium Indonesian Coffee & Cocoa Exporter",
    description: "Leading exporter of premium Indonesian coffee and cocoa. Direct sourcing from Java, Sumatra, Sulawesi plantations. Arabica, Robusta, organic cocoa for international wholesale markets.",
    url: "https://harika-nusantara.com",
    siteName: "Harika Nusantara",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Harika Nusantara - Premium Indonesian Coffee and Cocoa Beans Export",
        type: "image/jpeg",
      },
      {
        url: "/coffee-beans-og.jpg",
        width: 1200,
        height: 630,
        alt: "Premium Indonesian Arabica and Robusta Coffee Beans",
        type: "image/jpeg",
      },
      {
        url: "/cocoa-beans-og.jpg",
        width: 1200,
        height: 630,
        alt: "High Quality Indonesian Cocoa Beans and Products",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
    countryName: "Indonesia",
  },
  twitter: {
    card: "summary_large_image",
    site: "@HarikaNusantara",
    creator: "@HarikaNusantara",
    title: "Harika Nusantara - Premium Indonesian Coffee & Cocoa Exporter",
    description: "Leading Indonesian exporter of premium coffee and cocoa. Arabica, Robusta, organic cocoa from Java, Sumatra, Sulawesi for international markets.",
    images: [
      {
        url: "/og-image.jpg",
        alt: "Harika Nusantara - Indonesian Coffee & Cocoa Export",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      bing: "your-bing-verification-code",
    },
  },
  other: {
    "geo.region": "ID",
    "geo.country": "Indonesia",
    "geo.placename": "Indonesia",
    ICBM: "-6.2088, 106.8456", // Jakarta coordinates as business center
    "DC.title": "Harika Nusantara - Indonesian Coffee & Cocoa Exporter",
    "DC.creator": "Harika Nusantara",
    "DC.subject": "Indonesian Coffee Export, Cocoa Export, Arabica, Robusta",
    "DC.description": "Premium Indonesian coffee and cocoa exporter specializing in Arabica, Robusta coffee beans and cocoa products for international markets",
    "DC.publisher": "Harika Nusantara",
    "DC.contributor": "Harika Nusantara",
    "DC.date": new Date().toISOString(),
    "DC.type": "Text",
    "DC.format": "text/html",
    "DC.identifier": "https://harika-nusantara.com",
    "DC.language": "en",
    "DC.coverage": "Indonesia, International",
    "DC.rights": "Copyright Harika Nusantara",
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://harika-nusantara.com/#organization",
        name: "Harika Nusantara",
        url: "https://harika-nusantara.com",
        logo: {
          "@type": "ImageObject",
          url: "https://harika-nusantara.com/logo.png",
          width: 300,
          height: 100,
        },
        description: "Leading Indonesian coffee and cocoa exporter specializing in premium Arabica, Robusta coffee beans and high-quality cocoa products for international wholesale markets.",
        address: {
          "@type": "PostalAddress",
          addressCountry: "Indonesia",
          addressRegion: "Jakarta",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+62-xxx-xxxx-xxxx",
          contactType: "sales",
          availableLanguage: ["English", "Indonesian"],
        },
        sameAs: ["https://www.linkedin.com/company/harika-nusantara", "https://twitter.com/HarikaNusantara", "https://www.facebook.com/HarikaNusantara"],
        foundingDate: "2020",
        numberOfEmployees: "50-100",
        industry: "Agriculture Export",
        keywords: "Indonesian coffee export, cocoa export, Arabica beans, Robusta coffee, sustainable sourcing",
      },
      {
        "@type": "WebSite",
        "@id": "https://harika-nusantara.com/#website",
        url: "https://harika-nusantara.com",
        name: "Harika Nusantara",
        description: "Premium Indonesian Coffee & Cocoa Exporter",
        publisher: {
          "@id": "https://harika-nusantara.com/#organization",
        },
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://harika-nusantara.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Product",
        "@id": "https://harika-nusantara.com/#coffee-products",
        name: "Indonesian Coffee Beans",
        description: "Premium Arabica and Robusta coffee beans sourced directly from Java, Sumatra, and Sulawesi plantations",
        brand: {
          "@id": "https://harika-nusantara.com/#organization",
        },
        manufacturer: {
          "@id": "https://harika-nusantara.com/#organization",
        },
        category: "Coffee Beans",
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "USD",
          seller: {
            "@id": "https://harika-nusantara.com/#organization",
          },
        },
      },
      {
        "@type": "Product",
        "@id": "https://harika-nusantara.com/#cocoa-products",
        name: "Indonesian Cocoa Products",
        description: "High-quality cocoa beans and cocoa powder sourced from sustainable Indonesian plantations",
        brand: {
          "@id": "https://harika-nusantara.com/#organization",
        },
        manufacturer: {
          "@id": "https://harika-nusantara.com/#organization",
        },
        category: "Cocoa Products",
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "USD",
          seller: {
            "@id": "https://harika-nusantara.com/#organization",
          },
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${archivo.variable} scroll-smooth`}>
      <head>
        {/* Favicon and icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Theme and viewport */}
        <meta name="theme-color" content="#8B4513" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Additional SEO meta tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* Additional structured data for breadcrumbs (to be added on individual pages) */}
        {/* Hreflang tags (to be implemented when multi-language support is added) */}
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Navigation />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
