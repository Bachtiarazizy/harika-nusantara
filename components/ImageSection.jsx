"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ImageSection() {
  return (
    <section className="relative w-full bg-white">
      <div className="flex justify-center relative">
        {/* Gambar dengan animasi width */}
        <motion.div initial={{ width: "95%" }} whileInView={{ width: "100%" }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true, amount: 0.4 }} className="relative rounded-lg overflow-hidden h-[500px]">
          {/* Image */}
          <Image src="/images/cta-coffee-farmer.jpg" alt="Indonesian Coffee Farmer" fill className="object-cover" priority />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 z-10" />

          {/* Text Centered */}
          <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
            <div className="max-w-3xl text-white text-center">
              <h3 className="text-lg md:text-2xl font-semibold leading-relaxed">
                Our Vision is to transform Indonesian coffee and cocoa into globally respected commodities — not just as raw exports, but as story-rich, traceable, and ethical products that reflect the pride and potential of local
                communities.
              </h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
