import AboutSection from "@/components/home/AboutSection";
import BlogSection from "@/components/home/BlogSection";
import CTASection from "@/components/home/CtaSection";
import HeroSection from "@/components/home/HeroSection";
import ImageSection from "@/components/home/ImageSection";
import ProductShowcaseSection from "@/components/home/ProductShowcaseSection";
import ValueSection from "@/components/home/ValueSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import LocalBusinessSchema from "@/components/seo/LocalBusiness";
import PageSEO from "@/components/seo/PageSEO";
import { getLatestPosts } from "@/lib/sanityQueries";
import { seoUtils } from "@/lib/seo-utils";

export default async function HomePage() {
  const latestPosts = await getLatestPosts(3);
  const breadcrumbs = [{ name: "Home", url: "https://harika-nusantara.com/" }];
  return (
    <>
      <PageSEO pageType="homepage" breadcrumbs={breadcrumbs} />
      <LocalBusinessSchema />

      {/* Main Content dengan semantic HTML */}
      <main className="min-h-screen" role="main">
        {/* Hero Section - Section utama */}
        <section aria-labelledby="hero-heading">
          <HeroSection />
        </section>

        {/* About Section */}
        <section aria-labelledby="about-heading">
          <AboutSection />
        </section>

        {/* Image Section */}
        <section aria-labelledby="image-heading">
          <ImageSection />
        </section>

        {/* Value Section */}
        <section aria-labelledby="value-heading">
          <ValueSection />
        </section>

        {/* Product Showcase Section */}
        <section aria-labelledby="products-heading">
          <ProductShowcaseSection />
        </section>

        {/* Why Choose Us Section */}
        <section aria-labelledby="why-choose-heading">
          <WhyChooseUsSection />
        </section>

        {/* Blog Section */}
        <section aria-labelledby="blog-heading">
          <BlogSection posts={latestPosts} title="Latest From Our Blog" subtitle="Discover stories from Indonesian coffee farms and cocoa plantations" showAllButton={true} limit={3} />
        </section>

        {/* Call to Action Section */}
        <section aria-labelledby="cta-heading">
          <CTASection />
        </section>
      </main>
    </>
  );
}
