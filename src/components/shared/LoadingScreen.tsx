import React from "react";
import { motion } from "framer-motion";

export const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-green-900"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Decorative blurred blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-gold-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-brand-green-500/20 blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16">
          {/* Logo Bukit Zamrud */}
          <motion.div 
            className="flex flex-col items-center gap-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="bg-white p-6 rounded-3xl shadow-2xl flex items-center justify-center w-40 h-40 md:w-48 md:h-48">
              <img
                src="/logo/logo-bukit-zamrud.png"
                alt="Logo Bukit Zamrud"
                className="max-h-full max-w-full object-contain scale-110"
              />
            </div>
            <div className="text-center">
              <span className="block font-display text-2xl md:text-3xl font-bold text-white leading-tight mb-1">
                Bukit Zamrud
              </span>
              <span className="block text-sm md:text-base text-brand-green-300 font-body">
                Rumah Subsidi Berkualitas
              </span>
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div 
            className="hidden md:block w-px h-32 bg-white/20"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          />
          <motion.div 
            className="md:hidden w-32 h-px bg-white/20 my-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          />

          {/* Logo Nuansa Properti */}
          <motion.div 
            className="flex flex-col items-center gap-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="bg-white p-6 rounded-3xl shadow-2xl flex items-center justify-center w-40 h-40 md:w-48 md:h-48">
              <img
                src="/logo/logo-nuansa-properti.png"
                alt="Nuansa Properti"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="flex flex-col text-center mt-2">
              <span className="text-sm md:text-base text-white/90 font-body font-semibold tracking-wider mb-0.5">Support by</span>
              <span className="text-xl md:text-2xl font-display font-bold text-white tracking-wide">Nuansa Properti</span>
            </div>
          </motion.div>
        </div>

        {/* Loading Progress Bar */}
        <motion.div 
          className="w-48 h-1 bg-white/10 rounded-full mt-10 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <motion.div
            className="h-full bg-brand-gold-500 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3.5, ease: "easeInOut", delay: 1.5 }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
