import React from "react";
import { Calculator, Info } from "lucide-react";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { WhatsAppIcon } from "../ui/WhatsAppIcon";
import { formatCurrency } from "../../lib/utils/formatCurrency";
import { siteConfig } from "../../config/site.config";

interface KprResultCardProps {
  cicilanPerBulan: number;
  plafonPinjaman: number;
  uangMuka: number;
  tenor: number;
  isOfficial?: boolean;
}

export const KprResultCard: React.FC<KprResultCardProps> = ({
  cicilanPerBulan,
  plafonPinjaman,
  uangMuka,
  tenor,
  isOfficial = false,
}) => {
  return (
    <Card 
      className={`relative overflow-hidden ${
        isOfficial 
          ? "bg-gradient-to-br from-brand-green-900 to-brand-green-800 text-white border-transparent shadow-xl" 
          : "bg-white border-neutral-200 shadow-sm"
      }`}
    >
      {/* Decorative icon background */}
      <Calculator 
        className={`absolute -right-4 -bottom-4 w-40 h-40 opacity-[0.03] ${
          isOfficial ? "text-white" : "text-brand-green-900"
        } pointer-events-none transform -rotate-12`} 
      />

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-6">
          <h3 className={`text-lg font-display font-semibold ${isOfficial ? "text-brand-gold-500" : "text-brand-green-900"}`}>
            Estimasi Cicilan KPR
          </h3>
          {isOfficial && (
            <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider bg-brand-gold-500 text-brand-green-900 rounded-full">
              Resmi
            </span>
          )}
        </div>

        <div className="mb-8">
          <p className={`text-sm font-body mb-2 ${isOfficial ? "text-brand-green-100" : "text-neutral-500"}`}>
            Cicilan per bulan ({tenor} Tahun)
          </p>
          <div className="flex items-end gap-1">
            <span className={`text-4xl lg:text-5xl font-display font-bold ${isOfficial ? "text-white" : "text-brand-green-900"} tracking-tight`}>
              {formatCurrency(cicilanPerBulan)}
            </span>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex justify-between items-center pb-3 border-b border-opacity-20 border-current">
            <span className={`text-sm font-body ${isOfficial ? "text-brand-green-100" : "text-neutral-500"}`}>Uang Muka (DP)</span>
            <span className={`font-semibold ${isOfficial ? "text-white" : "text-neutral-900"}`}>{formatCurrency(uangMuka)}</span>
          </div>
          <div className="flex justify-between items-center pb-3 border-b border-opacity-20 border-current">
            <span className={`text-sm font-body ${isOfficial ? "text-brand-green-100" : "text-neutral-500"}`}>Plafon Pinjaman</span>
            <span className={`font-semibold ${isOfficial ? "text-white" : "text-neutral-900"}`}>{formatCurrency(plafonPinjaman)}</span>
          </div>
        </div>

        <div className={`flex items-start gap-3 p-4 rounded-xl mb-8 ${
          isOfficial ? "bg-white/10" : "bg-blue-50"
        }`}>
          <Info className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isOfficial ? "text-brand-gold-500" : "text-blue-600"}`} />
          <p className={`text-xs font-body leading-relaxed ${isOfficial ? "text-white/80" : "text-blue-800"}`}>
            {isOfficial 
              ? "Ini adalah estimasi cicilan berdasarkan tabel angsuran resmi KPR Subsidi FLPP dengan bunga fix 5% p.a." 
              : "Perhitungan ini adalah simulasi. Nilai cicilan sebenarnya dapat berbeda tergantung persetujuan bank, suku bunga saat akad, dan biaya tambahan lainnya."}
          </p>
        </div>

        <Button
          variant={isOfficial ? "primary" : "secondary"}
          className={`w-full ${isOfficial ? "bg-brand-gold-500 text-brand-green-900 hover:bg-brand-gold-400 border-none" : ""}`}
          asLink
          href={siteConfig.contact.whatsappUrl(siteConfig.whatsappMessages.kalkulator(formatCurrency(cicilanPerBulan)))}
        >
          <WhatsAppIcon className="w-4 h-4 mr-2" />
          Konsultasi KPR Gratis
        </Button>
      </div>
    </Card>
  );
};
