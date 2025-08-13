"use client";

import { Card, Button } from "../ui/Index";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BlogCard({ post, index = 0 }) {
  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Create slug URL
  const postUrl = `/blog/${post.slug?.current || post.slug}`;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6 }}
    >
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        {/* Image */}
        <div
          className="h-48 bg-cover bg-center"
          style={{
            backgroundImage: `url(${post.mainImage?.asset?.url || post.image || post.mainImage})`,
          }}
        />

        {/* Content */}
        <div className="p-6">
          {/* Date */}
          <div className="flex items-center text-sm text-muted-foreground mb-2">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{formatDate(post.publishedAt || post.date)}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-coffee-dark mb-3">{post.title}</h3>

          {/* Excerpt */}
          <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>

          {/* Read More Button */}
          <Link href={postUrl}>
            <Button variant="link" className="px-0 text-coffee-dark font-semibold">
              Read More <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </Card>
    </motion.div>
  );
}
