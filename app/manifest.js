// app/manifest.js - Web App Manifest Generator
export default function manifest() {
  return {
    name: "Harika Nusantara - Indonesian Coffee & Cocoa Supplier",
    short_name: "Harika Nusantara",
    description: "Leading Indonesian coffee and cocoa supplier & exporter for international markets",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#8B4513",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "apple-touch-icon",
      },
    ],
    categories: ["business", "food", "agriculture"],
    lang: "en-US",
    dir: "ltr",
    orientation: "portrait-primary",
  };
}
