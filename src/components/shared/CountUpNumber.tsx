import React from "react";
import { useCountUp } from "../../hooks/useCountUp";
import { cn } from "../../lib/utils/cn";

interface CountUpNumberProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export const CountUpNumber: React.FC<CountUpNumberProps> = ({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
}) => {
  const { ref, displayValue } = useCountUp({
    end,
    duration,
    prefix,
    suffix,
    decimals,
  });

  return (
    <span
      ref={ref as React.RefObject<HTMLSpanElement>}
      className={cn("font-tabular", className)}
    >
      {displayValue}
    </span>
  );
};
