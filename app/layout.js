import Navigation from "@/components/layout/Navbar";
import "./globals.css";
import { Archivo } from "next/font/google";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/home/WhatsAppButton";
import PageWrapper from "@/components/layout/PageWrapper";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["400", "500", "600", "700"], // Pastikan weight yang dibutuhkan ada
  display: "swap",
});

export const metadata = {
  title: "Harika Nusantara - Premium Indonesian Coffee & Cocoa Exporter",
  description: "Harika Nusantara is a trusted exporter of premium-quality Indonesian coffee and cocoa. We source the finest Arabica, Robusta coffee beans and cocoa products from Java, Sumatra, and Sulawesi for international markets.",
  keywords: "Indonesian coffee, cocoa export, Arabica beans, Robusta coffee, cocoa powder, Java coffee, Sumatra coffee, Sulawesi coffee, coffee exporter, cocoa exporter, premium coffee beans",
  authors: [{ name: "Harika Nusantara" }],
  creator: "Harika Nusantara",
  publisher: "Harika Nusantara",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://harika-nusantara.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Harika Nusantara - Premium Indonesian Coffee & Cocoa Exporter",
    description: "Trusted exporter of premium-quality Indonesian coffee and cocoa. Sourcing the finest beans from Java, Sumatra, and Sulawesi for international markets.",
    url: "https://harika-nusantara.com",
    siteName: "Harika Nusantara",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Harika Nusantara - Indonesian Coffee & Cocoa",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harika Nusantara - Premium Indonesian Coffee & Cocoa Exporter",
    description: "Trusted exporter of premium-quality Indonesian coffee and cocoa from Indonesia.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${archivo.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#8B4513" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Navigation />
        <PageWrapper>{children}</PageWrapper>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
