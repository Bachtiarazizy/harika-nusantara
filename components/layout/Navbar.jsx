"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Our Products" },
    { href: "/export-process", label: "Export Process" },
    { href: "/blog", label: "Blog" },
  ];

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${isScrolled || isMenuOpen ? "bg-white shadow-lg" : "bg-transparent"}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2 z-[10000] relative">
              <div className="w-10 h-10 bg-gradient-to-br from-[#e49e35] to-[#8B4513] rounded-full flex items-center justify-center">
                <Image src="/images/logo-09.png" alt="Harika Nusantara Logo" width={65} height={65} className="object-contain" />
              </div>
              <h1 className={`text-lg hidden md:block font-bold transition-colors ${isScrolled || isMenuOpen ? "text-[#233F2E]" : "text-white"}`}>HARIKA NUSANTARA</h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link key={item.href} href={item.href} className={`font-medium relative group transition-colors ${isActive ? "text-[#e49e35]" : isScrolled ? "text-[#233F2E] hover:text-[#e49e35]" : "text-white hover:text-[#e49e35]"}`}>
                    {item.label}
                    <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-200 ${isActive ? "w-full bg-[#e49e35]" : "w-0 bg-[#e49e35] group-hover:w-full"}`}></span>
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className={`px-6 py-2 border-2 rounded-md text-sm font-medium transition-all ${
                  isScrolled ? "border-[#e49e35] text-[#e49e35] hover:bg-[#e49e35] hover:text-white" : "border-white text-white hover:bg-white hover:text-[#233F2E]"
                }`}
              >
                REQUEST A QUOTE
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 transition-colors z-60 relative ${isScrolled || isMenuOpen ? "text-[#233F2E] hover:text-[#e49e35]" : "text-white hover:text-[#e49e35]"}`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && <div className="lg:hidden fixed inset-0 z-40 bg-black/50" onClick={() => setIsMenuOpen(false)} />}

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="pt-20 px-6 pb-6 h-full overflow-y-auto">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`font-medium py-4 px-4 rounded-lg transition-colors border-b border-gray-100 last:border-b-0 ${isActive ? "text-[#e49e35] bg-[#e49e35]/10" : "text-[#233F2E] hover:text-[#e49e35] hover:bg-gray-50"}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <Link href="/contact" className="block w-full px-6 py-3 rounded-lg font-medium text-center bg-[#e49e35] text-white hover:bg-[#d4932e] transition-all shadow-lg" onClick={() => setIsMenuOpen(false)}>
                REQUEST A QUOTE
              </Link>
            </div>

            {/* Optional: Add contact info or social links */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="text-center text-sm text-gray-600">
                <p className="font-semibold text-[#233F2E] mb-2">Get in Touch</p>
                <div className="flex justify-center space-x-4">
                  <Phone className="w-4 h-4 text-[#e49e35]" />
                  <Mail className="w-4 h-4 text-[#e49e35]" />
                  <Facebook className="w-4 h-4 text-[#e49e35]" />
                  <Instagram className="w-4 h-4 text-[#e49e35]" />
                  <Linkedin className="w-4 h-4 text-[#e49e35]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
