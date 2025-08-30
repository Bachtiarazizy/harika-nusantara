"use client";

import { useMemo, memo } from "react";
import StructuredData from "@/components/seo/StructuredData";
import { Button, Card, Section, SectionHeader } from "@/components/ui/Index";
import { Search, CheckCircle, Package, Ship, FileText, Clock, Shield, Globe, MapPin, Leaf, Star, Handshake, BadgeCheck, Coffee, Users, Award, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Animation variants
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

// Memoized components for better performance
const FeatureCard = memo(({ feature, index }) => (
  <motion.div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300" variants={fadeIn} whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
    <div className="bg-coffee-light/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">{feature.icon}</div>
    <h3 className="text-xl font-semibold text-coffee-dark mb-2">{feature.title}</h3>
    <p className="text-muted-foreground">{feature.description}</p>
  </motion.div>
));

FeatureCard.displayName = "FeatureCard";

const ProcessStep = memo(({ step, index }) => {
  const IconComponent = step.icon;
  return (
    <Card key={index} className="p-6 relative hover:shadow-lg transition-shadow duration-300">
      <div className="absolute -top-4 -left-4 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-white font-bold text-sm">{step.step}</div>
      <div className="w-16 h-16 bg-coffee-dark/10 rounded-full flex items-center justify-center mb-4">
        <IconComponent className="w-8 h-8 text-coffee-dark" />
      </div>
      <h3 className="text-xl font-semibold text-coffee-dark mb-3">{step.title}</h3>
      <p className="text-muted-foreground mb-4">{step.description}</p>
      <ul className="space-y-2">
        {step.details.map((detail, detailIndex) => (
          <li key={detailIndex} className="flex items-start text-sm">
            <CheckCircle className="w-4 h-4 text-forest-green mr-2 mt-0.5 flex-shrink-0" />
            {detail}
          </li>
        ))}
      </ul>
    </Card>
  );
});

ProcessStep.displayName = "ProcessStep";

const RegionCard = memo(({ region }) => (
  <motion.div variants={fadeIn} whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
    <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
      <div className={`w-12 h-12 ${region.bgColor} rounded-full flex items-center justify-center mb-4`}>
        <MapPin className={`w-6 h-6 ${region.iconColor}`} />
      </div>
      <h3 className="text-xl font-semibold text-coffee-dark mb-3">{region.name}</h3>
      <p className="text-muted-foreground mb-4">{region.description}</p>
      <ul className="text-sm text-muted-foreground space-y-1">
        {region.features.map((feature, index) => (
          <li key={index}>• {feature}</li>
        ))}
      </ul>
    </Card>
  </motion.div>
));

RegionCard.displayName = "RegionCard";

export default function WhyUsComponent() {
  // Memoized data
  const features = useMemo(
    () => [
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
        title: "Direct Trade",
        description: "Fair partnerships with local farmers",
      },
      {
        icon: <BadgeCheck className="w-8 h-8 text-coffee-dark" />,
        title: "Certified Excellence",
        description: "International quality certifications and standards",
      },
    ],
    []
  );

  const processSteps = useMemo(
    () => [
      {
        step: 1,
        icon: Search,
        title: "Sourcing & Selection",
        description: "We carefully select premium coffee and cocoa from trusted farmers across Java, Sumatra, and Sulawesi.",
        details: ["Direct relationships with local farmers", "Quality assessment at origin", "Sustainable farming practices verification"],
      },
      {
        step: 2,
        icon: CheckCircle,
        title: "Quality Control",
        description: "Rigorous quality testing and grading to ensure products meet international standards.",
        details: ["Physical and sensory evaluation", "Moisture content testing", "Laboratory testing for contaminants"],
      },
      {
        step: 3,
        icon: Package,
        title: "Processing & Packaging",
        description: "Professional processing and packaging according to customer specifications and export requirements.",
        details: ["Custom processing options", "Food-grade packaging materials", "Climate-controlled storage"],
      },
    ],
    []
  );

  const regions = useMemo(
    () => [
      {
        name: "Java",
        description: "Known for its full-bodied Arabica coffee with low acidity and rich, earthy flavors from volcanic soil.",
        features: ["Premium Arabica varieties", "Volcanic soil cultivation", "Traditional processing methods"],
        bgColor: "bg-coffee-dark/10",
        iconColor: "text-coffee-dark",
      },
      {
        name: "Sumatra",
        description: "Famous for its unique wet-hulling process creating coffee with full body and distinctive herbal notes.",
        features: ["Unique wet-hulling process", "Full-bodied Robusta & Arabica", "Sustainable farming practices"],
        bgColor: "bg-forest-green/10",
        iconColor: "text-forest-green",
      },
      {
        name: "Sulawesi",
        description: "Produces exceptional coffee with bright acidity and high-quality cocoa beans for premium chocolate.",
        features: ["Complex flavor profiles", "Premium cocoa beans", "High altitude cultivation"],
        bgColor: "bg-cocoa-dark/10",
        iconColor: "text-cocoa-dark",
      },
    ],
    []
  );

  const stats = useMemo(
    () => [
      { icon: <Coffee className="w-8 h-8" />, number: "500+", label: "Tons Exported Annually" },
      { icon: <Users className="w-8 h-8" />, number: "200+", label: "Partner Farmers" },
      { icon: <Globe className="w-8 h-8" />, number: "15+", label: "Countries Served" },
      { icon: <Award className="w-8 h-8" />, number: "5+", label: "Years Experience" },
    ],
    []
  );

  return (
    <>
      <div className="min-h-screen">
        {/* Features Section */}
        <Section className="bg-coffee-light/5 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div className="flex flex-col items-center text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={staggerContainer}>
              <motion.h3 className="text-coffee-dark font-semibold text-sm uppercase tracking-[0.5em] mb-6 border border-muted-foreground rounded-sm px-4 py-2 inline-block" variants={fadeIn}>
                What We Stand For
              </motion.h3>
              <motion.h2 className="text-3xl lg:text-4xl font-bold text-coffee-dark mb-4" variants={fadeIn}>
                Why Choose Harika Nusantara
              </motion.h2>
            </motion.div>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
              {features.map((feature, index) => (
                <FeatureCard key={index} feature={feature} index={index} />
              ))}
            </motion.div>
          </div>
        </Section>
      </div>
    </>
  );
}
