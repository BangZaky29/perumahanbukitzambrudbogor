import React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

interface AnimatedRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
}

const getVariants = (direction: string): Variants => {
  const directions: Record<string, { x?: number; y?: number }> = {
    up: { y: 24 },
    down: { y: -24 },
    left: { x: 24 },
    right: { x: -24 },
  };

  const offset = directions[direction] || { y: 24 };

  return {
    hidden: {
      opacity: 0,
      ...offset,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };
};

export const AnimatedReveal: React.FC<AnimatedRevealProps> = ({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.6,
}) => {
  const shouldReduceMotion = useReducedMotion();

  // If user prefers reduced motion, disable the offset animation
  const variants = shouldReduceMotion 
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }
    : getVariants(direction);

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
