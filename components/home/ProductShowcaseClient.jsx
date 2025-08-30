// components/home/ProductShowcaseClient.js
"use client";

import Link from "next/link";
import Image from "next/image";
import { Button, Section, Card } from "../ui/Index";
import { ArrowRight, CheckCircle, Eye, Package, Award, Leaf, Globe, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductShowcaseClient({ initialProducts }) {
  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <Section className="bg-gradient-to-b from-coffee-light/5 to-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <motion.div className="text-center mb-6 md:mb-20" initial="hidden" whileInView="visible" variants={headerVariants} viewport={{ once: true, amount: 0.3 }}>
          <div className="inline-flex items-center bg-coffee-dark/5 rounded-full px-6 py-2 mb-6">
            <Package className="w-4 h-4 text-coffee-dark mr-2" />
            <span className="text-sm font-semibold text-coffee-dark tracking-wide uppercase">Our Products</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-coffee-dark mb-4">Indonesian Excellence, From Bean to Bite</h2>

          <p className="hidden md:block text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
            Discover our curated selection of premium coffee, cocoa, and spices. Each product is carefully sourced, quality-tested, and prepared to meet international standards for discerning global markets.
          </p>

          <div className="hidden md:flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Award className="w-4 h-4 text-gold mr-2" />
              <span>Premium Grade</span>
            </div>
            <div className="flex items-center">
              <Leaf className="w-4 h-4 text-forest-green mr-2" />
              <span>Sustainably Sourced</span>
            </div>
            <div className="flex items-center">
              <Globe className="w-4 h-4 text-coffee-dark mr-2" />
              <span>Export Ready</span>
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16" initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true, amount: 0.1 }}>
          {initialProducts.map((product, index) => (
            <motion.div key={`${product._id}-${index}`} variants={cardVariants} whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
              <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 h-full flex flex-col bg-white border-0 shadow-lg">
                {/* Product Image with Overlay */}
                <div className="relative h-72 overflow-hidden">
                  {product.mainImage?.asset?.url ? (
                    <Image
                      src={product.mainImage.asset.url}
                      alt={product.mainImage.alt || product.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div
                      className="h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                      style={{
                        backgroundImage: `url('/images/coffee-beans-premium.webp')`,
                      }}
                    />
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Quality Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-gold text-coffee-dark px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Premium Grade</div>
                  </div>

                  {/* Export Ready Badge */}
                  {/* <div className="absolute top-4 right-4">
                    <div className="bg-forest-green text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Export Ready</div>
                  </div> */}
                </div>

                {/* Product Content */}
                <div className="p-8 flex flex-col flex-1">
                  {/* Product Title */}
                  <h3 className="text-2xl font-bold text-coffee-dark mb-4 leading-tight group-hover:text-gold transition-colors duration-300">{product.title}</h3>

                  {/* Product Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3 flex-grow">{product.shortDescription}</p>

                  {/* Specifications Grid */}
                  {product.specifications && product.specifications.length > 0 && (
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-coffee-dark mb-4 uppercase tracking-wide">Key Specifications</h4>
                      <div className="grid grid-cols-1 gap-3">
                        {product.specifications.slice(0, 3).map((spec, specIndex) => (
                          <div key={specIndex} className="flex items-center justify-between py-2 px-3 bg-coffee-light/5 rounded-lg">
                            <span className="text-sm text-muted-foreground font-medium">{spec.label}</span>
                            <span className="text-sm font-semibold text-coffee-dark">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="mt-auto space-y-3">
                    <Link href={`/products/${product.slug?.current || "#"}`} className="block">
                      <Button className="w-full bg-coffee-dark hover:bg-coffee-dark/90 text-white font-semibold py-3 text-base group-hover:shadow-lg transition-all duration-300">
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>

                    <Link href="mailto:info@harikanusantara.com">
                      <Button variant="outline" className="w-full border-coffee-dark text-coffee-dark hover:bg-coffee-dark hover:text-white font-medium py-3 text-base">
                        Request Quote
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Section */}
        <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }}>
          <div className="bg-gradient-to-r from-coffee-light/10 to-gold/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-coffee-dark mb-4">Discover Our Complete Product Range</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Explore our full catalog of premium Indonesian agricultural products, including detailed specifications, pricing, and availability information.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button size="lg" className="bg-coffee-dark hover:bg-coffee-dark/90 text-white px-8 py-4 text-lg font-semibold">
                  <Package className="w-5 h-5 mr-2" />
                  View All Products
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>

              <Link href="#">
                <Button variant="outline" size="lg" className="border-coffee-dark text-coffee-dark hover:bg-coffee-dark hover:text-white px-8 py-4 text-lg font-semibold">
                  Download Catalog
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Additional Info */}
            <div className="mt-8 pt-6 border-t border-coffee-light/20">
              <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-forest-green mr-2" />
                  <span>20+ Product Varieties</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-4 h-4 text-gold mr-2" />
                  <span>International Quality Standards</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-4 h-4 text-coffee-dark mr-2" />
                  <span>Global Shipping Available</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
