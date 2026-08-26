import { calculateAnnuity } from "./calculateAnnuity";
import {
  KPR_SUBSIDI_DEFAULT,
  OFFICIAL_INSTALLMENTS,
  calculatePlafon,
} from "./kprConstants";
import type { KprComparisonRow } from "../../types/kpr.types";

/**
 * Generate comparison table: simulation vs official developer data.
 * Helps users understand any small discrepancies (~1-2% from insurance costs).
 */
export function calibrateToOfficial(): KprComparisonRow[] {
  const plafon = calculatePlafon();

  return KPR_SUBSIDI_DEFAULT.tenorOptions.map((tenor) => {
    const result = calculateAnnuity({
      plafon,
      annualRate: KPR_SUBSIDI_DEFAULT.sukuBungaFLPP,
      tenorYears: tenor,
    });

    const resmi = OFFICIAL_INSTALLMENTS[tenor];
    const selisih = resmi - result.monthlyInstallment;
    const selisihPersen = (selisih / resmi) * 100;

    return {
      tenor,
      simulasi: Math.round(result.monthlyInstallment),
      resmi,
      selisih: Math.round(selisih),
      selisihPersen: Math.round(selisihPersen * 10) / 10,
    };
  });
}
