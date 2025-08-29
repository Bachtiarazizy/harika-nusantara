import BlogPageClient from "@/components/home/BlogPageClient";
import { generatePageMetadata } from "@/lib/metadata";
import { getAllPosts } from "@/lib/sanityQueries";

export const metadata = generatePageMetadata("blog");

export default async function BlogIndexPage({ searchParams }) {
  // Get all posts on the server
  const allPosts = await getAllPosts();

  // Await searchParams before passing to client component
  const resolvedSearchParams = await searchParams;

  return <BlogPageClient allPosts={allPosts} searchParams={resolvedSearchParams} />;
}
