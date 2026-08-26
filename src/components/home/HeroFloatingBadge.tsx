import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils/cn";

interface HeroFloatingBadgeProps {
  label: string;
  className?: string;
  delay?: number;
}

export const HeroFloatingBadge: React.FC<HeroFloatingBadgeProps> = ({
  label,
  className,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "absolute inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-brand-gold-500 text-brand-green-900 font-display font-bold text-sm sm:text-base shadow-float whitespace-nowrap",
        className
      )}
    >
      {label}
    </motion.div>
  );
};
