import type { AnnuityInput, AnnuityResult } from "../../types/kpr.types";

/**
 * Calculate KPR installment using fixed-rate annuity formula.
 * This is the standard formula used by Indonesian banks for subsidized housing (FLPP).
 */
export function calculateAnnuity({
  plafon,
  annualRate,
  tenorYears,
}: AnnuityInput): AnnuityResult {
  const monthlyRate = annualRate / 12;
  const totalMonths = tenorYears * 12;

  const monthlyInstallment =
    monthlyRate === 0
      ? plafon / totalMonths
      : (plafon * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1);

  const totalPayment = monthlyInstallment * totalMonths;

  return {
    monthlyInstallment,
    totalMonths,
    totalPayment,
    totalInterest: totalPayment - plafon,
  };
}
