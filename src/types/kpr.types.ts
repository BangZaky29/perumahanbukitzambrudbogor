export interface AnnuityInput {
  plafon: number;
  annualRate: number; // 0.05 = 5%
  tenorYears: number; // 10 | 15 | 20
}

export interface AnnuityResult {
  monthlyInstallment: number;
  totalMonths: number;
  totalPayment: number;
  totalInterest: number;
}

export interface KprCalculatorInput {
  hargaRumah: number;
  dpAmount: number;
  subsidiUangMuka: number;
  sukuBunga: number;
  tenorYears: number;
}

export interface KprComparisonRow {
  tenor: number;
  simulasi: number;
  resmi: number;
  selisih: number;
  selisihPersen: number;
}
