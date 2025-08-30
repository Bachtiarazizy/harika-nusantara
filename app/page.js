import AboutSection from "@/components/home/AboutSection";
import BlogSection from "@/components/home/BlogSection";
import CTASection from "@/components/home/CtaSection";
import HeroSection from "@/components/home/HeroSection";
import ProductShowcaseSection from "@/components/home/ProductShowcaseSection";
import ValueSection from "@/components/home/ValueSection";
import VisionSection from "@/components/home/VisionSection";
import WhyUsComponent from "@/components/home/WhyChooseUsSection";
import LocalBusinessSchema from "@/components/seo/LocalBusiness";
import PageSEO from "@/components/seo/PageSEO";
import { getLatestPosts } from "@/lib/sanityQueries";

export default async function HomePage() {
  const latestPosts = await getLatestPosts(3);
  const breadcrumbs = [{ name: "Home", url: "https://harika-nusantara.com/" }];
  return (
    <>
      <PageSEO pageType="homepage" breadcrumbs={breadcrumbs} />
      <LocalBusinessSchema />

      {/* Main Content dengan semantic HTML */}
      <main className="min-h-screen" role="main">
        <HeroSection />
        <AboutSection />
        <ValueSection />
        <VisionSection />
        <WhyUsComponent />
        <ProductShowcaseSection />
        <BlogSection posts={latestPosts} title="Latest From Our Blog" subtitle="Discover stories from Indonesian coffee farms and cocoa plantations" showAllButton={true} limit={3} />
        <CTASection />
      </main>
    </>
  );
}
