"use client";

import { useState } from "react";
import { Button, Card, Section, SectionHeader } from "@/components/ui/Index";
import { motion } from "framer-motion";

import { Mail, Clock, Send, MessageCircle, Building, ChevronDown } from "lucide-react";
import StructuredData from "@/components/seo/StructuredData";

export default function ContactComponent() {
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

  const [openFAQ, setOpenFAQ] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "What is the minimum order quantity?",
      answer: "Our minimum order quantity is 1 ton for LCL shipments and 10 tons for FCL shipments. We can accommodate smaller quantities for sample orders.",
    },
    {
      id: 2,
      question: "What payment methods do you accept?",
      answer: "We accept bank transfers, letters of credit (L/C), and other secure payment methods for international orders. Payment terms are flexible and discussed during quotation.",
    },
    {
      id: 3,
      question: "How long is the delivery time?",
      answer: "Delivery time varies by destination: 10-15 days to Asia, 20-25 days to Europe, and 25-35 days to Americas. Express shipping options are available.",
    },
    {
      id: 4,
      question: "Do you provide product samples?",
      answer: "Yes, we provide samples (up to 500g per product) for quality evaluation. Customer pays for shipping costs. Larger sample quantities available upon request.",
    },

    {
      id: 5,
      question: "Can you handle custom packaging requirements?",
      answer: "Yes, we offer flexible packaging options including custom branding, private labeling, and specific packaging sizes to meet your market requirements.",
    },
    {
      id: 6,
      question: "What is your quality control process?",
      answer: "We implement strict quality control at every stage - from farm selection to final packaging. All products undergo laboratory testing and third-party inspections.",
    },
    {
      id: 7,
      question: "Do you assist with import documentation?",
      answer: "Yes, we provide complete export documentation including commercial invoices, packing lists, certificates of origin, and assist with import requirements for your country.",
    },
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

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

  const FAQAccordion = () => (
    <div className="mt-12 max-w-4xl mx-auto">
      {faqData.map((faq) => (
        <Card key={faq.id} className="mb-4 overflow-hidden">
          <button onClick={() => toggleFAQ(faq.id)} className="w-full p-6 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-coffee-dark pr-4">{faq.question}</h3>
              <ChevronDown className={`w-5 h-5 text-coffee-dark transition-transform duration-200 flex-shrink-0 ${openFAQ === faq.id ? "rotate-180" : ""}`} />
            </div>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFAQ === faq.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="px-6 pb-6">
              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );

  return (
    <>
      <StructuredData type="contact" />
      <div className="min-h-screen">
        <motion.header className="bg-[#392E20] py-16 px-4" initial="hidden" animate="visible">
          <div className="max-w-4xl mx-auto">
            <motion.div className="text-center">
              <h1 className="text-4xl md:text-5xl font-calistoga text-white mt-12 mb-4">Contact Us</h1>
              <p className="text-lg text-gray-100 max-w-2xl mx-auto"> Ready to import premium Indonesian coffee and cocoa? Get in touch with our export team for quotes, samples, and detailed product information.</p>
            </motion.div>
          </div>
        </motion.header>

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
                        Semarang
                        <br />
                        Central Java, Indonesia
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-forest-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-forest-green" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-coffee-dark mb-2">Email</h3>
                      <div className="space-y-2">
                        <a href="mailto:info@harikanusantara.com" className="block text-muted-foreground hover:text-forest-green transition-colors">
                          info@harikanusantara.com
                        </a>
                        <a href="mailto:export@harikanusantara.com" className="block text-muted-foreground hover:text-forest-green transition-colors">
                          export@harikanusantara.com
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-green-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-coffee-dark mb-2">WhatsApp</h3>
                      <p className="text-muted-foreground mb-2">+90 542 179 3483</p>
                      <p className="text-sm text-muted-foreground mb-3">Available 24/7 for urgent inquiries</p>
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

        {/* FAQ Section */}
        <Section>
          <SectionHeader subtitle="Frequently Asked Questions" title="Common Export Inquiries" description="Quick answers to the most common questions about our export services." />

          <FAQAccordion />
        </Section>
      </div>
    </>
  );
}
