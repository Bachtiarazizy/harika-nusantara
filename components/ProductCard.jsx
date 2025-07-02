"use client";

import Link from "next/link";
import { Button, Section, Card } from "./ui/Index";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductShowcaseSection() {
  const productCards = [
    {
      title: "Premium Coffee Beans",
      description: "Arabica and Robusta coffee beans from Java, Sumatra, and Sulawesi. Available as green beans or expertly roasted to your specifications.",
      features: ["Single origin and blended varieties", "Grade 1 and specialty grade beans", "Custom roasting profiles available"],
      image: "/images/coffee-beans-premium.webp",
      link: "/products/#coffee",
    },
    {
      title: "Premium Cocoa Products",
      description: "High-quality cocoa beans and powder from Indonesian plantations, perfect for chocolate manufacturing and confectionery applications.",
      features: ["Fermented and dried cocoa beans", "Natural and alkalized cocoa powder", "Various fat content options"],
      image: "/images/cocoa-products.webp",
      link: "/products/#cocoa",
    },
    {
      title: "Premium Coffee Beans",
      description: "Arabica and Robusta coffee beans from Java, Sumatra, and Sulawesi. Available as green beans or expertly roasted to your specifications.",
      features: ["Single origin and blended varieties", "Grade 1 and specialty grade beans", "Custom roasting profiles available"],
      image: "/images/coffee-beans-premium.webp",
      link: "/products/#coffee",
    },
    {
      title: "Premium Cocoa Products",
      description: "High-quality cocoa beans and powder from Indonesian plantations, perfect for chocolate manufacturing and confectionery applications.",
      features: ["Fermented and dried cocoa beans", "Natural and alkalized cocoa powder", "Various fat content options"],
      image: "/images/cocoa-products.webp",
      link: "/products/#cocoa",
    },
  ];

  return (
    <Section className="bg-coffee-light/10 py-20">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left column - title and description */}
        <motion.div className="lg:w-1/2 lg:sticky lg:top-8 lg:self-start" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true, amount: 0.3 }}>
          <h2 className="text-coffee-dark font-semibold text-sm uppercase tracking-[0.5em] mb-6 border border-muted-foreground rounded-sm px-4 py-2 inline-block">HARIKA NUSANTARA</h2>
          <h1 className="text-3xl lg:text-4xl font-bold text-coffee-dark mb-4">
            Indonesian Excellence, <br />
            From Bean to Bite
          </h1>
          <p className="text-xl font-semibold text-muted-foreground">Discover our curated selection of premium coffee and cocoa products crafted with care, rooted in heritage, and delivered with full traceability and quality:</p>
          <Link href="/products" className="inline-block">
            <Button variant="primary" size="md" className="border-white mt-8 text-white hover:bg-white hover:text-[#233F2E] transition-all duration-300 font-semibold">
              View all Products
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>

        {/* Right column - animated cards */}
        <motion.div
          className="lg:w-1/2 grid grid-cols-1 gap-8"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          viewport={{ once: true }}
        >
          {productCards.map((card, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <Card className="overflow-hidden">
                <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${card.image})` }} />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-coffee-dark mb-3">{card.title}</h3>
                  <p className="text-muted-foreground mb-4">{card.description}</p>
                  <ul className="space-y-2 mb-6">
                    {card.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-forest-green mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={card.link} className="block">
                    <Button variant="outline" className="w-full">
                      View {card.title.includes("Cocoa") ? "Cocoa" : "Coffee"} Products
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
