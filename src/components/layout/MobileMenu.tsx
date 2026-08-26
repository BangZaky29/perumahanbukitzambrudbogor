import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils/cn";
import { siteConfig } from "../../config/site.config";
import { MessageCircle } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { label: string; href: string }[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navLinks,
}) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Menu panel */}
          <motion.div
            className="fixed top-0 right-0 bottom-0 z-40 w-80 max-w-[85vw] 
                       bg-brand-green-900 shadow-2xl lg:hidden
                       flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="flex-1 pt-24 px-6 overflow-y-auto">
              <nav className="space-y-1">
                {navLinks.map((link, index) => {
                  const isActive = location.pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                    >
                      <Link
                        to={link.href}
                        onClick={onClose}
                        className={cn(
                          "block px-4 py-3 rounded-xl font-body text-base font-medium transition-all",
                          isActive
                            ? "bg-brand-gold-500 text-brand-green-900"
                            : "text-white/80 hover:bg-white/10 hover:text-white"
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* CTA WhatsApp */}
              <motion.div
                className="mt-8 pt-6 border-t border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <a
                  href={siteConfig.contact.whatsappUrl(
                    siteConfig.whatsappMessages.hero
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3.5 rounded-xl 
                             bg-[#25D366] text-white font-body font-semibold
                             transition-all hover:bg-[#22C35E]"
                >
                  <MessageCircle className="w-5 h-5" />
                  Hubungi via WhatsApp
                </a>
              </motion.div>
            </div>

            {/* Footer brand */}
            <div className="px-6 py-6 border-t border-white/10">
              <p className="text-xs text-white/40 font-body">
                © {new Date().getFullYear()} {siteConfig.brand.name}
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
