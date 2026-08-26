import React from "react";
import { cn } from "../../lib/utils/cn";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  icon?: React.ReactNode;
  prefix?: string;
  suffix?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  helperText,
  error,
  icon,
  prefix,
  suffix,
  className,
  id,
  ...props
}) => {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="space-y-1.5">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-body font-medium text-neutral-900"
        >
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {icon && (
          <div className="absolute left-3 text-neutral-400 z-10 pointer-events-none">
            {icon}
          </div>
        )}
        {prefix && (
          <div className="absolute left-4 text-neutral-500 font-body z-10 pointer-events-none">
            {prefix}
          </div>
        )}
        <input
          id={inputId}
          className={cn(
            "w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white",
            "font-body text-neutral-900 placeholder:text-neutral-400",
            "transition-all duration-200",
            "focus:outline-none focus:ring-2 focus:ring-brand-green-500/30 focus:border-brand-green-500",
            "hover:border-neutral-300",
            icon && "pl-10",
            prefix && "pl-12",
            suffix && "pr-12",
            error && "border-red-400 focus:ring-red-400/30 focus:border-red-400",
            className
          )}
          {...props}
        />
        {suffix && (
          <div className="absolute right-4 text-neutral-500 font-body z-10 pointer-events-none">
            {suffix}
          </div>
        )}
      </div>
      {helperText && !error && (
        <p className="text-xs text-neutral-400">{helperText}</p>
      )}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};
