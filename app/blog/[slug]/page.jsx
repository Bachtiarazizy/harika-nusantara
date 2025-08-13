// app/blog/[slug]/page.js
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowLeft } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { getAllPosts, getPostBySlug } from "@/lib/sanityQueries";
import { Button } from "@/components/ui/Index";
import ShareButton from "@/components/ui/ShareButton";
import ArticleNavigation from "@/components/ui/ArticleNavigation";
import BlogSection from "@/components/home/BlogSection";

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.mainImage?.asset?.url ? [post.mainImage.asset.url] : [],
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

// Portable Text components for rich text rendering
const portableTextComponents = {
  types: {
    image: ({ value }) => (
      <div className="my-8">
        <Image src={value.asset.url} alt={value.alt || "Blog image"} width={800} height={400} className="rounded-lg w-full h-auto" />
        {value.caption && <p className="text-sm text-muted-foreground text-center mt-2 italic">{value.caption}</p>}
      </div>
    ),
  },
  block: {
    h2: ({ children }) => <h2 className="text-2xl font-bold text-coffee-dark mt-8 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-semibold text-coffee-dark mt-6 mb-3">{children}</h3>,
    h4: ({ children }) => <h4 className="text-lg font-medium text-coffee-dark mt-4 mb-2">{children}</h4>,
    blockquote: ({ children }) => <blockquote className="border-l-4 border-coffee-light pl-6 py-4 my-6 bg-coffee-light/5 italic text-lg">{children}</blockquote>,
    normal: ({ children }) => <p className="text-gray-700 leading-relaxed mb-4">{children}</p>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-coffee-dark">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">{children}</code>,
    link: ({ children, value }) => (
      <Link href={value.href} target={value.blank ? "_blank" : "_self"} rel={value.blank ? "noopener noreferrer" : undefined} className="text-coffee-dark hover:text-coffee-medium underline transition-colors">
        {children}
      </Link>
    ),
  },
};

export default async function BlogDetailPage({ params }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // Get related posts (other recent posts for now since we simplified)
  const relatedPosts = await getAllPosts(3);
  const filteredRelatedPosts = relatedPosts.filter((p) => p.slug.current !== params.slug);

  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <Link href="/blog">
          <Button variant="ghost" className="mb-6 hover:bg-coffee-light/10">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Blog
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <article className="max-w-4xl mx-auto px-4 pb-16">
        {/* Featured Image */}
        {post.mainImage?.asset?.url && (
          <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-8">
            <Image src={post.mainImage.asset.url} alt={post.title} fill className="object-cover" priority />
          </div>
        )}

        {/* Article Header */}
        <header className="mb-8">
          {/* Meta Info */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            </div>

            {/* Share Button */}
            <ShareButton title={post.title} excerpt={post.excerpt} className="p-0 h-auto text-muted-foreground hover:text-coffee-dark" />
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-coffee-dark mb-4 leading-tight">{post.title}</h1>

          {/* Excerpt */}
          <p className="text-xl text-muted-foreground leading-relaxed">{post.excerpt}</p>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">{post.body && <PortableText value={post.body} components={portableTextComponents} />}</div>

        {/* Article Footer */}
        <footer className="mt-12 pt-8">
          {/* Navigation between articles */}
          <ArticleNavigation previousPost={post.previousPost} nextPost={post.nextPost} />

          {/* Bottom actions */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-200">
            <Link href="/blog">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Lihat Semua Artikel
              </Button>
            </Link>

            <ShareButton title={post.title} excerpt={post.excerpt} />
          </div>
        </footer>
      </article>

      {/* Related Posts */}
      {filteredRelatedPosts.length > 0 && (
        <section className="bg-coffee-light/5 py-16">
          <BlogSection posts={filteredRelatedPosts} title="Artikel Lainnya" subtitle="Temukan lebih banyak cerita menarik dari kami" showAllButton={true} limit={3} />
        </section>
      )}
    </div>
  );
}
