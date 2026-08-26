import React from "react";
import { CheckCircle2 } from "lucide-react";
import { formatCurrency } from "../../lib/utils/formatCurrency";
import { priceList } from "../../data/price-list.data";
import { siteConfig } from "../../config/site.config";

export const KprOfficialComparisonTable: React.FC = () => {
  const officialInstallmentsArray = Object.entries(priceList.angsuranResmi).map(
    ([tenor, angsuran]) => ({
      tenor: parseInt(tenor, 10),
      angsuran,
    })
  );

  return (
    <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm">
      <div className="p-6 md:p-8 bg-brand-green-900 text-white">
        <h3 className="text-xl md:text-2xl font-display font-semibold mb-2">
          Tabel Angsuran Resmi KPR FLPP
        </h3>
        <p className="text-brand-green-100 font-body text-sm md:text-base">
          Harga Cash: <strong className="text-brand-gold-500">{formatCurrency(siteConfig.pricing.hargaRumah)}</strong> | 
          Uang Muka (DP): <strong className="text-brand-gold-500">{formatCurrency(siteConfig.pricing.dpMinimum)}</strong>
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left font-body">
          <thead className="bg-cream-50 border-b border-neutral-200 text-neutral-500 text-sm uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4 font-semibold">Tenor (Tahun)</th>
              <th className="px-6 py-4 font-semibold">Plafon Pinjaman</th>
              <th className="px-6 py-4 font-semibold">Suku Bunga</th>
              <th className="px-6 py-4 font-semibold text-brand-green-900">Angsuran / Bulan</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {officialInstallmentsArray.map((item, index) => (
              <tr 
                key={item.tenor} 
                className={`hover:bg-neutral-50 transition-colors ${index % 2 === 0 ? "bg-white" : "bg-cream-50/30"}`}
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 font-semibold text-neutral-900">
                    <span className="w-6 h-6 rounded-full bg-brand-green-100 text-brand-green-700 flex items-center justify-center text-xs">
                      {item.tenor}
                    </span>
                    Tahun
                  </div>
                </td>
                <td className="px-6 py-4 text-neutral-600">
                  {formatCurrency(siteConfig.pricing.hargaRumah - siteConfig.pricing.dpMinimum)}
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                    <CheckCircle2 className="w-3 h-3" />
                    Fix 5%
                  </span>
                </td>
                <td className="px-6 py-4 font-bold text-lg text-brand-green-900">
                  {formatCurrency(item.angsuran)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="p-4 bg-neutral-50 border-t border-neutral-200 text-xs text-neutral-500 font-body text-center">
        *Tabel di atas merupakan angsuran KPR Subsidi FLPP resmi. Angka pasti akan tertera pada saat akad kredit di Bank.
      </div>
    </div>
  );
};
