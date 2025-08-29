import ContactComponent from "@/components/contact/contact-component";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata("contact");

export default function ContactPage() {
  return <ContactComponent />;
}
