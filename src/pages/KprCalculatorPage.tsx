import React, { useEffect } from "react";
import { Calculator } from "lucide-react";
import { SEO } from "../components/shared/SEO";
import { KprCalculator } from "../components/kpr/KprCalculator";
import { KprOfficialComparisonTable } from "../components/kpr/KprOfficialComparisonTable";
import { SectionHeading } from "../components/ui/SectionHeading";
import { CtaBanner } from "../components/home/CtaBanner";
import { AnimatedReveal } from "../components/shared/AnimatedReveal";

const KprCalculatorPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 bg-cream-50 flex flex-col">
      <SEO title="Kalkulator KPR" />
      {/* Header Section */}
      <section className="section-container pb-12">
        <AnimatedReveal>
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-brand-green-100 rounded-2xl text-brand-green-900">
              <Calculator className="w-8 h-8" />
            </div>
          </div>
          <SectionHeading
            label="Simulasi KPR"
            title="Hitung Cicilan Rumah Anda"
            description="Gunakan kalkulator di bawah ini untuk mengestimasi cicilan KPR Anda setiap bulannya. Dapatkan bunga spesial 5% fix sampai lunas khusus KPR Subsidi FLPP."
          />
        </AnimatedReveal>
      </section>

      {/* Calculator Section */}
      <section className="section-container pb-20">
        <AnimatedReveal delay={0.2}>
          <KprCalculator />
        </AnimatedReveal>
      </section>

      {/* Official Table Section */}
      <section className="bg-white section-padding section-y-padding border-t border-neutral-200">
        <div className="section-container">
          <AnimatedReveal>
            <SectionHeading
              label="Data Resmi"
              title="Tabel Angsuran KPR Subsidi"
              description="Sebagai referensi, berikut adalah tabel angsuran resmi untuk program KPR Subsidi FLPP di Perumahan Bukit Zamrud."
            />
          </AnimatedReveal>
          
          <div className="mt-12 max-w-4xl mx-auto">
            <AnimatedReveal delay={0.2}>
              <KprOfficialComparisonTable />
            </AnimatedReveal>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <div className="mt-auto">
        <CtaBanner />
      </div>
    </div>
  );
};

export default KprCalculatorPage;
