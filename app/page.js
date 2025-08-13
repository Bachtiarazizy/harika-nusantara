import AboutSection from "@/components/home/AboutSection";
import BlogSection from "@/components/home/BlogSection";
import CTASection from "@/components/home/CtaSection";
import HeroSection from "@/components/home/HeroSection";
import ImageSection from "@/components/home/ImageSection";
import ProductShowcaseSection from "@/components/home/ProductCard";
import ValueSection from "@/components/home/ValueSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import { getLatestPosts } from "@/lib/sanityQueries";
import Script from "next/script";

// Metadata untuk SEO (jika ini adalah page.tsx di App Router)
export const metadata = {
  title: "Premium Indonesian Coffee & Cocoa Beans Supplier | Harika Nusantara",
  description: "Discover Harika Nusantara's mission to connect conscious consumers with traceable, high-quality Indonesian coffee and cocoa. Ethical sourcing, sustainable farming, and fair trade practices.",
  keywords: "Indonesian coffee, cocoa exports, ethical sourcing, sustainable farming, premium coffee beans, fair trade, Sumatra coffee, Java coffee, Sulawesi coffee",
  authors: [{ name: "Hari Bachtiar Azizy" }],
  creator: "Hari Bachtiar Azizy",
  publisher: "Harika Nusantara",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://harikanusantara.com",
    title: "Premium Indonesian Coffee & Cocoa Beans Supplier | Harika Nusantara",
    description: "Discover Harika Nusantara's mission to connect conscious consumers with traceable, high-quality Indonesian coffee and cocoa. Ethical sourcing, sustainable farming, and fair trade practices.",
    siteName: "Harika Nusantara",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Harika Nusantara - Indonesian Coffee & Cocoa Supplier",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Indonesian Coffee & Cocoa Beans Supplier | Harika Nusantara",
    description: "Discover Harika Nusantara's mission to connect conscious consumers with traceable, high-quality Indonesian coffee and cocoa. Ethical sourcing, sustainable farming, and fair trade practices.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://harikanusantara.com",
  },
  verification: {
    google: "kode-verifikasi-google",
    yandex: "kode-verifikasi-yandex",
  },
};

// JSON-LD Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Harika Nusantara",
  description: "Discover Harika Nusantara's mission to connect conscious consumers with traceable, high-quality Indonesian coffee and cocoa. Ethical sourcing, sustainable farming, and fair trade practices.",
  url: "https://harikanusantara.com",
  logo: {
    "@type": "ImageObject",
    url: "https://harikanusantara.com/logo.png",
    width: 300,
    height: 100,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Alamat Jalan Anda",
    addressLocality: "Kota Anda",
    addressRegion: "Provinsi Anda",
    postalCode: "12345",
    addressCountry: "ID",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+62-xxx-xxxx-xxxx",
    contactType: "customer service",
    availableLanguage: ["Indonesian", "English"],
  },
  sameAs: ["https://facebook.com/bisnis-anda", "https://instagram.com/bisnis-anda", "https://twitter.com/bisnis-anda", "https://linkedin.com/company/bisnis-anda"],
};

export default async function HomePage() {
  const latestPosts = await getLatestPosts(3);
  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* Main Content dengan semantic HTML */}
      <main className="min-h-screen" role="main">
        {/* Hero Section - Section utama */}
        <section aria-labelledby="hero-heading">
          <HeroSection />
        </section>

        {/* About Section */}
        <section aria-labelledby="about-heading">
          <AboutSection />
        </section>

        {/* Image Section */}
        <section aria-labelledby="image-heading">
          <ImageSection />
        </section>

        {/* Value Section */}
        <section aria-labelledby="value-heading">
          <ValueSection />
        </section>

        {/* Product Showcase Section */}
        <section aria-labelledby="products-heading">
          <ProductShowcaseSection />
        </section>

        {/* Why Choose Us Section */}
        <section aria-labelledby="why-choose-heading">
          <WhyChooseUsSection />
        </section>

        {/* Blog Section */}
        <section aria-labelledby="blog-heading">
          <BlogSection posts={latestPosts} title="Latest From Our Blog" subtitle="Discover stories from Indonesian coffee farms and cocoa plantations" showAllButton={true} limit={3} />
        </section>

        {/* Call to Action Section */}
        <section aria-labelledby="cta-heading">
          <CTASection />
        </section>
      </main>

      {/* Breadcrumb Schema (opsional) */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://harikanusantara.com",
              },
            ],
          }),
        }}
      />
    </>
  );
}
