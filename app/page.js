"use client";

import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CtaSection";
import HeroSection from "@/components/HeroSection";
import ImageSection from "@/components/ImageSection";
import ProductShowcaseSection from "@/components/ProductCard";
import { Button, Card, Section, SectionHeader } from "@/components/ui/Index";
import ValueSection from "@/components/ValueSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ImageSection />
      <ValueSection />
      <ProductShowcaseSection />
      <WhyChooseUsSection />
      <BlogSection />
      <CTASection />
    </div>
  );
}
