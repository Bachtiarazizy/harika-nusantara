"use client";

import { Section } from "./ui/Index";
import { Star, Leaf, Handshake, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChooseUsSection() {
  const cards = [
    {
      icon: <Star className="w-8 h-8 text-coffee-dark" />,
      title: "Premium Quality",
      description: "Hand-selected beans from the finest Indonesian plantations",
    },
    {
      icon: <Leaf className="w-8 h-8 text-coffee-dark" />,
      title: "Sustainable Sourcing",
      description: "Environmentally responsible farming practices",
    },
    {
      icon: <Handshake className="w-8 h-8 text-coffee-dark" />,
      title: "Farmer Partnership",
      description: "Direct relationships ensuring fair compensation",
    },
    {
      icon: <BadgeCheck className="w-8 h-8 text-coffee-dark" />,
      title: "Certified Excellence",
      description: "International quality certifications and standards",
    },
  ];

  return (
    <Section className="bg-coffee-light/5 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title Section */}
        <motion.div
          className="flex flex-col items-center text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.h2
            className="text-coffee-dark font-semibold text-sm uppercase tracking-[0.5em] mb-6 border border-muted-foreground rounded-sm px-4 py-2 inline-block"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
          >
            WHY CHOOSE US
          </motion.h2>

          <motion.h1 className="text-3xl lg:text-4xl font-bold text-coffee-dark mb-4" variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.6, delay: 0.1 }}>
            Rooted in Integrity, Grown with Purpose
          </motion.h1>

          <motion.p className="text-xl font-semibold text-muted-foreground max-w-3xl" variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.6, delay: 0.2 }}>
            We do more than export coffee and cocoa — we build partnerships grounded in transparency, quality, and shared value. Here’s what sets Harika Nusantara apart:
          </motion.p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
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
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
              variants={{
                hidden: { opacity: 0, scale: 0.95, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-coffee-light/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold text-coffee-dark mb-2">{card.title}</h3>
              <p className="text-muted-foreground">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
