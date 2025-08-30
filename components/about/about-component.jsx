"use client";

import { useMemo, memo } from "react";
import { Card, Section } from "@/components/ui/Index";
import { motion } from "framer-motion";
import { MapPin, Leaf, Star, Handshake, BadgeCheck } from "lucide-react";
import AboutSection from "./about-section";
import StructuredData from "../seo/StructuredData";
import CTASection from "./cta-section";
import VisionSection from "./vision-section";

// Simple and smooth animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function AboutComponent() {
  return (
    <>
      <StructuredData type="about" />

      <div className="min-h-screen">
        <motion.header className="bg-[#392E20] py-16 px-4" initial="hidden" animate="visible">
          <div className="max-w-4xl mx-auto">
            <motion.div className="text-center">
              <h1 className="text-4xl md:text-5xl font-calistoga text-white mt-12 mb-4">About Us</h1>
              <p className="text-lg text-gray-100 max-w-2xl mx-auto">Connecting conscious consumers with traceable, high-quality Indonesian commodities.</p>
            </motion.div>
          </div>
        </motion.header>

        <AboutSection />
        <VisionSection />
        <CTASection />
      </div>
    </>
  );
}
