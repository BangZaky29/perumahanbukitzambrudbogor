import React from "react";
import { cn } from "../../lib/utils/cn";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gold" | "green" | "partner" | "outline";
  size?: "sm" | "md";
  className?: string;
}

const variantClasses = {
  default: "bg-brand-green-700/10 text-brand-green-700",
  gold: "bg-brand-gold-500 text-brand-green-900",
  green: "bg-brand-green-700 text-white",
  partner: "bg-partner-navy text-white",
  outline: "border border-brand-green-700/30 text-brand-green-700",
};

const sizeClasses = {
  sm: "px-2.5 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  size = "sm",
  className,
}) => {
  return (
    <span
      className={cn(
        "inline-flex items-center font-body font-medium rounded-full whitespace-nowrap",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </span>
  );
};
