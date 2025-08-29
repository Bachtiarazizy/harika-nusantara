"use client";

import { useMemo, memo } from "react";
import { Button, Card, Section, SectionHeader } from "@/components/ui/Index";
import { motion } from "framer-motion";
import { MapPin, Leaf, Star, Handshake, BadgeCheck } from "lucide-react";
import CTASection from "@/components/home/CtaSection";

// Simple and smooth animation variants
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

// Memoized card component for better performance
const FeatureCard = memo(({ card, index }) => (
  <motion.div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300" variants={fadeIn} whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
    <div className="bg-coffee-light/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">{card.icon}</div>
    <h3 className="text-xl font-semibold text-coffee-dark mb-2">{card.title}</h3>
    <p className="text-muted-foreground">{card.description}</p>
  </motion.div>
));

FeatureCard.displayName = "FeatureCard";

// Memoized region card component
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

export default function AboutComponent() {
  // Memoized data for better performance
  const cards = useMemo(
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
        title: "Farmer Partnership",
        description: "Direct relationships ensuring fair compensation",
      },
      {
        icon: <BadgeCheck className="w-8 h-8 text-coffee-dark" />,
        title: "Certified Excellence",
        description: "International quality certifications and standards",
      },
    ],
    []
  );

  const regions = useMemo(
    () => [
      {
        name: "Java",
        description: "Known for its full-bodied Arabica coffee with low acidity and rich, earthy flavors. Java's volcanic soil produces some of the world's most distinctive coffee beans.",
        features: ["Premium Arabica varieties", "Volcanic soil cultivation", "Traditional processing methods"],
        bgColor: "bg-coffee-dark/10",
        iconColor: "text-coffee-dark",
      },
      {
        name: "Sumatra",
        description: "Famous for its unique wet-hulling process that creates coffee with full body, low acidity, and distinctive herbal and earthy notes.",
        features: ["Unique wet-hulling process", "Full-bodied Robusta & Arabica", "Sustainable farming practices"],
        bgColor: "bg-forest-green/10",
        iconColor: "text-forest-green",
      },
      {
        name: "Sulawesi",
        description: "Produces exceptional coffee with bright acidity and complex flavor profiles, as well as high-quality cocoa beans perfect for premium chocolate production.",
        features: ["Complex flavor profiles", "Premium cocoa beans", "High altitude cultivation"],
        bgColor: "bg-cocoa-dark/10",
        iconColor: "text-cocoa-dark",
      },
    ],
    []
  );

  // Organization structured data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Harika Nusantara",
    url: "https://harika-nusantara.com",
    logo: "https://harika-nusantara.com/images/logo.png",
    description: "Premium Indonesian coffee and cocoa supplier committed to sustainable farming and ethical sourcing",
    foundingDate: "2020",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Indonesia",
    },
    sameAs: ["https://linkedin.com/company/harika-nusantara", "https://instagram.com/harika.nusantara"],
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <motion.section className="relative py-24 bg-gradient-to-br from-coffee-dark to-cocoa-dark text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <div className="container mx-auto px-4 text-center">
            <motion.h1 className="text-4xl lg:text-6xl font-bold mb-6" variants={fadeIn} initial="hidden" animate="visible">
              About Us
            </motion.h1>
            <motion.p className="text-xl text-coffee-light max-w-3xl mx-auto" variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.3 }}>
              Connecting conscious consumers with traceable, high-quality Indonesian commodities.
            </motion.p>
          </div>
        </motion.section>

        {/* Company Story */}
        <Section>
          <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
            <motion.div variants={fadeIn}>
              <motion.h2 className="text-coffee-dark font-semibold text-sm uppercase tracking-[0.5em] mb-6 border border-muted-foreground rounded-sm px-4 py-2 inline-block">HARIKA NUSANTARA</motion.h2>
              <motion.h1 className="text-3xl lg:text-4xl font-bold text-coffee-dark mb-4">
                More Than Exports, <br />A Movement for Ethical <br className="hidden md:block" /> Trade and Local Empowerment
              </motion.h1>
              <motion.p className="text-lg text-muted-foreground mb-6">
                At Harika Nusantara, we believe every bean carries a deeper story of people, places, and passion. Founded with a mission to transform how Indonesian coffee and cocoa are valued in the world, we are committed to creating an
                export ecosystem that is transparent, fair, and rooted in local identity. We collaborate directly with farming communities across Indonesia, from the lush highlands of Sumatra to the volcanic soils of Sulawesi ensuring each
                product we ship reflects the richness of the land and the dedication of its people.
              </motion.p>
            </motion.div>
            <motion.div
              className="h-96 lg:h-100 bg-cover bg-center hidden md:block rounded-xl shadow-lg"
              style={{
                backgroundImage: "url(/images/petani.jpg)",
                backgroundSize: "cover",
              }}
              variants={fadeIn}
            />
          </motion.div>
        </Section>

        {/* Philosophy Section */}
        <Section>
          <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
            <motion.div
              className="h-96 lg:h-100 bg-cover bg-white rounded-xl shadow-lg"
              style={{
                backgroundImage: "url(/images/farmer.jpg)",
                backgroundSize: "cover",
              }}
              variants={fadeIn}
            />
            <motion.div variants={fadeIn}>
              <motion.h2 className="text-coffee-dark font-semibold text-sm uppercase tracking-[0.5em] mb-6 border border-muted-foreground rounded-sm px-4 py-2 inline-block">Our Philosophy</motion.h2>
              <motion.h1 className="text-3xl lg:text-4xl font-bold text-coffee-dark mb-4">We&apos;re not just in the business of commodities, we&apos;re in the business of connection.</motion.h1>
              <motion.div>
                <p className="text-lg text-muted-foreground mb-4">That means:</p>
                <ul className="space-y-3">
                  <li className="text-lg text-muted-foreground flex items-start">
                    <span className="text-coffee-dark mr-2">•</span>
                    Giving farmers visibility and voice in the global market
                  </li>
                  <li className="text-lg text-muted-foreground flex items-start">
                    <span className="text-coffee-dark mr-2">•</span>
                    Prioritizing ethical practices that protect both people and the planet
                  </li>
                  <li className="text-lg text-muted-foreground flex items-start">
                    <span className="text-coffee-dark mr-2">•</span>
                    Providing buyers with full traceability and honest quality from farm to port.
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </Section>

        {/* What We Stand For */}
        <Section className="bg-coffee-light/5 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div className="flex flex-col items-center text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={staggerContainer}>
              <motion.h2 className="text-coffee-dark font-semibold text-sm uppercase tracking-[0.5em] mb-6 border border-muted-foreground rounded-sm px-4 py-2 inline-block" variants={fadeIn}>
                Harika Nusantara
              </motion.h2>
              <motion.h1 className="text-3xl lg:text-4xl font-bold text-coffee-dark mb-4" variants={fadeIn}>
                What We Stand For
              </motion.h1>
            </motion.div>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
              {cards.map((card, index) => (
                <FeatureCard key={index} card={card} index={index} />
              ))}
            </motion.div>
          </div>
        </Section>

        {/* Mission & Vision */}
        <Section className="bg-coffee-light/10">
          <motion.div className="max-w-6xl mx-auto px-2 py-16 text-start md:text-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={staggerContainer}>
            <motion.h2 className="text-coffee-dark font-semibold text-sm uppercase tracking-[0.5em] mb-6 border border-muted-foreground rounded-sm px-4 py-2 inline-block" variants={fadeIn}>
              HARIKA NUSANTARA
            </motion.h2>

            <motion.h1 className="text-3xl lg:text-4xl font-bold text-coffee-dark mb-8" variants={fadeIn}>
              A Vision for Global Impact
            </motion.h1>

            <motion.div className="space-y-6" variants={staggerContainer}>
              <motion.p className="text-xl font-semibold text-muted-foreground max-w-3xl mx-auto" variants={fadeIn}>
                We envision an Indonesia where coffee and cocoa farmers are not left behind, but move forward with dignity, opportunity, and prosperity. Where buyers around the world can feel proud of the products they purchase, because
                they know exactly where they come from, and how they were grown.
              </motion.p>
              <motion.p className="text-2xl font-semibold text-coffee-dark max-w-3xl mx-auto" variants={fadeIn}>
                Harika Nusantara is here to make that vision real.
              </motion.p>
              <motion.p className="text-2xl font-semibold text-coffee-dark max-w-3xl mx-auto" variants={fadeIn}>
                Let&apos;s brew a better future together.
              </motion.p>
            </motion.div>
          </motion.div>
        </Section>

        {/* Call to Action Section */}
        <section aria-labelledby="cta-heading">
          <CTASection />
        </section>
      </div>
    </>
  );
}
