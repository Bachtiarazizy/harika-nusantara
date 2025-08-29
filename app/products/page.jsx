// app/products/page.js
import { Button, Card, Section, SectionHeader } from "@/components/ui/Index";
import { Coffee, Leaf, Award, Download, CheckCircle, Star, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getAllProducts, getAllProductCategories } from "@/lib/sanityProductQueries";
import StructuredData from "@/components/seo/StructuredData";
import { generatePageMetadata } from "@/lib/metadata";

// Dynamic icon mapping
const iconMap = {
  Coffee,
  Leaf,
  Award,
};

// Product Card Component
function ProductCard({ product }) {
  const IconComponent = iconMap[product.category?.icon] || Coffee;

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => <Star key={index} className={`w-4 h-4 ${index < rating ? "text-gold fill-current" : "text-gray-300"}`} />);
  };

  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
      {/* Product Image */}
      <div className="relative h-64 overflow-hidden">
        {product.mainImage?.asset?.url ? (
          <Image
            src={product.mainImage.asset.url}
            alt={product.mainImage.alt || product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-coffee-light to-coffee-medium flex items-center justify-center">
            <IconComponent className="w-16 h-16 text-white/80" />
          </div>
        )}

        {/* Featured Badge */}
        {product.featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-gold text-white px-3 py-1 text-xs font-semibold rounded-full">Featured</span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6">
        {/* Category & Rating */}
        <div className="flex items-center justify-between mb-3">
          <span className={`text-xs font-medium px-2 py-1 rounded-full bg-${product.category?.color || "coffee-dark"}/10 text-${product.category?.color || "coffee-dark"}`}>{product.category?.name}</span>
          <div className="flex items-center gap-1">{renderStars(product.rating || 5)}</div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-coffee-dark mb-3 line-clamp-2">{product.title}</h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{product.shortDescription}</p>

        {/* Specifications Preview */}
        {product.specifications && product.specifications.length > 0 && (
          <div className="mb-4">
            <h4 className="font-medium text-coffee-dark text-sm mb-2">Key Specs:</h4>
            <div className="space-y-1">
              {product.specifications.slice(0, 3).map((spec, index) => (
                <div key={index} className="flex items-center text-xs">
                  <CheckCircle className="w-3 h-3 text-forest-green mr-2 flex-shrink-0" />
                  <span className="text-gray-600">
                    <span className="font-medium">{spec.label}:</span> {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Origins/Processing Methods */}
        <div className="mb-6">
          {product.origins && product.origins.length > 0 && (
            <div className="mb-3">
              <h4 className="font-medium text-coffee-dark text-sm mb-2">Origins:</h4>
              <div className="flex flex-wrap gap-1">
                {product.origins.slice(0, 4).map((origin, index) => (
                  <span key={index} className="px-2 py-1 bg-coffee-light/20 text-coffee-dark text-xs rounded-full">
                    {origin}
                  </span>
                ))}
              </div>
            </div>
          )}

          {product.processingMethods && product.processingMethods.length > 0 && (
            <div className="mb-3">
              <h4 className="font-medium text-coffee-dark text-sm mb-2">Processing:</h4>
              <div className="flex flex-wrap gap-1">
                {product.processingMethods.slice(0, 3).map((method, index) => (
                  <span key={index} className="px-2 py-1 bg-cocoa-medium/20 text-cocoa-dark text-xs rounded-full">
                    {method}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Link href={`/products/${product.slug.current}`} className="flex-1">
            <Button className="w-full">
              <Eye className="w-4 h-4 mr-2" />
              View Details
            </Button>
          </Link>

          {product.specificationSheet?.asset?.url && (
            <Button variant="outline" asChild>
              <a href={product.specificationSheet.asset.url} download={product.specificationSheet.asset.originalFilename} target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}

// Category Filter Component
function CategoryFilter({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      <button onClick={() => onCategoryChange("all")} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === "all" ? "bg-coffee-dark text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
        All Products
      </button>
      {categories.map((category) => (
        <button
          key={category._id}
          onClick={() => onCategoryChange(category.slug.current)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category.slug.current ? `bg-${category.color || "coffee-dark"} text-white` : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}

export const metadata = generatePageMetadata("products");

export default async function ProductsPage({ searchParams }) {
  const products = await getAllProducts();
  const categories = await getAllProductCategories();

  // Group products by category for display
  const coffeeProducts = products.filter((p) => p.category?.slug?.current === "coffee" || p.productType.includes("coffee"));
  const cocoaProducts = products.filter((p) => p.category?.slug?.current === "cocoa" || p.productType.includes("cocoa"));

  return (
    <>
      <StructuredData type="homepage" />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-coffee-dark to-cocoa-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-coffee-light max-w-3xl mx-auto">Premium Indonesian coffee beans and cocoa products, carefully selected and processed to meet international quality standards.</p>
          </div>
        </section>

        {/* Coffee Products Section */}
        {coffeeProducts.length > 0 && (
          <Section id="coffee">
            <SectionHeader
              subtitle="Coffee Products"
              title="Premium Indonesian Coffee Beans"
              description="From the volcanic soils of Java, Sumatra, and Sulawesi, we offer the finest Arabica and Robusta coffee beans for international markets."
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">
              {coffeeProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </Section>
        )}

        {/* Cocoa Products Section */}
        {cocoaProducts.length > 0 && (
          <Section id="cocoa" className="bg-coffee-light/10">
            <SectionHeader subtitle="Cocoa Products" title="Premium Indonesian Cocoa" description="High-quality cocoa beans and powder from Indonesian plantations, perfect for chocolate manufacturing and confectionery applications." />

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">
              {cocoaProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </Section>
        )}

        {/* All Products Section (if no category-specific sections) */}
        {coffeeProducts.length === 0 && cocoaProducts.length === 0 && products.length > 0 && (
          <Section>
            <SectionHeader subtitle="Our Products" title="Premium Indonesian Products" description="Discover our full range of premium coffee beans and cocoa products from Indonesian plantations." />

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </Section>
        )}
      </div>
    </>
  );
}
