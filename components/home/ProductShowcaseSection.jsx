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
    // Changed from 4 to 3 products
    products = await getFeaturedProducts(3);
  } catch (error) {
    console.error("Error fetching featured products:", error);
    // Updated fallback data with only 3 products
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
      {
        _id: "fallback-3",
        title: "Specialty Spices",
        shortDescription: "Premium Indonesian spices including vanilla, cardamom, and cinnamon. Hand-selected and processed to maintain maximum flavor and aroma.",
        slug: { current: "specialty-spices" },
        specifications: [
          { label: "Quality", value: "Grade A" },
          { label: "Origin", value: "Java, Bali" },
          { label: "Packaging", value: "Food Grade" },
        ],
        mainImage: {
          asset: { url: "/images/spices-premium.webp" },
          alt: "Specialty Spices",
        },
      },
    ];
  }

  // Display exactly 3 products - no repetition needed
  const displayProducts = products.slice(0, 3);

  return <ProductShowcaseClient initialProducts={displayProducts} />;
}
