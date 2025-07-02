"use client";

import { useState } from "react";
import { Button, Card, Section, SectionHeader } from "@/components/ui/Index";

import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Globe, Building } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    product: "",
    quantity: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We will contact you within 24 hours.");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-coffee-dark to-cocoa-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-coffee-light max-w-3xl mx-auto">Ready to import premium Indonesian coffee and cocoa? Get in touch with our export team for quotes, samples, and detailed product information.</p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <SectionHeader subtitle="Get In Touch" title="Request a Quote" description="Fill out the form below and our export team will contact you within 24 hours with detailed information and pricing." centered={false} />

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-coffee-dark mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-coffee-dark mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-coffee-dark mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-coffee-dark mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="+1 234 567 8900"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-coffee-dark mb-2">
                  Country *
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  required
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="Your country"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="product" className="block text-sm font-medium text-coffee-dark mb-2">
                    Product Interest *
                  </label>
                  <select id="product" name="product" required value={formData.product} onChange={handleInputChange} className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent">
                    <option value="">Select a product</option>
                    <option value="arabica-coffee">Arabica Coffee Beans</option>
                    <option value="robusta-coffee">Robusta Coffee Beans</option>
                    <option value="cocoa-beans">Cocoa Beans</option>
                    <option value="cocoa-powder">Cocoa Powder</option>
                    <option value="mixed-products">Multiple Products</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-coffee-dark mb-2">
                    Estimated Quantity
                  </label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="e.g., 20 tons, 1 container"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-coffee-dark mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="Please provide any additional details about your requirements, preferred specifications, delivery timeline, etc."
                ></textarea>
              </div>

              <Button type="submit" size="lg" className="w-full">
                <Send className="w-5 h-5 mr-2" />
                Send Inquiry
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <SectionHeader subtitle="Contact Information" title="Get In Touch With Our Team" description="Our export specialists are ready to assist you with product information, pricing, and shipping arrangements." centered={false} />

            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Building className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-coffee-dark mb-2">Head Office</h3>
                    <p className="text-muted-foreground">
                      Jl. Raya Industri No. 123
                      <br />
                      Semarang, Central Java 50123
                      <br />
                      Indonesia
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-coffee-medium/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-coffee-medium" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-coffee-dark mb-2">Phone</h3>
                    <p className="text-muted-foreground">
                      +62 813 2518 6680
                      <br />
                      +90 542 179 3483
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-forest-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-forest-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-coffee-dark mb-2">Email</h3>
                    <p className="text-muted-foreground">
                      info@harikanusantara.com
                      <br />
                      export@harikanusantara.com
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-coffee-dark mb-2">WhatsApp</h3>
                    <p className="text-muted-foreground">
                      +62 813 2518 6680
                      <br />
                      <span className="text-sm">Available 24/7 for urgent inquiries</span>
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cocoa-medium/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-cocoa-medium" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-coffee-dark mb-2">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8:00 AM - 6:00 PM
                      <br />
                      Saturday: 8:00 AM - 2:00 PM
                      <br />
                      <span className="text-sm">(GMT+7 Jakarta Time)</span>
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* Quick Contact Options */}
      <Section className="bg-coffee-light/10">
        <SectionHeader subtitle="Quick Contact" title="Multiple Ways to Reach Us" description="Choose the most convenient way to get in touch with our export team." />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card className="p-6 text-center hover:shadow-xl transition-all duration-200">
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold text-coffee-dark mb-3">WhatsApp</h3>
            <p className="text-muted-foreground mb-4">Get instant responses to your inquiries via WhatsApp messaging.</p>
            <Button className="w-full bg-green-500 hover:bg-green-600" onClick={() => window.open("https://wa.me/6281325186680", "_blank")}>
              Chat on WhatsApp
            </Button>
          </Card>

          <Card className="p-6 text-center hover:shadow-xl transition-all duration-200">
            <div className="w-16 h-16 bg-forest-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-forest-green" />
            </div>
            <h3 className="text-xl font-semibold text-coffee-dark mb-3">Email</h3>
            <p className="text-muted-foreground mb-4">Send detailed inquiries and receive comprehensive responses.</p>
            <Button variant="outline" className="w-full" onClick={() => (window.location.href = "mailto:export@harikanusantara.com")}>
              Send Email
            </Button>
          </Card>

          <Card className="p-6 text-center hover:shadow-xl transition-all duration-200">
            <div className="w-16 h-16 bg-coffee-medium/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-coffee-medium" />
            </div>
            <h3 className="text-xl font-semibold text-coffee-dark mb-3">Phone Call</h3>
            <p className="text-muted-foreground mb-4">Speak directly with our export specialists for immediate assistance.</p>
            <Button variant="outline" className="w-full" onClick={() => (window.location.href = "tel:6281325186680")}>
              Call Now
            </Button>
          </Card>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section>
        <SectionHeader subtitle="Frequently Asked Questions" title="Common Export Inquiries" description="Quick answers to the most common questions about our export services." />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-coffee-dark mb-3">What is the minimum order quantity?</h3>
            <p className="text-muted-foreground">Our minimum order quantity is 1 ton for LCL shipments and 10 tons for FCL shipments. We can accommodate smaller quantities for sample orders.</p>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-coffee-dark mb-3">What payment methods do you accept?</h3>
            <p className="text-muted-foreground">We accept bank transfers, PayPal, and letters of credit (L/C) for international orders. Payment terms can be discussed during the quotation process.</p>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-coffee-dark mb-3">What is the minimum order quantity?</h3>
            <p className="text-muted-foreground">Our minimum order quantity is 1 ton for LCL shipments and 10 tons for FCL shipments. We can accommodate smaller quantities for sample orders.</p>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-coffee-dark mb-3">What payment methods do you accept?</h3>
            <p className="text-muted-foreground">We accept bank transfers, PayPal, and letters of credit (L/C) for international orders. Payment terms can be discussed during the quotation process.</p>
          </Card>
        </div>
      </Section>
    </div>
  );
}
