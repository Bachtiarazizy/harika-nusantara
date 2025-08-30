"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "../ui/Index";

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

export default function VisionSection() {
  return (
    <Section className="bg-gradient-to-r from-coffee-dark to-cocoa-dark text-white mt-16">
      <motion.div className="text-center max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={staggerContainer}>
        <motion.h2 className="text-gold font-semibold text-sm uppercase tracking-[0.5em] mb-6 border border-gold/30 rounded-sm px-4 py-2 inline-block" variants={fadeIn}>
          Our Vision
        </motion.h2>
        <motion.h1 className="text-3xl lg:text-4xl font-bold mb-6" variants={fadeIn}>
          A Vision for Global Impact
        </motion.h1>
        <motion.p className="text-xl text-gray-100 mb-8" variants={fadeIn}>
          We envision an Indonesia where coffee and cocoa farmers move forward with dignity, opportunity, and prosperity. Where buyers around the world can feel proud of their purchases because they know exactly where they come from.
        </motion.p>
        <motion.p className="text-2xl font-semibold text-gold mb-8" variants={fadeIn}>
          Let's brew a better future together.
        </motion.p>
      </motion.div>
    </Section>
  );
}
