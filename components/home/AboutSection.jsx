"use client";
import { ArrowRight } from "lucide-react";
import Button from "../ui/button";
import { Section } from "../ui/Index";
import { motion } from "framer-motion";
import Link from "next/link";

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

const AboutSection = () => {
  return (
    <Section>
      <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
        <motion.div variants={fadeIn}>
          <motion.h3 className="text-coffee-dark font-semibold text-sm uppercase tracking-[0.5em] mb-6 border border-muted-foreground rounded-sm px-4 py-2 inline-block">HARIKA NUSANTARA</motion.h3>
          <motion.h2 className="text-3xl lg:text-4xl font-bold text-coffee-dark mb-4">
            More than just exports.
            <br />
            We bring stories to the world.
          </motion.h2>
          <motion.p className="text-lg text-muted-foreground mb-6">
            Harika Nusantara was founded with a simple belief: every bean has a story, and every farmer deserves to be heard. We work hand-in-hand with local farming communities across Indonesia to produce and export high-quality coffee and
            cocoa while promoting traceability, sustainability, and ethical trade.
          </motion.p>
          <motion.p className="text-lg text-muted-foreground mb-6">
            Our mission is to connect the world to the rich heritage behind Indonesian flavors, not only through taste, but through truth. cocoa while promoting traceability, sustainability, and ethical trade.
          </motion.p>
          <Link href="/about">
            <Button variants="primary">
              Learn More About Us <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
        <motion.div
          className="h-96 lg:h-[500px] bg-cover bg-center rounded-xl shadow-lg"
          style={{
            backgroundImage: "url(/images/petani.jpg)",
            backgroundSize: "cover",
          }}
          variants={fadeIn}
        />
      </motion.div>
    </Section>
  );
};

export default AboutSection;
