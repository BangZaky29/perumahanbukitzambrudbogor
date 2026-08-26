/**
 * Default constants for KPR Subsidi (FLPP) calculation.
 * Source: Official flyer Bukit Zamrud 2026
 */
export const KPR_SUBSIDI_DEFAULT = {
  hargaJualDefault: 185_000_000,
  dpMinimum: 1_000_000,
  subsidiUangMuka: 4_000_000,
  sukuBungaFLPP: 0.05, // 5% fixed per year — typical FLPP rate
  tenorOptions: [10, 15, 20] as const,
} as const;

/**
 * Official installment amounts from developer's flyer.
 * Used for comparison table to show transparency.
 */
export const OFFICIAL_INSTALLMENTS: Record<number, number> = {
  10: 1_933_400,
  15: 1_438_400,
  20: 1_198_000,
};

/**
 * Calculate the KPR plafon (loan principal).
 * Plafon = Harga Jual - DP - Subsidi Uang Muka
 */
export function calculatePlafon(
  hargaJual: number = KPR_SUBSIDI_DEFAULT.hargaJualDefault,
  dp: number = KPR_SUBSIDI_DEFAULT.dpMinimum,
  subsidi: number = KPR_SUBSIDI_DEFAULT.subsidiUangMuka
): number {
  return hargaJual - dp - subsidi;
}

export type TenorOption = (typeof KPR_SUBSIDI_DEFAULT.tenorOptions)[number];
