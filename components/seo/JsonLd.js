// components/seo/JsonLd.js - Flexible JSON-LD Component
export default function JsonLd({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
