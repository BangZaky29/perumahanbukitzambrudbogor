import React from "react";
import { AnimatedReveal } from "../shared/AnimatedReveal";
import { PartnerBadge } from "../layout/PartnerBadge";

export const PartnershipSection: React.FC = () => {
  return (
    <section className="section-padding py-12 bg-cream-50 border-y border-neutral-100">
      <div className="section-container">
        <AnimatedReveal>
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            <h3 className="text-sm font-body font-semibold text-neutral-400 uppercase tracking-widest mb-6">
              Dipasarkan Secara Resmi Oleh
            </h3>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              {/* Partner 1 (Nuansa Properti) */}
              <div className="scale-110">
                <PartnerBadge />
              </div>
              
              {/* If there are more partners like banks for KPR, they would go here */}
              {/* 
              <img src="/logo/btn.png" alt="Bank BTN" className="h-10 w-auto object-contain" />
              <img src="/logo/bri.png" alt="Bank BRI" className="h-10 w-auto object-contain" /> 
              */}
            </div>
            
            <p className="mt-8 text-xs font-body text-neutral-400 max-w-lg leading-relaxed">
              Tim marketing Nuansa Properti siap membantu Anda mulai dari survei lokasi, pengumpulan berkas, hingga proses akad kredit KPR di bank.
            </p>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
};
