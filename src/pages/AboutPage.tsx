import React, { useEffect } from "react";
import { Building2, Target, ShieldCheck, MapPin } from "lucide-react";
import { SEO } from "../components/shared/SEO";
import { SectionHeading } from "../components/ui/SectionHeading";
import { CtaBanner } from "../components/home/CtaBanner";
import { AnimatedReveal } from "../components/shared/AnimatedReveal";
import { siteConfig } from "../config/site.config";

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 bg-cream-50 flex flex-col">
      <SEO title="Tentang Kami" />
      {/* Hero Section */}
      <section className="section-container pb-12">
        <AnimatedReveal>
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-brand-green-100 rounded-2xl text-brand-green-900">
              <Building2 className="w-8 h-8" />
            </div>
          </div>
          <SectionHeading
            label="Tentang Kami"
            title="Mewujudkan Hunian Idaman Keluarga Indonesia"
            description="Bukit Zamrud adalah perumahan bersubsidi berkualitas tinggi yang dibangun dengan dedikasi untuk menyediakan lingkungan yang aman, nyaman, dan strategis."
          />
        </AnimatedReveal>
      </section>

      {/* Main Content */}
      <section className="section-container pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimatedReveal delay={0.2} direction="right">
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-square md:aspect-video lg:aspect-square">
              <img
                src="/images/hero/hero-rumah.jpg"
                alt="Lingkungan Bukit Zamrud"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-green-900/20"></div>
              
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-md rounded-2xl">
                <p className="text-brand-green-900 font-display font-semibold text-xl mb-1">
                  Dikembangkan oleh
                </p>
                <p className="text-neutral-600 font-body">
                  {siteConfig.brand.developer}
                </p>
              </div>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.4} direction="left">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-display font-bold text-brand-green-900 mb-4">
                  Visi Kami
                </h3>
                <p className="text-body text-neutral-600 font-body">
                  Menjadi pelopor perumahan bersubsidi yang tidak kompromi pada kualitas bangunan dan fasilitas. Kami percaya setiap keluarga Indonesia berhak mendapatkan hunian yang layak dengan harga yang terjangkau.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-brand-green-900 mb-4">
                  Mengapa Memilih Kami?
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="mt-1 w-10 h-10 rounded-full bg-brand-green-100 flex items-center justify-center flex-shrink-0 text-brand-green-700">
                      <Target className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900">Kualitas Komersil</h4>
                      <p className="text-sm text-neutral-600 font-body mt-1">Spesifikasi bangunan standar komersil meski berstatus rumah subsidi.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1 w-10 h-10 rounded-full bg-brand-green-100 flex items-center justify-center flex-shrink-0 text-brand-green-700">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900">Lokasi Berkembang</h4>
                      <p className="text-sm text-neutral-600 font-body mt-1">Terletak di kawasan yang terus berkembang di Ciampea, dekat dengan fasilitas publik.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1 w-10 h-10 rounded-full bg-brand-green-100 flex items-center justify-center flex-shrink-0 text-brand-green-700">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900">Legalitas Terjamin</h4>
                      <p className="text-sm text-neutral-600 font-body mt-1">Sertifikat dan perizinan lengkap, proses KPR didukung oleh bank pemerintah.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      {/* CTA Banner */}
      <div className="mt-auto">
        <CtaBanner />
      </div>
    </div>
  );
};

export default AboutPage;
