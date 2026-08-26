import React from "react";
import { Input } from "../ui/Input";
import { formatNumber } from "../../lib/utils/formatCurrency";

interface KprInputFormProps {
  hargaProperty: number;
  uangMuka: number;
  sukuBunga: number;
  onHargaChange: (val: number) => void;
  onUangMukaChange: (val: number) => void;
  onSukuBungaChange: (val: number) => void;
}

export const KprInputForm: React.FC<KprInputFormProps> = ({
  hargaProperty,
  uangMuka,
  sukuBunga,
  onHargaChange,
  onUangMukaChange,
  onSukuBungaChange,
}) => {
  // Parse numeric string removing non-digits
  const handleNumericChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    onChange: (val: number) => void
  ) => {
    const rawValue = e.target.value.replace(/\D/g, "");
    const numValue = parseInt(rawValue, 10);
    if (!isNaN(numValue)) {
      onChange(numValue);
    } else {
      onChange(0);
    }
  };

  const handleBungaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Allow decimal for interest rate
    const rawValue = e.target.value.replace(/[^0-9.]/g, "");
    const numValue = parseFloat(rawValue);
    if (!isNaN(numValue)) {
      onSukuBungaChange(numValue);
    } else {
      onSukuBungaChange(0);
    }
  };

  return (
    <div className="space-y-6">
      <Input
        label="Harga Properti"
        value={formatNumber(hargaProperty)}
        onChange={(e) => handleNumericChange(e, onHargaChange)}
        prefix="Rp"
        helperText="Harga rumah yang akan di KPR-kan"
      />

      <Input
        label="Uang Muka (DP)"
        value={formatNumber(uangMuka)}
        onChange={(e) => handleNumericChange(e, onUangMukaChange)}
        prefix="Rp"
        helperText={`Setara dengan ${((uangMuka / hargaProperty) * 100).toFixed(1)}% dari harga properti`}
      />

      <Input
        label="Suku Bunga per Tahun"
        value={sukuBunga.toString()}
        onChange={handleBungaChange}
        suffix="%"
        helperText="Suku bunga efektif KPR per tahun"
      />
    </div>
  );
};
