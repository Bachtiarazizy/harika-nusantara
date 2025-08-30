"use client";

import StructuredData from "@/components/seo/StructuredData";
import { Button, Card, Section, SectionHeader } from "@/components/ui/Index";
import { Search, CheckCircle, Package, Ship, FileText, Clock, Shield, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function ExportProcessComponent() {
  const processSteps = [
    {
      step: 1,
      icon: Search,
      title: "Sourcing & Selection",
      description: "We carefully select premium coffee and cocoa from trusted farmers across Java, Sumatra, and Sulawesi.",
      details: ["Direct relationships with local farmers", "Quality assessment at origin", "Sustainable farming practices verification", "Fair trade price negotiations"],
    },
    {
      step: 2,
      icon: CheckCircle,
      title: "Quality Control",
      description: "Rigorous quality testing and grading to ensure products meet international standards.",
      details: ["Physical and sensory evaluation", "Moisture content testing", "Defect analysis and grading", "Laboratory testing for contaminants"],
    },
    {
      step: 3,
      icon: Package,
      title: "Processing & Packaging",
      description: "Professional processing and packaging according to customer specifications and export requirements.",
      details: ["Custom processing (roasting, grinding)", "Food-grade packaging materials", "Proper labeling and documentation", "Climate-controlled storage"],
    },
    {
      step: 4,
      icon: FileText,
      title: "Documentation",
      description: "Complete export documentation preparation to ensure smooth customs clearance.",
      details: ["Certificate of Origin", "Phytosanitary certificates", "Quality certificates", "Commercial invoices and packing lists"],
    },
    {
      step: 5,
      icon: Ship,
      title: "Shipping & Logistics",
      description: "Reliable shipping arrangements with trusted logistics partners for timely delivery.",
      details: ["Container booking and loading", "Insurance coverage", "Real-time shipment tracking", "Customs clearance assistance"],
    },
    {
      step: 6,
      icon: Globe,
      title: "Delivery & Support",
      description: "Ensuring successful delivery and providing ongoing customer support.",
      details: ["Delivery confirmation", "Quality feedback collection", "After-sales support", "Future order planning"],
    },
  ];

  return (
    <>
      <StructuredData type="export-process" />
      <div className="min-h-screen">
        <motion.header className="bg-[#392E20] py-16 px-4" initial="hidden" animate="visible">
          <div className="max-w-4xl mx-auto">
            <motion.div className="text-center">
              <h1 className="text-4xl md:text-5xl font-calistoga text-white mt-12 mb-4">Export Process</h1>
              <p className="text-lg text-gray-100 max-w-2xl mx-auto">From farm to your doorstep - our comprehensive export process ensures quality, reliability, and timely delivery of premium Indonesian coffee and cocoa.</p>
            </motion.div>
          </div>
        </motion.header>

        {/* Process Overview */}
        <Section>
          <SectionHeader subtitle="Our Process" title="6-Step Export Process for Quality Assurance" description="We follow a systematic approach to ensure every shipment meets the highest standards of quality and reliability." />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card key={index} className="p-6 relative">
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
            })}
          </div>
        </Section>

        {/* Timeline */}
        <Section className="bg-coffee-light/10">
          <SectionHeader subtitle="Timeline" title="Typical Export Timeline" description="Understanding our process timeline helps you plan your inventory and business operations effectively." />

          <div className="max-w-4xl mx-auto mt-12">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gold"></div>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-white font-bold mr-6 relative z-10">
                    <Clock className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-coffee-dark mb-2">Order Confirmation</h3>
                    <p className="text-muted-foreground mb-2">Day 1-2: Order processing and confirmation</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Contract finalization</li>
                      <li>• Payment terms confirmation</li>
                      <li>• Shipping arrangements</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-16 h-16 bg-coffee-medium rounded-full flex items-center justify-center text-white font-bold mr-6 relative z-10">
                    <Search className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-coffee-dark mb-2">Sourcing & Quality Control</h3>
                    <p className="text-muted-foreground mb-2">Day 3-10: Product sourcing and quality verification</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Farmer coordination</li>
                      <li>• Quality testing</li>
                      <li>• Inventory preparation</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-16 h-16 bg-forest-green rounded-full flex items-center justify-center text-white font-bold mr-6 relative z-10">
                    <Package className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-coffee-dark mb-2">Processing & Documentation</h3>
                    <p className="text-muted-foreground mb-2">Day 11-15: Processing and export documentation</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Custom processing (if required)</li>
                      <li>• Packaging and labeling</li>
                      <li>• Export document preparation</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-16 h-16 bg-cocoa-medium rounded-full flex items-center justify-center text-white font-bold mr-6 relative z-10">
                    <Ship className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-coffee-dark mb-2">Shipping & Delivery</h3>
                    <p className="text-muted-foreground mb-2">Day 16-45: Shipping and international delivery</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Container loading and departure</li>
                      <li>• Transit time (varies by destination)</li>
                      <li>• Customs clearance and delivery</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Documentation */}
        <Section>
          <SectionHeader subtitle="Export Documentation" title="Complete Documentation Package" description="We provide all necessary documentation to ensure smooth customs clearance and compliance with international trade regulations." />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <Card className="p-6">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-lg font-semibold text-coffee-dark mb-3">Certificate of Origin</h3>
              <p className="text-muted-foreground text-sm">Official document certifying the country of origin for your products, required for customs clearance and preferential trade agreements.</p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 bg-forest-green/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-forest-green" />
              </div>
              <h3 className="text-lg font-semibold text-coffee-dark mb-3">Phytosanitary Certificate</h3>
              <p className="text-muted-foreground text-sm">Health certificate ensuring products are free from pests and diseases, issued by Indonesian agricultural authorities.</p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 bg-coffee-medium/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-coffee-medium" />
              </div>
              <h3 className="text-lg font-semibold text-coffee-dark mb-3">Quality Certificates</h3>
              <p className="text-muted-foreground text-sm">Laboratory test results and quality certifications including organic, fair trade, and other relevant certifications.</p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 bg-cocoa-medium/10 rounded-full flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-cocoa-medium" />
              </div>
              <h3 className="text-lg font-semibold text-coffee-dark mb-3">Commercial Invoice</h3>
              <p className="text-muted-foreground text-sm">Detailed invoice including product descriptions, quantities, prices, and terms of sale for customs valuation.</p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-lg font-semibold text-coffee-dark mb-3">Packing List</h3>
              <p className="text-muted-foreground text-sm">Comprehensive packing list detailing container contents, weights, dimensions, and packaging specifications.</p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 bg-forest-green/10 rounded-full flex items-center justify-center mb-4">
                <Ship className="w-6 h-6 text-forest-green" />
              </div>
              <h3 className="text-lg font-semibold text-coffee-dark mb-3">Bill of Lading</h3>
              <p className="text-muted-foreground text-sm">Shipping document serving as receipt of goods and contract of carriage between shipper and carrier.</p>
            </Card>
          </div>
        </Section>

        {/* Shipping Options */}
        <Section className="bg-coffee-light/10">
          <SectionHeader subtitle="Shipping Options" title="Flexible Shipping Solutions" description="We offer various shipping options to meet your specific requirements and budget." />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-coffee-dark/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Ship className="w-8 h-8 text-coffee-dark" />
              </div>
              <h3 className="text-xl font-semibold text-coffee-dark mb-3">Sea Freight (FCL)</h3>
              <p className="text-muted-foreground mb-4">Full Container Load for large orders. Most cost-effective for bulk shipments.</p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• 20ft & 40ft containers available</li>
                <li>• Transit time: 15-30 days</li>
                <li>• Best for orders 10+ tons</li>
                <li>• Most economical option</li>
              </ul>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-coffee-dark mb-3">Sea Freight (LCL)</h3>
              <p className="text-muted-foreground mb-4">Less than Container Load for smaller orders. Shared container space.</p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Minimum 1 ton orders</li>
                <li>• Transit time: 20-35 days</li>
                <li>• Flexible for smaller quantities</li>
                <li>• Cost-effective for medium orders</li>
              </ul>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-forest-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-forest-green" />
              </div>
              <h3 className="text-xl font-semibold text-coffee-dark mb-3">Air Freight</h3>
              <p className="text-muted-foreground mb-4">Fast delivery for urgent orders and sample shipments.</p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Transit time: 3-7 days</li>
                <li>• Ideal for samples & urgent orders</li>
                <li>• Premium pricing</li>
                <li>• Door-to-door service available</li>
              </ul>
            </Card>
          </div>
        </Section>

        {/* CTA Section */}
        <Section className="bg-gradient-to-r from-coffee-dark to-cocoa-dark text-white">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Start Your Export Journey?</h2>
            <p className="text-xl text-coffee-light mb-8 max-w-2xl mx-auto">Contact us to discuss your requirements and get a detailed export timeline and quote. Our team is here to assist you every step of the way.</p>
            <Button>Get Started</Button>
          </div>
        </Section>
      </div>
    </>
  );
}
