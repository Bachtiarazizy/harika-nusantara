"use client";

import { ArrowRight, Play } from "lucide-react";
import { Button } from "./ui/Index";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover" style={{ filter: "brightness(0.6)" }}>
          <source src="/video.mp4" type="video/mp4" />
          <div />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:items-end lg:justify-between h-full pt-20 min-h-screen">
          {/* Title - Left side */}
          <motion.div className="lg:w-1/2 text-center lg:text-left" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: "easeOut" }} viewport={{ once: true, amount: 0.3 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 md:mb-24 leading-tight">
              Every <br />
              Bean Has a Story
              <span className="block text-[#AEE57E]">We Help You Taste It.</span>
            </h1>
          </motion.div>

          {/* Description and Buttons - Right side */}
          <motion.div
            className="lg:w-1/2 max-w-lg text-center md:mb-20 lg:text-left"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-lg md:text-xl text-gray-200 mb-8">From the heart of Indonesia's volcanic highlands, we bring more than just rich flavors, we bring stories of people, places, and passion.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/products" className="inline-block">
                <Button size="md" className="bg-[#AEE57E] hover:bg-[#233F2E] text-[#233F2E] hover:text-white transition-all duration-300 font-semibold">
                  View Our Products
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/about" className="inline-block">
                <Button variant="outline" size="md" className="border-white text-white hover:bg-white hover:text-[#233F2E] transition-all duration-300 font-semibold">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Our Story
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
