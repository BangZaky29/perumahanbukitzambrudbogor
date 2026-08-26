/**
 * Price list — single source of truth.
 * Update this file when prices change (as noted in flyer: "harga sewaktu-waktu dapat berubah").
 */
export const priceList = {
  type: "30/60",
  hargaJual: 185_000_000,
  dpMinimum: 1_000_000,
  subsidiUangMuka: 4_000_000,
  bookingFee: 1_000_000,
  plafonKPR: 179_150_000, // harga - DP - subsidi

  angsuranResmi: {
    10: 1_933_400,
    15: 1_438_400,
    20: 1_198_000,
  } as Record<number, number>,

  sukuBungaFLPP: 0.05, // 5% per tahun (fixed rate program FLPP)

  disclaimer:
    "Harga sewaktu-waktu dapat berubah tanpa pemberitahuan terlebih dahulu. Angsuran yang tertera merupakan estimasi dan dapat berbeda tergantung kebijakan bank.",
} as const;
