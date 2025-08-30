// app/blog/[slug]/page.js
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowLeft, ChevronRight, Home } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { getAllPosts, getPostBySlug } from "@/lib/sanityQueries";
import { Button } from "@/components/ui/Index";
import ShareButton from "@/components/ui/ShareButton";
import ArticleNavigation from "@/components/ui/ArticleNavigation";
import BlogSection from "@/components/home/BlogSection";
import StructuredData from "@/components/seo/StructuredData";
import { generateDynamicMetadata, generateBreadcrumbs } from "@/lib/metadata";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found - Harika Nusantara Blog",
      description: "The requested blog post was not found.",
    };
  }

  return generateDynamicMetadata("blog", post);
}

// Enhanced Portable Text components for rich text rendering
const portableTextComponents = {
  types: {
    image: ({ value }) => {
      const { asset, alt, caption, alignment = "center", size = "large" } = value;

      if (!asset?.url) return null;

      // Determine size classes
      const sizeClasses = {
        small: "max-w-sm mx-auto",
        medium: "max-w-2xl mx-auto",
        large: "max-w-4xl mx-auto w-full",
        full: "w-full",
      };

      // Determine alignment classes
      const alignmentClasses = {
        left: "mr-auto",
        center: "mx-auto",
        right: "ml-auto",
      };

      return (
        <figure className={`my-8 ${sizeClasses[size]} ${alignmentClasses[alignment]}`}>
          <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image src={asset.url} alt={alt || caption || "Blog image"} width={800} height={600} className="w-full h-auto object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw" />
            {/* Optional overlay for better caption readability */}
            {caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-4">
                <p className="text-white text-sm font-medium">{caption}</p>
              </div>
            )}
          </div>
          {/* Caption below image (alternative to overlay) */}
          {caption && <figcaption className="text-sm text-muted-foreground text-center mt-3 italic leading-relaxed px-4">{caption}</figcaption>}
        </figure>
      );
    },

    // Image Gallery
    gallery: ({ value }) => {
      const { images, title } = value;

      if (!images || images.length === 0) return null;

      return (
        <div className="my-12">
          {title && <h3 className="text-lg font-semibold text-coffee-dark mb-6 text-center">{title}</h3>}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <Image src={image.asset.url} alt={image.alt || `Gallery image ${index + 1}`} width={400} height={300} className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                {image.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <p className="text-white text-xs">{image.caption}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    },

    // Image with Text Wrapping
    imageWithText: ({ value }) => {
      const { image, text, position = "left" } = value;

      if (!image?.asset?.url) return null;

      const isLeft = position === "left";

      return (
        <div className={`my-8 flex flex-col ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} gap-6 items-start`}>
          <div className="md:w-1/2 flex-shrink-0">
            <div className="relative overflow-hidden rounded-lg shadow-md">
              <Image src={image.asset.url} alt={image.alt || "Content image"} width={400} height={300} className="w-full h-auto object-cover" />
            </div>
            {image.caption && <p className="text-sm text-muted-foreground italic mt-2 text-center">{image.caption}</p>}
          </div>
          <div className="md:w-1/2 prose prose-sm max-w-none">
            <PortableText value={text} components={portableTextComponents} />
          </div>
        </div>
      );
    },

    // Video Embed
    videoEmbed: ({ value }) => {
      const { url, title, caption } = value;

      if (!url) return null;

      // Extract video ID and determine platform
      const getVideoEmbedUrl = (url) => {
        // YouTube
        const youtubeMatch = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
        if (youtubeMatch) {
          return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
        }

        // Vimeo
        const vimeoMatch = url.match(/vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|)(\d+)(?:$|\/|\?)/);
        if (vimeoMatch) {
          return `https://player.vimeo.com/video/${vimeoMatch[3]}`;
        }

        return url;
      };

      const embedUrl = getVideoEmbedUrl(url);

      return (
        <div className="my-8">
          {title && <h3 className="text-lg font-semibold text-coffee-dark mb-4 text-center">{title}</h3>}
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe src={embedUrl} title={title || "Video"} className="w-full h-full" frameBorder="0" allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
          </div>
          {caption && <p className="text-sm text-muted-foreground text-center mt-3 italic leading-relaxed px-4">{caption}</p>}
        </div>
      );
    },

    // Code Block
    codeBlock: ({ value }) => {
      const { code, language, filename } = value;

      if (!code) return null;

      return (
        <div className="my-8">
          {filename && <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 text-sm font-mono text-gray-600 rounded-t-lg">{filename}</div>}
          <pre className={`bg-gray-900 text-gray-100 p-4 overflow-x-auto text-sm ${filename ? "rounded-b-lg" : "rounded-lg"}`}>
            <code className={language ? `language-${language}` : ""}>{code}</code>
          </pre>
          {language && <div className="text-xs text-muted-foreground mt-1 text-right">{language}</div>}
        </div>
      );
    },
  },

  block: {
    h2: ({ children }) => <h2 className="text-2xl font-bold text-coffee-dark mt-8 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-semibold text-coffee-dark mt-6 mb-3">{children}</h3>,
    h4: ({ children }) => <h4 className="text-lg font-medium text-coffee-dark mt-4 mb-2">{children}</h4>,
    blockquote: ({ children }) => <blockquote className="border-l-4 border-coffee-light pl-6 py-4 my-6 bg-coffee-light/5 italic text-lg">{children}</blockquote>,
    normal: ({ children }) => <p className="text-gray-700 leading-relaxed mb-4">{children}</p>,
  },

  list: {
    bullet: ({ children }) => <ul className="list-disc list-outside pl-6 mb-6 space-y-2 text-gray-700">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal list-outside pl-6 mb-6 space-y-2 text-gray-700">{children}</ol>,
  },

  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed pl-1 marker:text-coffee-medium">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed pl-1 marker:text-coffee-medium marker:font-semibold">{children}</li>,
  },

  marks: {
    strong: ({ children }) => <strong className="font-semibold text-coffee-dark">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">{children}</code>,
    underline: ({ children }) => <u className="underline">{children}</u>,
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
  const breadcrumbs = generateBreadcrumbs(`/blog/${params.slug}`, {
    [params.slug]: post.title,
  });

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
    <>
      <StructuredData type="blog" data={post} />
      <StructuredData type="breadcrumb" data={{ breadcrumbs }} />
      <div className="min-h-screen bg-white">
        {/* Breadcrumb Header Section */}
        <section className="relative h-[80px] bg-gradient-to-br from-coffee-dark to-cocoa-dark text-white"></section>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-4 py-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex space-x-2 text-sm">
              {breadcrumbs.map((item, index) => (
                <li key={index} className="flex items-center">
                  {index > 0 && <span className="mr-2">/</span>}
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-primary font-medium line-clamp-1" aria-current="page">
                      {item.name.length > 50 ? item.name.substring(0, 50) + "..." : item.name}
                    </span>
                  ) : (
                    <a href={item.url} className="text-muted-foreground hover:text-primary line-clamp-1">
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          {/* Featured Image */}
          {post.mainImage?.asset?.url && (
            <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-8">
              <Image src={post.mainImage.asset.url} alt={post.title} fill className="object-cover" priority />
            </div>
          )}

          {/* Article Header - Below Image */}
          <header className="mb-8">
            {/* Title */}
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-coffee-dark mb-4 leading-tight">{post.title}</h1>

            {/* Excerpt */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">{post.excerpt}</p>

            {/* Article Meta Info */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              </div>

              {/* Share Button */}
              <ShareButton title={post.title} excerpt={post.excerpt} className="p-0 h-auto text-muted-foreground hover:text-coffee-dark" />
            </div>
          </header>

          {/* Article Body Content */}
          <div className="prose prose-lg max-w-none">{post.body && <PortableText value={post.body} components={portableTextComponents} />}</div>

          {/* Article Footer */}
          <footer className="mt-12 pt-8">
            {/* Navigation between articles */}
            <ArticleNavigation previousPost={post.previousPost} nextPost={post.nextPost} />
          </footer>
        </article>

        {/* Related Posts */}
        {filteredRelatedPosts.length > 0 && (
          <section className="bg-coffee-light/5 py-16">
            <BlogSection posts={filteredRelatedPosts} title="Related Articles" subtitle="Discover more coffee & cocoa stories from us" showAllButton={true} limit={3} />
          </section>
        )}
      </div>
    </>
  );
}
