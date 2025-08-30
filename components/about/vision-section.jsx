"use client";

import { useMemo, memo } from "react";
import { Button, Card, Section } from "@/components/ui/Index";
import { motion } from "framer-motion";
import { Users, Globe, Award, Shield, Leaf, Handshake, Target, Eye, Heart, CheckCircle, Star, TrendingUp, Coffee, Building, MapPin } from "lucide-react";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function VisionSection() {
  return (
    <div className="min-h-screen  bg-white">
      {/* Mission & Vision */}
      <Section className="py-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div variants={fadeIn}>
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-coffee-dark mr-3" />
                <h3 className="text-3xl font-bold text-coffee-dark">Our Mission</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To be the bridge between Indonesia's finest coffee and cocoa producers and discerning global buyers, ensuring fair trade, sustainable practices, and exceptional quality in every shipment.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-forest-green mr-3 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Empower local farming communities through fair partnerships</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-forest-green mr-3 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Maintain the highest quality standards in every process</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-forest-green mr-3 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Promote sustainable agricultural practices</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeIn}>
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-gold mr-3" />
                <h3 className="text-3xl font-bold text-coffee-dark">Our Vision</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To become the most trusted and recognized Indonesian commodity exporter globally, known for our integrity, quality, and positive impact on farming communities and international markets.
              </p>
              <div className="bg-gradient-to-r from-coffee-light/10 to-gold/10 p-6 rounded-lg">
                <p className="text-lg font-semibold text-coffee-dark mb-2">"Building a future where Indonesian agricultural excellence reaches every corner of the world."</p>
                <p className="text-muted-foreground italic">- Harika Nusantara Leadership Team</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}
