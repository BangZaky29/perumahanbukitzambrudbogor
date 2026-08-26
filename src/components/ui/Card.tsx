import React from "react";
import { cn } from "../../lib/utils/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  onClick?: () => void;
}

const paddingClasses = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = true,
  padding = "md",
  onClick,
}) => {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl shadow-card overflow-hidden",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover cursor-pointer",
        paddingClasses[padding],
        className
      )}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
};
