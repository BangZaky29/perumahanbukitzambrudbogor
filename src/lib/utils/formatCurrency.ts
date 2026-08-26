const formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

/**
 * Format number to Indonesian Rupiah (e.g., Rp185.000.000)
 */
export function formatCurrency(value: number): string {
  return formatter.format(value);
}

/**
 * Format number to compact Rupiah (e.g., Rp185 Juta)
 */
export function formatCurrencyCompact(value: number): string {
  if (value >= 1_000_000_000) {
    return `Rp${(value / 1_000_000_000).toFixed(1)} Miliar`;
  }
  if (value >= 1_000_000) {
    return `Rp${(value / 1_000_000).toFixed(0)} Juta`;
  }
  if (value >= 1_000) {
    return `Rp${(value / 1_000).toFixed(0)} Ribu`;
  }
  return formatCurrency(value);
}

/**
 * Format number with thousand separator (e.g., 1.933.400)
 */
export function formatNumber(value: number): string {
  return new Intl.NumberFormat("id-ID").format(Math.round(value));
}
