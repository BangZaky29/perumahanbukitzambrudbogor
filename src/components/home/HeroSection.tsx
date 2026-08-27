import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { HeroFloatingBadge } from "./HeroFloatingBadge";
import { siteConfig } from "../../config/site.config";
import { formatCurrencyCompact } from "../../lib/utils/formatCurrency";

export const HeroSection: React.FC = () => {
  const handleScrollToUnit = () => {
    const unitSection = document.getElementById("showcase-unit");
    if (unitSection) {
      unitSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/hero-rumah.jpg"
          alt="Perumahan Bukit Zamrud"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Floating Badges */}
      <div className="absolute inset-0 z-10 hidden md:block max-w-7xl mx-auto pointer-events-none">
        <div className="relative w-full h-full">
          <HeroFloatingBadge
            label="DP 1JT ALL IN"
            className="top-[25%] right-[15%] animate-float"
            delay={0.2}
          />
          <HeroFloatingBadge
            label="TYPE 30/60"
            className="top-[45%] right-[40%] animate-float-delayed"
            delay={0.4}
          />
          <HeroFloatingBadge
            label={`Mulai ${formatCurrencyCompact(siteConfig.pricing.hargaRumah)}`}
            className="top-[45%] right-[25%] animate-float"
            delay={0.6}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 section-container section-padding w-full mt-16 md:mt-0">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >


          <h1 className="text-hero text-white mb-6">
            {siteConfig.brand.tagline}
          </h1>

          <p className="text-lg md:text-xl font-body font-normal text-white/90 mb-8 md:mb-10 max-w-2xl leading-relaxed">
            Miliki rumah pertama impian Anda di lokasi strategis Tegal Waru, Ciampea. 
            Lingkungan asri, dekat kampus, dengan cicilan mulai Rp1 Jutaan.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button
              variant="secondary"
              size="lg"
              asLink
              href={siteConfig.contact.whatsappUrl(siteConfig.whatsappMessages.hero)}
              className="w-full sm:w-auto"
            >
              Amankan Unit Sekarang
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleScrollToUnit}
              className="w-full sm:w-auto border-white/30 text-white hover:bg-white hover:text-brand-green-900"
            >
              Lihat Spesifikasi
            </Button>
          </div>

          {/* Mobile-only badges (flows naturally below buttons) */}
          <div className="mt-8 flex justify-center gap-3 px-4 md:hidden pointer-events-none">
            <div className="flex flex-wrap justify-center gap-3">
               <HeroFloatingBadge label="DP 1JT" className="relative static-transform" delay={0.2} />
               <HeroFloatingBadge label="TYPE 30/60" className="relative static-transform" delay={0.4} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
