import React from "react";

interface PartnerBadgeProps {
  compact?: boolean;
}

export const PartnerBadge: React.FC<PartnerBadgeProps> = ({
  compact = false,
}) => {
  if (compact) {
    return (
      <div className="flex items-center gap-2">
        <img
          src="/logo/logo-nuansa-properti.png"
          alt="Nuansa Properti"
          className="h-6 w-auto opacity-70"
        />
        <span className="text-xs text-white/50 font-body">
          Marketing Partner
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 px-5 py-3 rounded-xl bg-gradient-to-r from-partner-navy/10 to-partner-skyblue/10 border border-partner-skyblue/20">
      <img
        src="/logo/logo-nuansa-properti.png"
        alt="Nuansa Properti"
        className="h-10 w-auto"
      />
      <div>
        <p className="text-sm font-body font-semibold text-partner-navy">
          Nuansa Properti
        </p>
        <p className="text-xs font-body text-neutral-500">
          Social Media Marketing Partner
        </p>
      </div>
    </div>
  );
};
