import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { SEO } from "../components/shared/SEO";
import { SectionHeading } from "../components/ui/SectionHeading";
import { UnitShowcaseSection } from "../components/home/UnitShowcaseSection";
import { SpecListSection } from "../components/home/SpecListSection";
import { GallerySection } from "../components/home/GallerySection";
import { CtaBanner } from "../components/home/CtaBanner";
import { AnimatedReveal } from "../components/shared/AnimatedReveal";

const UnitDetailPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 bg-cream-50 flex flex-col">
      <SEO title="Detail Unit Tipe 30/60" />
      {/* Header Section */}
      <section className="section-container pb-4 md:pb-8">
        <AnimatedReveal>
          <div className="flex justify-between items-center mb-6">
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-brand-green-700 font-body font-semibold hover:text-brand-green-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Kembali ke Beranda
            </Link>
          </div>
          
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-brand-green-100 rounded-2xl text-brand-green-900">
              <Home className="w-8 h-8" />
            </div>
          </div>
          <SectionHeading
            label="Eksplorasi Ruang"
            title="Detail Unit Tipe 30/60"
            description="Pelajari lebih dalam tata ruang, fasilitas, dan spesifikasi teknis dari unit andalan kami yang dirancang optimal untuk keluarga modern."
          />
        </AnimatedReveal>
      </section>

      {/* We reuse the showcase, spec, and gallery components from Home */}
      <div className="space-y-0">
        <UnitShowcaseSection />
        <SpecListSection />
        <GallerySection />
      </div>

      {/* CTA Banner */}
      <div className="mt-auto">
        <CtaBanner />
      </div>
    </div>
  );
};

export default UnitDetailPage;
