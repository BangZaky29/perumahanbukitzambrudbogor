import React from "react";
import { AnimatedReveal } from "../shared/AnimatedReveal";
import { SectionHeading } from "../ui/SectionHeading";
import { unitSpecs } from "../../data/unit-spec.data";

export const SpecListSection: React.FC = () => {
  const specs = unitSpecs[0].specifications;

  // Convert the specs object into an array for easier rendering
  const specItems = [
    { label: "Pondasi", value: specs.pondasi },
    { label: "Struktur Bangunan", value: specs.strukturBangunan },
    { label: "Dinding", value: specs.dinding },
    { label: "Lantai", value: specs.lantai },
    { label: "Rangka Atap", value: specs.rangkaAtap },
    { label: "Penutup Atap", value: specs.penutupAtap },
    { label: "Plafon", value: specs.plafon },
    { label: "Kusen", value: specs.kusen },
    { label: "Pintu", value: specs.pintu },
    { label: "Jendela", value: specs.jendela },
    { label: "Sanitasi", value: specs.sanitasi },
    { label: "Listrik", value: specs.listrik },
    { label: "Air Bersih", value: specs.airBersih },
    { label: "Cat Dinding", value: specs.catDinding },
  ];

  return (
    <section className="section-padding section-y-padding bg-white">
      <div className="section-container">
        <AnimatedReveal>
          <SectionHeading
            label="Kualitas Bangunan"
            title="Spesifikasi Teknis Unggulan"
            description="Dibangun dengan material pilihan dan pengawasan ketat untuk memastikan rumah Anda kokoh dan tahan lama."
          />
        </AnimatedReveal>

        <div className="max-w-4xl mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
            {specItems.map((item, index) => (
              <AnimatedReveal
                key={item.label}
                delay={index * 0.05}
                className="flex flex-col sm:flex-row sm:items-center py-4 border-b border-neutral-100 last:border-0"
              >
                <div className="w-full sm:w-1/3 mb-1 sm:mb-0">
                  <span className="text-sm font-body font-semibold text-neutral-500 uppercase tracking-wide">
                    {item.label}
                  </span>
                </div>
                <div className="w-full sm:w-2/3">
                  <span className="text-base font-body text-brand-green-900 font-medium">
                    {item.value}
                  </span>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
