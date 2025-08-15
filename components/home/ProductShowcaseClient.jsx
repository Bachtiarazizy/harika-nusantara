// components/home/ProductShowcaseClient.js
"use client";

import Link from "next/link";
import Image from "next/image";
import { Button, Section, Card } from "../ui/Index";
import { ArrowRight, CheckCircle, Eye } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductShowcaseClient({ initialProducts }) {
  return (
    <Section className="bg-coffee-light/10 py-20 px-2">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left column - title and description */}
        <motion.div className="lg:w-1/2 lg:sticky lg:top-8 lg:self-start" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true, amount: 0.3 }}>
          <h2 className="text-coffee-dark font-semibold text-sm uppercase tracking-[0.5em] mb-6 border border-muted-foreground rounded-sm px-6 py-2 inline-block">HARIKA NUSANTARA</h2>
          <h1 className="text-3xl lg:text-4xl font-bold text-coffee-dark mb-4">
            Indonesian Excellence, <br />
            From Bean to Bite
          </h1>
          <p className="text-xl font-semibold text-muted-foreground">Discover our curated selection of premium coffee and cocoa products crafted with care, rooted in heritage, and delivered with full traceability and quality:</p>
          <Link href="/products" className="inline-block">
            <Button size="md" className="bg-[#e49e35] hover:bg-[#27231a] hover:text-[#f5dab3] text-white mt-6 transition-all duration-300 font-semibold">
              View all Products
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>

        {/* Right column - animated cards */}
        <motion.div
          className="lg:w-1/2 grid grid-cols-1 gap-8"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          viewport={{ once: true }}
        >
          {initialProducts.map((product, index) => (
            <motion.div
              key={`${product._id}-${index}`}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
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
                    <div
                      className="h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                      style={{
                        backgroundImage: `url('/images/coffee-beans-premium.webp')`,
                      }}
                    />
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-coffee-dark mb-3">{product.title}</h3>

                  {/* Short Description with line clamp */}
                  <p className="text-muted-foreground mb-4 line-clamp-2 leading-relaxed">{product.shortDescription}</p>

                  {/* Key Specifications */}
                  <div className="mb-6">
                    <h4 className="font-medium text-coffee-dark text-sm mb-3">Key Specifications:</h4>
                    <ul className="space-y-2">
                      {product.specifications?.slice(0, 3).map((spec, specIndex) => (
                        <li key={specIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-forest-green mr-2 flex-shrink-0" />
                          <span className="text-gray-600">
                            <span className="font-medium">{spec.label}:</span> {spec.value}
                          </span>
                        </li>
                      )) || [
                        <li key="default-1" className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-forest-green mr-2 flex-shrink-0" />
                          <span className="text-gray-600">Premium Quality Guaranteed</span>
                        </li>,
                        <li key="default-2" className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-forest-green mr-2 flex-shrink-0" />
                          <span className="text-gray-600">ISO Certified Processing</span>
                        </li>,
                        <li key="default-3" className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-forest-green mr-2 flex-shrink-0" />
                          <span className="text-gray-600">Direct from Indonesian Farms</span>
                        </li>,
                      ]}
                    </ul>
                  </div>

                  {/* View Details Button */}
                  <Link href={`/products/${product.slug?.current || "#"}`} className="block">
                    <Button variant="outline" className="w-full hover:bg-coffee-dark hover:text-white transition-colors duration-300">
                      <Eye className="mr-2 w-4 h-4" />
                      View Details
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
