"use client";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "../ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Fallback image (poster) */}

        {/* Video */}
        <video autoPlay muted loop playsInline preload="auto" className="w-full h-full object-cover absolute inset-0" style={{ filter: "brightness(0.6)" }}>
          <source src="/video.webm" type="video/webm" />
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full">
        <div className="flex flex-col lg:flex-row items-start lg:items-end lg:justify-between h-full pt-36 md:pt-20 min-h-screen justify-center pb-16 lg:pb-0">
          {/* Title */}
          <motion.div className="lg:w-1/2 text-left w-full " initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: "easeOut" }} viewport={{ once: true, amount: 0.3 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 md:mb-16 leading-tight">
              Every <br />
              Bean Has a Story
              <span className="block text-[#e49e35]">We Help You Taste It.</span>
            </h1>
          </motion.div>

          {/* Description and Buttons */}
          <motion.div
            className="lg:w-1/2 max-w-lg md:mb-20 text-left w-full"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-lg md:text-xl text-gray-200 mb-8">From the heart of Indonesia's volcanic highlands, we bring more than just rich flavors, we bring stories of people, places, and passion.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <Link href="/products" className="inline-block">
                <Button variant="secondary">Explore Our Products</Button>
              </Link>
              <Link href="/about" className="hidden md:inline-block">
                <Button variant="outline-success">Learn Our Process</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
