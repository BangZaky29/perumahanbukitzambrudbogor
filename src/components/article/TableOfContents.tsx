import React, { useState, useEffect, useCallback } from "react";
import { List } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TocItem {
  id: string;
  title: string;
  level: 2 | 3;
}

interface TableOfContentsProps {
  headings: TocItem[];
}

/**
 * Sticky Table of Contents sidebar that highlights the active section
 * as the user scrolls through the article. Designed for desktop sidebar
 * and collapsible mobile dropdown.
 */
export const TableOfContents: React.FC<TableOfContentsProps> = ({ headings }) => {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  // Observe heading elements for intersection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  const handleClick = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  }, []);

  if (headings.length === 0) return null;

  return (
    <>
      {/* Desktop TOC — sticky sidebar */}
      <nav className="hidden xl:block sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto">
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-neutral-100 shadow-sm p-5">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-neutral-100">
            <List className="w-4 h-4 text-brand-green-700" />
            <h4 className="text-sm font-display font-semibold text-brand-green-900 uppercase tracking-wider">
              Daftar Isi
            </h4>
          </div>
          <ul className="space-y-1">
            {headings.map(({ id, title, level }) => (
              <li key={id}>
                <button
                  onClick={() => handleClick(id)}
                  className={`
                    w-full text-left text-sm py-2 px-3 rounded-lg transition-all duration-200 font-body leading-snug
                    ${level === 3 ? "pl-6" : ""}
                    ${
                      activeId === id
                        ? "bg-brand-green-50 text-brand-green-800 font-medium border-l-2 border-brand-gold-500"
                        : "text-neutral-500 hover:text-brand-green-700 hover:bg-neutral-50"
                    }
                  `}
                >
                  {title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile TOC — floating button + dropdown */}
      <div className="xl:hidden fixed bottom-20 right-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 bg-brand-green-900 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-brand-green-800 transition-colors"
          aria-label="Daftar Isi"
        >
          <List className="w-5 h-5" />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-14 right-0 w-72 bg-white rounded-2xl shadow-2xl border border-neutral-100 p-4 max-h-80 overflow-y-auto"
            >
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-neutral-100">
                <List className="w-4 h-4 text-brand-green-700" />
                <h4 className="text-sm font-display font-semibold text-brand-green-900 uppercase tracking-wider">
                  Daftar Isi
                </h4>
              </div>
              <ul className="space-y-1">
                {headings.map(({ id, title, level }) => (
                  <li key={id}>
                    <button
                      onClick={() => handleClick(id)}
                      className={`
                        w-full text-left text-sm py-2 px-3 rounded-lg transition-all duration-200 font-body leading-snug
                        ${level === 3 ? "pl-6" : ""}
                        ${
                          activeId === id
                            ? "bg-brand-green-50 text-brand-green-800 font-medium"
                            : "text-neutral-500 hover:text-brand-green-700 hover:bg-neutral-50"
                        }
                      `}
                    >
                      {title}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
