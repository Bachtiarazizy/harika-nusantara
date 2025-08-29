import Navigation from "@/components/layout/Navbar";
import "./globals.css";
import { Archivo } from "next/font/google";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/home/WhatsAppButton";
import StructuredData from "@/components/seo/StructuredData";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// SEO Keywords yang dioptimasi untuk Indonesian Coffee & Cocoa Supplier/Exporter
const primaryKeywords = [
  // Primary Focus Keywords
  "Indonesian coffee supplier",
  "Indonesian cocoa supplier",
  "Indonesian coffee exporter",
  "Indonesian cocoa exporter",
  "Indonesia coffee beans supplier",
  "Indonesia cocoa beans supplier",

  // Coffee Specific Keywords
  "Arabica coffee beans supplier Indonesia",
  "Robusta coffee beans exporter Indonesia",
  "Indonesian coffee beans wholesale supplier",
  "premium Indonesian coffee supplier",
  "Indonesian specialty coffee exporter",
  "Java coffee beans supplier",
  "Sumatra coffee beans exporter",
  "Sulawesi coffee supplier",
  "Mandheling coffee beans supplier",
  "Toraja coffee exporter Indonesia",
  "green coffee beans supplier Indonesia",
  "organic coffee beans supplier Indonesia",

  // Cocoa Specific Keywords
  "Indonesian cocoa beans supplier",
  "Indonesian cocoa powder exporter",
  "Indonesia cocoa products supplier",
  "organic cocoa supplier Indonesia",
  "sustainable cocoa exporter Indonesia",
  "fermented cocoa beans supplier",
  "Indonesian cocoa beans wholesale",
  "premium cocoa products supplier Indonesia",

  // Business & Trade Keywords
  "Indonesian agricultural products supplier",
  "B2B coffee supplier Indonesia",
  "B2B cocoa supplier Indonesia",
  "direct trade coffee supplier Indonesia",
  "sustainable coffee supplier Indonesia",
  "fair trade coffee exporter Indonesia",
  "Indonesian plantation products supplier",
  "international coffee trade Indonesia",
  "coffee export company Indonesia",
  "cocoa export company Indonesia",

  // Location-Based Keywords
  "Jakarta coffee supplier",
  "Indonesian coffee supply chain",
  "Southeast Asian coffee supplier",
  "Asian coffee exporter",
  "Indonesian agricultural exporter",
];

