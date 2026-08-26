import React from "react";
// Link import removed
import { Bed, Bath, Car, Maximize, ArrowRight } from "lucide-react";
import { AnimatedReveal } from "../shared/AnimatedReveal";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { unitSpecs } from "../../data/unit-spec.data";
import { formatCurrencyCompact } from "../../lib/utils/formatCurrency";

export const UnitShowcaseSection: React.FC = () => {
  const unit = unitSpecs[0]; // Currently only one unit type (30/60)

  return (
    <section id="showcase-unit" className="section-padding section-y-padding bg-cream-50">
      <div className="section-container">
        <AnimatedReveal>
          <SectionHeading
            label="Tipe Unit"
            title="Tipe 30/60 – Rumah Impian Anda"
            description="Desain modern minimalis dengan tata ruang optimal untuk kenyamanan keluarga kecil Anda."
          />
        </AnimatedReveal>

        <div className="max-w-5xl mx-auto">
          <AnimatedReveal delay={0.2}>
            <Card padding="none" className="group">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Image Area */}
                <div className="relative h-[300px] md:h-auto overflow-hidden">
                  <img
                    src={unit.images[0]}
                    alt={unit.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Coming Soon Placeholder Overlay */}
                  <div className="absolute inset-0 bg-brand-green-900/40 flex items-center justify-center backdrop-blur-[2px] pointer-events-none">
                    <span className="text-white font-display font-bold text-lg md:text-xl tracking-widest uppercase border-4 border-white/80 px-6 py-3 rounded-lg -rotate-12 bg-black/20 shadow-sm">
                      Coming Soon
                    </span>
                  </div>

                  <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                    <Badge variant="gold">Best Seller</Badge>
                    <Badge variant="green">Ready Stock</Badge>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 md:p-10 flex flex-col justify-between bg-white">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-display font-bold text-brand-green-900 mb-2">
                          {unit.name}
                        </h3>
                        <p className="text-brand-green-500 font-body font-semibold">
                          Mulai {formatCurrencyCompact(unit.harga)}
                        </p>
                      </div>
                    </div>

                    <p className="text-body text-neutral-500 mb-8 line-clamp-3">
                      Hadir dengan konsep rumah tumbuh, Tipe 30/60 memberikan ruang sisa di bagian belakang yang luas untuk pengembangan di masa depan.
                    </p>

                    {/* Quick Specs Grid */}
                    <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-cream-50 rounded-lg text-brand-green-700">
                          <Bed className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs text-neutral-400 font-body uppercase">Kamar Tidur</p>
                          <p className="font-semibold text-neutral-900">{unit.kamarTidur}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-cream-50 rounded-lg text-brand-green-700">
                          <Bath className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs text-neutral-400 font-body uppercase">Kamar Mandi</p>
                          <p className="font-semibold text-neutral-900">{unit.kamarMandi}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-cream-50 rounded-lg text-brand-green-700">
                          <Maximize className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs text-neutral-400 font-body uppercase">Luas (L/B)</p>
                          <p className="font-semibold text-neutral-900">{unit.luasTanah} / {unit.luasBangunan} m²</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-cream-50 rounded-lg text-brand-green-700">
                          <Car className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs text-neutral-400 font-body uppercase">Carport</p>
                          <p className="font-semibold text-neutral-900">{unit.carport ? "1 Mobil" : "-"}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-100">
                    <Button variant="primary" className="flex-1" asLink href={`/unit/${unit.id}`}>
                      Lihat Spesifikasi Detail
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" className="flex-1" asLink href="/kalkulator-kpr">
                      Simulasi KPR
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
};
