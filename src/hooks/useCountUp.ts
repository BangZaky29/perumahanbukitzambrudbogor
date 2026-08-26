import { useEffect, useRef, useState } from "react";

interface UseCountUpOptions {
  end: number;
  duration?: number; // ms, default 2000
  start?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  separator?: string;
}

/**
 * Hook for animated count-up numbers.
 * Triggers once when element enters viewport.
 */
export function useCountUp({
  end,
  duration = 2000,
  start = 0,
  decimals = 0,
  prefix = "",
  suffix = "",
  separator = ".",
}: UseCountUpOptions) {
  const [count, setCount] = useState(start);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setCount(end);
      return;
    }

    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = start + (end - start) * eased;

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, end, duration, start]);

  const formatNumber = (num: number): string => {
    const fixed = num.toFixed(decimals);
    const [intPart, decPart] = fixed.split(".");
    const formatted = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    return decPart ? `${formatted},${decPart}` : formatted;
  };

  const displayValue = `${prefix}${formatNumber(count)}${suffix}`;

  return { ref, displayValue, count };
}
