import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

/**
 * A premium reading progress bar that shows how far the user has scrolled
 * through the article content. Fixed at the very top of the viewport.
 */
export const ReadingProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past 200px
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="h-full origin-left bg-gradient-to-r from-brand-green-700 via-brand-gold-500 to-brand-green-500"
        style={{ scaleX }}
      />
    </motion.div>
  );
};
