// components/seo/PageSEO.js - All-in-one SEO Component
import StructuredData from "./StructuredData";
import JsonLd from "./JsonLd";
import { seoUtils } from "@/lib/seo-utils";

export default function PageSEO({ pageType, data = {}, breadcrumbs = [], faqs = [], customSchema = null }) {
  return (
    <>
      {/* Main Structured Data */}
      <StructuredData type={pageType} data={data} />

      {/* Breadcrumb Schema */}
      {breadcrumbs.length > 0 && <JsonLd data={seoUtils.generateBreadcrumbSchema(breadcrumbs)} />}

      {/* FAQ Schema */}
      {faqs.length > 0 && <JsonLd data={seoUtils.generateFaqSchema(faqs)} />}

      {/* Custom Schema */}
      {customSchema && <JsonLd data={customSchema} />}

      {/* Review Schema for Products */}
      {pageType === "product" && data.reviews && <JsonLd data={seoUtils.generateReviewSchema(data.reviews, data.name)} />}
    </>
  );
}
