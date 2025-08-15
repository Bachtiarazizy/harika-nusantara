// app/products/[slug]/page.js
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowLeft, CheckCircle, Star, Download, Eye, Award, Coffee, Leaf } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { getProductBySlug, getAllProductSlugs, getRelatedProducts } from "@/lib/sanityProductQueries";
import { Button, Card, Section, SectionHeader } from "@/components/ui/Index";
import ShareButton from "@/components/ui/ShareButton";

// Generate static params for all products
export async function generateStaticParams() {
  const products = await getAllProductSlugs();

  return products.map((product) => ({
    slug: product.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.seo?.metaTitle || `${product.title} - Premium Indonesian Product`,
    description: product.seo?.metaDescription || product.shortDescription || product.fullDescription,
    keywords: product.seo?.metaKeywords?.join(", ") || `${product.title}, Indonesian ${product.category?.name}`,
    openGraph: {
      title: product.seo?.metaTitle || product.title,
      description: product.seo?.metaDescription || product.shortDescription,
      images: product.mainImage?.asset?.url ? [product.mainImage.asset.url] : [],
      type: "article",
      publishedTime: product.publishedAt,
    },
  };
}

// Portable Text components for product content
const productPortableTextComponents = {
  types: {
    image: ({ value }) => {
      const { asset, alt, caption } = value;
      if (!asset?.url) return null;

      return (
        <figure className="my-8 max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <Image src={asset.url} alt={alt || caption || "Product image"} width={800} height={600} className="w-full h-auto object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw" />
          </div>
          {caption && <figcaption className="text-sm text-muted-foreground text-center mt-3 italic">{caption}</figcaption>}
        </figure>
      );
    },
  },
  block: {
    h2: ({ children }) => <h2 className="text-2xl font-bold text-coffee-dark mt-8 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-semibold text-coffee-dark mt-6 mb-3">{children}</h3>,
    h4: ({ children }) => <h4 className="text-lg font-medium text-coffee-dark mt-4 mb-2">{children}</h4>,
    blockquote: ({ children }) => <blockquote className="border-l-4 border-coffee-light pl-6 py-4 my-6 bg-coffee-light/5 italic text-lg">{children}</blockquote>,
    normal: ({ children }) => <p className="text-gray-700 leading-relaxed mb-4">{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc list-outside pl-6 mb-6 space-y-2 text-gray-700">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal list-outside pl-6 mb-6 space-y-2 text-gray-700">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed pl-1">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed pl-1">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-coffee-dark">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">{children}</code>,
    link: ({ children, value }) => (
      <Link href={value.href} target={value.blank ? "_blank" : "_self"} rel={value.blank ? "noopener noreferrer" : undefined} className="text-coffee-dark hover:text-coffee-medium underline transition-colors">
        {children}
      </Link>
    ),
  },
};

// Related Product Card Component
function RelatedProductCard({ product }) {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => <Star key={index} className={`w-3 h-3 ${index < rating ? "text-gold fill-current" : "text-gray-300"}`} />);
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden">
        {product.mainImage?.asset?.url ? (
          <Image src={product.mainImage.asset.url} alt={product.mainImage.alt || product.title} fill className="object-cover hover:scale-105 transition-transform duration-300" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-coffee-light to-coffee-medium flex items-center justify-center">
            <Coffee className="w-12 h-12 text-white/80" />
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center gap-1 mb-2">{renderStars(product.rating || 5)}</div>
        <h3 className="font-semibold text-coffee-dark mb-2 line-clamp-2">{product.title}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.shortDescription}</p>
        <Link href={`/products/${product.slug.current}`}>
          <Button size="sm" className="w-full">
            <Eye className="w-4 h-4 mr-2" />
            View Details
          </Button>
        </Link>
      </div>
    </Card>
  );
}

export default async function ProductDetailPage({ params }) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  // Get related products
  const relatedProducts = await getRelatedProducts(product.category._id, product._id, 3);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => <Star key={index} className={`w-5 h-5 ${index < rating ? "text-gold fill-current" : "text-gray-300"}`} />);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Header */}
      <section className="relative h-[80px] bg-gradient-to-br from-coffee-dark to-cocoa-dark text-white"></section>

      {/* Product Content */}
      <article className="max-w-6xl mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/products">
            <Button variant="ghost" className="hover:bg-coffee-light/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Button>
          </Link>
        </div>

        {/* Product Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            {product.mainImage?.asset?.url && (
              <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden">
                <Image src={product.mainImage.asset.url} alt={product.mainImage.alt || product.title} fill className="object-cover" priority />
              </div>
            )}

            {/* Gallery */}
            {product.gallery && product.gallery.length > 0 && (
              <div className="grid grid-cols-3 gap-3">
                {product.gallery.slice(0, 3).map((image, index) => (
                  <div key={index} className="relative h-24 rounded-lg overflow-hidden">
                    <Image src={image.asset.url} alt={image.alt || `${product.title} image ${index + 1}`} fill className="object-cover hover:scale-110 transition-transform duration-300 cursor-pointer" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            {/* Category Badge */}
            <div className="mb-4">
              <span className={`text-sm font-medium px-3 py-1 rounded-full bg-${product.category?.color || "coffee-dark"}/10 text-${product.category?.color || "coffee-dark"}`}>{product.category?.name}</span>
            </div>

            {/* Title & Rating */}
            <div className="mb-4">
              <h1 className="text-3xl md:text-4xl font-bold text-coffee-dark mb-3">{product.title}</h1>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">{renderStars(product.rating || 5)}</div>
                <span className="text-sm text-muted-foreground">({product.rating || 5}.0)</span>
              </div>
            </div>

            {/* Short Description */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">{product.shortDescription}</p>

            {/* Full Description */}
            {product.fullDescription && <p className="text-gray-700 leading-relaxed mb-8">{product.fullDescription}</p>}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="md" className="flex-1">
                Request Quote
              </Button>

              {product.specificationSheet?.asset?.url && (
                <Button variant="outline" size="md" asChild className="flex items-center">
                  <a href={product.specificationSheet.asset.url} download={product.specificationSheet.asset.originalFilename} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <Download className="w-4 h-4 mr-2" />
                    Download Specs
                  </a>
                </Button>
              )}

              {/* <ShareButton title={product.title} excerpt={product.shortDescription} size="lg" /> */}
            </div>

            {/* Quick Specs */}
            {product.specifications && product.specifications.length > 0 && (
              <div className="border rounded-lg p-6 bg-gray-50">
                <h3 className="font-semibold text-coffee-dark mb-4">Key Specifications</h3>
                <div className="space-y-3">
                  {product.specifications.slice(0, 5).map((spec, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-600">{spec.label}</span>
                      <span className="text-sm text-coffee-dark font-semibold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Detailed Specifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Full Specifications */}
          {product.specifications && product.specifications.length > 5 && (
            <Card className="p-6">
              <h3 className="font-semibold text-coffee-dark mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-forest-green" />
                Complete Specifications
              </h3>
              <div className="space-y-3">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-forest-green mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-medium text-gray-700">{spec.label}: </span>
                      <span className="text-sm text-gray-600">{spec.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Origins */}
          {product.origins && product.origins.length > 0 && (
            <Card className="p-6">
              <h3 className="font-semibold text-coffee-dark mb-4">Origins Available</h3>
              <div className="flex flex-wrap gap-2">
                {product.origins.map((origin, index) => (
                  <span key={index} className="px-3 py-1 bg-coffee-light/20 text-coffee-dark text-sm rounded-full">
                    {origin}
                  </span>
                ))}
              </div>
            </Card>
          )}

          {/* Processing Methods */}
          {product.processingMethods && product.processingMethods.length > 0 && (
            <Card className="p-6">
              <h3 className="font-semibold text-coffee-dark mb-4">Processing Methods</h3>
              <div className="flex flex-wrap gap-2">
                {product.processingMethods.map((method, index) => (
                  <span key={index} className="px-3 py-1 bg-cocoa-medium/20 text-cocoa-dark text-sm rounded-full">
                    {method}
                  </span>
                ))}
              </div>
            </Card>
          )}

          {/* Quality Grades */}
          {product.qualityGrades && product.qualityGrades.length > 0 && (
            <Card className="p-6">
              <h3 className="font-semibold text-coffee-dark mb-4">Quality Grades</h3>
              <div className="flex flex-wrap gap-2">
                {product.qualityGrades.map((grade, index) => (
                  <span key={index} className="px-3 py-1 bg-gold/20 text-gold-dark text-sm rounded-full">
                    {grade}
                  </span>
                ))}
              </div>
            </Card>
          )}
        </div>

        {/* Certifications */}
        {/* {product.certifications && product.certifications.length > 0 && (
          <Section>
            <SectionHeader title="Certifications & Quality Standards" description="Our commitment to quality and sustainability" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {product.certifications.map((cert, index) => (
                <Card key={index} className="p-6 text-center">
                  {cert.logo?.asset?.url && (
                    <div className="w-16 h-16 mx-auto mb-4 relative">
                      <Image src={cert.logo.asset.url} alt={cert.name} fill className="object-contain" />
                    </div>
                  )}
                  <h3 className="font-semibold text-coffee-dark mb-2">{cert.name}</h3>
                  {cert.description && <p className="text-sm text-muted-foreground">{cert.description}</p>}
                </Card>
              ))}
            </div>
          </Section>
        )} */}

        {/* Additional Documents */}
        {product.additionalDocuments && product.additionalDocuments.length > 0 && (
          <Section>
            <SectionHeader title="Additional Resources" description="Download additional product information and documentation" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {product.additionalDocuments.map((doc, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-coffee-dark mb-2">{doc.title}</h3>
                      {doc.description && <p className="text-sm text-muted-foreground mb-4">{doc.description}</p>}
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a href={doc.file.asset.url} download={doc.file.asset.originalFilename} target="_blank" rel="noopener noreferrer">
                        <Download className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </Section>
        )}

        {/* Detailed Content */}
        {product.detailedContent && (
          <Section>
            <div className="prose prose-lg max-w-none">
              <PortableText value={product.detailedContent} components={productPortableTextComponents} />
            </div>
          </Section>
        )}

        {/* Product Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <Link href="/products">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                View All Products
              </Button>
            </Link>

            <div className="flex gap-3">
              <ShareButton title={product.title} excerpt={product.shortDescription} />
            </div>
          </div>
        </footer>
      </article>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-coffee-light/5 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <SectionHeader title="Related Products" subtitle="You might also be interested in" description="Discover more premium products from our collection" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {relatedProducts.map((relatedProduct) => (
                <RelatedProductCard key={relatedProduct._id} product={relatedProduct} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
