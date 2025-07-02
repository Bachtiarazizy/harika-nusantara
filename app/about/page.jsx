import { Button, Card, Section, SectionHeader } from "@/components/ui/Index";

import { MapPin, Users, Award, Leaf, Globe, TrendingUp } from "lucide-react";

export const metadata = {
  title: "About Us - Indonesian Coffee & Cocoa Exporter Since 2009",
  description: "Learn about Harika Nusantara, a trusted Indonesian coffee and cocoa exporter since 2009. Serving 50+ countries with premium beans from Java, Sumatra, and Sulawesi.",
  keywords: "about Harika Nusantara, Indonesian coffee exporter history, cocoa exporter Indonesia, coffee sourcing regions, sustainable coffee farming",
  openGraph: {
    title: "About Harika Nusantara - Indonesian Coffee & Cocoa Exporter",
    description: "Learn about our 5+ years of experience exporting premium Indonesian coffee and cocoa to international markets.",
    images: ["/images/hero-background.webp"],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-coffee-dark to-cocoa-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">About Harika Nusantara</h1>
          <p className="text-xl text-coffee-light max-w-3xl mx-auto">Your trusted partner for premium Indonesian coffee and cocoa exports, connecting the finest Indonesian flavors with international markets.</p>
        </div>
      </section>

      {/* Company Story */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader subtitle="Our Story" title="Rooted in Passion, Built for Global Trade" description="" centered={false} />
            <p className="text-lg text-muted-foreground mb-6">
              Harika Nusantara was born from years of experience, strong local networks, and a deep passion for Indonesian coffee and cocoa. With a clear mission to bring the richness of Indonesia’s finest agricultural products to the
              world, we are committed to becoming a trusted export partner from the very beginning.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Backed by close collaboration with farming communities and strict quality control, we proudly source from the renowned regions of Java, Sumatra, Sulawesi, and beyond ensuring consistency, traceability, and taste in every
              shipment. Built on trust. Driven by quality. Ready for the world.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-2">1000+</div>
                <div className="text-sm text-muted-foreground">Tons Exported</div>
              </div>
            </div>
          </div>
          <div
            className="h-96 bg-cover bg-center rounded-xl"
            style={{
              backgroundImage: "url(/images/hero-background.webp)",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-coffee-light/10">
        <SectionHeader subtitle="Mission & Vision" title="Connecting Indonesian Excellence with Global Markets" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <Card className="p-8 text-center">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="w-8 h-8 text-gold" />
            </div>
            <h3 className="text-2xl font-semibold text-coffee-dark mb-4">Our Mission</h3>
            <p className="text-muted-foreground">
              To be the bridge between Indonesian coffee and cocoa farmers and international markets, ensuring fair trade, sustainable practices, and the highest quality products reach customers worldwide.
            </p>
          </Card>

          <Card className="p-8 text-center">
            <div className="w-16 h-16 bg-forest-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-forest-green" />
            </div>
            <h3 className="text-2xl font-semibold text-coffee-dark mb-4">Our Vision</h3>
            <p className="text-muted-foreground">To become the most trusted and preferred Indonesian coffee and cocoa exporter globally, known for our commitment to quality, sustainability, and innovation in agricultural trade.</p>
          </Card>
        </div>
      </Section>

      {/* Sourcing Regions */}
      <Section>
        <SectionHeader
          subtitle="Sourcing Regions"
          title="Premium Coffee & Cocoa from Indonesia's Finest Regions"
          description="We carefully select our products from the most renowned coffee and cocoa growing regions across the Indonesian archipelago."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <Card className="p-6">
            <div className="w-12 h-12 bg-coffee-dark/10 rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-coffee-dark" />
            </div>
            <h3 className="text-xl font-semibold text-coffee-dark mb-3">Java</h3>
            <p className="text-muted-foreground mb-4">Known for its full-bodied Arabica coffee with low acidity and rich, earthy flavors. Java's volcanic soil produces some of the world's most distinctive coffee beans.</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Premium Arabica varieties</li>
              <li>• Volcanic soil cultivation</li>
              <li>• Traditional processing methods</li>
            </ul>
          </Card>

          <Card className="p-6">
            <div className="w-12 h-12 bg-forest-green/10 rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-forest-green" />
            </div>
            <h3 className="text-xl font-semibold text-coffee-dark mb-3">Sumatra</h3>
            <p className="text-muted-foreground mb-4">Famous for its unique wet-hulling process that creates coffee with full body, low acidity, and distinctive herbal and earthy notes.</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Unique wet-hulling process</li>
              <li>• Full-bodied Robusta & Arabica</li>
              <li>• Sustainable farming practices</li>
            </ul>
          </Card>

          <Card className="p-6">
            <div className="w-12 h-12 bg-cocoa-dark/10 rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-cocoa-dark" />
            </div>
            <h3 className="text-xl font-semibold text-coffee-dark mb-3">Sulawesi</h3>
            <p className="text-muted-foreground mb-4">Produces exceptional coffee with bright acidity and complex flavor profiles, as well as high-quality cocoa beans perfect for premium chocolate production.</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Complex flavor profiles</li>
              <li>• Premium cocoa beans</li>
              <li>• High altitude cultivation</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-gradient-to-r from-coffee-dark to-cocoa-dark text-white">
        <SectionHeader className="text-white" subtitle="Our Values" title="Built on Trust, Quality, and Sustainability" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-gold" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Quality Excellence</h3>
            <p className="text-coffee-light text-sm">Rigorous quality control at every step ensures only the finest products reach our customers.</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-8 h-8 text-gold" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Sustainability</h3>
            <p className="text-coffee-light text-sm">Committed to environmentally responsible practices and supporting local farming communities.</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-gold" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Fair Partnership</h3>
            <p className="text-coffee-light text-sm">Building long-term relationships with farmers and customers based on mutual respect and fair trade.</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-gold" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Global Reach</h3>
            <p className="text-coffee-light text-sm">Connecting Indonesian excellence with international markets through reliable export services.</p>
          </div>
        </div>
      </Section>
    </div>
  );
}