export const metadata = {
  title: {
    default: "Indonesian Coffee & Cocoa Supplier | Premium Arabica Robusta Exporter - Harika Nusantara",
  },
  description:
    "Leading Indonesian coffee & cocoa supplier and exporter. Direct sourcing of premium Arabica, Robusta coffee beans and high-quality cocoa products from Java, Sumatra, Sulawesi plantations for international wholesale markets. Trusted B2B supplier since 2020.",
  keywords: primaryKeywords.join(", "),

  // Enhanced metadata
  authors: [
    {
      name: "Harika Nusantara",
      url: "https://harikanusantara.com",
    },
  ],
  creator: "Harika Nusantara - Indonesian Coffee & Cocoa Supplier",
  publisher: "Harika Nusantara",

  // Business categorization
  category: "Agriculture, Coffee Supply, Cocoa Export, International Trade, B2B Wholesale",
  classification: "Business - Agricultural Supplier & Exporter",

  // Technical settings
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://harikanusantara.com"),

  // Enhanced alternates with hreflang
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      en: "/en",
      "id-ID": "/id",
      id: "/id",
    },
    types: {
      "application/rss+xml": "/feed.xml",
      "application/atom+xml": "/feed.atom",
    },
  },

  // Enhanced Open Graph
  openGraph: {
    title: "Indonesian Coffee & Cocoa Supplier | Premium Arabica Robusta Exporter",
    description: "Leading Indonesian coffee & cocoa supplier. Direct sourcing of premium Arabica, Robusta coffee beans and cocoa products from Java, Sumatra, Sulawesi plantations for international B2B markets.",
    url: "https://harikanusantara.com",
    siteName: "Harika Nusantara - Indonesian Coffee & Cocoa Supplier",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Harika Nusantara - Indonesian Coffee & Cocoa Supplier and Exporter",
        type: "image/jpeg",
      },
      {
        url: "/indonesian-coffee-beans-supplier.jpg",
        width: 1200,
        height: 630,
        alt: "Premium Indonesian Arabica and Robusta Coffee Beans Supplier",
        type: "image/jpeg",
      },
      {
        url: "/indonesian-cocoa-supplier.jpg",
        width: 1200,
        height: 630,
        alt: "High Quality Indonesian Cocoa Products Supplier and Exporter",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
    countryName: "Indonesia",
    emails: ["info@harika-nusantara.com"],
    phoneNumbers: ["+90-542-179-3483"],
    faxNumbers: ["+90-542-179-3483"],
    ttl: 604800, // 7 days
  },

  // Enhanced Twitter metadata
  twitter: {
    card: "summary_large_image",
    site: "@HarikaNusantara",
    creator: "@HarikaNusantara",
    title: "Indonesian Coffee & Cocoa Supplier | Premium Arabica Robusta Exporter",
    description: "Leading Indonesian coffee & cocoa supplier. Direct sourcing of premium Arabica, Robusta coffee beans and cocoa products for international B2B markets.",
    images: [
      {
        url: "/og-image.jpg",
        alt: "Harika Nusantara - Indonesian Coffee & Cocoa Supplier",
        width: 1200,
        height: 630,
      },
    ],
  },

  // Enhanced robots configuration
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
    // Additional bot instructions
    bingBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },

  // Enhanced verification codes
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      bing: "your-bing-verification-code",
      baidu: "your-baidu-verification-code",
      facebook: "your-facebook-domain-verification",
    },
  },

  // Enhanced additional metadata
  other: {
    // Geographic targeting
    "geo.region": "ID",
    "geo.country": "Indonesia",
    "geo.placename": "Jakarta, Indonesia",
    ICBM: "-6.2088, 106.8456", // Jakarta coordinates

    // Dublin Core metadata
    "DC.title": "Indonesian Coffee & Cocoa Supplier - Harika Nusantara",
    "DC.creator": "Harika Nusantara",
    "DC.subject": "Indonesian Coffee Supplier, Cocoa Exporter, Arabica, Robusta, B2B Wholesale",
    "DC.description": "Leading Indonesian coffee and cocoa supplier specializing in premium Arabica, Robusta coffee beans and cocoa products for international B2B wholesale markets",
    "DC.publisher": "Harika Nusantara",
    "DC.contributor": "Harika Nusantara Team",
    "DC.date": new Date().toISOString(),
    "DC.type": "InteractiveResource",
    "DC.format": "text/html",
    "DC.identifier": "https://harikanusantara.com",
    "DC.language": "en-US",
    "DC.coverage": "Indonesia, International, Worldwide",
    "DC.rights": "Copyright © 2024 Harika Nusantara. All rights reserved.",

    // Business metadata
    "business.contact_data.street_address": "Jakarta, Indonesia",
    "business.contact_data.locality": "Jakarta",
    "business.contact_data.region": "Jakarta",
    "business.contact_data.postal_code": "10xxx",
    "business.contact_data.country_name": "Indonesia",

    // Industry classifications
    industry: "Agricultural Export, Coffee Supply, Cocoa Export",
    business_type: "B2B Supplier, Exporter, Agricultural Products",

    // Additional SEO tags
    "theme-color": "#8B4513",
    "msapplication-TileColor": "#8B4513",
    "apple-mobile-web-app-title": "Harika Nusantara",
    "application-name": "Harika Nusantara - Indonesian Coffee & Cocoa Supplier",

    // Social media optimization
    "article:publisher": "https://www.facebook.com/HarikaNusantara",
    "article:author": "https://www.linkedin.com/company/harika-nusantara",

    // Mobile optimization
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",

    // Performance hints
    "dns-prefetch": "//fonts.googleapis.com",
    preconnect: "//fonts.gstatic.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${archivo.variable} scroll-smooth`}>
      <head>
        {/* Enhanced Favicon and icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#8b4513" />

        {/* Theme and viewport - Enhanced */}
        <meta name="theme-color" content="#8B4513" />
        <meta name="msapplication-TileColor" content="#8b4513" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

        {/* Enhanced SEO meta tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="referrer" content="origin-when-cross-origin" />

        {/* Business-specific meta tags */}
        <meta name="target" content="B2B buyers, Coffee importers, Cocoa buyers, International trade" />
        <meta name="audience" content="Coffee industry, Food industry, International buyers" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="Safe For Kids" />

        {/* Enhanced performance optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//connect.facebook.net" />

        {/* Resource hints for common assets */}
        <link rel="prefetch" href="/indonesian-coffee-beans.jpg" />
        <link rel="prefetch" href="/indonesian-cocoa-products.jpg" />

        {/* Structured Data Component */}
        <StructuredData type="homepage" />

        {/* Enhanced Breadcrumb for homepage */}
        <StructuredData
          type="breadcrumb"
          data={{
            breadcrumbs: [
              {
                name: "Home",
                url: "https://harikanusantara.com/",
              },
            ],
          }}
        />

        {/* Additional feed links */}
        <link rel="alternate" type="application/rss+xml" title="Harika Nusantara Coffee & Cocoa Industry News" href="/feed.xml" />
        <link rel="alternate" type="application/atom+xml" title="Harika Nusantara Blog Feed" href="/feed.atom" />

        {/* Canonical link for homepage */}
        <link rel="canonical" href="https://harikanusantara.com/" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        {/* Skip to content for accessibility */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-primary text-primary-foreground px-4 py-2 z-50">
          Skip to main content
        </a>

        <Navigation />

        <main id="main-content" role="main">
          {children}
        </main>

        <WhatsAppButton />
        <Footer />

        {/* Additional structured data for organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What coffee products does Harika Nusantara supply?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We supply premium Indonesian coffee beans including Arabica and Robusta varieties from Java, Sumatra, and Sulawesi plantations. Our products include green coffee beans, specialty coffee, organic coffee, and various regional varieties like Mandheling and Toraja.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you export Indonesian cocoa products internationally?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we are a leading Indonesian cocoa exporter supplying high-quality cocoa beans, cocoa powder, and other cocoa products to international markets. We source from sustainable Indonesian plantations with proper certifications.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What regions of Indonesia do you source from?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We source directly from major Indonesian coffee and cocoa producing regions including Java, Sumatra, Sulawesi, and other key plantation areas. This allows us to offer diverse flavor profiles and maintain consistent quality.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you provide B2B wholesale services?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we specialize in B2B wholesale supply of Indonesian coffee and cocoa products for international buyers, importers, roasters, and food manufacturers. We offer competitive pricing and reliable supply chain services.",
                  },
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
