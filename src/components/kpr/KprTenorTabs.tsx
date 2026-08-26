import React from "react";
import { cn } from "../../lib/utils/cn";

interface KprTenorTabsProps {
  tenorOptions: number[];
  selectedTenor: number;
  onSelect: (tenor: number) => void;
}

export const KprTenorTabs: React.FC<KprTenorTabsProps> = ({
  tenorOptions,
  selectedTenor,
  onSelect,
}) => {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-body font-semibold text-neutral-700">
        Jangka Waktu KPR (Tenor)
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3">
        {tenorOptions.map((tenor) => {
          const isSelected = tenor === selectedTenor;
          return (
            <button
              key={tenor}
              onClick={() => onSelect(tenor)}
              className={cn(
                "py-3 px-4 rounded-xl border transition-all duration-200 font-body text-sm text-center",
                isSelected
                  ? "bg-brand-green-900 border-brand-green-900 text-white shadow-md font-semibold"
                  : "bg-white border-neutral-200 text-neutral-600 hover:border-brand-green-500 hover:text-brand-green-700"
              )}
            >
              {tenor} Tahun
            </button>
          );
        })}
      </div>
    </div>
  );
};
