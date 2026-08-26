import React from "react";
import { AnimatedReveal } from "../shared/AnimatedReveal";
import { Button } from "../ui/Button";
import { WhatsAppIcon } from "../ui/WhatsAppIcon";
import { siteConfig } from "../../config/site.config";

export const CtaBanner: React.FC = () => {
  return (
    <section className="section-padding py-16 lg:py-24 bg-brand-green-900 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 border-[40px] border-white rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 border-[60px] border-brand-gold-500 rounded-full translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="section-container relative z-10 text-center max-w-4xl mx-auto">
        <AnimatedReveal>
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-brand-gold-500 font-body text-sm font-semibold mb-6">
            Promo Terbatas
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
            Wujudkan Hunian Impian Anda Hari Ini!
          </h2>
          
          <p className="text-lg text-white/80 font-body mb-10 max-w-2xl mx-auto leading-relaxed">
            Unit sangat terbatas. Jangan lewatkan kesempatan mendapatkan rumah di Bukit Zamrud dengan DP hanya 1 Juta Rupiah all-in.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="secondary"
              size="lg"
              asLink
              href={siteConfig.contact.whatsappUrl(siteConfig.whatsappMessages.hero)}
              className="w-full sm:w-auto min-w-[240px]"
            >
              <WhatsAppIcon className="w-5 h-5 mr-2" />
              Hubungi Marketing
            </Button>
            <Button
              variant="outline"
              size="lg"
              asLink
              href="/kalkulator-kpr"
              className="w-full sm:w-auto min-w-[240px] border-white/30 text-white hover:bg-white hover:text-brand-green-900"
            >
              Simulasi Cicilan KPR
            </Button>
          </div>
          
          <p className="mt-8 text-sm text-white/60 font-body">
            *Syarat & ketentuan berlaku. Tim marketing kami siap membantu proses pengajuan KPR Anda.
          </p>
        </AnimatedReveal>
      </div>
    </section>
  );
};
