import React, { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedReveal } from "../shared/AnimatedReveal";
import { SectionHeading } from "../ui/SectionHeading";

const galleryImages = [
  { id: 1, src: "/images/unit/rumah-depan.jpg", alt: "Fasad Depan Rumah Tipe 30/60" },
  // Since we only have one image for now, I'll repeat it with different styling/crops to simulate a gallery.
  // In a real scenario, these would be different images.
  { id: 2, src: "/images/unit/rumah-depan.jpg", alt: "Ruang Tamu & Keluarga" },
  { id: 3, src: "/images/unit/rumah-depan.jpg", alt: "Kamar Tidur Utama" },
  { id: 4, src: "/images/unit/rumah-depan.jpg", alt: "Dapur Minimalis" },
  { id: 5, src: "/images/unit/rumah-depan.jpg", alt: "Kamar Mandi" },
  { id: 6, src: "/images/unit/rumah-depan.jpg", alt: "Sisa Lahan Belakang" },
];

export const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="section-padding section-y-padding bg-cream-50">
      <div className="section-container">
        <AnimatedReveal>
          <SectionHeading
            label="Galeri"
            title="Intip Calon Rumah Baru Anda"
            description="Lihat lebih dekat detail setiap sudut rumah dan lingkungan perumahan Bukit Zamrud."
          />
        </AnimatedReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
          {galleryImages.map((image, index) => (
            <AnimatedReveal key={image.id} delay={index * 0.1}>
              <div 
                className="group relative h-48 md:h-64 lg:h-80 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Coming Soon Placeholder Overlay */}
                <div className="absolute inset-0 bg-brand-green-900/40 flex items-center justify-center backdrop-blur-[2px] pointer-events-none">
                  <span className="text-white font-display font-bold text-sm md:text-base tracking-widest uppercase border-2 border-white/80 px-4 py-2 rounded-lg -rotate-12 bg-black/20 shadow-sm">
                    Coming Soon
                  </span>
                </div>

                <div className="absolute inset-0 bg-brand-green-900/0 group-hover:bg-brand-green-900/40 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" />
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
              onClick={() => setSelectedImage(null)}
              aria-label="Tutup galeri"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Galeri"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
