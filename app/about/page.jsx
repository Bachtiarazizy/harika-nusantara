import { generatePageMetadata } from "@/lib/metadata";
import AboutComponent from "@/components/about/about-component";

// Generate metadata using template
export const metadata = generatePageMetadata("about");

export default function AboutPage() {
  return <AboutComponent />;
}
