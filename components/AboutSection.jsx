"use client";

import { Section } from "./ui/Index";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <Section className="bg-background text-center py-20">
      <div>
        {/* Subtitle */}
        <motion.h2
          className="text-coffee-dark font-semibold text-sm uppercase tracking-[0.5em] mb-6 border border-muted-foreground rounded-sm px-4 py-2 inline-block"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          HARIKA NUSANTARA
        </motion.h2>

        {/* Main Title */}
        <motion.h1 className="text-3xl lg:text-4xl font-bold text-coffee-dark mb-4" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true, amount: 0.4 }}>
          More than just exports.
          <br /> We bring stories to the world.
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          className="text-xl font-semibold text-muted-foreground max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          Harika Nusantara was founded with a simple belief: every bean has a story, and every farmer deserves to be heard. We work hand-in-hand with local farming communities across Indonesia to produce and export high-quality coffee and
          cocoa while promoting traceability, sustainability, and ethical trade. Our mission is to connect the world to the rich heritage behind Indonesian flavors, not only through taste, but through truth.
        </motion.p>
      </div>
    </Section>
  );
};

export default AboutSection;
