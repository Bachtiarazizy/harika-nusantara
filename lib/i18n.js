// lib/i18n.js
export const defaultLocale = "id";
export const locales = ["id", "en"];

// Translations untuk berbagai bagian website
export const translations = {
  id: {
    // Navigation
    home: "Beranda",
    about: "Tentang",
    blog: "Blog",
    contact: "Kontak",

    // Blog Page
    blogTitle: "Cerita dari Ladang",
    blogSubtitle: "Temukan kisah-kisah inspiratif dari petani kopi dan kakao Indonesia, tips pertanian berkelanjutan, dan perjalanan dari ladang ke cangkir Anda.",
    searchPlaceholder: "Cari artikel...",
    allArticles: "Semua Artikel",
    searchResults: "Hasil Pencarian",
    noArticlesFound: "Tidak ada artikel ditemukan",
    noArticlesFoundDescription: 'Tidak ada artikel yang cocok dengan pencarian "{query}". Coba gunakan kata kunci yang berbeda atau jelajahi semua artikel kami.',
    viewAllArticles: "Lihat Semua Artikel",
    showAllArticles: "Tampilkan semua artikel",
    found: "Ditemukan",
    articlesFor: "artikel untuk",
    readMore: "Baca Selengkapnya",
    readTime: "menit baca",

    // Meta descriptions
    blogMetaTitle: "Blog - Cerita dari Ladang Kopi & Kakao Indonesia",
    blogMetaDescription: "Temukan kisah-kisah inspiratif dari petani kopi dan kakao Indonesia, tips pertanian berkelanjutan, dan perjalanan dari ladang ke cangkir Anda.",

    // Common
    loading: "Memuat...",
    error: "Terjadi kesalahan",
    tryAgain: "Coba Lagi",
  },

  en: {
    // Navigation
    home: "Home",
    about: "About",
    blog: "Blog",
    contact: "Contact",

    // Blog Page
    blogTitle: "Stories from the Farm",
    blogSubtitle: "Discover inspiring stories from Indonesian coffee and cocoa farmers, sustainable farming tips, and the journey from farm to your cup.",
    searchPlaceholder: "Search articles...",
    allArticles: "All Articles",
    searchResults: "Search Results",
    noArticlesFound: "No articles found",
    noArticlesFoundDescription: 'No articles match your search for "{query}". Try different keywords or explore all our articles.',
    viewAllArticles: "View All Articles",
    showAllArticles: "Show all articles",
    found: "Found",
    articlesFor: "articles for",
    readMore: "Read More",
    readTime: "min read",

    // Meta descriptions
    blogMetaTitle: "Blog - Stories from Indonesian Coffee & Cocoa Farms",
    blogMetaDescription: "Discover inspiring stories from Indonesian coffee and cocoa farmers, sustainable farming tips, and the journey from farm to your cup.",

    // Common
    loading: "Loading...",
    error: "An error occurred",
    tryAgain: "Try Again",
  },
};

// Hook untuk menggunakan translations
export function useTranslations(locale = defaultLocale) {
  return translations[locale] || translations[defaultLocale];
}

// Helper function untuk mendapatkan text berdasarkan locale
export function getTranslation(key, locale = defaultLocale, variables = {}) {
  const t = translations[locale] || translations[defaultLocale];
  let text = t[key] || key;

  // Replace variables in text (e.g., "{query}" -> actual query)
  Object.keys(variables).forEach((variable) => {
    text = text.replace(`{${variable}}`, variables[variable]);
  });

  return text;
}

// Helper untuk mengecek apakah locale valid
export function isValidLocale(locale) {
  return locales.includes(locale);
}
