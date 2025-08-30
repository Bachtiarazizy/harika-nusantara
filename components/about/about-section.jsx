"use client";
import { ArrowRight, MapPin } from "lucide-react";
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

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const AboutSection = () => {
  return (
    <Section className="py-20">
      <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
        <motion.div variants={slideInLeft}>
          <div className="inline-flex items-center bg-coffee-light/10 rounded-full px-4 py-2 mb-6">
            <MapPin className="w-4 h-4 text-coffee-dark mr-2" />
            <span className="text-sm font-semibold text-coffee-dark tracking-wide">INDONESIA</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-coffee-dark mb-6 leading-tight">Bridging Indonesian Excellence with Global Markets</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Since our establishment, Harika Nusantara has emerged as a trusted Indonesian commodity exporter, specializing in premium coffee and cocoa. We leverage Indonesia's rich agricultural heritage and our deep understanding of
            international markets to deliver products that exceed expectations.
          </p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Our success is built on three fundamental pillars: unwavering commitment to quality, sustainable and ethical sourcing practices, and transparent partnerships that benefit all stakeholders from farmers to end consumers.
          </p>
          <Button size="lg" variants="primary">
            Download Company Profile
          </Button>
        </motion.div>

        <motion.div variants={slideInRight} className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="h-64 bg-cover bg-center rounded-xl shadow-lg" style={{ backgroundImage: "url(/images/coffee.jpg)" }} />
            <div className="h-64 bg-cover bg-center rounded-xl shadow-lg mt-8" style={{ backgroundImage: "url(/images/cocoa.jpg)" }} />
            <div className="h-64 bg-cover bg-center rounded-xl shadow-lg -mt-8" style={{ backgroundImage: "url(/images/petani.jpg)" }} />
            <div className="h-64 bg-cover bg-center rounded-xl shadow-lg" style={{ backgroundImage: "url(/images/shipping.jpg)" }} />
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default AboutSection;
