import React, { useEffect } from "react";
import { MessageSquare, MapPin, ExternalLink } from "lucide-react";
import { SEO } from "../components/shared/SEO";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { WhatsAppIcon } from "../components/ui/WhatsAppIcon";
import { AnimatedReveal } from "../components/shared/AnimatedReveal";
import { siteConfig } from "../config/site.config";

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 bg-cream-50 flex flex-col">
      <SEO title="Hubungi Kami" />
      {/* Header Section */}
      <section className="section-container pb-12">
        <AnimatedReveal>
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-brand-green-100 rounded-2xl text-brand-green-900">
              <MessageSquare className="w-8 h-8" />
            </div>
          </div>
          <SectionHeading
            label="Layanan Pelanggan"
            title="Hubungi Tim Kami"
            description="Tim marketing kami siap membantu Anda menjawab segala pertanyaan terkait ketersediaan unit, proses KPR, dan jadwal kunjungan lokasi."
          />
        </AnimatedReveal>
      </section>

      {/* Main Content */}
      <section className="section-container pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <AnimatedReveal delay={0.2}>
              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-neutral-100 flex items-start gap-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center flex-shrink-0 text-[#25D366]">
                  <WhatsAppIcon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-brand-green-900 mb-2">WhatsApp Resmi</h3>
                  <p className="text-body text-neutral-600 mb-4 font-body">Respon cepat dari tim marketing kami (Nuansa Properti).</p>
                  <p className="text-lg font-semibold text-brand-green-700 mb-6">{siteConfig.contact.whatsappDisplay}</p>
                  <Button 
                    variant="primary" 
                    asLink 
                    href={siteConfig.contact.whatsappUrl(siteConfig.whatsappMessages.kontak)}
                    className="w-full sm:w-auto"
                  >
                    Chat Sekarang
                  </Button>
                </div>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.3}>
              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-neutral-100 flex items-start gap-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-brand-green-50 flex items-center justify-center flex-shrink-0 text-brand-green-700">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-brand-green-900 mb-2">Lokasi Proyek</h3>
                  <p className="text-body text-neutral-600 mb-6 font-body leading-relaxed">
                    {siteConfig.location.address}
                  </p>
                  <Button 
                    variant="outline" 
                    asLink 
                    href="#" // Update with google maps link if available
                    className="w-full sm:w-auto"
                  >
                    Buka di Google Maps
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </AnimatedReveal>
          </div>

          {/* Marketing Form Placeholder or Image */}
          <AnimatedReveal delay={0.4} className="h-full">
            <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/images/hero/hero-rumah.jpg"
                alt="Marketing Bukit Zamrud"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green-900/90 to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-display font-bold mb-3">Kunjungi Kami Langsung</h3>
                <p className="font-body text-brand-green-100 leading-relaxed mb-6">
                  Buat janji temu dengan tim kami untuk melihat langsung rumah contoh dan lingkungan perumahan Bukit Zamrud.
                </p>
                <div className="flex items-center gap-4 text-sm font-semibold">
                  <div className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full">
                    Buka Setiap Hari
                  </div>
                  <div className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full">
                    09:00 - 17:00 WIB
                  </div>
                </div>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
