"use client";

import { Section, Card, Button } from "./ui/Index";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const blogPosts = [
  {
    image: "/images/blog-coffee-harvest.webp",
    date: "June 15, 2023",
    title: "The Art of Coffee Harvesting in Sumatra",
    excerpt: "Explore the traditional methods of coffee harvesting that have been passed down for generations in the highlands of Sumatra.",
    slug: "/blog/sumatra-coffee-harvest",
  },
  {
    image: "/images/blog-cocoa-sustainability.webp",
    date: "May 28, 2023",
    title: "Sustainable Cocoa Farming in Java",
    excerpt: "How our partner farmers in Java are implementing sustainable practices to protect the environment while growing premium cocoa.",
    slug: "/blog/java-cocoa-sustainability",
  },
  {
    image: "/images/blog-farmer-story.webp",
    date: "April 10, 2023",
    title: "Meet Our Farmers: The Story of Pak Surya",
    excerpt: "A personal look at how our direct trade model has impacted one family&apos;s coffee farming business in Sulawesi.",
    slug: "/blog/farmer-story-surya",
  },
];

export default function BlogSection() {
  return (
    <Section className="py-16 bg-coffee-light/5">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, amount: 0.3 }}>
          <h2 className="text-3xl font-bold text-coffee-dark mb-4">Latest From Our Blog</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Discover stories from Indonesian coffee farms and cocoa plantations</p>
        </motion.div>

        {/* Blog Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }} />
                <div className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-coffee-dark mb-3">{post.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                  <Link href={post.slug}>
                    <Button variant="link" className="px-0 text-coffee-dark font-semibold">
                      Read More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div className="text-center mt-8" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
          <Link href="/blog">
            <Button className="bg-coffee-dark hover:bg-coffee-dark/90 text-white">
              View All Articles
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}
