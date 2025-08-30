"use client";

import { Section, Button } from "../ui/Index";
import Link from "next/link";
import { motion } from "framer-motion";

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

export default function CTASection() {
  return (
    <Section>
      <motion.div className="text-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={staggerContainer}>
        <motion.h2 className="text-3xl lg:text-4xl font-bold text-coffee-dark mb-4" variants={fadeIn}>
          Ready to Partner with Us?
        </motion.h2>
        <motion.p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto" variants={fadeIn}>
          Contact us to discuss your requirements and discover how our premium Indonesian coffee and cocoa can enhance your business.
        </motion.p>
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeIn}>
          <Link href="/products">
            <Button className="bg-coffee-dark hover:bg-coffee-dark/90 text-white px-8 py-3 text-lg">Get Started Today</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="border-coffee-dark text-coffee-dark hover:bg-coffee-dark hover:text-white px-8 py-3 text-lg">
              Request Samples
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </Section>
  );
}
