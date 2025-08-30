"use client";

import { ArrowRight, BookOpen, Calendar, TrendingUp, Globe, Coffee, Users } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import { Section } from "../ui/Index";
import Button from "../ui/button";

export default function BlogSection({
  posts = [],
  title = "Industry Insights & Updates",
  subtitle = "Stay informed with the latest trends, market insights, and stories from Indonesian agricultural exports",
  showAllButton = true,
  limit = 3,
}) {
  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Limit the number of posts to display
  const displayPosts = posts.slice(0, limit);

  // Enhanced fallback content for empty state
  if (!displayPosts.length) {
    return (
      <Section className="py-24 bg-gradient-to-b from-coffee-light/3 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" variants={headerVariants} viewport={{ once: true, amount: 0.3 }}>
            <div className="inline-flex items-center bg-coffee-dark/5 rounded-full px-6 py-2 mb-6">
              <BookOpen className="w-4 h-4 text-coffee-dark mr-2" />
              <span className="text-sm font-semibold text-coffee-dark tracking-wide uppercase">Knowledge Hub</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-coffee-dark mb-6 leading-tight">{title}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
          </motion.div>

          <motion.div className="max-w-2xl mx-auto text-center" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
            <div className="bg-white rounded-2xl p-12 shadow-lg border border-coffee-light/10">
              <div className="w-20 h-20 bg-coffee-dark/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-10 h-10 text-coffee-dark" />
              </div>

              <h3 className="text-2xl font-bold text-coffee-dark mb-4">Content Coming Soon</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">We're preparing valuable insights about Indonesian agriculture, market trends, and export industry updates. Stay tuned for expert analysis and industry knowledge.</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/blog">
                  <Button variant="primary" size="lg" className="px-8">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Explore Knowledge Base
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline-primary" size="lg" className="px-8">
                    Get Industry Updates
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    );
  }

  return (
    <Section className="py-24 bg-gradient-to-b from-coffee-light/3 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Enhanced Header Section */}
        <motion.div className="text-center mb-6 md:mb-20" initial="hidden" whileInView="visible" variants={headerVariants} viewport={{ once: true, amount: 0.3 }}>
          <div className="inline-flex items-center bg-coffee-dark/5 rounded-full px-6 py-2 mb-6">
            <BookOpen className="w-4 h-4 text-coffee-dark mr-2" />
            <span className="text-sm font-semibold text-coffee-dark tracking-wide uppercase">Knowledge Hub</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-coffee-dark mb-4 leading-tight">{title}</h2>
          <p className="hidden mdLblock text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">{subtitle}</p>

          {/* Topic indicators */}
          <div className="hidden md:flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <TrendingUp className="w-4 h-4 text-gold mr-2" />
              <span>Market Analysis</span>
            </div>
            <div className="flex items-center">
              <Coffee className="w-4 h-4 text-coffee-dark mr-2" />
              <span>Industry Insights</span>
            </div>
            <div className="flex items-center">
              <Globe className="w-4 h-4 text-forest-green mr-2" />
              <span>Export Trends</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 text-cocoa-dark mr-2" />
              <span>Farmer Stories</span>
            </div>
          </div>
        </motion.div>

        {/* Blog Cards Grid with Enhanced Layout */}
        <motion.div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={containerVariants}>
          {displayPosts.map((post, index) => (
            <motion.div key={post._id || post.slug?.current || index} variants={itemVariants}>
              <BlogCard post={post} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA Section */}
        {showAllButton && (
          <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }}>
            <div className="bg-gradient-to-r from-coffee-light/8 to-gold/8 rounded-2xl p-8 md:p-12 border border-coffee-light/10">
              <h3 className="text-3xl font-bold text-coffee-dark mb-4">Explore Our Complete Knowledge Library</h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Access comprehensive insights on Indonesian agriculture, global market trends, export regulations, and industry best practices to stay ahead in the commodity trade.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/blog">
                  <Button variant="primary" size="lg" className="px-8 py-4 text-lg font-semibold">
                    <BookOpen className="w-5 h-5 mr-2" />
                    View All Articles
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>

                <Link href="#">
                  <Button variant="outline-primary" size="lg" className="px-8 py-4 text-lg font-semibold">
                    <Calendar className="w-5 h-5 mr-2" />
                    Subscribe to Updates
                  </Button>
                </Link>
              </div>

              {/* Additional Value Props */}
              <div className="pt-6 border-t border-coffee-light/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-coffee-dark/10 rounded-full flex items-center justify-center mb-3">
                      <TrendingUp className="w-6 h-6 text-coffee-dark" />
                    </div>
                    <h4 className="font-semibold text-coffee-dark mb-2">Weekly Market Reports</h4>
                    <p className="text-sm text-muted-foreground">Stay updated with latest commodity prices and trends</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-3">
                      <Globe className="w-6 h-6 text-gold" />
                    </div>
                    <h4 className="font-semibold text-coffee-dark mb-2">Export Guidelines</h4>
                    <p className="text-sm text-muted-foreground">Comprehensive guides for international trade</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-forest-green/10 rounded-full flex items-center justify-center mb-3">
                      <Users className="w-6 h-6 text-forest-green" />
                    </div>
                    <h4 className="font-semibold text-coffee-dark mb-2">Industry Network</h4>
                    <p className="text-sm text-muted-foreground">Connect with farmers, exporters, and buyers</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </Section>
  );
}
