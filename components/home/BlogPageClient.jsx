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
        <motion.header className="bg-[#392E20] py-16 px-4" initial="hidden" animate="visible">
          <div className="max-w-4xl mx-auto">
            <motion.div className="text-center">
              <h1 className="text-4xl md:text-5xl font-calistoga text-white mt-12 mb-4">Stories from the Farm</h1>
              <p className="text-lg text-gray-100 max-w-2xl mx-auto">Discover inspiring stories from Indonesian coffee and cocoa farmers, sustainable farming tips, and the journey from farm to your cup.</p>
            </motion.div>
          </div>
        </motion.header>

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
      </div>
    </>
  );
}
