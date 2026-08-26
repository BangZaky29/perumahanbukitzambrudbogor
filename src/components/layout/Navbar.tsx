import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "../../lib/utils/cn";
import { Button } from "../ui/Button";
import { MobileMenu } from "./MobileMenu"; // refresh
import { siteConfig } from "../../config/site.config";

const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Tentang", href: "/tentang" },
  { label: "Unit", href: "/unit/type-30-60" },
  { label: "Kalkulator KPR", href: "/kalkulator-kpr" },
  { label: "Artikel", href: "/artikel" },
  { label: "Kontak", href: "/kontak" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Transparent only on home page when not scrolled
  const isTransparent = !isScrolled && location.pathname === "/";

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          !isTransparent
            ? "bg-brand-green-900/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="section-container section-padding">
          <div className="flex items-center justify-between">
            {/* Logo Area */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-3 group">
                <div className="bg-white p-1 rounded-lg transition-transform duration-300 group-hover:scale-105">
                  <img
                    src="/logo/logo-bukit-zamrud.png"
                    alt="Logo Bukit Zamrud"
                    className="h-9 w-auto"
                  />
                </div>
                <div className="hidden sm:block">
                  <span className="block font-display text-lg font-bold text-white leading-tight">
                    Bukit Zamrud
                  </span>
                  <span className="block text-xs text-brand-green-300 font-body">
                    Rumah Subsidi Berkualitas
                  </span>
                </div>
              </Link>
              
              {/* Divider */}
              <div className="hidden lg:block w-px h-10 bg-white/30 mx-5"></div>
              
              {/* Nuansa Properti Supported By */}
              <div className="hidden lg:flex items-center gap-2">
                <div className="bg-white p-1 rounded-md">
                  <img 
                    src="/logo/logo-nuansa-properti.png" 
                    alt="Nuansa Properti" 
                    className="h-9 w-auto object-contain"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-[10px] text-white font-body font-bold leading-none mb-0.5">Support by</span>
                  <span className="text-xs text-white font-display font-bold leading-none">NuansaProperti</span>
                </div>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={cn(
                      "px-4 py-2 rounded-lg font-body text-sm font-medium transition-all duration-200",
                      isActive
                        ? "text-brand-gold-500 bg-white/10"
                        : "text-white/80 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <Button
                variant="secondary"
                size="sm"
                asLink
                href={siteConfig.contact.whatsappUrl(
                  siteConfig.whatsappMessages.hero
                )}
                className="hidden sm:inline-flex"
              >
                Hubungi Kami
              </Button>

              <button
                className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
};
