import React from "react";
import { CheckCircle2 } from "lucide-react";
import { AnimatedReveal } from "../shared/AnimatedReveal";
import { SectionHeading } from "../ui/SectionHeading";

export const WhyUsSection: React.FC = () => {
  const reasons = [
    {
      title: "Lokasi Strategis",
      description: "Hanya 15 menit ke Kampus IPB Dramaga dan pusat kota Bogor.",
    },
    {
      title: "Fasilitas Ibadah",
      description: "Dilengkapi dengan Masjid Jami' di dalam kompleks perumahan.",
    },
    {
      title: "Harga Terjangkau",
      description: "DP hanya 1 Juta Rupiah all-in, bebas biaya surat-surat.",
    },
    {
      title: "KPR Subsidi FLPP",
      description: "Didukung program pemerintah dengan cicilan tetap hingga lunas.",
    },
    {
      title: "Legalitas Aman",
      description: "Sertifikat Hak Guna Bangunan (SHGB) siap balik nama.",
    },
    {
      title: "Bebas Banjir",
      description: "Kontur tanah perbukitan yang asri dan terhindar dari banjir.",
    },
  ];

  return (
    <section className="section-padding section-y-padding bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Image Side (60% on desktop) */}
          <div className="lg:col-span-7 relative">
            <AnimatedReveal direction="right">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/hero/hero-rumah.jpg"
                  alt="Lingkungan Bukit Zamrud"
                  className="w-full h-[400px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-brand-green-900/10" />
              </div>
              
              {/* Decorative Card */}
              <div className="absolute -bottom-6 -right-6 lg:-bottom-10 lg:-right-10 bg-white p-6 rounded-2xl shadow-xl max-w-[240px] hidden sm:block">
                <div className="flex gap-3 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-brand-gold-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm font-body text-neutral-900 font-medium">
                  "Proses KPR sangat dibantu sampai serah terima kunci."
                </p>
              </div>
            </AnimatedReveal>
          </div>

          {/* Content Side (40% on desktop) */}
          <div className="lg:col-span-5 lg:pl-8">
            <AnimatedReveal direction="left">
              <SectionHeading
                label="Keunggulan Kami"
                title="Mengapa Memilih Bukit Zamrud?"
                align="left"
                className="mb-8"
              />
              
              <div className="space-y-6">
                {reasons.map((reason, index) => (
                  <AnimatedReveal
                    key={reason.title}
                    delay={0.1 * index}
                    direction="up"
                  >
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle2 className="w-6 h-6 text-brand-green-500" />
                      </div>
                      <div>
                        <h4 className="text-lg font-display font-semibold text-brand-green-900 mb-1">
                          {reason.title}
                        </h4>
                        <p className="text-body text-neutral-500 leading-relaxed">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </AnimatedReveal>
                ))}
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
