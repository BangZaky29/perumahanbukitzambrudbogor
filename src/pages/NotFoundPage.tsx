import React, { useEffect } from "react";
import { Home, SearchX } from "lucide-react";
import { SEO } from "../components/shared/SEO";
import { Button } from "../components/ui/Button";
import { AnimatedReveal } from "../components/shared/AnimatedReveal";

const NotFoundPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-cream-50 pt-20 pb-20">
      <SEO title="Halaman Tidak Ditemukan" />
      <div className="section-container">
        <AnimatedReveal>
          <div className="max-w-md mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute -inset-4 bg-brand-green-100 rounded-full blur-xl opacity-50"></div>
                <div className="relative w-24 h-24 bg-white rounded-full shadow-md flex items-center justify-center text-brand-green-700">
                  <SearchX className="w-10 h-10" />
                </div>
              </div>
            </div>
            
            <h1 className="text-6xl font-display font-bold text-brand-green-900 mb-4">404</h1>
            <h2 className="text-2xl font-display font-semibold text-neutral-800 mb-4">Halaman Tidak Ditemukan</h2>
            <p className="text-body text-neutral-600 mb-8 font-body">
              Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.
              Silakan kembali ke halaman utama.
            </p>
            
            <Button variant="primary" asLink href="/">
              <Home className="w-4 h-4 mr-2" />
              Kembali ke Beranda
            </Button>
          </div>
        </AnimatedReveal>
      </div>
    </div>
  );
};

export default NotFoundPage;
