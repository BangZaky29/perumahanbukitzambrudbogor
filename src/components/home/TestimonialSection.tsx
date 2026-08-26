import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedReveal } from "../shared/AnimatedReveal";
import { SectionHeading } from "../ui/SectionHeading";
import { cn } from "../../lib/utils/cn";

const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "Karyawan Swasta",
    text: "Alhamdulillah proses KPR di Bukit Zamrud sangat dibantu. Tim marketingnya ramah dan sabar menjelaskan semuanya dari awal sampai serah terima kunci. Lokasinya juga sejuk.",
    rating: 5,
  },
  {
    id: 2,
    name: "Siti Aminah",
    role: "Guru",
    text: "Sebagai guru dengan gaji pas-pasan, saya sempat ragu bisa punya rumah. Berkat subsidi FLPP dan DP yang sangat ringan, akhirnya impian saya terwujud di sini.",
    rating: 5,
  },
  {
    id: 3,
    name: "Rizky & Nisa",
    role: "Pasangan Muda",
    text: "Desain rumahnya bagus, nggak kayak rumah subsidi pada umumnya. Ada sisa lahan di belakang yang bisa kami manfaatkan untuk perluas dapur. Rekomendasi banget buat keluarga baru!",
    rating: 4,
  },
];

export const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000); // 5 seconds per slide
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="section-padding section-y-padding bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cream-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      
      <div className="section-container relative z-10">
        <AnimatedReveal>
          <SectionHeading
            label="Testimoni"
            title="Apa Kata Mereka?"
            description="Kisah nyata dari para pembeli yang telah mempercayakan hunian pertamanya di Bukit Zamrud."
          />
        </AnimatedReveal>

        <div className="max-w-4xl mx-auto mt-12 relative">
          <div 
            className="bg-cream-50 rounded-3xl p-8 md:p-12 shadow-sm border border-neutral-100"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <Quote className="w-12 h-12 text-brand-gold-500/20 mb-6" />
            
            <div className="min-h-[160px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={cn(
                          "w-5 h-5",
                          i < testimonials[currentIndex].rating ? "text-brand-gold-500" : "text-neutral-300"
                        )} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-lg md:text-xl font-body text-neutral-700 leading-relaxed mb-8 italic">
                    "{testimonials[currentIndex].text}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-green-100 text-brand-green-700 rounded-full flex items-center justify-center font-display font-bold text-xl">
                      {testimonials[currentIndex].name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-brand-green-900">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-sm font-body text-neutral-500">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Navigation Controls */}
            <div className="flex justify-end gap-3 mt-8 border-t border-neutral-200/60 pt-6">
              <button 
                onClick={handlePrev}
                className="p-3 rounded-full bg-white text-brand-green-900 hover:bg-brand-gold-500 hover:text-white transition-colors shadow-sm"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={handleNext}
                className="p-3 rounded-full bg-white text-brand-green-900 hover:bg-brand-gold-500 hover:text-white transition-colors shadow-sm"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300",
                  index === currentIndex ? "bg-brand-green-700 w-8" : "bg-neutral-300"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
