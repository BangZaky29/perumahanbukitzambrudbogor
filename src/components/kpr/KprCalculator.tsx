import React from "react";
import { useKprCalculator } from "../../hooks/useKprCalculator";
import { KprInputForm } from "./KprInputForm";
import { KprTenorTabs } from "./KprTenorTabs";
import { KprResultCard } from "./KprResultCard";
// Removed siteConfig
import { KPR_SUBSIDI_DEFAULT } from "../../lib/kpr/kprConstants";

export const KprCalculator: React.FC = () => {
  const {
    input,
    plafon,
    result,
    updateField,
    setTenor,
  } = useKprCalculator();

  // Map the new structured state to the old variables expected by the UI
  const hargaProperty = input.hargaRumah;
  const setHargaProperty = (val: number) => updateField("hargaRumah", val);
  
  const uangMuka = input.dpAmount;
  const setUangMuka = (val: number) => updateField("dpAmount", val);
  
  const sukuBunga = input.sukuBunga * 100; // Convert 0.05 to 5 for UI
  const setSukuBunga = (val: number) => updateField("sukuBunga", val / 100);
  
  const tenor = input.tenorYears;
  
  // Calculate if official rate is used (5%)
  const isOfficialRate = input.sukuBunga === 0.05;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
      {/* Left Column - Inputs */}
      <div className="lg:col-span-7">
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-neutral-200">
          <h3 className="text-xl font-display font-semibold text-brand-green-900 mb-6">
            Atur Simulasi Anda
          </h3>
          
          <div className="mb-8">
            <KprInputForm
              hargaProperty={hargaProperty}
              uangMuka={uangMuka}
              sukuBunga={sukuBunga}
              onHargaChange={setHargaProperty}
              onUangMukaChange={setUangMuka}
              onSukuBungaChange={setSukuBunga}
            />
          </div>

          <div className="pt-6 border-t border-neutral-100">
            <KprTenorTabs
              tenorOptions={[...KPR_SUBSIDI_DEFAULT.tenorOptions]}
              selectedTenor={tenor}
              onSelect={setTenor}
            />
          </div>
        </div>
      </div>

      {/* Right Column - Results */}
      <div className="lg:col-span-5">
        <div className="sticky top-24">
          <KprResultCard
            cicilanPerBulan={result.monthlyInstallment}
            plafonPinjaman={plafon}
            uangMuka={uangMuka}
            tenor={tenor}
            isOfficial={isOfficialRate}
          />
        </div>
      </div>
    </div>
  );
};
