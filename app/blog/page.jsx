// app/blog/page.js

import BlogSection from "@/components/home/BlogSection";
import ClearSearchButton from "@/components/ui/CleanSearchButton";
import { Button } from "@/components/ui/Index";
import SearchForm from "@/components/ui/SearchForm";
import { getAllPosts } from "@/lib/sanityQueries";

// Generate metadata for SEO
export const metadata = {
  title: "Blog - Cerita dari Kebun Kopi & Kakao Indonesia",
  description: "Temukan cerita menarik dari petani kopi dan kakao Indonesia, tips pertanian berkelanjutan, dan perjalanan dari kebun hingga cangkir Anda.",
  openGraph: {
    title: "Blog - Cerita dari Kebun Kopi & Kakao Indonesia",
    description: "Temukan cerita menarik dari petani kopi dan kakao Indonesia, tips pertanian berkelanjutan, dan perjalanan dari kebun hingga cangkir Anda.",
    type: "website",
  },
};

export default async function BlogIndexPage({ searchParams }) {
  // Get all posts
  const allPosts = await getAllPosts();

  // Simple search functionality (you can enhance this)
  const searchQuery = searchParams?.search || "";
  const filteredPosts = searchQuery ? allPosts.filter((post) => post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())) : allPosts;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-coffee-light/10 to-coffee-dark/5 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-coffee-dark mb-6">Cerita dari Kebun</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">Temukan kisah-kisah inspiratif dari petani kopi dan kakao Indonesia, tips pertanian berkelanjutan, dan perjalanan dari kebun hingga cangkir Anda</p>

          {/* Search Bar */}
          <SearchForm defaultValue={searchQuery} />
        </div>
      </section>

      {/* Search Results Info */}
      {searchQuery && (
        <section className="max-w-6xl mx-auto px-4 py-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800">{filteredPosts.length > 0 ? `Ditemukan ${filteredPosts.length} artikel untuk "${searchQuery}"` : `Tidak ada artikel ditemukan untuk "${searchQuery}"`}</p>
            {searchQuery && (
              <ClearSearchButton variant="link" className="p-0 mt-2 text-blue-600 hover:text-blue-800">
                Tampilkan semua artikel
              </ClearSearchButton>
            )}
          </div>
        </section>
      )}

      {/* Blog Posts */}
      <section className="py-16">
        {filteredPosts.length > 0 ? (
          <BlogSection posts={filteredPosts} title={searchQuery ? "Hasil Pencarian" : "Semua Artikel"} subtitle={searchQuery ? "" : "Eksplorasi koleksi lengkap cerita kami"} showAllButton={false} limit={filteredPosts.length} />
        ) : (
          <div className="max-w-6xl mx-auto px-4 text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="mb-6">
                <Search className="h-16 w-16 text-gray-400 mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{searchQuery ? "Artikel tidak ditemukan" : "Belum ada artikel"}</h3>
              <p className="text-gray-600 mb-8">
                {searchQuery ? `Tidak ada artikel yang sesuai dengan pencarian "${searchQuery}". Coba kata kunci lain atau jelajahi semua artikel kami.` : "Saat ini belum ada artikel yang tersedia. Silakan kembali lagi nanti."}
              </p>
              {searchQuery && <ClearSearchButton variant="primary">Lihat Semua Artikel</ClearSearchButton>}
            </div>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-coffee-dark text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ingin Berkolaborasi?</h2>
          <p className="text-xl text-coffee-light mb-8">Punya cerita menarik tentang kopi atau kakao? Mari berbagi kisah Anda dengan komunitas kami.</p>
          <Button variant="secondary" size="lg">
            Hubungi Kami
          </Button>
        </div>
      </section>
    </div>
  );
}
