"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import { services } from "@/lib/services";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/nos-services", label: "Nos Services" },
  { href: "/references", label: "Références" },
  { href: "/actualites", label: "Actualités" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = scrolled
    ? "text-[#0A0A0A]/90 hover:text-[#C9A84C]"
    : "text-white/90 hover:text-[#C9A84C]";
  const menuIconClass = scrolled ? "text-[#0A0A0A]" : "text-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-16 h-20 flex flex-col justify-center">
        <div className="flex items-center justify-between w-full">
          <Link
            href="/"
            className="flex items-center justify-center flex-shrink-0 self-center max-h-20 overflow-hidden"
          >
            <Image
              src="/logo.png"
              alt="J & J Consulting SARL"
              width={200}
              height={64}
              className={`max-h-16 w-auto object-contain transition-all duration-300 ${
                scrolled ? "brightness-0" : "brightness-100"
              }`}
              style={{ maxHeight: "64px" }}
              sizes="200px"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.href === "/nos-services" ? (
                <div key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className={`transition-colors text-sm font-medium ${linkClass}`}
                  >
                    {link.label}
                  </Link>
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white rounded-lg shadow-xl py-3 min-w-[280px] border border-gray-100">
                      {services.slice(0, 6).map((s) => (
                        <Link
                          key={s.slug}
                          href={`/nos-services#${s.slug}`}
                          className="block px-4 py-2 text-gray-800 hover:bg-[#F5F5F5] hover:text-[#C9A84C] text-sm transition-colors"
                        >
                          {s.title}
                        </Link>
                      ))}
                      <Link
                        href="/nos-services"
                        className="block px-4 py-2 text-[#C9A84C] font-semibold text-sm border-t border-gray-100 mt-2"
                      >
                        Voir tous les services →
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors text-sm font-medium ${linkClass}`}
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C9A84C] hover:bg-[#E4C97A] text-black px-5 py-2 text-xs font-semibold tracking-widest uppercase transition-colors"
            >
              Demander un devis
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 ${menuIconClass}`}
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div
            className={`lg:hidden py-4 border-t transition-colors ${
              scrolled ? "border-gray-200" : "border-white/20"
            }`}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm ${linkClass}`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#C9A84C] text-black px-5 py-2 text-xs font-semibold tracking-widest uppercase text-center"
              >
                Demander un devis
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
