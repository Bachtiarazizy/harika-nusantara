// components/seo/MetaTags.js - Comprehensive Meta Tags Component
export default function MetaTags({ title, description, keywords = [], canonicalUrl, ogImage, ogType = "website", publishedTime, modifiedTime, author, noIndex = false }) {
  const optimizedKeywords = seoUtils.optimizeKeywords(keywords);
  const optimizedDescription = seoUtils.generateMetaDescription(description, keywords);

  return (
    <>
      {/* Basic Meta Tags */}
      <title>{seoUtils.generatePageTitle(title)}</title>
      <meta name="description" content={optimizedDescription} />
      <meta name="keywords" content={optimizedKeywords.join(", ")} />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Robots */}
      <meta name="robots" content={noIndex ? "noindex,nofollow" : "index,follow"} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={optimizedDescription} />
      <meta property="og:type" content={ogType} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:site_name" content="Harika Nusantara" />
      <meta property="og:locale" content="en_US" />

      {/* Article specific */}
      {ogType === "article" && publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {ogType === "article" && modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {ogType === "article" && author && <meta property="article:author" content={author} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@HarikaNusantara" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={optimizedDescription} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Additional SEO Tags */}
      <meta name="geo.region" content="ID" />
      <meta name="geo.country" content="Indonesia" />
      <meta name="language" content="English" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="3 days" />

      {/* Business specific */}
      <meta name="business.contact_data.country_name" content="Indonesia" />
      <meta name="business.contact_data.region" content="Jakarta" />

      {/* Hreflang tags */}
      {canonicalUrl && Object.entries(seoUtils.generateHreflangTags(new URL(canonicalUrl).pathname)).map(([lang, url]) => <link key={lang} rel="alternate" hrefLang={lang} href={url} />)}
    </>
  );
}
