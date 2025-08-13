import { Button, Card, Section, SectionHeader } from "@/components/ui/Index";

import { Coffee, Leaf, Award, Download, CheckCircle, Star } from "lucide-react";

export const metadata = {
  title: "Products - Premium Indonesian Coffee Beans & Cocoa",
  description: "Explore our premium Indonesian coffee and cocoa products. Arabica, Robusta coffee beans and cocoa powder from Java, Sumatra, Sulawesi. ISO certified, organic options available.",
  keywords: "Indonesian coffee beans, Arabica coffee Indonesia, Robusta coffee beans, cocoa beans Indonesia, cocoa powder, Java coffee, Sumatra coffee, Sulawesi coffee, organic coffee, fair trade coffee",
  openGraph: {
    title: "Premium Indonesian Coffee & Cocoa Products - Harika Nusantara",
    description: "Premium Arabica, Robusta coffee beans and cocoa products from Indonesian plantations. ISO certified with organic and fair trade options.",
    images: ["/images/coffee-beans-premium.webp"],
  },
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-coffee-dark to-cocoa-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-coffee-light max-w-3xl mx-auto">Premium Indonesian coffee beans and cocoa products, carefully selected and processed to meet international quality standards.</p>
        </div>
      </section>

      {/* Coffee Products */}
      <Section id="coffee">
        <SectionHeader
          subtitle="Coffee Products"
          title="Premium Indonesian Coffee Beans"
          description="From the volcanic soils of Java, Sumatra, and Sulawesi, we offer the finest Arabica and Robusta coffee beans for international markets."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {/* Arabica Coffee */}
          <Card className="overflow-hidden">
            <div
              className="h-64 bg-cover bg-center"
              style={{
                backgroundImage: "url(/images/coffee-beans-premium.webp)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl font-semibold text-coffee-dark">Arabica Coffee Beans</h3>
                <div className="flex items-center text-gold">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
              <p className="text-muted-foreground mb-4">Premium Arabica beans from high-altitude plantations, known for their complex flavor profiles, bright acidity, and aromatic qualities.</p>

              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-coffee-dark">Specifications:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-forest-green mr-2" />
                    Grade 1 & Specialty Grade available
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-forest-green mr-2" />
                    Moisture content: 11-12%
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-forest-green mr-2" />
                    Screen size: 15-18
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-forest-green mr-2" />
                    Defect rate: 2%
                  </li>
                </ul>
              </div>

              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-coffee-dark">Origins Available:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-coffee-light/20 text-coffee-dark text-sm rounded-full">Java</span>
                  <span className="px-3 py-1 bg-coffee-light/20 text-coffee-dark text-sm rounded-full">Sumatra</span>
                  <span className="px-3 py-1 bg-coffee-light/20 text-coffee-dark text-sm rounded-full">Sulawesi</span>
                  <span className="px-3 py-1 bg-coffee-light/20 text-coffee-dark text-sm rounded-full">Bali</span>
                </div>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1">Request Quote</Button>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Spec Sheet
                </Button>
              </div>
            </div>
          </Card>

          {/* Robusta Coffee */}
          <Card className="overflow-hidden">
            <div
              className="h-64 bg-cover bg-center"
              style={{
                backgroundImage: "url(/images/coffee-beans-premium.webp)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl font-semibold text-coffee-dark">Robusta Coffee Beans</h3>
                <div className="flex items-center text-gold">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
              <p className="text-muted-foreground mb-4">High-quality Robusta beans with strong body, low acidity, and higher caffeine content. Perfect for espresso blends and instant coffee production.</p>

              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-coffee-dark">Specifications:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-forest-green mr-2" />
                    Grade 1 & Grade 2 available
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-forest-green mr-2" />
                    Moisture content: 11-12%
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-forest-green mr-2" />
                    Screen size: 13-16
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-forest-green mr-2" />
                    Caffeine content: 2.2-2.7%
                  </li>
                </ul>
              </div>

              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-coffee-dark">Processing Methods:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-coffee-light/20 text-coffee-dark text-sm rounded-full">Wet Process</span>
                  <span className="px-3 py-1 bg-coffee-light/20 text-coffee-dark text-sm rounded-full">Dry Process</span>
                  <span className="px-3 py-1 bg-coffee-light/20 text-coffee-dark text-sm rounded-full">Semi-Washed</span>
                </div>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1">Request Quote</Button>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Spec Sheet
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Cocoa Products */}
      <Section id="cocoa" className="bg-coffee-light/10">
        <SectionHeader subtitle="Cocoa Products" title="Premium Indonesian Cocoa" description="High-quality cocoa beans and powder from Indonesian plantations, perfect for chocolate manufacturing and confectionery applications." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {/* Cocoa Beans */}
          <Card className="overflow-hidden">
            <div
              className="h-64 bg-cover bg-center"
              style={{
                backgroundImage: "url(/images/cocoa-products.webp)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl font-semibold text-coffee-dark">Premium Cocoa Beans</h3>
                <div className="flex items-center text-gold">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
              <p className="text-muted-foreground mb-4">Fermented and dried cocoa beans with excellent flavor profiles, ideal for premium chocolate production and confectionery applications.</p>

              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-coffee-dark">Specifications:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-forest-green mr-2" />
                    Moisture content: 6-7%
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-forest-green mr-2" />
                    Bean count: 95-105 per 100g
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-forest-green mr-2" />
                    Fat content: 50-57%
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-forest-green mr-2" />
                    pH level: 5.3-5.8
                  </li>
                </ul>
              </div>

              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-coffee-dark">Quality Grades:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-cocoa-medium/20 text-cocoa-dark text-sm rounded-full">Grade A</span>
                  <span className="px-3 py-1 bg-cocoa-medium/20 text-cocoa-dark text-sm rounded-full">Grade B</span>
                  <span className="px-3 py-1 bg-cocoa-medium/20 text-cocoa-dark text-sm rounded-full">Fair Trade</span>
                </div>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1">Request Quote</Button>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Spec Sheet
                </Button>
              </div>
            </div>
          </Card>

          {/* Cocoa Powder */}
          <Card className="overflow-hidden">
            <div
              className="h-64 bg-cover bg-center"
              style={{
                backgroundImage: "url(/images/cocoa-products.webp)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl font-semibold text-coffee-dark">Cocoa Powder</h3>
                <div className="flex items-center text-gold">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
              <p className="text-muted-foreground mb-4">Fine cocoa powder processed from premium Indonesian cocoa beans, available in natural and alkalized varieties for various applications.</p>

              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-coffee-dark">Specifications:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-forest-green mr-2" />
                    Fat content: 10-12% or 20-22%
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-forest-green mr-2" />
                    Moisture content: Max 5%
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-forest-green mr-2" />
                    Fineness: 99.5% through 200 mesh
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-forest-green mr-2" />
                    pH level: 5.3-5.8 (natural)
                  </li>
                </ul>
              </div>

              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-coffee-dark">Types Available:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-cocoa-medium/20 text-cocoa-dark text-sm rounded-full">Natural</span>
                  <span className="px-3 py-1 bg-cocoa-medium/20 text-cocoa-dark text-sm rounded-full">Alkalized</span>
                  <span className="px-3 py-1 bg-cocoa-medium/20 text-cocoa-dark text-sm rounded-full">Organic</span>
                </div>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1">Request Quote</Button>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Spec Sheet
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Quality Certifications */}
      {/* <Section>
        <SectionHeader subtitle="Quality Assurance" title="International Certifications & Standards" description="Our products meet the highest international quality standards and certifications." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <Card className="p-6 text-center">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-gold" />
            </div>
            <h3 className="font-semibold text-coffee-dark mb-2">ISO 22000</h3>
            <p className="text-muted-foreground">Food Safety Management System</p>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-16 h-16 bg-forest-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-8 h-8 text-forest-green" />
            </div>
            <h3 className="font-semibold text-coffee-dark mb-2">ISO 22001</h3>
            <p className="text-muted-foreground">Food Safety Management System</p>
          </Card>
        </div>
      </Section> */}
    </div>
  );
}
