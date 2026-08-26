import React from "react";
import { cn } from "../../lib/utils/cn";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  titleClassName?: string;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  description,
  align = "center",
  titleClassName,
  className,
}) => {
  return (
    <div
      className={cn(
        "mb-12 lg:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <span className="inline-block text-caption font-body font-semibold tracking-wider uppercase text-brand-gold-500 mb-3">
          {label}
        </span>
      )}
      <h2
        className={cn(
          "text-h2 font-display text-brand-green-900",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-body text-neutral-500 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
