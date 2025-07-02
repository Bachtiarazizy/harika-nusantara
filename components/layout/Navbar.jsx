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

  return (
    <>
      <nav className={`absolute top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
              <div className="">
                <h1 className="text-xl font-bold text-white">HARIKA</h1>
                <h1 className="text-xl font-bold pl-3 text-white">NUSANTARA</h1>
              </div>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link key={item.href} href={item.href} className={`font-medium relative group transition-colors ${isActive ? "text-[#AEE57E]" : "text-white hover:text-[#AEE57E]"}`}>
                    {item.label}
                    <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-200 ${isActive ? "w-full bg-[#AEE57E]" : "w-0 bg-[#AEE57E] group-hover:w-full"}`}></span>
                  </Link>
                );
              })}
              <Link href="/contact" className="px-6 py-2 border-2 border-white rounded-md text-sm font-medium transition-all bg-transparent text-white hover:bg-white hover:text-[#233F2E]">
                REQUEST A QUOTE
              </Link>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-white hover:text-[#AEE57E] transition-colors">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200 bg-white/90 backdrop-blur-sm">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => {
                  const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                  return (
                    <Link key={item.href} href={item.href} className={`font-medium py-2 transition-colors ${isActive ? "text-[#AEE57E]" : "text-[#233F2E] hover:text-[#AEE57E]"}`} onClick={() => setIsMenuOpen(false)}>
                      {item.label}
                    </Link>
                  );
                })}
                <Link href="/contact" className="px-6 py-2 rounded-lg font-medium text-center mt-4 bg-[#AEE57E] text-[#233F2E] hover:bg-white transition-all" onClick={() => setIsMenuOpen(false)}>
                  Get Quote
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
