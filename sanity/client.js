import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

// Fallback values
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "shcnwc6v";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";
const token = process.env.SANITY_WRITE_TOKEN || "skzdNFXjl6gTVyHwCY5sfSeGm4MzjPfzmDwPszao0F3zNVpuyeKU4VKyognApqJ9PnG5FwmQI11TxXYPZ0pdgMoUswSQzqPF4LDn2TK1a9eZsGTOAAVgMqAZV8vUXfLvMLpMDPlXoRys7bcCxYu5Bt89G2Lx60r8fjX6OA0czmGRFUy5xuhr";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Keep false during development
  perspective: "published",
  stega: false,
});

const builder = imageUrlBuilder(client);

export function urlForImage(source) {
  if (!source) return null;

  try {
    return builder.image(source);
  } catch (error) {
    console.error("Error building image URL:", error);
    return null;
  }
}

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false, // Don't use CDN for writes
});

// Test connection function
export async function testConnection() {
  try {
    const result = await client.fetch(`*[_type == "siteSettings"]`);
    console.log("✅ Connection successful:", result);
    return result;
  } catch (error) {
    console.error("❌ Connection failed:", error);
    throw error;
  }
}
