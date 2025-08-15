// Alternative server-side version (recommended for better SEO)
// components/home/ProductShowcaseSection.js

import Link from "next/link";
import Image from "next/image";
import { Button, Section, Card } from "../ui/Index";
import { ArrowRight, CheckCircle, Eye } from "lucide-react";
import { getFeaturedProducts } from "@/lib/sanityProductQueries";
import ProductShowcaseClient from "./ProductShowcaseClient";

export default async function ProductShowcaseSection() {
  let products = [];

  try {
    products = await getFeaturedProducts(4);
  } catch (error) {
    console.error("Error fetching featured products:", error);
    // Fallback to static data if Sanity fails
    products = [
      {
        _id: "fallback-1",
        title: "Premium Coffee Beans",
        shortDescription: "Arabica and Robusta coffee beans from Java, Sumatra, and Sulawesi. Available as green beans or expertly roasted to your specifications.",
        slug: { current: "premium-coffee-beans" },
        specifications: [
          { label: "Grade", value: "1 & Specialty" },
          { label: "Origin", value: "Java, Sumatra" },
          { label: "Processing", value: "Wet & Dry" },
        ],
        mainImage: {
          asset: { url: "/images/coffee-beans-premium.webp" },
          alt: "Premium Coffee Beans",
        },
      },
      {
        _id: "fallback-2",
        title: "Premium Cocoa Products",
        shortDescription: "High-quality cocoa beans and powder from Indonesian plantations, perfect for chocolate manufacturing and confectionery applications.",
        slug: { current: "premium-cocoa-products" },
        specifications: [
          { label: "Moisture", value: "6-7%" },
          { label: "Fat Content", value: "50-57%" },
          { label: "Processing", value: "Fermented & Dried" },
        ],
        mainImage: {
          asset: { url: "/images/cocoa-products.webp" },
          alt: "Premium Cocoa Products",
        },
      },
    ];
  }

  // Create display products - repeat if less than 4
  const displayProducts = products.length >= 4 ? products.slice(0, 4) : products.length > 0 ? [...products, ...products].slice(0, 4) : [];

  return <ProductShowcaseClient initialProducts={displayProducts} />;
}
