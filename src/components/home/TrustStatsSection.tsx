import React from "react";
import { AnimatedReveal } from "../shared/AnimatedReveal";
import { CountUpNumber } from "../shared/CountUpNumber";
import { siteConfig } from "../../config/site.config";

export const TrustStatsSection: React.FC = () => {
  const stats = [
    {
      label: "Harga Mulai",
      value: siteConfig.pricing.hargaRumah / 1_000_000,
      prefix: "Rp",
      suffix: " Juta",
    },
    {
      label: "Uang Muka",
      value: siteConfig.pricing.dpMinimum / 1_000_000,
      prefix: "Rp",
      suffix: " Juta",
    },
    {
      label: "Unit Tersedia",
      value: 120, // Placeholder
      suffix: "+",
    },
    {
      label: "Rating Pembeli",
      value: 4.8,
      decimals: 1,
      suffix: " ★",
    },
  ];

  return (
    <section className="bg-cream-50 section-padding py-16 lg:py-24 border-b border-neutral-200">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-neutral-200">
          {stats.map((stat, index) => (
            <AnimatedReveal
              key={stat.label}
              delay={index * 0.1}
              className="text-center px-4"
            >
              <div className="mb-2">
                <span className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-brand-green-900 tracking-tight">
                  <CountUpNumber
                    end={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </span>
              </div>
              <p className="text-sm md:text-base font-body font-medium text-neutral-500 uppercase tracking-wider">
                {stat.label}
              </p>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
