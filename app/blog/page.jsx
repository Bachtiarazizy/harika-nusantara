import BlogPageClient from "@/components/home/BlogPageClient";
import { getAllPosts } from "@/lib/sanityQueries";

// Generate metadata for SEO
export const metadata = {
  title: "Blog - Stories from Indonesian Coffee & Cocoa Farms",
  description: "Discover inspiring stories from Indonesian coffee and cocoa farmers, sustainable farming tips, and the journey from farm to your cup.",
  openGraph: {
    title: "Blog - Stories from Indonesian Coffee & Cocoa Farms",
    description: "Discover inspiring stories from Indonesian coffee and cocoa farmers, sustainable farming tips, and the journey from farm to your cup.",
    type: "website",
  },
};

export default async function BlogIndexPage({ searchParams }) {
  // Get all posts on the server
  const allPosts = await getAllPosts();

  // Await searchParams before passing to client component
  const resolvedSearchParams = await searchParams;

  return <BlogPageClient allPosts={allPosts} searchParams={resolvedSearchParams} />;
}
