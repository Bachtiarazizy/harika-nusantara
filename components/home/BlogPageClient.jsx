"use client";

import BlogSection from "@/components/home/BlogSection";
import ClearSearchButton from "@/components/ui/CleanSearchButton";
import SearchForm from "@/components/ui/SearchForm";
import CTASection from "@/components/home/CtaSection";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import StructuredData from "../seo/StructuredData";

// Simple and smooth animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function BlogPageClient({ allPosts, searchParams }) {
  // Simple search functionality (you can enhance this)
  const searchQuery = searchParams?.search || "";
  const filteredPosts = searchQuery ? allPosts.filter((post) => post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())) : allPosts;

  return (
    <>
      <StructuredData type="homepage" />
      <div className="min-h-screen">
        {/* Hero Section - Matching About Page Style */}
        <motion.section className="relative py-24 bg-gradient-to-br from-coffee-dark to-cocoa-dark text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <div className="container mx-auto px-4 text-center">
            <motion.h1 className="text-4xl lg:text-6xl font-bold mb-6" variants={fadeIn} initial="hidden" animate="visible">
              Stories from the Farm
            </motion.h1>
            <motion.p className="text-xl text-coffee-light max-w-3xl mx-auto mb-8" variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.3 }}>
              Discover inspiring stories from Indonesian coffee and cocoa farmers, sustainable farming tips, and the journey from farm to your cup.
            </motion.p>

            {/* Search Bar */}
            <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.6 }}>
              <SearchForm defaultValue={searchQuery} />
            </motion.div>
          </div>
        </motion.section>

        {/* Search Results Info */}
        {searchQuery && (
          <section className="max-w-6xl mx-auto px-4 py-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800">{filteredPosts.length > 0 ? `Found ${filteredPosts.length} article${filteredPosts.length > 1 ? "s" : ""} for "${searchQuery}"` : `No articles found for "${searchQuery}"`}</p>
              {searchQuery && (
                <ClearSearchButton variant="link" className="p-0 mt-2 text-blue-600 hover:text-blue-800">
                  Show all articles
                </ClearSearchButton>
              )}
            </div>
          </section>
        )}

        {/* Blog Posts */}
        <section className="py-16">
          {filteredPosts.length > 0 ? (
            <BlogSection posts={filteredPosts} title={searchQuery ? "Search Results" : "All Articles"} subtitle={searchQuery ? "" : "Explore our complete collection of stories"} showAllButton={false} limit={filteredPosts.length} />
          ) : (
            <div className="max-w-6xl mx-auto px-4 text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="mb-6">
                  <Search className="h-16 w-16 text-gray-400 mx-auto" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{searchQuery ? "No articles found" : "No articles yet"}</h3>
                <p className="text-gray-600 mb-8">
                  {searchQuery ? `No articles match your search for "${searchQuery}". Try different keywords or explore all our articles.` : "No articles are currently available. Please check back later."}
                </p>
                {searchQuery && <ClearSearchButton variant="primary">View All Articles</ClearSearchButton>}
              </div>
            </div>
          )}
        </section>

        {/* CTA Section - Using same component as About page */}
        <section aria-labelledby="cta-heading">
          <CTASection />
        </section>
      </div>
    </>
  );
}
