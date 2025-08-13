"use client";

import { Section, Button } from "../ui/Index";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <Section className="relative py-24 md:py-32 overflow-hidden rounded-t-xl">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url(/images/farmer.jpg)",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark via-coffee-dark/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <motion.div
          className="max-w-2xl mx-auto text-center px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            Join Us in Celebrating
            <br />
            Indonesian Flavors
          </motion.h2>

          <motion.p
            className="text-xl text-white/90 mb-8"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Every purchase supports sustainable farming practices and brings authentic Indonesian coffee and cocoa to your table.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/products" className="inline-block">
              <Button size="md" className="bg-[#e49e35] hover:bg-[#233F2E] text-[#233F2E] hover:text-white transition-all duration-300 font-semibold">
                Partner With Us
              </Button>
            </Link>
            <Link href="/about" className="hidden md:inline-block ">
              <Button variant="outline" size="md" className="border-white text-white hover:bg-white hover:text-[#233F2E] transition-all duration-300 font-semibold">
                Learn Our Story
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
