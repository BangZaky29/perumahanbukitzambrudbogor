import { useState, useMemo } from "react";
import { calculateAnnuity } from "../lib/kpr/calculateAnnuity";
import { KPR_SUBSIDI_DEFAULT, calculatePlafon } from "../lib/kpr/kprConstants";
import type { AnnuityResult, KprCalculatorInput } from "../types/kpr.types";

/**
 * Custom hook for KPR calculator — manages input state and auto-calculates result.
 * Result updates in real-time as user changes any input (no "Hitung" button needed).
 */
export function useKprCalculator() {
  const [input, setInput] = useState<KprCalculatorInput>({
    hargaRumah: KPR_SUBSIDI_DEFAULT.hargaJualDefault,
    dpAmount: KPR_SUBSIDI_DEFAULT.dpMinimum,
    subsidiUangMuka: KPR_SUBSIDI_DEFAULT.subsidiUangMuka,
    sukuBunga: KPR_SUBSIDI_DEFAULT.sukuBungaFLPP,
    tenorYears: 20,
  });

  const plafon = useMemo(
    () =>
      calculatePlafon(
        input.hargaRumah,
        input.dpAmount,
        input.subsidiUangMuka
      ),
    [input.hargaRumah, input.dpAmount, input.subsidiUangMuka]
  );

  const result: AnnuityResult = useMemo(
    () =>
      calculateAnnuity({
        plafon,
        annualRate: input.sukuBunga,
        tenorYears: input.tenorYears,
      }),
    [plafon, input.sukuBunga, input.tenorYears]
  );

  const updateField = <K extends keyof KprCalculatorInput>(
    field: K,
    value: KprCalculatorInput[K]
  ) => {
    setInput((prev) => ({ ...prev, [field]: value }));
  };

  const setTenor = (tenor: number) => {
    updateField("tenorYears", tenor);
  };

  const resetToDefault = () => {
    setInput({
      hargaRumah: KPR_SUBSIDI_DEFAULT.hargaJualDefault,
      dpAmount: KPR_SUBSIDI_DEFAULT.dpMinimum,
      subsidiUangMuka: KPR_SUBSIDI_DEFAULT.subsidiUangMuka,
      sukuBunga: KPR_SUBSIDI_DEFAULT.sukuBungaFLPP,
      tenorYears: 20,
    });
  };

  return {
    input,
    plafon,
    result,
    updateField,
    setTenor,
    resetToDefault,
  };
}
