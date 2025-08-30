import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-coffee-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-12">
          {/* Company Info - Lebih lebar */}
          <div className="md:col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-gold to-coffee-medium rounded-full flex items-center justify-center">
                <Image
                  src="/logo.png" // Replace with your image path
                  alt="Harika Nusantara Logo"
                  width={65} // Adjust size to fit nicely inside the 40x40 div
                  height={65}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Harika Nusantara</h3>
                <p className="text-coffee-light text-sm">Premium Coffee & Cocoa</p>
              </div>
            </div>
            <p className="text-coffee-light mb-4">Trusted exporter of premium-quality Indonesian coffee and cocoa, sourcing the finest beans from Java, Sumatra, and Sulawesi for international markets.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-coffee-light hover:text-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-coffee-light hover:text-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-coffee-light hover:text-gold transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1 lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-coffee-light hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-coffee-light hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-coffee-light hover:text-gold transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="/export-process" className="text-coffee-light hover:text-gold transition-colors">
                  Export Process
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-coffee-light hover:text-gold transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="md:col-span-1 lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products#coffee" className="text-coffee-light hover:text-gold transition-colors">
                  Arabica Coffee Beans
                </Link>
              </li>
              <li>
                <Link href="/products#coffee" className="text-coffee-light hover:text-gold transition-colors">
                  Robusta Coffee Beans
                </Link>
              </li>
              <li>
                <Link href="/products#cocoa" className="text-coffee-light hover:text-gold transition-colors">
                  Premium Cocoa Beans
                </Link>
              </li>
              <li>
                <Link href="/products#cocoa" className="text-coffee-light hover:text-gold transition-colors">
                  Cocoa Powder
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-coffee-light hover:text-gold transition-colors">
                  View All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1 lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <p className="text-coffee-light">Semarang, Central Java, Indonesia</p>
              </div>
              <div className="flex items-center space-x-3">
                <p className="text-coffee-light">+90 542 179 3483</p>
              </div>
              <div className="flex items-center space-x-3">
                <p className="text-coffee-light">info@harikanusantara.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-coffee-medium mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-coffee-light text-sm">© 2024 Harika Nusantara. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-coffee-light hover:text-gold transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-coffee-light hover:text-gold transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
