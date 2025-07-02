"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/Index";
import { motion } from "framer-motion";

export default function ValueSection() {
  return (
    <section className="w-full flex flex-col lg:flex-row overflow-hidden">
      {/* gambar */}
      <motion.div className="flex justify-center lg:justify-end lg:w-1/2" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true, amount: 0.3 }}>
        <Image src="/images/coffee-farmers-community.jpg" alt="Indonesian Coffee Farmers Working Together" width={0} height={0} className="w-full h-full object-cover" />
      </motion.div>

      {/* text content */}
      <motion.div className="lg:w-1/2 p-8 flex items-center bg-[#483B36]" initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true, amount: 0.3 }}>
        <div className="max-w-2xl">
          <motion.h2 className="text-3xl lg:text-4xl font-bold text-white mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
            Through fair trade principles and deep respect for our farmers and heritage, we strive to:
          </motion.h2>

          {/* checklist animated one-by-one */}
          <motion.div
            className="space-y-4 mb-8"
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            viewport={{ once: true }}
          >
            {[
              "Empower smallholder farmers by connecting them directly to global markets;",
              "Promote sustainable and traceable farming that preserves land, culture, and livelihoods;",
              "Redefine Indonesian exports through story-driven, high-quality coffee and cocoa.",
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-4"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-coffee-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white font-medium">{item}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div className="flex flex-row gap-4 justify-center md:justify-start" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1 }} viewport={{ once: true }}>
            <Link href="/products" className="inline-block">
              <Button size="md" className="bg-[#AEE57E] hover:bg-[#233F2E] text-[#233F2E] hover:text-white transition-all duration-300 font-semibold">
                Partner With Us
              </Button>
            </Link>
            <Link href="/about" className="inline-block">
              <Button variant="outline" size="md" className="border-white text-white hover:bg-white hover:text-[#233F2E] transition-all duration-300 font-semibold">
                Learn Our Story
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
