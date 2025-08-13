"use client";

import { Section, Button } from "../ui/Index";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import BlogCard from "./BlogCard";

export default function BlogSection({ posts = [], title = "Latest From Our Blog", subtitle = "Discover stories from Indonesian coffee farms and cocoa plantations", showAllButton = true, limit = 3 }) {
  // Limit the number of posts to display
  const displayPosts = posts.slice(0, limit);

  // If no posts available, show fallback content
  if (!displayPosts.length) {
    return (
      <Section className="py-16 bg-coffee-light/5">
        <div className="max-w-6xl mx-auto px-2">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, amount: 0.3 }}>
            <h2 className="text-3xl font-bold text-coffee-dark mb-4">{title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
          </motion.div>

          <div className="text-center py-12">
            <p className="text-muted-foreground mb-6">No blog posts available at the moment.</p>
            <Link href="/blog">
              <Button variant="primary">
                View All Articles
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section className="py-16 bg-coffee-light/5">
      <div className="max-w-6xl mx-auto px-2">
        {/* Section Title */}
        <motion.div className="text-start md:text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, amount: 0.3 }}>
          <h2 className="text-3xl font-bold text-coffee-dark mb-4">{title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
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
          {displayPosts.map((post, index) => (
            <BlogCard key={post._id || post.slug?.current || index} post={post} index={index} />
          ))}
        </motion.div>

        {/* CTA Button */}
        {showAllButton && (
          <motion.div className="text-center mt-8" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
            <Link href="/blog">
              <Button variant="primary">
                View All Articles
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </Section>
  );
}
